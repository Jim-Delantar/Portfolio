// ============================================================
// 📝 PORTFOLIO DATA — Edit this file to customize your portfolio!
// ============================================================
// Instructions:
//   1. Replace the placeholder values below with your own info.
//   2. Save the file and refresh your browser to see changes.
//   3. That's it! No other file needs to be edited.
// ============================================================

const portfolioData = {

  // ----------------------------------------------------------
  // 🧑 PERSONAL INFO
  // ----------------------------------------------------------
  name: "Jim Delantar",      // Used in the page title and meta description
  firstName: "Jim",   // Used in the hero greeting
  lastName: "Delantar",      // Displayed large in the hero section
  tagline: "Learning. Building. Creating with Technology.",
  resumeLink: "#",        // Link to your resume (Google Drive, etc.)

  // ----------------------------------------------------------
  // 📖 ABOUT ME
  // ----------------------------------------------------------
  about: {
    description: `I'm a 3rd-year BS Information Technology student passionate about technology, problem-solving, and building practical solutions. 
When I'm not coding, you'll find me playing guitar or video games.`,
    highlights: [
      { label: "Location", value: "Calauan , Laguna Philippines" },
      { label: "University", value: "Polytechnic University of the Philippines (Calauan Branch)" },
      { label: "Branch", value: "Information Technology" },
      { label: "Year", value: "Third Year (BSIT)" },
    ],
  },

  // ----------------------------------------------------------
  // 🛠️ SKILLS
  // ----------------------------------------------------------
  // Each skill has a name and a level (1-5).
  // The level controls the visual indicator bar.
  skills: [
    { name: "HTML & CSS", level: 3 },
    { name: "JavaScript", level: 3 },
    { name: "Python", level: 2 },
    { name: "C / C#", level: 3 },
    { name: "Cobol", level: 2 },
    { name: "Git & GitHub", level: 2 },
    { name: "SQL / MySQL", level: 3 },
    { name: "Java", level: 2 },
    { name: "PHP", level: 2 },
  ],

  // ----------------------------------------------------------
  // 🚀 PROJECTS
  // ----------------------------------------------------------
  // Add your own projects here. Each project needs:
  //   - title       : Project name
  //   - description : Short summary (1-2 lines)
  //   - tags        : Tech stack used (array of strings)
  //   - liveLink    : URL to live demo (use "#" if none)
  //   - codeLink    : URL to GitHub repo (use "#" if none)
  projects: [
    {
      title: "YOLOv5 Real-Time Object Detection",
      description:
        "A real-time object detection project using a webcam to detect and identify objects through a YOLOv5 model.",
      tags: ["Python", "YOLOv5", "OpenCV", "Computer Vision"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "C# Pokédex",
      description:
        "GBA-style retro Pokédex with login/registration, full CRUD, and PokéAPI integration, built on a 3-layer architecture.",
      tags: ["C#", "ASP.NET Core", "Entity Framework Core", "MySQL", "PokéAPI"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "Mini Pokédex (C)",
      description:
        "A command-line Pokédex developed in C that allows users to browse and search Pokémon information through a terminal-based interface.",
      tags: ["C", "Command Line"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      title: "ST Gabriel Academy LMS",
      description:
        "A web-based learning management system developed for St. Gabriel Academy to support online learning and school-related activities.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveLink: "#",
      codeLink: "#",
    },
  ],

  // ----------------------------------------------------------
  // 🎓 EDUCATION
  // ----------------------------------------------------------
  education: [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Polytechnic University of the Philippines – Calauan Campus",
      duration: "2024 – Present",
      description: "Currently in Third Year.",
    },
    {
      degree: "Senior High School",
      institution: "Dayap National Integrated High School",
      duration: "2022 – 2024",
      description: "Senior High School graduate.",
    },
    {
      degree: "Junior High School",
      institution: "Dayap National Integrated High School",
      duration: "2018 - 2022",
      description: "Junior High School graduate.",
    },
  ],

  // ----------------------------------------------------------
  // 🌐 SOCIAL LINKS & CONTACT
  // ----------------------------------------------------------
  // Supported platforms: github, linkedin, twitter, instagram,
  //                      email, codepen, devto, medium, youtube
  // Use the "icon" field to choose the SVG icon displayed.
  contact: {
    email: "jimdelantar25@gmail.com",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/jimdelantar25-collab",
        icon: "github",
      },
      {
        platform: "Email",
        url: "https://github.com/jimdelantar25-collab",
        icon: "email",
      },
      {
        platform: "Twitter",
        url: "https://github.com/jimdelantar25-collab",
        icon: "twitter",
      },
      {
        platform: "Instagram",
        url: "https://www.instagram.com/_jimono?stkn=MWIzemJ1NDFtb2JmaA==",
        icon: "instagram",
      },
    ],
  },

  // ----------------------------------------------------------
  // 🎨 THEME SETTINGS (Optional)
  // ----------------------------------------------------------
  // Accent color is used for buttons, highlights, and links.
  // You can use any valid CSS color value.
  theme: {
    accentColor: "#c8ff00",       // Lime green accent (inspired by Lando Norris!)
    accentColorDark: "#a8d900",   // Darker shade for hover states
  },
};
