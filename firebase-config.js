// ============================================================================
// KONFIGURASI FIREBASE — TAMAN WISATA MATA AIR CIBURIAL
// ============================================================================

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyA7TVbxNnEi6kb1BP-3aK1uZth_qne9e9c",
  authDomain: "billing-ciburial.firebaseapp.com",
  projectId: "billing-ciburial",
  storageBucket: "billing-ciburial.firebasestorage.app",
  messagingSenderId: "850369207898",
  appId: "1:850369207898:web:210d29da363781dace0263",
  measurementId: "G-PSHJZ1X3SJ"
};

// Pemetaan Email Akun Petugas di Firebase Authentication -> Users
window.STAFF_ROLES = {
  "admin@ciburial.com": { role: "admin", label: "Admin" },
  "kasir@ciburial.com": { role: "kasir", label: "Kasir" }
};
