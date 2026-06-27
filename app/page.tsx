"use client";

import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import GridBackgroundWrapper from "./components/GridBackgroundWrapper";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import TechStackSection from "./components/TechStackSection";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <GridBackgroundWrapper>
          <HeroSection />
          <AboutSection />
        </GridBackgroundWrapper>
        <TechStackSection />
        <GridBackgroundWrapper>
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </GridBackgroundWrapper>
      </main>
      <Footer />
    </div>
  );
}
