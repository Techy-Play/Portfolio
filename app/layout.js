import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://lokeshpaneru.netlify.app"),
  title: {
    default: "Lokesh Paneru — B.Tech CSE Student | IoT, Web Dev, AI/ML Portfolio",
    template: "%s | Lokesh Paneru",
  },
  description: "B.Tech CSE student specializing in IoT and Data Science. Full-stack developer, AI/ML enthusiast, and robotics competitor. View my portfolio projects and skills.",
  keywords: ["Lokesh Paneru", "Portfolio", "Developer", "IoT", "Data Science", "Full Stack", "CSE", "Amrapali University", "ESP32", "Next.js", "React"],
  authors: [{ name: "Lokesh Paneru", url: "https://lokeshpaneru.netlify.app" }],
  creator: "Lokesh Paneru",
  openGraph: {
    title: "Lokesh Paneru — Portfolio",
    description: "B.Tech CSE student specializing in IoT and Data Science. Full-stack developer, AI/ML enthusiast, and robotics competitor.",
    url: "https://lokeshpaneru.netlify.app",
    siteName: "Lokesh Paneru Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh Paneru — Portfolio",
    description: "B.Tech CSE student specializing in IoT and Data Science. Full-stack developer, AI/ML enthusiast, and robotics competitor.",
    creator: "@lokeshpaneru",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        {/* Ambient Glow Orbs */}
        <div className="ambient-orb orb-1" />
        <div className="ambient-orb orb-2" />
        <div className="ambient-orb orb-3" />
        {children}
      </body>
    </html>
  );
}
