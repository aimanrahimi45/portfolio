import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Galaxy from './components/Galaxy';
import GlassSurfaceGooeyNav from './components/GlassSurfaceGooeyNav';
import ScrollStacking from './components/ScrollStacking';
import ScrollFloat from './components/ScrollFloat';
import PortfolioSection from './components/PortfolioSection';
import CollaborationCard from './components/CollaborationCard';
import TechnologyStackCard from './components/TechnologyStackCard';
import TimeZoneCard from './components/TimeZoneCard';
import ContactCard from './components/ContactCard';
import WebsiteShowcaseCard from './components/WebsiteShowcaseCard';
import ProjectStatusCard from './components/ProjectStatusCard';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import './App.css';
import './components/CollaborationCard.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Me", href: "#about" },
    { label: "Project", href: "#project" },
    { label: "Contact Us", href: "#contact" }
  ];

  return (
    <div className="App min-h-screen bg-black">
      {/* Galaxy Background - Fixed */}
      <div className="w-full h-screen fixed inset-0">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>
      
      {/* GlassSurface Navigation - Fixed */}
      <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <GlassSurfaceGooeyNav items={navItems} />
      </div>

      {/* Scrollable Content Sections with GSAP Animations */}
      <main className="relative z-10">
        {/* Home Section */}
        <ScrollStacking>
          <PortfolioSection
            id="home"
            title={
              <ScrollFloat>
                Welcome to My Portfolio
              </ScrollFloat>
            }
            subtitle="Creative Developer & Designer"
          >
            <div className="mt-8 relative z-20">
              <p className="text-lg text-gray-400 mb-6">
                Crafting beautiful digital experiences with modern technologies
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                View My Work
              </button>
            </div>
          </PortfolioSection>
        </ScrollStacking>

        {/* About Section */}
        <ScrollStacking>
          <PortfolioSection
            id="about"
            title={
              <ScrollFloat animationDuration={1.2} stagger={0.05}>
                About Me
              </ScrollFloat>
            }
            subtitle="Passionate about technology and design"
            fullWidth={true}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full auto-rows-auto">
              {/* Top Row - Collaboration Card (2 columns) */}
              <CollaborationCard />

              {/* Top Row - Technology Stack Card (1 column) */}
              <TechnologyStackCard />

              {/* Second Row - Time Zone Card */}
              <TimeZoneCard />

              {/* Second Row - Contact Card */}
              <ContactCard />

              {/* Second Row - Website Showcase Card */}
              <WebsiteShowcaseCard />

              {/* Bottom Row - Project Status Card (Full Width) */}
              <ProjectStatusCard />
            </div>
          </PortfolioSection>
        </ScrollStacking>

        {/* Project Section */}
        <ScrollStacking>
          <PortfolioSection
            id="project"
            title={
              <ScrollFloat animationDuration={1.1} stagger={0.04}>
                My Projects
              </ScrollFloat>
            }
            subtitle="Showcase of recent work"
          >
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((item) => (
                <ProjectCard key={item} item={item} />
              ))}
            </div>
          </PortfolioSection>
        </ScrollStacking>

        {/* Contact Section */}
        <ScrollStacking>
          <PortfolioSection
            id="contact"
            title={
              <ScrollFloat animationDuration={1.3} stagger={0.06}>
                Get In Touch
              </ScrollFloat>
            }
            subtitle="Let's work together"
          >
            <div className="mt-8">
              <ContactForm />
            </div>
          </PortfolioSection>
        </ScrollStacking>
      </main>
    </div>
  );
}

export default App;
