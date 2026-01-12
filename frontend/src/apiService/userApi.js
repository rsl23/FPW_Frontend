// API Service untuk User endpoints
// Handle operasi users (get all, get by id, create, update, delete)

const API_URL = `${import.meta.env.VITE_API_BASE_URL}/users`;

// GET /api/users - Get all users
export const getAllUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Gagal mengambil data users");
    return await response.json();
  } catch (error) {
    console.error("Error getAllUsers:", error);
    throw error;
  }
};

// GET /api/users/:id - Get user by ID
export const getUserById = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`);
    if (!response.ok) throw new Error("User tidak ditemukan");
    return await response.json();
  } catch (error) {
    console.error("Error getUserById:", error);
    throw error;
  }
};

// POST /api/users - Create new user
export const createUser = async (userData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error("Gagal membuat user");
    return await response.json();
  } catch (error) {
    console.error("Error createUser:", error);
    throw error;
  }
};

// PUT /api/users/:id - Update user
export const updateUser = async (userId, updateData) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    if (!response.ok) throw new Error("Gagal update user");
    return await response.json();
  } catch (error) {
    console.error("Error updateUser:", error);
    throw error;
  }
};

// DELETE /api/users/:id - Delete user
export const deleteUser = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Gagal menghapus user");
    return await response.json();
  } catch (error) {
    console.error("Error deleteUser:", error);
    throw error;
  }
};
