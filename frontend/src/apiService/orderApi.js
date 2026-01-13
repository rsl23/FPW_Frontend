// src/api/orders.js
const API_URL = `${import.meta.env.VITE_API_BASE_URL}/orders`;

// Ambil semua orders user tertentu
export const getUserOrders = async (userId) => {
  const res = await fetch(`${API_URL}?userId=${userId}`);
  if (!res.ok) throw new Error("Gagal mengambil order");
  return res.json(); // sudah sorted dari backend
};

// Ambil semua orders (admin)
export const getAllOrders = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Gagal mengambil semua order");
  return res.json();
};

// Buat order baru
export const createOrder = async (userId, items, total) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, items, total }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Gagal membuat order");
  }

  return res.json();
};

// Update status order
export const updateOrderStatus = async (orderId, status) => {
  const res = await fetch(`${API_URL}/${orderId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Gagal update status order");
  }

  return res.json();
};

// Konfirmasi stok (order diterima)
export const confirmStock = async (orderId) => {
  const res = await fetch(`${API_URL}/${orderId}/confirm-stock`, {
    method: "POST",
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Gagal konfirmasi stok");
  }
  return res.json();
};

// Kembalikan stok (order ditolak)
export const returnStock = async (orderId) => {
  const res = await fetch(`${API_URL}/${orderId}/return-stock`, {
    method: "POST",
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || "Gagal mengembalikan stok");
  }
  return res.json();
};
