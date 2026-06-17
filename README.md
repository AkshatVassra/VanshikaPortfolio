# Vanshika Batra — Luxury Interior Design Portfolio

A world-class, award-winning interior designer portfolio website built with cinematic visuals, 3D interactions, AI features, and enterprise-grade architecture.

## Tech Stack

### Frontend
- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** — Luxury light theme
- **Framer Motion** + **GSAP** — Premium animations
- **Three.js / React Three Fiber** — 3D hero scene
- **Lenis** — Smooth scrolling
- **React Hook Form** + **Zod** — Form validation
- **Shadcn-style UI** components

### Backend
- **Node.js** + **Express.js**
- **MongoDB Atlas** — Data persistence
- **Resend** — Email automation

### Integrations (Optional)
- **Clerk Auth** — Authentication
- **Sanity CMS** — Content management
- **Google Analytics** + **Microsoft Clarity** — Analytics
- **AWS S3** — Media storage
- **Cloudflare** + **Vercel** — Deployment

## Features

- Cinematic hero with 3D luxury room (cursor-reactive camera)
- Custom magnetic cursor system
- Smooth Lenis scroll with GSAP ScrollTrigger
- Portfolio masonry gallery with category filtering
- Full project case study pages
- 3D tilt service cards
- AI Design Assistant (room analysis + chatbot)
- Testimonials carousel
- Awards timeline
- Blog system with SEO
- Contact form with WhatsApp integration
- Admin dashboard
- Dynamic sitemap & schema markup

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (optional for backend)

### Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

API runs at [http://localhost:5000](http://localhost:5000)

## Project Structure

```
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/       # Pages & API routes
│   │   ├── components/# UI components
│   │   ├── lib/data/  # Static content from portfolio
│   │   └── types/     # TypeScript types
│   └── public/portfolio/  # Portfolio images from PDF
├── backend/           # Express API
│   └── src/
│       ├── models/    # MongoDB schemas
│       ├── routes/    # API routes
│       └── controllers/
└── PORTFOLIO - VANSHIKA BATRA.pdf
```

## Portfolio Content

All project data is sourced from **Vanshika Batra's portfolio PDF**, including:

- Master Bedroom Design I & II
- Guest Bedroom Design
- Kid's Bedroom Design
- M.D. Office Design
- Elevation Design (Modern Villa)

## Deployment

### Vercel (Frontend)
```bash
cd frontend && vercel
```

### Backend
Deploy to Railway, Render, or AWS EC2 with MongoDB Atlas connection string.

## Environment Variables

See `.env.example` files in both `frontend/` and `backend/` directories.

## License

Private — All rights reserved © Vanshika Batra
