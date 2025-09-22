import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Orb from './components/Orb';
import GlassSurfaceGooeyNav from './components/GlassSurfaceGooeyNav';
import ScrollStacking from './components/ScrollStacking';
import PortfolioSection from './components/PortfolioSection';
import './App.css';

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
      {/* Orb Background - Fixed */}
      <div className="w-full h-screen fixed inset-0">
        <Orb
          hoverIntensity={2}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
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
            title="Welcome to My Portfolio"
            subtitle="Creative Developer & Designer"
          >
            <div className="mt-8">
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
            title="About Me"
            subtitle="Passionate about technology and design"
          >
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>React & Next.js Development</li>
                  <li>UI/UX Design</li>
                  <li>WebGL & Three.js</li>
                  <li>Animation & Motion Design</li>
                  <li>Responsive Web Design</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
                <p className="text-gray-300">
                  With years of experience in frontend development and design,
                  I create immersive digital experiences that captivate users
                  and deliver exceptional results.
                </p>
              </div>
            </div>
          </PortfolioSection>
        </ScrollStacking>

        {/* Project Section */}
        <ScrollStacking>
          <PortfolioSection
            id="project"
            title="My Projects"
            subtitle="Showcase of recent work"
          >
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">Project {item}</h4>
                  <p className="text-gray-300">
                    Modern web application with stunning visuals and smooth interactions.
                  </p>
                </div>
              ))}
            </div>
          </PortfolioSection>
        </ScrollStacking>

        {/* Contact Section */}
        <ScrollStacking>
          <PortfolioSection
            id="contact"
            title="Get In Touch"
            subtitle="Let's work together"
          >
            <div className="mt-8">
              <form className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </PortfolioSection>
        </ScrollStacking>
      </main>
    </div>
  );
}

export default App;
