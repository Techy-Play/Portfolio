export const projects = [
  {
    slug: "smart-cleaning-bot",
    number: "01",
    title: "Smart Cleaning Bot — AtomQuest 2025",
    category: "IoT & Robotics",
    date: "2025",
    image: "/projects/smart-cleaning-bot.jpg",
    images: ["/projects/smart-cleaning-bot.jpg", "/projects/placeholder-iot-2.svg", "/projects/placeholder-iot-3.svg"],
    videoUrl: null,
    description: "Semi-autonomous robot to collect dry waste with obstacle avoidance. First runner-up at AtomQuest 2025 National Robotics Competition.",
    longDescription: "Designed and built a semi-autonomous robot to collect dry waste while actively avoiding obstacles. Led the team at AtomQuest 2025 National Robotics Competition, achieving first runner-up position. Integrated ESP32 microcontroller with ultrasonic and IR sensors, and motor driver circuits for guided navigation.",
    features: [
      "Semi-autonomous navigation with obstacle avoidance",
      "ESP32-based control system with sensor integration",
      "Ultrasonic and IR sensor array for environment mapping",
      "Optimized algorithm for obstacle avoidance and line following",
      "25% improvement in navigation accuracy through calibration",
      "Motor driver circuits for precise movement control"
    ],
    techStack: ["ESP32", "IoT", "Ultrasonic Sensors", "IR Sensors", "Arduino IDE", "Embedded C"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },

  {
    slug: "acadex",
    number: "02",
    title: "Acadex — Academic Management Platform",
    category: "Web Development",
    date: "2026",
    image: "/projects/acadex-preview.png",
    images: ["/projects/acadex-preview.png", "/projects/placeholder-web-2.svg", "/projects/placeholder-web-3.svg"],
    videoUrl: null,
    livePreviewImage: "/projects/acadex-preview.png",
    description: "Full-featured academic management platform built with TypeScript for streamlining student and faculty workflows including attendance, grades, and scheduling.",
    longDescription: "Acadex is a comprehensive academic management platform designed to streamline the daily operations of educational institutions. Built with TypeScript and modern web technologies, it provides tools for attendance tracking, grade management, course scheduling, and student-faculty communication. The platform features role-based access control for students, faculty, and administrators.",
    features: [
      "Role-based dashboards for students, faculty, and administrators",
      "Attendance tracking and grade management modules",
      "Course scheduling and timetable generation",
      "Student-faculty communication portal",
      "Responsive design optimized for all devices",
      "Secure authentication and authorization"
    ],
    techStack: ["TypeScript", "Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/Techy-Play/Acadex",
    liveUrl: "https://au-acadex.com/",
    featured: true,
  },
  {
    slug: "alumni-connect-platform",
    number: "03",
    title: "Alumni Connect Platform (AMP-Devs)",
    category: "Web Development",
    date: "2024",
    image: "/projects/placeholder-web.svg",
    images: ["/projects/placeholder-web.svg", "/projects/placeholder-web-2.svg", "/projects/placeholder-web-3.svg"],
    videoUrl: null,
    description: "Alumni-student networking platform with mentorship pairing, alumni directory, job postings, discussion forums, and event scheduling. First runner-up at National Level Hackathon.",
    longDescription: "Built during a National Level Hackathon at Graphic Era Hill University, this Flask-based platform connects students with alumni for mentorship, networking, and career guidance. Secured first runner-up position. The platform includes features for mentorship pairing, an alumni directory, job board, discussion forums, and event scheduling.",
    features: [
      "Mentorship pairing system connecting students with alumni",
      "Comprehensive alumni directory with search and filters",
      "Job postings and career opportunity board",
      "Discussion forums for academic and career topics",
      "Event scheduling and management",
      "User authentication and profile management"
    ],
    techStack: ["Flask", "Python", "HTML", "CSS", "Bootstrap", "SQLite"],
    githubUrl: "https://github.com/Techy-Play/AMP-Devs",
    liveUrl: "https://alumniconnect-d7mo.onrender.com/",
    featured: true,
  },
  {
    slug: "smart-recycling-hub",
    number: "04",
    title: "Smart Recycling Hub (Haldwani)",
    category: "Web Development",
    date: "2025",
    image: "/projects/placeholder-web.svg",
    images: ["/projects/placeholder-web.svg", "/projects/placeholder-web-2.svg", "/projects/placeholder-web-3.svg"],
    videoUrl: null,
    description: "Production-ready Next.js platform for smart waste management with live map tracking, geolocation routing, user reviews, and a management dashboard.",
    longDescription: "Developed a production-ready Next.js and Tailwind CSS platform for smart waste management in Haldwani. The platform enables citizens to locate recycling bins via an interactive map, get real-time routing to the nearest bin, and submit reviews. A management dashboard provides sorting, filtering, and high-priority bin alerts for administrators.",
    features: [
      "Live map using Leaflet and OpenStreetMap with color-coded bin markers",
      "Geolocation to find the nearest bin and visualize routes",
      "Google Maps deep links for turn-by-turn navigation",
      "Dashboard with sorting, filtering, and high-priority bin alerts",
      "Review submissions with real-time updates using localStorage",
      "Modern, responsive UI with dark mode support"
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript 5", "Tailwind CSS 4", "Leaflet", "React-Leaflet", "OpenStreetMap"],
    githubUrl: "https://github.com/Techy-Play/Smart-Recycling-System",
    liveUrl: "https://smart-recycling-system.vercel.app/",
    featured: true,
  },

  {
    slug: "railway-platform-security",
    number: "05",
    title: "Railway Platform Security System",
    category: "IoT & Robotics",
    date: "Dec 2023",
    image: "/projects/railway-platform-security.jpg",
    images: ["/projects/railway-platform-security.jpg", "/projects/placeholder-iot-2.svg", "/projects/placeholder-iot-3.svg"],
    videoUrl: null,
    description: "ESP32-based safety system to prevent platform accidents. Won 1st prize (₹11,000) and earned a 50% scholarship to Amrapali University.",
    longDescription: "Developed an ESP32-based safety system for the Kumaon Inter School Competition to prevent railway platform accidents. The system uses ultrasonic sensors to detect incoming trains and servo motors to automate barricades, restricting crossing during hazardous moments and enabling safe passage. Won first prize (INR 11,000) and earned a 50% scholarship to Amrapali University.",
    features: [
      "Real-time train detection using ultrasonic sensors",
      "Automated barricade control with servo motors",
      "Safety-first algorithm preventing crossing during hazardous moments",
      "Low-power ESP32 microcontroller for efficiency",
      "Visual and audio alert system for pedestrians"
    ],
    techStack: ["ESP32", "Ultrasonic Sensors", "Servo Motors", "IoT", "Arduino IDE"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
  {
    slug: "iot-home-automation",
    number: "06",
    title: "IoT Home Automation System",
    category: "IoT & Robotics",
    date: "2024",
    image: "/projects/iot-home-automation.jpg",
    images: ["/projects/iot-home-automation.jpg", "/projects/placeholder-iot-2.svg", "/projects/placeholder-iot-3.svg"],
    videoUrl: null,
    description: "Wi-Fi enabled automation system for remote appliance control via mobile app and voice assistants using ESP32 and Sinric Pro API.",
    longDescription: "Built a Wi-Fi enabled home automation system allowing remote appliance control via mobile app and voice assistants (Alexa, Google Assistant). Implemented secure, cloud-based automation with real-time status updates using the Sinric Pro API and ESP32 microcontroller.",
    features: [
      "Remote appliance control via mobile app",
      "Voice assistant integration (Alexa, Google Assistant)",
      "Cloud-based automation with Sinric Pro API",
      "Real-time status updates and monitoring",
      "Secure Wi-Fi communication",
      "Minimal latency for household automation"
    ],
    techStack: ["ESP32", "Sinric Pro API", "Wi-Fi", "IoT", "Cloud", "Arduino IDE"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
  {
    slug: "smart-auto-irrigation",
    number: "07",
    title: "Smart Auto Irrigation System",
    category: "IoT & Robotics",
    date: "2024",
    image: "/projects/smart-auto-irrigation.jpg",
    images: ["/projects/smart-auto-irrigation.jpg", "/projects/placeholder-iot-2.svg", "/projects/placeholder-iot-3.svg"],
    videoUrl: null,
    description: "Automated irrigation system using ESP32 and soil moisture sensors. Reduced water waste while maintaining optimal soil moisture levels.",
    longDescription: "Designed an automated irrigation workflow leveraging ESP32 and soil moisture sensors for precision agriculture. The system automates water delivery using relays and pumps managed via cloud data, reducing water waste while maintaining optimal soil moisture levels.",
    features: [
      "Automated water delivery based on soil moisture readings",
      "ESP32 with soil moisture sensor integration",
      "Relay and pump control system",
      "Cloud-based data monitoring",
      "Reduced water waste through precision irrigation",
      "Low-cost solution for small-scale farming"
    ],
    techStack: ["ESP32", "Soil Moisture Sensors", "Relays", "Cloud", "IoT"],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
  {
    slug: "smart-waste-management",
    number: "08",
    title: "Smart Waste Management System",
    category: "IoT & Robotics",
    date: "2025",
    image: "/projects/smart-waste-management.jpg",
    images: ["/projects/smart-waste-management.jpg", "/projects/placeholder-iot-2.svg", "/projects/placeholder-iot-3.svg"],
    videoUrl: null,
    description: "IoT-based smart waste management system developed for the Hack The Winter competition with bin-level monitoring and route optimization.",
    longDescription: "Developed as part of the Hack The Winter competition, this project integrates IoT-based bin-level monitoring with intelligent route optimization for waste collection. The system uses sensors to monitor fill levels in real-time and optimizes collection routes for municipal waste management.",
    features: [
      "IoT-based bin fill-level monitoring",
      "Real-time data transmission and dashboard",
      "Intelligent route optimization for waste collection",
      "Cost-effective sensor integration",
      "Prototype demonstration with documentation"
    ],
    techStack: ["Next js", "ESP32", "Sensors", "Web Dashboard"],
    githubUrl: "https://github.com/Techy-Play/Smart-Waste-Management-System",
    liveUrl: null,
    featured: false,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getAllSlugs() {
  return projects.map((p) => p.slug);
}

export function getOtherProjects(currentSlug, count = 3) {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, count);
}
