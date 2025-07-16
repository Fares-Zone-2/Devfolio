import { useState } from "react";
import { useEffect } from "react";
export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState(true);
  const dl = {
    dark: "#333",
    light: "#fff",
  };
  function toggle() {
    setMode((prev) => (prev = !prev));
    console.log(mode);
  }
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className=" border-[#eee] border-b sticky h-15 flex  items-center ">
      <div className="navBar container ml-auto mr-auto flex items-center justify-between p-2">
        <div className="z-50 w-full">
          <a
            href="#home"
            className="flex items-center space-x-2 group cursor-pointer w-fit"
          >
            <i className="fa-solid fa-code main-c  text-2xl transition-transform group-hover:rotate-12"></i>
            <span className="font-bold text-primary text-2xl main-c">
              Devfolio
            </span>
          </a>
        </div>
        <ul className="links flex items-center gap-3 max-sm:hidden">
          {navLinks.map((item) => (
            <a
              href={item.href}
              className="cursor-pointer transition-all text-c hover:text-[#5ea5ed] text-sm "
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </ul>
        <div
          onClick={() => toggle()}
          className="
        border hover:bg-[orange] transition-all  border-[#ddd] rounded-md flex items-center justify-center min-w-11 h-9 ml-5 cursor-pointer"
        >
          <i className="fa-regular fa-sun text-sl text-c "></i>
        </div>
      </div>
    </header>
  );
}

// <i className="fa-solid fa-code"></i>
// <i className="fa-regular fa-moon"></i>
// <i className="fa-regular fa-sun"></i>
{
  /* <i className="fa-solid fa-bars"></i> */
}
