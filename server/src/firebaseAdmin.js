import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

let db = null;

try {
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
  const projectId = process.env.FIREBASE_PROJECT_ID || "baretskiy-7a7ac";

  if (serviceAccountPath && fs.existsSync(serviceAccountPath)) {
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId,
    });
    db = admin.firestore();
    console.log("🔥 Firebase Admin initialized with service account key.");
  } else {
    // Инициализация по Project ID (при запуске на GCP / Cloud / с дефолтными кредами)
    admin.initializeApp({
      projectId,
    });
    db = admin.firestore();
    console.log(`🔥 Firebase Admin initialized for project: ${projectId}`);
  }
} catch (err) {
  console.warn("⚠️ Firebase Admin initialization warning (will use REST/webhook mode):", err.message);
}

export { admin, db };
