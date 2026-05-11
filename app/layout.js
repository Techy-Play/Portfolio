import "./globals.css";

export const metadata = {
  title: "Lokesh Paneru — B.Tech CSE Student | IoT, Web Dev, AI/ML Portfolio",
  description:
    "B.Tech CSE student specializing in IoT and Data Science. Full-stack developer, AI/ML enthusiast, and robotics competitor. View my portfolio projects and skills.",
  keywords: "Lokesh Paneru, Portfolio, Developer, IoT, Data Science, Full Stack, CSE",
  authors: [{ name: "Lokesh Paneru" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
