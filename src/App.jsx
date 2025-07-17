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
import img from "../images/img-02.svg";
import hero from "../images/heroImage.svg";
import eComm from "../images/e-comm.jpg";
import dash from "../images/dashboard.svg";
import toDo from "../images/to-do.svg";
import weather from "../images/weather-rafiki.svg";
function App() {
  const [mode, setMode] = useState(false);

  const proObj = [
    {
      img: eComm,
      title: 'E-commerce Platform "ShopSphere"',
      tick: ["React", "Next.js", "Tailwind CSS"],
      p: "A full-featured e-commerce website with product listings, dynamic filtering, cart functionality, and a mock user authentication flow. Built with a focus on modern UI/UX",
    },
    {
      img: weather,
      title: 'Task Management App "TaskMaster"',
      tick: ["React", "TypeScript", "Shadcn UI", "Local Storage", "TypeScript"],
      p: "A responsive task management application to help users organize their daily tasks, set priorities, and track progress. Features drag-and-drop functionality.",
    },
    {
      img: dash,
      title: "Interactive Dashboard Website V2",
      tick: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Framer Motion (conceptual)",
      ],
      p: "his very portfolio you are viewing! Designed to showcase my skills and projects in a clean, modern, and interactive way.",
    },
    {
      img: toDo,
      title: `Weather Dashboard "AtmoCheck"`,
      tick: ["HTML", "CSS", "OpenWeatherMap API", "JavaScript"],
      p: "A sleek weather dashboard that provides current weather conditions and forecasts for multiple locations using a third-party API.",
    },
  ];

  return (
    <>
      <Navbar />
      <Landing img={hero} />
      <About img={img} />
      <Projucts obj={proObj} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
