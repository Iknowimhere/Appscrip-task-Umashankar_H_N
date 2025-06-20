import "./globals.css";

export const metadata = {
  title: "Metta Muse - Discover Sustainable Products",
  description: "Shop sustainable, ethical, and unique products at Metta Muse. Discover our curated collection today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Metta Muse",
            "url": "https://yourdomain.com"
          })
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
