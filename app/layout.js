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
  icons: {
    icon: '/ico.jpg',
    shortcut: '/ico.jpg',
    apple: '/ico.jpg',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Lokesh Paneru",
                "url": "https://lokeshpaneru.netlify.app",
                "image": "https://lokeshpaneru.netlify.app/ico.jpg",
                "jobTitle": "Full Stack Developer & IoT Specialist",
                "alumniOf": {
                  "@type": "CollegeOrUniversity",
                  "name": "Amrapali University"
                },
                "knowsAbout": [
                  "Software Development",
                  "Web Development",
                  "Internet of Things",
                  "ESP32",
                  "Next.js",
                  "React",
                  "Python",
                  "Artificial Intelligence"
                ],
                "sameAs": [
                  "https://github.com/Techy-Play",
                  "https://www.linkedin.com/in/lokeshpaneru/"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Lokesh Paneru Portfolio",
                "url": "https://lokeshpaneru.netlify.app",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://lokeshpaneru.netlify.app/?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
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
