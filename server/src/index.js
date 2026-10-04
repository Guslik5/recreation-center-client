import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { setupBotHandlers, sendBookingNotification, sendReviewNotification } from "./bot.js";
import { db } from "./firebaseAdmin.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Инициализация обработчиков кнопок бота
setupBotHandlers(db);

// Кеш обработанных ID, чтобы не дублировать уведомления
const processedDocIds = new Set();

// Слушатель Firestore в реальном времени (если db доступен)
if (db) {
  try {
    // 1. Новые заявки на бронирование
    db.collection("bookings")
      .where("status", "==", "new")
      .onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const docId = change.doc.id;
              if (!processedDocIds.has(docId)) {
                processedDocIds.add(docId);
                const data = change.doc.data();
                sendBookingNotification({ ...data, id: docId });
              }
            }
          });
        },
        (err) => {
          console.warn("[FIRESTORE] Bookings listener note:", err.message);
        }
      );

    // 2. Новые отзывы на модерацию
    db.collection("reviews")
      .where("status", "==", "pending")
      .onSnapshot(
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
              const docId = change.doc.id;
              if (!processedDocIds.has(docId)) {
                processedDocIds.add(docId);
                const data = change.doc.data();
                sendReviewNotification({ ...data, id: docId });
              }
            }
          });
        },
        (err) => {
          console.warn("[FIRESTORE] Reviews listener note:", err.message);
        }
      );

    console.log("🔥 Firestore real-time listeners active.");
  } catch (err) {
    console.warn("⚠️ Firestore snapshot listener not active:", err.message);
  }
}

// REST Endpoints
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "baretsky-bot-server",
    time: new Date().toISOString(),
  });
});

// Прямой вызов уведомления о бронировании (от клиента)
app.post("/api/notify-booking", async (req, res) => {
  try {
    const booking = req.body;
    console.log("[API] Received booking notification request:", booking.name, booking.house);
    const sent = await sendBookingNotification(booking);
    res.json({ success: true, notificationSent: sent });
  } catch (err) {
    console.error("[API] Error in /api/notify-booking:", err);
    res.status(500).json({ error: err.message });
  }
});

// Прямой вызов уведомления о новом отзыве (от клиента)
app.post("/api/notify-review", async (req, res) => {
  try {
    const review = req.body;
    console.log("[API] Received review notification request:", review.name, review.house);
    const sent = await sendReviewNotification(review);
    res.json({ success: true, notificationSent: sent });
  } catch (err) {
    console.error("[API] Error in /api/notify-review:", err);
    res.status(500).json({ error: err.message });
  }
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`🚀 Baretsky Bot Server listening on port ${PORT}`);
});
