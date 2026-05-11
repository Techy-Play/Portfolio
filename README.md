# Lokesh Paneru — Professional Portfolio

![Portfolio Preview](/public/projects/acadex-preview.png)

A modern, highly-performant personal portfolio built with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS v4**. It features a glassmorphic design system, an interactive 3D CAD viewer, and comprehensive SEO optimization.

🌐 **Live Demo:** [lokeshpaneru.netlify.app](https://lokeshpaneru.netlify.app)

---

## 🚀 Features

- **Modern Glassmorphism UI:** Built from scratch using modern CSS techniques, providing a sleek, premium, and highly responsive user experience across all devices.
- **Interactive 3D CAD Viewer:** Natively renders massive `.glb` and `.step` 3D engineering models directly in the browser using an integrated WebGL engine.
- **High-Performance Image Carousels:** Custom-built touch-enabled sliders for high-resolution project asset galleries.
- **Native Video Integration:** High-quality HTML5 video playback for project demonstrations.
- **Contact System:** Integrated with `nodemailer` to securely handle contact form submissions.
- **SEO & Social Optimization:** Fully configured metadata, Open Graph (OG) tags, dynamic `sitemap.xml`, and `robots.txt` generation for perfect search indexing.
- **Live Credential Verification:** Dynamic linking to Credly for live certification verification (e.g., Red Hat).

---

## 🛠 Tech Stack

### Framework & Core
- **Next.js 15** (App Router)
- **React 19**
- **TypeScript** / **JavaScript**

### Styling & UI
- **Tailwind CSS v4** (Utility classes)
- **Vanilla CSS** (Custom glassmorphism tokens, keyframe animations)
- **FontAwesome / Lucide** (Iconography)

### Utilities
- **online-3d-viewer:** Integrated WebGL engine for `.glb` rendering.
- **Nodemailer:** Email transport for the contact form.

---

## 💻 Local Development Setup

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Techy-Play/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env.local` file in the root directory and add your email configuration for the contact form to work:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   EMAIL_TO=your_receiving_email@gmail.com
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 🚀 Deployment (Vercel / Netlify)

This Next.js application is optimized for deployment on platforms like Vercel or Netlify.

1. Push your code to your GitHub repository.
2. Go to your Vercel or Netlify dashboard and create a new project.
3. Import your GitHub repository.
4. **Important:** Add the exact same environment variables (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`) in the deployment dashboard's Environment Variables settings.
5. Deploy. The build process (`npm run build`) will automatically generate the static files, the dynamic `sitemap.xml`, and the optimized images.

---

## 📜 License
&copy; 2026 Lokesh Paneru. All rights reserved. 
