// Zustand Store untuk Authentication State Management
// Centralized state untuk user authentication dan role management
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  // State
  user: null, // Firebase Auth user object
  userData: null, // User data dari backend API (name, email, role, dll)
  isAdmin: false, // Flag untuk cek apakah user adalah admin
  loading: true, // Loading state untuk initial auth check

  // Actions
  setUser: (user) => set({ user, loading: false }),

  setUserData: (userData) =>
    set({
      userData,
      isAdmin: userData?.role === "admin",
    }),

  setAdmin: (isAdmin) => set({ isAdmin }),

  setLoading: (loading) => set({ loading }),

  logout: () =>
    set({
      user: null,
      userData: null,
      isAdmin: false,
      loading: false,
    }),

  // Initialize user from Firebase Auth dan fetch data dari API
  initializeUser: async (firebaseUser) => {
    if (!firebaseUser) {
      set({ user: null, userData: null, isAdmin: false, loading: false });
      return;
    }

    try {
      set({ user: firebaseUser, loading: true });

      // Fetch user data dari backend API
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${API_BASE_URL}/users/${firebaseUser.uid}`);

      if (response.ok) {
        const userData = await response.json();
        set({
          userData,
          isAdmin: userData.role === "admin",
          loading: false,
        });
      } else {
        // Jika user belum ada di backend, set default
        set({
          userData: null,
          isAdmin: false,
          loading: false,
        });
      }
    } catch (error) {
      console.error("Error initializing user:", error);
      set({ userData: null, isAdmin: false, loading: false });
    }
  },
}));
