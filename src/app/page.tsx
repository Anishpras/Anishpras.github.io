"use client";

import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Jobs from "@/components/sections/Jobs";
import Featured from "@/components/sections/Featured";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <Layout>
      <main className="w-full max-w-7xl min-h-screen mx-auto px-6 md:px-24 lg:px-36 xl:px-44 2xl:px-48">
        <Hero />
        <About />
        <Jobs />
        <Featured />
        <Projects />
        <Contact />
      </main>
    </Layout>
  );
}
