# Golden Rain Productions Website

A cinematic, gold-and-black themed production company website built with Next.js 14, Tailwind CSS, and Supabase.

## 🎬 Features

- **Homepage** - Hero with animated title, marquee tickers, featured works
- **About** - Profile, career timeline, notable collaborations
- **Line Production** - Services grid, partner studios
- **Productions** - Flagship films, upcoming projects, portfolio gallery
- **Just Born Awards** - Talent discovery platform with registration form
- **CinZee** - Privacy-first industry connection platform
- **Why Us** - Five pillars of excellence
- **Contact** - Contact form with WhatsApp integration
- **Admin Panel** - Protected dashboard for managing submissions

## 🎨 Design System

- **Colors**: Deep matte black (#0A0A0A), Rich gold (#C9A84C), Warm gold (#E8C96A), Cream (#F5F0E8)
- **Fonts**: Cinzel (display), Libre Baskerville (body), Montserrat (UI), Playfair Display (accent)
- **Effects**: Film grain overlay, glass-morphism cards, gold shimmer animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for database and storage)

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Edit .env.local with your Supabase credentials
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (pages)/           # Page routes
│   ├── api/               # API routes
│   └── admin/             # Admin panel
├── components/
│   ├── layout/            # Navbar, Footer
│   └── ui/                # Reusable UI components
└── lib/                   # Utilities, Supabase client
```

## 🗄️ Database Setup

1. Create a new Supabase project
2. Run the SQL in `supabase-schema.sql` in the Supabase SQL Editor
3. Create storage buckets:
   - `awards-photos` (public)
   - `awards-videos` (private)
4. Update `.env.local` with your Supabase URL and anon key

## 🔐 Admin Panel

Default credentials (change in production!):
- Username: `admin`
- Password: `goldenrain2005`

Access at `/admin`

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | About Vijay Jagarlamudi |
| `/line-production` | Line production services |
| `/productions` | Film productions portfolio |
| `/just-born-awards` | Talent awards program |
| `/just-born-awards/register` | Registration form |
| `/just-born-awards/results` | Public results |
| `/cinzee` | Industry platform |
| `/why-us` | Why choose us |
| `/contact` | Contact form |
| `/admin` | Admin login |
| `/admin/dashboard` | Admin dashboard |
| `/admin/submissions` | Manage awards submissions |

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage
- **Deployment**: Vercel (recommended)

## 📝 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
ADMIN_USERNAME=
ADMIN_PASSWORD=
```

## 🎞️ Design Notes

- Custom cursor with gold dot that expands on hover
- Film grain overlay on all dark sections
- Gold shimmer animations on buttons and titles
- Glass-morphism cards with gold borders
- Marquee tickers for scrolling content
- Fade-in-up animations on scroll

## 📄 License

© 2026 Golden Rain Productions. All rights reserved.
