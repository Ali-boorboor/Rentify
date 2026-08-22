# 🏠 Rentify

![total commits](https://img.shields.io/github/commit-activity/t/Ali-boorboor/Rentify)
![createdAt](https://img.shields.io/github/created-at/ali-boorboor/Rentify?color=red)
![version tag](https://img.shields.io/github/v/tag/ali-boorboor/Rentify?color=blue)
![root files and folders count](https://img.shields.io/github/directory-file-count/ali-boorboor/Rentify?color=red)
![Vercel](https://img.shields.io/badge/deployed-Vercel-black?logo=vercel)

> A modern full-stack real-estate platform for discovering, comparing, managing, and publishing rental properties — built with Next.js, TypeScript, MongoDB, and a feature-driven architecture.

Rentify is a full-stack property marketplace designed around the complete rental journey. Renters can discover properties through search, filters, sorting, favorites, and side-by-side comparison, while owners and real-estate agencies can move through authentication and property registration workflows. Behind the public experience, Rentify also includes a user dashboard, property management flows, and an admin panel for reviewing listings and handling contact messages.

The project combines the Next.js App Router with MongoDB/Mongoose, React Query, Formik/Yup, Zustand, JWT-based authentication, and a reusable component system to keep the application structured as the feature set grows.

---

## 🚀 Demo

### Live Application

🔗 **[Rentify — Live Demo](https://rentify-eight-sooty.vercel.app)**

Explore the main parts of the platform:

- 🏡 Property discovery and filtering
- 🔎 Search and sorting workflows
- 🏠 Single-property details
- ❤️ Favorite properties
- ⚖️ Property comparison
- 🔐 Login and registration flows
- 📝 Property listing registration
- 👤 User panel and account management
- 🛡️ Admin moderation panel
- 💬 Contact and support messaging

### Repository

🔗 **[GitHub — Ali-boorboor/Rentify](https://github.com/Ali-boorboor/Rentify)**

---

## 🛠️ Technologies

### Frontend

| Technology                  | Purpose                                                                          |
| --------------------------- | -------------------------------------------------------------------------------- |
| **Next.js 15**              | App Router, route groups, server rendering, revalidation, and API route handlers |
| **React 19**                | Component-based UI architecture                                                  |
| **TypeScript**              | Static typing across the application                                             |
| **Tailwind CSS 4**          | Utility-first responsive styling                                                 |
| **Radix UI**                | Accessible UI primitives                                                         |
| **Lucide React**            | Interface icons                                                                  |
| **Swiper**                  | Interactive property/media sliders                                               |
| **React Leaflet / Leaflet** | Map-based property/location experiences                                          |
| **next-themes**             | Theme management                                                                 |
| **React Day Picker**        | Date selection UI                                                                |
| **Sonner**                  | Toast notifications                                                              |

### Backend & Data

| Technology                 | Purpose                                                     |
| -------------------------- | ----------------------------------------------------------- |
| **Next.js Route Handlers** | Server-side API endpoints and application backend workflows |
| **MongoDB**                | Primary database                                            |
| **Mongoose**               | Data modeling and MongoDB interaction                       |
| **JSON Web Token**         | Authentication token handling                               |
| **bcrypt**                 | Password hashing                                            |
| **HTTP Cookies**           | Access-token persistence on the client/server boundary      |

### Validation, State & Data Fetching

| Technology                                | Purpose                                                            |
| ----------------------------------------- | ------------------------------------------------------------------ |
| **TanStack React Query**                  | Server-state management, pagination, infinite queries, and caching |
| **Formik**                                | Complex form state management                                      |
| **Yup**                                   | Form and request validation                                        |
| **Zustand**                               | Lightweight client-side state                                      |
| **Custom fetcher / validation utilities** | Shared request and response handling                               |

---

## ✨ Features

### 🏡 Property Discovery

Rentify provides a dedicated property discovery experience where users can browse listings and narrow results through filtering and sorting controls. The application also supports paginated/infinite loading for property results and keeps frequently used property data cached on the client.

### 🔎 Search & Filtering

Users can search for properties based on the available listing information and refine results with filters. The property listing workflow is built around URL search parameters, making filtered states easier to share and preserve during navigation.

### 🏠 Single Property Pages

Each property can have its own detailed page with structured property information, pricing details, address information, images, and supporting property-detail data.

### ❤️ Favorites

Authenticated users can save properties to their favorites and access those saved listings later from the user panel.

### ⚖️ Property Comparison

Rentify includes a dedicated comparison workflow for evaluating multiple properties side by side. The comparison page validates property identifiers and supports comparing **two or three properties** at once.

### 🔐 Authentication

The project includes a complete authentication layer with:

- Owner / tenant entry points
- Real-estate agency registration flow
- Password handling with bcrypt
- JWT-style access-token authentication
- Cookie-based authentication state
- Request-body validation
- User and admin roles

### 📝 Property Registration

Property owners can move through a dedicated listing-registration experience with its own layout, sidebar navigation, form state, and validation structure. The workflow is separated into feature-specific components so complex listing forms remain maintainable.

### 👤 User Panel

Authenticated users get a dedicated account area containing sections for:

- Editing personal information
- Favorite properties
- Property comparison
- User-owned/listed properties
- Account navigation and logout

### 🛡️ Admin Panel

Rentify includes an admin-focused dashboard for platform moderation and support operations. The current structure separates:

- Pending property advertisements
- Verification of pending ads
- Removal of pending ads
- Contact messages

This gives the project a complete lifecycle from **listing submission → moderation → public discovery**.

### 💬 Contact & Support

The Contact Us section combines a validated contact form with contact information and location-oriented content. Submitted messages can also be reviewed through the admin panel.

### 📱 Responsive UI

The application is organized around reusable UI components and responsive layouts so the same feature system can adapt from large screens to smaller devices.

### 🌗 Modern UI System

Rentify uses Tailwind CSS, Radix UI primitives and Lucide icons to create a consistent interface across the marketplace, dashboards, forms, and administrative screens.

---

## 📸 Preview

![]()

---

## 🧱 Architecture

Rentify follows a **feature-oriented Next.js App Router architecture** rather than putting the entire application into one generic component tree.

### Route Groups

The `src/app` directory is divided into route groups such as:

```text
(Home-Page)
(Properties-Page)
(Login-Register)
(Property-Comparison)
(Property-Registration)
(User-Panel)
(Contact-Us)
(Admin-Panel)
```

These route groups keep related pages, layouts, components, hooks, constants, and feature logic close together while allowing clean public URLs.

### Shared Application Layer

Reusable cross-feature code lives outside the route groups:

- `components/` → shared UI building blocks
- `configs/` → application configuration such as database setup
- `constants/` → navigation and shared data definitions
- `hook/` → reusable client-side hooks
- `lib/` → shared utility functions
- `models/` → MongoDB/Mongoose models
- `types/` → shared TypeScript definitions
- `utils/` → authentication, hashing, token, fetch, JSON, and request helpers
- `validators/` → feature-specific validation rules

This separation makes it easier to expand the marketplace without turning the route tree into a monolith.

---

## 📁 Project Structure

```text
Rentify/
├── public/
│   ├── images/
│   └── uploads/
│       └── profiles/
│
├── src/
│   ├── app/
│   │   ├── (Admin-Panel)/
│   │   ├── (Contact-Us)/
│   │   ├── (Home-Page)/
│   │   ├── (Login-Register)/
│   │   ├── (Properties-Page)/
│   │   ├── (Property-Comparison)/
│   │   ├── (Property-Registration)/
│   │   ├── (User-Panel)/
│   │   ├── api/
│   │   ├── fonts/
│   │   ├── globals.css
│   │   ├── icon.png
│   │   ├── layout.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── empty-properties-alert/
│   │   ├── filters-bar/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── property-card/
│   │   ├── providers/
│   │   ├── scroll-to-top/
│   │   ├── sort-bar/
│   │   └── ui/
│   │
│   ├── configs/
│   ├── constants/
│   ├── hook/
│   ├── lib/
│   ├── models/
│   ├── types/
│   ├── utils/
│   └── validators/
│
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

### Main Data Models

The database layer is modeled around the application's real-estate domain, including entities such as:

```text
User
Property
PropertyDetail
Address
PropertyCategory
ContractType
EquipmentAndFacilitie
Province
Favourite
ContactUsMessage
```

---

## 🔄 Core User Flows

### For Renters

```text
Discover
   ↓
Search / Filter / Sort
   ↓
Open Property
   ↓
Save to Favorites or Compare
   ↓
Authenticate
   ↓
Continue with the rental process
```

### For Owners / Agencies

```text
Register / Login
   ↓
Open Property Registration
   ↓
Complete Listing Information
   ↓
Submit Advertisement
   ↓
Admin Review
   ↓
Verification
   ↓
Property Becomes Discoverable
```

### Platform Moderation

```text
New Listing
   ↓
Pending Ads
   ↓
Admin Verification
   ├── Verify ✅
   └── Remove ❌
```

---

## ⚡ Performance & Data Strategy

The project also contains several practical performance patterns instead of relying only on client-side rendering.

- The Home page uses Next.js revalidation with a **24-hour interval**.
- Property discovery uses **TanStack React Query `useInfiniteQuery`** for paginated loading.
- Property requests are cached for **24 hours** on the client query layer.
- React `Suspense` and dedicated loading states are used around data-driven sections.
- Search and filter state is connected to URL search parameters for predictable navigation.

These patterns make the project feel closer to a production marketplace than a static portfolio demo.

---

## 🔐 Security & Validation

Rentify includes a dedicated utility layer for application security and request validation:

- Password hashing with **bcrypt**
- Access-token authentication through cookies
- JWT token utilities
- Authentication helpers for server-side access checks
- Feature-specific Yup validators
- Server request-body validation helpers
- MongoDB model relationships through Mongoose references
- Separate admin/user authorization concepts

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ali-boorboor/Rentify.git
cd Rentify
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root:

```env
DB_CONNECTION_STRING=your_mongodb_connection_string
```

The database connection is read from `DB_CONNECTION_STRING` by the application's database configuration.

### 4. Start the development server

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

### 5. Production build

```bash
npm run build
npm run start
```

### 6. Lint

```bash
npm run lint
```

---

## 📡 Backend & API Layer

Rentify keeps its backend functionality inside the Next.js application through route handlers under:

```text
src/app/api/
```

The repository includes a dedicated properties API route and supporting request utilities, while the rest of the application-specific server workflows are organized around the feature route groups, database models, validators, and authentication helpers.

---

## 🎯 What Makes Rentify Different?

Rentify is more than a property-card UI. It is structured as a **small real-world marketplace** with multiple user roles, listing lifecycle management, saved properties, comparison, authentication, moderation, and database-backed content.

The interesting part of the project is the connection between those pieces:

> **discover → evaluate → authenticate → publish → moderate → manage**

That complete flow is what turns Rentify from a simple real-estate website into a full-stack application architecture.

---

## 👨‍💻 Author

**Ali Boorboor**

- GitHub: [@Ali-boorboor](https://github.com/Ali-boorboor)
- Repository: [Rentify](https://github.com/Ali-boorboor/Rentify)
- Live Demo: [rentify-eight-sooty.vercel.app](https://rentify-eight-sooty.vercel.app)

Made with 💙 and lot's of ☕ by **Ali Boorboor**

⭐ If you found the project useful or interesting, consider giving the repository a star.

---

<div align="center">

### 🏠 Built with Next.js, MongoDB, and a lot of real-estate logic.

**Rentify — Find it. Compare it. Manage it.**

</div>
