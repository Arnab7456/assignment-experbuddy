This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Study Platform Web Application

A modern Next.js-based web application for educational services built with TypeScript and React.

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Shadcn, CSS/Tailwind CSS
- **Package Manager:** pnpm
- **Linting:** ESLint
- **Code Formatting:** Prettier

## 📁 Project Structure

```
├── app/                  # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Reviews.tsx
│   └── Studybay
│   ├── Reviews
│   └── Claimoffer
|    
├── lib/                 # Utility functions and helpers
├── public/             # Static assets
└── next.config.ts      # Next.js configuration

```

## 🛠️ Setup & Installation

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```
3. Run the development server:
```bash
pnpm dev
```
4. Open http://localhost:3000 in your browser

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📱 Key Features

- Responsive navigation with modern design
- Interactive FAQ section with accordion functionality
- User testimonials and reviews
- Country-specific content delivery
- Educational service offerings
- Contact and support system

## 🔨 Component Structure

- `Navbar`: Main navigation component
- `Hero`: Landing page hero section
- `Claimoffer`: Service offering component
- `Reviews`: User testimonials section
- `FAQ`: Frequently asked questions
- `ReachOut`: Contact section
- `Crown`: Premium features indicator
- `Studybay`: Main service platform component

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
