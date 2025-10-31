import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gray-200 text-gray-800 min-h-screen scroll-smooth">
      
      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
