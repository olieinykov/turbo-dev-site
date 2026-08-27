import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined)
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined)
  || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Turbo Dev | AI, Automation & Product Development",
    template: "%s | Turbo Dev"
  },
  description: "Turbo Dev builds AI-powered automations, CRM ecosystems, web platforms, mobile apps and SaaS products.",
  applicationName: "Turbo Dev",
  keywords: ["software development", "AI integration", "CRM automation", "web applications", "mobile applications", "SaaS", "Next.js", "React", "Node.js"],
  authors: [{ name: "Turbo Dev" }],
  creator: "Turbo Dev",
  publisher: "Turbo Dev",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Turbo Dev",
    title: "Turbo Dev | Systems that move business forward",
    description: "AI, automation, CRM integrations and product development across the full JavaScript ecosystem."
  },
  twitter: {
    card: "summary_large_image",
    title: "Turbo Dev | Systems that move business forward",
    description: "AI, automation, CRM integrations and product development across the full JavaScript ecosystem."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1769ff"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
