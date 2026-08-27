# Airoame — Luxury Campervan & Overland RV Rental Platform

[![Live Demo](https://img.shields.io/badge/Live_Demo-airoame.vercel.app-EC1E79?style=for-the-badge&logo=vercel&logoColor=white)](https://airoame.vercel.app)
[![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_6.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **Live Deployment:** [https://airoame.vercel.app](https://airoame.vercel.app)

**Airoame** is a luxury campervan, motorhome, and overland RV rental web application designed for modern digital nomads, nature explorers, and roadtrip adventurers. Built with React 18, TypeScript, Tailwind CSS, and Vite, it delivers responsive performance with route-level code splitting, studio vehicle showcases, instant modal reservations, and interactive map hubs.

---

## 🌟 Key Features

### 1. 🏠 Modular Home Experience
* **Hero Section**: Responsive typography (*"Luxury Car Rent From $19 Only"*), dual contrast gradient overlays, and side-by-side *"Learn more"* and *"Book Ride"* action buttons.
* **Floating Booking Card**: 2-row multi-field search engine (Brand, Seats, Model, Price Range) overlapping the hero.
* **Our Rental Fleet Showcase**: Interactive vehicle showcase featuring a 4-thumbnail gallery, studio vehicle stage, spec matrix (Model, Doors, Seats, Transmission), and instant booking modal integration.
* **Three-Column Feature Strip**: Full-height photography highlighting *"Expert Drivers"*, *"No Hidden Charges"*, and *"Friendly Behavior"*.
* **3-Tier Pricing Plan**: Transparent cards for Company A, Company B (Most Popular), and Company C with feature checklists and instant checkout triggers.
* **FAQ Accordion**: Single-column expandable accordion with pink/purple accent borders and smooth single-item toggling.
* **Customer Testimonials**: Carousel reviews from real explorers with circular avatars and top-right navigation arrows.

### 2. 🚐 Fleet & Vehicle Management
* **Fleet Catalog (`/vehicles`)**: 8 overland vehicles with filter sidebar (Brand, Model, Transmission, Fuel Type, Seats, Price Range), real-time search, and grid views.
* **Vehicle Detail Pages (`/vehicles/:id`)**: High-res multi-angle image gallery, detailed equipment specs, off-grid amenities (Starlink, solar power, induction cooktop), and interactive booking calculator.
* **Instant Booking Modal**: Date pickers, pickup/drop-off hub selection, driver licensing verification, and live pricing summaries.

### 3. 💳 Dedicated Pricing & Plan Page (`/plan` & `/pricing`)
* **3-Tier Breakdown**: Weekend Getaway ($250/ride), Weekly Nomad Explorer ($450/ride), and Expedition Master ($850/ride).
* **Guarantees Strip**: Comprehensive insurance, instant 60-second confirmation, and 24/7 priority roadside mechanical support.
* **Pricing FAQs**: Clear answers on security deposits, mileage, and rental extension policies.

### 4. 🗺️ Interactive Contact & Depot Hubs (`/contact`)
* **Live Google Maps Embed**: Dark-mode interactive map iframe with multi-city hub switching (Dhaka HQ, Seattle Depot, San Francisco Hub, Denver Hub).
* **Direct Concierge Form**: Inquiries with real-time field validation and toast notifications.
* **Interactive Contact Cards**: Direct click-to-call, email support, and physical depot address info.

### 5. 📖 Travel Journal & Blogs (`/blogs` & `/blogs/:id`)
* **3×3 Article Grid**: Curated route guides, camping hacks, and gear reviews.
* **Markdown Article Reader**: Full reading view with author metadata, formatted timestamps, view counters, and related articles carousel.

### 6. 🔐 Authentication & Account Management
* **Login (`/login`)**: Split-screen with vintage VW campervan photography, responsive form, and interactive mathematical CAPTCHA generator.
* **Register (`/register`)**: Split-screen redwood campfire photo, 2-column input grid, and country dial code selector.
* **Reset Password (`/reset-password`)**: Aurora Westfalia background with 2-step verification code and password confirmation workflow.

### 7. ⚖️ Legal & Informational Pages
* **About Us (`/about`)**: Story blocks, mountain ridge photography, and 10-photo vanlife masonry grid.
* **F.A.Q. (`/faq`)**: Legal & reservation questions accordion.
* **Privacy Policy (`/privacy-policy`)**: Complete 7-clause privacy documentation.
* **Terms & Conditions (`/terms`)**: Rental agreements, insurance deductibles, and cancellation policies.
* **Service Details (`/service-details`)**: Fleet maintenance, sanitation protocols, and off-grid solar equipment specs.

### 8. ⚡ Performance & Polish
* **Route-Level Code Splitting**: All pages lazy-loaded via `React.lazy` and `Suspense`, keeping the initial entry bundle to **~21.7 kB**.
* **Zero-Gap Animated Navbar**: Hover bridge dropdown containing all legal and company links with active route indicators.
* **Custom 6px Scrollbar**: Dark theme scrollbar with `.no-scrollbar` utility classes.
* **Toast Notification System**: Lightweight contextual toast alerts for bookings, subscriptions, and message submissions.

---

## 📁 Folder Structure

```text
Airome/
├── public/                     # Static media and vehicle studio cutouts
│   ├── camper-white-edition.png
│   ├── camper-x4-sports.png
│   ├── hero-mountain-road.png
│   ├── login-campervans.png
│   ├── signup-campers.png
│   ├── aurora-westfalia.png
│   ├── about-ridge-van.png
│   ├── about-night-rv.png
│   └── contact-map.png
├── src/
│   ├── components/             # Reusable UI & Layout components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky animated header with dropdown
│   │   │   ├── Footer.tsx      # 4-column footer with social links
│   │   │   ├── NewsletterBand.tsx # Email subscription strip
│   │   │   └── LegalPageLayout.tsx
│   │   ├── ui/
│   │   │   ├── Accordion.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── LoadingScreen.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Toast.tsx       # Contextual toast alert provider
│   │   └── vehicles/
│   │       └── BookingModal.tsx # Instant vehicle reservation modal
│   ├── data/                   # Mock databases and initial state
│   │   ├── blogs.ts            # 9 travel articles & metadata
│   │   └── vehicles.ts         # 8 vehicle specs, pricing, and images
│   ├── pages/                  # Page route components
│   │   ├── home/               # Modular Home section sub-components
│   │   │   ├── Hero.tsx
│   │   │   ├── BookCarForm.tsx
│   │   │   ├── RentalFleet.tsx
│   │   │   ├── FeatureStrip.tsx
│   │   │   ├── PricingPlan.tsx
│   │   │   ├── FaqSection.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── AboutUs.tsx
│   │   ├── AllVehicles.tsx
│   │   ├── BlogPostPage.tsx
│   │   ├── Blogs.tsx
│   │   ├── ContactUs.tsx
│   │   ├── Faq.tsx
│   │   ├── Home.tsx            # Clean composite Home page
│   │   ├── Login.tsx
│   │   ├── PricingPage.tsx     # Full /plan & /pricing page
│   │   ├── PrivacyPolicy.tsx
│   │   ├── Register.tsx
│   │   ├── ResetPassword.tsx
│   │   ├── ServiceDetails.tsx
│   │   ├── TermsAndConditions.tsx
│   │   └── VehicleDetailPage.tsx
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces (Vehicle, Blog, Plan)
│   ├── App.tsx                 # Route declarations & Suspense wrapper
│   ├── index.css               # Tailwind CSS rules & custom scrollbar
│   └── main.tsx                # React DOM entrypoint
├── .gitignore                  # Git ignore rules
├── index.html                  # HTML template with metadata
├── package.json                # Project dependencies & scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind theme & color token definitions
├── tsconfig.json               # TypeScript compiler options
└── vite.config.ts              # Vite bundler & chunk-splitting setup
```

---

## 🎨 Design System & Color Palette

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Accent Pink** | `#EC1E79` | Primary CTAs, active highlights, gradient start |
| **Accent Purple** | `#9900CC` | Gradient end, secondary badges, auth buttons |
| **Accent Teal** | `#00E5FF` | Feature borders, active indicators, popular badges |
| **Emerald Green** | `#2EE59D` | Checklist checks, online status pills |
| **Dark Base** | `#0D0D0D` | Background viewport, deep overlays |
| **Card Surface** | `#171717` | Section containers, card surfaces |
| **Card Surface Light** | `#1F1F1F` | Elevated cards, input fields, accordion rows |

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm**: `v9.0.0` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/airome-travel.git
   cd airome-travel
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` (or the port shown in your terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## ☁️ Deployment on Vercel

1. Push your code to GitHub / GitLab.
2. Import the project repository into your [Vercel Dashboard](https://vercel.com).
3. Framework Preset will automatically detect **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
