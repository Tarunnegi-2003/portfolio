import { useEffect } from "react";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


export default function App() {
    useEffect(() => {
  const sections = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  sections.forEach(section => observer.observe(section));

  return () => observer.disconnect();
}, []);

const [dark, setDark] = useState(false);


return (
<div className={dark ? "dark" : "light"}>
<Navbar dark={dark} setDark={setDark} />
<Hero />
<About />
<Skills />
<Projects />
<Contact />
</div>
);
}
