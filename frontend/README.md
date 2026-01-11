# BJM Parts - Frontend Documentation

## 📋 Daftar Isi

- [Gambaran Umum](#gambaran-umum)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Direktori](#struktur-direktori)
- [Fitur Utama](#fitur-utama)
- [Instalasi dan Menjalankan](#instalasi-dan-menjalankan)
- [Dokumentasi Komponen](#dokumentasi-komponen)
- [API Services](#api-services)
- [Routing](#routing)
- [Autentikasi](#autentikasi)

---

## 🎯 Gambaran Umum

Frontend BJM Parts adalah aplikasi web e-commerce untuk toko aksesoris sepeda motor yang dibangun dengan React.js. Aplikasi ini menyediakan antarmuka pengguna yang modern dan responsif untuk menjelajahi produk, mengelola keranjang belanja, melakukan checkout, dan fitur admin untuk mengelola toko.

**URL Development:** `http://localhost:5173`

---

## 🛠️ Teknologi yang Digunakan

### Core Technologies

- **React 19.1.1** - Library JavaScript untuk membangun UI
- **Vite 7.1.7** - Build tool dan development server
- **React Router DOM 7.9.3** - Routing untuk navigasi
- **Tailwind CSS 4.1.14** - Utility-first CSS framework

### UI Libraries

- **Flowbite React 0.12.9** - Komponen UI berbasis Tailwind
- **Lucide React 0.544.0** - Icon library
- **Framer Motion 12.23.22** - Library untuk animasi

### State & Data Management

- **Firebase 12.3.0** - Authentication dan Firestore database
- **React Hot Toast 2.6.0** - Notifikasi toast

### Validation & Forms

- **Joi 18.0.1** - Schema validation untuk form

---

## 📁 Struktur Direktori

```
frontend/
├── public/                      # File statis
├── src/
│   ├── aboutUs/                # Halaman About Us
│   │   └── AboutUs.jsx
│   │
│   ├── admin/                  # Modul Admin Panel
│   │   ├── AdminLayout.jsx    # Layout wrapper untuk admin
│   │   ├── AdminRoute.jsx     # Protected route untuk admin
│   │   └── pages/             # Halaman-halaman admin
│   │       ├── AdminDashboard.jsx   # Dashboard overview
│   │       ├── AdminGallery.jsx     # Manajemen galeri
│   │       ├── AdminOrders.jsx      # Manajemen pesanan
│   │       ├── AdminProducts.jsx    # Manajemen produk
│   │       ├── AdminReviews.jsx     # Manajemen review
│   │       ├── AdminSettings.jsx    # Pengaturan toko
│   │       └── AdminUsers.jsx       # Manajemen pengguna
│   │
│   ├── apiService/            # API service layer
│   │   ├── cartApi.js        # API untuk keranjang
│   │   ├── categoryApi.js    # API untuk kategori
│   │   ├── orderApi.js       # API untuk pesanan
│   │   ├── productApi.js     # API untuk produk
│   │   └── reviewApi.js      # API untuk review
│   │
│   ├── assets/               # Gambar dan file media
│   │
│   ├── cart/                 # Modul Keranjang
│   │   └── CartPage.jsx     # Halaman keranjang belanja
│   │
│   ├── components/           # Komponen reusable
│   │   └── InputField.jsx   # Input field component
│   │
│   ├── firebase/            # Konfigurasi Firebase
│   │   └── config.js       # Firebase initialization
│   │
│   ├── footer/             # Footer component
│   │   └── Footer.jsx
│   │
│   ├── home/               # Halaman Home
│   │   └── HomePage.jsx
│   │
│   ├── login/              # Modul Login
│   │   ├── LoginPage.jsx
│   │   └── ResetPassword/
│   │       └── ResetPassword.jsx
│   │
│   ├── navbar/             # Navigation bar
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   │
│   ├── product/            # Modul Produk
│   │   ├── Product.jsx          # List produk
│   │   └── ProductDetail.jsx    # Detail produk
│   │
│   ├── Profile/            # Halaman Profile
│   │   └── Profile.jsx    # Profile & order history
│   │
│   ├── register/           # Modul Registrasi
│   │   └── RegisterPage.jsx
│   │
│   ├── Testimoni Galeri/   # Galeri testimoni
│   │   └── GalleryView.jsx
│   │
│   ├── App.jsx             # Root component
│   ├── App.css             # Global styles
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind imports
│
├── .env                    # Environment variables
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
└── README.md              # Dokumentasi ini
```

---

## ✨ Fitur Utama

### 1. **Halaman Publik**

- **Home Page** - Landing page dengan hero section, fitur highlight, dan CTA
- **Product Listing** - Browse produk dengan filter kategori, search, dan sorting
- **Product Detail** - Detail produk lengkap dengan reviews dan rating
- **About Us** - Informasi toko dan galeri
- **Gallery** - Galeri foto toko dan produk

### 2. **Autentikasi Pengguna**

- **Login** - Login dengan email/password via Firebase Auth
- **Register** - Registrasi akun baru
- **Reset Password** - Fitur lupa password
- **Email Verification** - Verifikasi email otomatis

### 3. **Keranjang & Checkout**

- **Shopping Cart** - Tambah/hapus produk, update quantity
- **Checkout** - Proses pemesanan dengan validasi stok
- **Order History** - Riwayat pesanan di halaman profile

### 4. **Profile & Reviews**

- **User Profile** - Update email dan password
- **Order History** - Lihat status pesanan
- **Product Reviews** - Beri rating dan komentar untuk produk yang dibeli

### 5. **Admin Panel**

- **Dashboard** - Overview statistik toko
- **Product Management** - CRUD produk
- **Order Management** - Kelola pesanan (pending, accepted, rejected)
- **User Management** - Kelola pengguna dan role
- **Gallery Management** - Upload dan kelola gambar galeri
- **Reviews Management** - Moderasi review produk
- **Settings** - Pengaturan toko

---

## 🚀 Instalasi dan Menjalankan

### Prerequisites

- Node.js 20.18.3 atau lebih tinggi
- npm atau yarn

### Instalasi

1. **Install dependencies:**

```bash
cd frontend
npm install
```

2. **Setup environment variables:**

Buat file `.env` di folder `frontend/` dengan isi:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Backend API Configuration
VITE_API_BASE_URL=http://localhost:3000/api
```

> **Note:** Semua API endpoint sekarang menggunakan `VITE_API_BASE_URL` dari environment variable. Untuk development lokal, gunakan `http://localhost:3000/api`. Untuk production, ubah ke URL backend production Anda.

3. **Menjalankan development server:**

```bash
npm run dev
```

Server akan berjalan di: `http://localhost:5173`

4. **Build untuk production:**

```bash
npm run build
```

5. **Preview production build:**

```bash
npm run preview
```

---

## 📦 Dokumentasi Komponen

### 🏠 Home (`src/home/HomePage.jsx`)

**Deskripsi:** Landing page aplikasi dengan hero section, fitur highlight, dan call-to-action.

**Fitur:**

- Hero section dengan animasi Framer Motion
- Grid fitur toko (Suku Cadang Asli, Layanan Terpercaya, Belanja Mudah)
- Call-to-action untuk explore produk

**Dependencies:**

- `react-router-dom` - Navigasi
- `framer-motion` - Animasi
- `lucide-react` - Icons

---

### 🛍️ Product (`src/product/`)

#### **Product.jsx** - List Produk

**Deskripsi:** Halaman daftar produk dengan fitur filter, search, dan sorting.

**Fitur:**

- Search produk by nama
- Filter by kategori
- Sort by harga, nama, rating
- Display rating dan jumlah review
- Indikator stok (Tersedia, Hampir Habis, Stok Habis)
- Responsive grid layout

**State Management:**

- `products` - Array produk
- `categories` - Array kategori
- `searchTerm` - Input pencarian
- `selectedCategory` - Kategori terpilih
- `sortBy` - Metode sorting
- `productRatings` - Rating setiap produk

**API Calls:**

- `getProducts()` - Fetch semua produk
- `getCategories()` - Fetch kategori
- `/api/reviews/product/:id` - Fetch review produk

---

#### **ProductDetail.jsx** - Detail Produk

**Deskripsi:** Halaman detail produk lengkap dengan informasi, reviews, dan tombol action.

**Fitur:**

- Gambar produk dengan loading state
- Info stok dan kategori
- Rating dan review produk
- Filter review by rating
- Add to cart
- Link ke Tokopedia & Shopee
- Review submission untuk pembeli

**API Integration:**

- `getProducts()` - Fetch detail produk
- `/api/reviews/product/:id` - Fetch reviews
- `addToCart()` - Tambah ke keranjang

---

### 🛒 Cart (`src/cart/CartPage.jsx`)

**Deskripsi:** Halaman keranjang belanja untuk mengelola item sebelum checkout.

**Fitur:**

- Tampilkan semua item di keranjang
- Update quantity dengan validasi stok
- Hapus item
- Ringkasan belanja (subtotal, pengiriman, total)
- Checkout ke backend
- Loading state saat update

**State:**

- `cart` - Array item keranjang
- `loading` - Loading state
- `updatingItems` - Set ID item yang sedang diupdate

**API:**

- `getCart()` - Fetch keranjang
- `updateCartItem(id, quantity)` - Update jumlah
- `deleteCartItem(id)` - Hapus item
- `POST /api/orders` - Checkout

---

### 👤 Profile (`src/Profile/Profile.jsx`)

**Deskripsi:** Halaman profil pengguna dengan tab untuk profile, security, dan order history.

**Fitur:**

- **Profile Tab:** Update email
- **Security Tab:** Ganti password
- **Orders Tab:** Riwayat pesanan dengan status
- Review modal untuk produk yang sudah dibeli
- Filter order by status

**Tab States:**

- `profile` - Info profil
- `security` - Keamanan akun
- `orders` - Riwayat pesanan

**API:**

- `getUserOrders(userId)` - Fetch pesanan user
- `updateEmail()` - Update email (Firebase)
- `updatePassword()` - Ganti password (Firebase)
- `POST /api/reviews` - Submit review

---

### 🔐 Authentication

#### **LoginPage.jsx**

**Fitur:**

- Login dengan email/password
- Validasi form dengan Joi
- Link ke reset password
- Redirect ke halaman asal setelah login
- Error handling

**Firebase Methods:**

- `signInWithEmailAndPassword()`

---

#### **RegisterPage.jsx**

**Fitur:**

- Register dengan nama, email, password
- Validasi form (password min 6 karakter)
- Auto email verification
- Create user document di Firestore
- Default role: "user"

**Firebase Methods:**

- `createUserWithEmailAndPassword()`
- `updateProfile()` - Set display name
- `sendEmailVerification()`

---

#### **ResetPassword.jsx**

**Fitur:**

- Input email untuk reset password
- Send email reset via Firebase
- Feedback sukses/error

**Firebase Methods:**

- `sendPasswordResetEmail()`

---

### 🎨 Layout Components

#### **Navbar.jsx**

**Fitur:**

- Responsive navigation (desktop & mobile)
- User menu dengan avatar
- Admin panel link (jika admin)
- Logout functionality
- Mobile burger menu

**State:**

- `isAdmin` - Status admin role
- `isMobileMenuOpen` - Toggle mobile menu

---

#### **Footer.jsx**

**Fitur:**

- Informasi kontak
- Copyright notice

---

### 📄 About & Gallery

#### **AboutUs.jsx**

**Fitur:**

- Hero section dengan gambar toko
- Deskripsi toko
- Info cards (Chat, Order, Pengiriman)
- Gallery grid dari API
- Social media links
- Call-to-action

**API:**

- `GET /api/gallery` - Fetch gambar galeri

---

#### **GalleryView.jsx**

**Fitur:**

- Grid galeri gambar
- Modal untuk view full image
- Loading state

---

### 🔧 Admin Panel (`src/admin/`)

#### **AdminLayout.jsx**

**Deskripsi:** Layout wrapper untuk semua halaman admin dengan sidebar navigation.

**Fitur:**

- Sidebar dengan menu navigasi
- Responsive mobile menu
- Active menu highlighting
- Logout button

---

#### **AdminRoute.jsx**

**Deskripsi:** Protected route component untuk memastikan hanya admin yang bisa akses.

**Logic:**

- Check Firebase auth
- Verify role === "admin" di Firestore
- Redirect ke "/" jika bukan admin

---

#### **AdminDashboard.jsx**

**Fitur:**

- Statistik cards (Total Users, Orders, Products, Revenue)
- Recent orders table
- Charts untuk analytics
- Quick actions

**API:**

- `GET /api/stats` - Dashboard statistics

---

#### **AdminProducts.jsx**

**Fitur:**

- Table produk dengan search & filter
- Create produk baru
- Edit produk
- Delete produk
- Toggle active status
- Upload gambar produk

**CRUD Operations:**

- `GET /api/products`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`

---

#### **AdminOrders.jsx**

**Fitur:**

- Table pesanan dengan filter status
- Detail pesanan modal
- Update status (pending → accepted/rejected)
- Search by order ID atau user

**API:**

- `GET /api/orders`
- `PUT /api/orders/:id/status`

---

#### **AdminUsers.jsx**

**Fitur:**

- Table pengguna
- Update user role (user ↔ admin)
- Delete user
- Search users

**API:**

- `GET /api/users`
- `PUT /api/users/:id/role`
- `DELETE /api/users/:id`

---

#### **AdminGallery.jsx**

**Fitur:**

- Grid galeri
- Upload gambar baru
- Update alt text & description
- Delete gambar

**API:**

- `GET /api/gallery`
- `POST /api/gallery`
- `PUT /api/gallery/:id`
- `DELETE /api/gallery/:id`

---

#### **AdminReviews.jsx**

**Fitur:**

- List semua reviews
- Filter by rating
- Delete inappropriate reviews
- View product & user info

**API:**

- `GET /api/reviews`
- `DELETE /api/reviews/:id`

---

#### **AdminSettings.jsx**

**Fitur:**

- Update info toko (nama, alamat, telepon)
- Update jam operasional
- Social media links
- Email & WhatsApp settings

**API:**

- `GET /api/settings`
- `PUT /api/settings`

---

## 🌐 API Services

### **cartApi.js**

```javascript
getCart(); // GET /api/cart
addToCart(productId, qty); // POST /api/cart
updateCartItem(id, qty); // PUT /api/cart/:id
deleteCartItem(id); // DELETE /api/cart/:id
```

### **categoryApi.js**

```javascript
getCategories(); // GET /api/categories
getCategoryById(id); // GET /api/categories/:id
```

### **orderApi.js**

```javascript
getUserOrders(userId); // GET /api/orders?userId=xxx
createOrder(orderData); // POST /api/orders
updateOrderStatus(id, status); // PUT /api/orders/:id/status
```

### **productApi.js**

```javascript
getProducts(); // GET /api/products
getProductById(id); // GET /api/products/:id
createProduct(data); // POST /api/products
updateProduct(id, data); // PUT /api/products/:id
deleteProduct(id); // DELETE /api/products/:id
```

### **reviewApi.js**

```javascript
getReviews(); // GET /api/reviews
getProductReviews(productId); // GET /api/reviews/product/:id
createReview(data); // POST /api/reviews
deleteReview(id); // DELETE /api/reviews/:id
```

**Base URL:** `https://backend-dot-storied-courier-479504-q5.et.r.appspot.com`

**Authentication:**

- Semua request menyertakan Firebase ID Token di header `Authorization: Bearer <token>`
- Token diambil dari `auth.currentUser.getIdToken()`

---

## 🛣️ Routing

### Public Routes

| Path              | Component     | Deskripsi      |
| ----------------- | ------------- | -------------- |
| `/`               | HomePage      | Landing page   |
| `/product`        | Product       | List produk    |
| `/product/:id`    | ProductDetail | Detail produk  |
| `/aboutus`        | AboutUs       | About & galeri |
| `/login`          | LoginPage     | Login form     |
| `/register`       | RegisterPage  | Register form  |
| `/reset-password` | ResetPassword | Reset password |

### Protected Routes (Require Login)

| Path       | Component | Deskripsi         |
| ---------- | --------- | ----------------- |
| `/cart`    | CartPage  | Keranjang belanja |
| `/profile` | Profile   | Profil & orders   |

### Admin Routes (Require Admin Role)

| Path              | Component      | Deskripsi       |
| ----------------- | -------------- | --------------- |
| `/admin`          | AdminDashboard | Dashboard admin |
| `/admin/products` | AdminProducts  | Kelola produk   |
| `/admin/orders`   | AdminOrders    | Kelola pesanan  |
| `/admin/users`    | AdminUsers     | Kelola user     |
| `/admin/gallery`  | AdminGallery   | Kelola galeri   |
| `/admin/reviews`  | AdminReviews   | Kelola review   |
| `/admin/settings` | AdminSettings  | Pengaturan      |

**Route Protection:**

- `ProtectedRoute` - Check user authentication
- `AdminRoute` - Check admin role

---

## 🔒 Autentikasi

### Firebase Authentication

Frontend menggunakan Firebase Authentication untuk manajemen user.

**Firebase Config** (`src/firebase/config.js`):

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### Auth Flow

1. User login via `signInWithEmailAndPassword()`
2. Firebase returns user object + ID token
3. ID token disimpan otomatis oleh Firebase SDK
4. Setiap API request menyertakan token di header
5. Backend verify token menggunakan Firebase Admin SDK

### Protected Route Logic

```javascript
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};
```

### Admin Route Logic

```javascript
const AdminRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdminRole();
  }, []);

  if (!isAdmin) return <Navigate to="/" />;
  return children;
};
```

---

## 🎨 Styling & UI

### Tailwind CSS

Aplikasi menggunakan Tailwind CSS untuk styling dengan konfigurasi custom.

**Tema Warna:**

- Primary: Pink/Purple gradient
- Secondary: Indigo/Blue
- Accent: Orange
- Dark mode: Purple-900 to Blue-900 gradient backgrounds

**Custom Classes:**

- Glassmorphism: `bg-white/10 backdrop-blur-lg`
- Gradient text: `bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent`
- Card style: `bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl`

### Flowbite React

Beberapa komponen menggunakan Flowbite React:

- Cards
- Buttons
- Spinners
- Badges

**Note:** Untuk consistency, banyak button diganti dengan native HTML button dengan gradient background manual karena Flowbite Button kadang tembus pandang.

---

## 📱 Responsive Design

Aplikasi fully responsive dengan breakpoints:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

**Mobile Features:**

- Burger menu navigation
- Touch-friendly buttons
- Swipeable galleries
- Responsive grid layouts

---

## 🐛 Error Handling

### API Errors

```javascript
try {
  const data = await apiCall();
} catch (error) {
  console.error("Error:", error);
  toast.error("Gagal memuat data!");
}
```

### Auth Errors

```javascript
if (error.message === "User belum login") {
  toast.error("Silakan login terlebih dahulu!");
  navigate("/login");
}
```

### Form Validation

Menggunakan Joi schema validation:

```javascript
const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
```

---

## 📊 State Management

Aplikasi menggunakan React built-in state management:

- **useState** - Local component state
- **useEffect** - Side effects & data fetching
- **useContext** - Sharing user auth state (via App.jsx)
- **useNavigate** - Programmatic navigation
- **useParams** - URL parameters
- **useLocation** - Current location info

**No Redux/Zustand** - State management sederhana dengan props & context.

---

## 🧪 Development Tips

### Hot Module Replacement (HMR)

Vite menyediakan HMR yang sangat cepat. Setiap perubahan akan langsung terlihat tanpa refresh.

### Development Server

```bash
npm run dev
```

Server berjalan di `http://localhost:5173`

### Debugging

- React DevTools extension
- Console.log untuk tracking
- Network tab untuk API calls
- Firebase Console untuk auth & database

### Code Linting

```bash
npm run lint
```

---

## 🚀 Deployment

### Build Production

```bash
npm run build
```

Output di folder `dist/`

### Preview Build

```bash
npm run preview
```

### Hosting Options

- **Vercel** - Recommended untuk React apps
- **Netlify** - Alternative dengan CI/CD
- **Firebase Hosting** - Integrated dengan Firebase backend

---

## 📝 Environment Variables

Buat file `.env` di root folder `frontend/`:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=project-id
VITE_FIREBASE_STORAGE_BUCKET=project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123def456

# Backend API URL (optional, default localhost:3000)
VITE_API_URL=https://backend-dot-storied-courier-479504-q5.et.r.appspot.com
```

**⚠️ Security Note:** Jangan commit file `.env` ke Git!

---

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

**Last Updated:** November 27, 2025  
**Version:** 1.0.0
