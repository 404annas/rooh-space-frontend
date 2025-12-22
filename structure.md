src/
│
├── api/
│   ├── axiosClient.js            # Axios instance with baseURL, interceptors
│   ├── endpoints.js              # All API endpoints
│   ├── userApi.js                # User-related API functions (nearby rooms, profile, etc.)
│   └── adminApi.js               # Admin-related API functions (approve rooms, analytics)
│
├── app/
│   ├── store.js                  # Redux store configuration
│   └── rootReducer.js            # Combines user/admin slices
│
├── assets/
│   ├── images/                   # Logos, background images, room icons
│   │   ├── logo.png
│   │   ├── map-marker.png
│   │   └── crowd-icons/
│   │       ├── less.png
│   │       ├── moderate.png
│   │       └── high.png
│   └── icons/                    # SVG icons for buttons, UI
│       ├── close.svg
│       ├── menu.svg
│       └── search.svg
│
├── components/
│   ├── common/                   # Shared components used by both User/Admin
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Loader.jsx
│   │   ├── Modal.jsx
│   │   ├── Card.jsx
│   │   └── Toast.jsx
│   │
│   ├── layout/                   # Layout components
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   │
│   ├── user/                     # User-specific reusable components
│   │   ├── Map.jsx
│   │   ├── RoomCard.jsx
│   │   └── RoomList.jsx
│   │
│   └── admin/                    # Admin-specific reusable components
│       ├── RoomApprovalCard.jsx
│       ├── AnalyticsChart.jsx
│       ├── UserCard.jsx
│       └── RoomForm.jsx
│
├── features/
│   ├── user/
│   │   ├── auth/
│   │   │   ├── authSlice.js
│   │   │   └── authSelectors.js
│   │   ├── rooms/
│   │   │   ├── roomsSlice.js
│   │   │   └── roomsSelectors.js
│   │   └── map/
│   │       ├── mapSlice.js
│   │       └── mapSelectors.js
│   │
│   └── admin/
│       ├── auth/
│       │   ├── adminAuthSlice.js
│       │   └── adminAuthSelectors.js
│       ├── rooms/
│       │   ├── adminRoomsSlice.js
│       │   └── adminRoomsSelectors.js
│       ├── approvals/
│       │   ├── approvalsSlice.js
│       │   └── approvalsSelectors.js
│       └── analytics/
│           ├── analyticsSlice.js
│           └── analyticsSelectors.js
│
├── hooks/
│   ├── useFetch.js
│   ├── useLocalStorage.js
│   └── useAuth.js
│
├── layouts/
│   ├── MainLayout.jsx             # Shared layout wrapper
│   ├── UserLayout.jsx             # Layout for User portal pages
│   └── AdminLayout.jsx            # Layout for Admin dashboard pages
│
├── pages/
│   ├── user/
│   │   ├── Home.jsx
│   │   ├── Profile.jsx
│   │   ├── RoomDetails.jsx
│   │   └── Search.jsx
│   │
│   └── admin/
│       ├── Dashboard.jsx
│       ├── Approvals.jsx
│       ├── ManageRooms.jsx
│       ├── Users.jsx
│       └── Login.jsx
│
├── routes/
│   ├── AppRoutes.jsx              # Main routing logic
│   ├── UserRoute.jsx              # Protected route for user pages
│   └── AdminRoute.jsx             # Protected route for admin pages
│
├── styles/
│   ├── globals.css
│   └── variables.css
│
├── utils/
│   ├── validators.js
│   ├── constants.js
│   └── formatters.js
│
├── index.js
└── App.jsx
