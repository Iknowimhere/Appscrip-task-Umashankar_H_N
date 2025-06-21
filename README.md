# AppScrip E-commerce Project

A modern e-commerce web application built with Next.js, featuring a responsive design and interactive user interface.

## Features

- **Responsive Navigation**: Mobile-friendly navigation bar with logo, search, and user controls
- **Product Discovery**: Interactive product listing with filtering and sorting capabilities
- **Product Grid**: Responsive product grid layout with wishlist functionality
- **Filter System**: Comprehensive filtering sidebar for product refinement
- **Newsletter Integration**: Footer with newsletter subscription and social media links

## Project Structure

```plaintext
/app
├── globals.css        # Global styles
├── layout.js          # Root layout component
└── page.js            # Home page component

/components
├── DiscoverSection/   # Product discovery section
├── FilterSidebar/     # Product filtering component
├── Footer/            # Site footer component
├── Navbar/            # Navigation bar component
├── ProductGrid/       # Product display grid
├── ProductListHeader/ # Product listing controls
└── ProductListing/    # Main product listing page

/public
├── fonts/            # Web fonts
└── [assets]          # Images and SVG files
```

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

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
