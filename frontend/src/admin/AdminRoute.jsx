// AdminRoute Component - Protected route untuk admin panel dengan role-based access control
// Validasi: user harus login DAN memiliki role 'admin' dari backend API
// Redirect ke login jika belum auth, tampilkan error jika bukan admin

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore"; // Zustand store

const AdminRoute = ({ children }) => {
  // Get auth state dari Zustand store
  const { user, isAdmin, loading } = useAuthStore();

  // Loading screen saat checking admin role
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memverifikasi akses admin...</p>
        </div>
      </div>
    );
  }

  // Redirect ke login jika belum authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Access denied screen jika bukan admin
  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <div className="text-red-500 text-6xl mb-4">🚫</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Akses Ditolak
          </h2>
          <p className="text-gray-600 mb-6">
            Anda tidak memiliki izin untuk mengakses halaman admin.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Kembali
          </button>
        </div>
      </div>
    );
  }

  // Render children jika user adalah admin
  return children;
};

export default AdminRoute;
