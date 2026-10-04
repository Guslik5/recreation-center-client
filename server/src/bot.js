import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const adminChatId = process.env.TELEGRAM_ADMIN_CHAT_ID;

let bot = null;

if (token && token !== "1234567890:ABCdefGHIjklMNOpqrSTUvwxyz") {
  try {
    bot = new TelegramBot(token, { polling: true });
    console.log("🤖 Telegram Bot initialized with polling.");
  } catch (err) {
    console.error("❌ Failed to initialize Telegram Bot:", err);
  }
} else {
  console.warn("⚠️ TELEGRAM_BOT_TOKEN is not set or using placeholder. Bot polling is disabled.");
}

/**
 * Инициализация обработчиков кнопок модерации
 * @param {import('firebase-admin/firestore').Firestore} db
 */
export function setupBotHandlers(db) {
  if (!bot) return;

  bot.on("callback_query", async (query) => {
    const { id, data, message } = query;
    const chatId = message?.chat?.id;
    const messageId = message?.message_id;

    try {
      if (data.startsWith("approve_review_")) {
        const reviewId = data.replace("approve_review_", "");
        console.log(`[BOT] Approving review: ${reviewId}`);

        if (db) {
          await db.collection("reviews").doc(reviewId).update({
            status: "approved",
            approvedAt: new Date(),
          });
        }

        await bot.answerCallbackQuery(id, {
          text: "✅ Отзыв успешно опубликован на сайте!",
          show_alert: true,
        });

        const updatedText =
          (message?.text || "") +
          "\n\n━━━━━━━━━━━━━━━\n✅ **ОТЗЫВ ОДОБРЕН И ОПУБЛИКОВАН НА САЙТЕ**";

        await bot.editMessageText(updatedText, {
          chat_id: chatId,
          message_id: messageId,
          parse_mode: "Markdown",
        });
      } else if (data.startsWith("delete_review_")) {
        const reviewId = data.replace("delete_review_", "");
        console.log(`[BOT] Deleting review: ${reviewId}`);

        if (db) {
          await db.collection("reviews").doc(reviewId).delete();
        }

        await bot.answerCallbackQuery(id, {
          text: "❌ Отзыв удален из базы данных.",
          show_alert: true,
        });

        const updatedText =
          (message?.text || "") +
          "\n\n━━━━━━━━━━━━━━━\n❌ **ОТЗЫВ УДАЛЕН**";

        await bot.editMessageText(updatedText, {
          chat_id: chatId,
          message_id: messageId,
          parse_mode: "Markdown",
        });
      }
    } catch (err) {
      console.error("[BOT] Error handling callback query:", err);
      bot.answerCallbackQuery(id, {
        text: "Произошла ошибка при обработке действия.",
        show_alert: true,
      });
    }
  });

  // Команда /start
  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
      msg.chat.id,
      `👋 **Приветствую!**\n\nЯ бот-ассистент базы отдыха **«БАРецкий»**.\nВаш Chat ID: \`${msg.chat.id}\`\n\nСюда будут поступать новые заявки на бронирование и отзывы гостей на модерацию.`,
      { parse_mode: "Markdown" }
    );
  });
}

/**
 * Отправка карточки новой заявки на бронирование
 */
export async function sendBookingNotification(booking) {
  if (!bot || !adminChatId) {
    console.warn("[BOT] Notification skipped: Bot or TELEGRAM_ADMIN_CHAT_ID is not configured.");
    return false;
  }

  const rawDigits = (booking.phone || "").replace(/\D/g, "");
  const waUrl = rawDigits ? `https://wa.me/${rawDigits}` : null;
  const telUrl = rawDigits ? `tel:+${rawDigits}` : null;

  const inlineKeyboard = [];
  const actionRow = [];

  if (telUrl) {
    actionRow.push({ text: `📞 Позвонить`, url: telUrl });
  }
  if (waUrl) {
    actionRow.push({ text: `💬 WhatsApp`, url: waUrl });
  }
  if (actionRow.length > 0) {
    inlineKeyboard.push(actionRow);
  }

  const messageText = `🔔 *НОВАЯ ЗАЯВКА НА БРОНИРОВАНИЕ!*

🏡 *Домик / Услуга:* ${booking.house || "Не указан"}
📅 *Дата заезда:* ${booking.checkIn || "Не указана"}
📅 *Дата выезда:* ${booking.checkOut || "Не указана"}
👥 *Количество гостей:* ${booking.guestsCount || "2"}

👤 *Имя гостя:* ${booking.name || "Гость"}
📞 *Телефон:* \`${booking.phone || "—"}\`
💬 *Пожелания:* ${booking.comment ? `"${booking.comment}"` : "Не указаны"}

⏰ *Дата заявки:* ${booking.createdDate || new Date().toLocaleString("ru-RU")}`;

  try {
    await bot.sendMessage(adminChatId, messageText, {
      parse_mode: "Markdown",
      reply_markup: inlineKeyboard.length > 0 ? { inline_keyboard: inlineKeyboard } : undefined,
    });
    return true;
  } catch (err) {
    console.error("[BOT] Error sending booking notification:", err);
    return false;
  }
}

/**
 * Отправка отзыва на модерацию с инлайн-кнопками
 */
export async function sendReviewNotification(review) {
  if (!bot || !adminChatId) {
    console.warn("[BOT] Review notification skipped: Bot or TELEGRAM_ADMIN_CHAT_ID is not configured.");
    return false;
  }

  const ratingStars = "⭐️".repeat(Number(review.rating) || 5);
  const reviewId = review.id || `pending_${Date.now()}`;

  const messageText = `🌟 *НОВЫЙ ОТЗЫВ НА МОДЕРАЦИЮ!*

👤 *Имя гостя:* ${review.name || "Аноним"}
🏡 *Где отдыхал:* ${review.house || "База отдыха «БАРецкий»"}
⭐️ *Оценка:* ${ratingStars} (${review.rating || 5} из 5)
💬 *Текст отзыва:*
«${review.text || "—"}»

⏰ *Дата:* ${review.dateFormatted || new Date().toLocaleDateString("ru-RU")}`;

  const inlineKeyboard = [
    [
      { text: "✅ Опубликовать на сайте", callback_data: `approve_review_${reviewId}` },
      { text: "❌ Удалить отзыв", callback_data: `delete_review_${reviewId}` },
    ],
  ];

  try {
    await bot.sendMessage(adminChatId, messageText, {
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: inlineKeyboard },
    });
    return true;
  } catch (err) {
    console.error("[BOT] Error sending review notification:", err);
    return false;
  }
}

export { bot };
