import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./Navbar";
import Landing from "./Landing";
import About from "./about";
import Projucts from "./Projucts";
import Contact from "./Contact";
import footer from "./footer";
import Footer from "./footer";
function App() {
  const [mode, setMode] = useState(false);

  const proObj = [
    {
      img: "https://placehold.co/400x200",
      title: 'E-commerce Platform "ShopSphere"',
      tick: ["React", "Next.js", "Tailwind CSS"],
      p: "A full-featured e-commerce website with product listings, dynamic filtering, cart functionality, and a mock user authentication flow. Built with a focus on modern UI/UX",
    },
    {
      img: "https://placehold.co/400x200",
      title: 'Task Management App "TaskMaster"',
      tick: ["React", "TypeScript", "Shadcn UI", "Local Storage"],
      p: "A responsive task management application to help users organize their daily tasks, set priorities, and track progress. Features drag-and-drop functionality.",
    },
    {
      img: "https://placehold.co/400x200",
      title: "Interactive Portfolio Website V2",
      tick: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion (conceptual)",
      ],
      p: "his very portfolio you are viewing! Designed to showcase my skills and projects in a clean, modern, and interactive way.",
    },
    {
      img: "https://placehold.co/400x200",
      title: `Weather Dashboard "AtmoCheck"`,
      tick: ["HTML", "CSS", "OpenWeatherMap API", "JavaScript"],
      p: "A sleek weather dashboard that provides current weather conditions and forecasts for multiple locations using a third-party API.",
    },
  ];

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Projucts obj={proObj} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
