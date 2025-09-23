import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Orb from './components/Orb';
import GlassSurfaceGooeyNav from './components/GlassSurfaceGooeyNav';
import ScrollStacking from './components/ScrollStacking';
import ScrollFloat from './components/ScrollFloat';
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
              {/* Top Row - Collaboration Card (2 columns) */}
              <div className="md:col-span-2 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Collaboration</h3>
                    <p className="text-gray-300 text-lg">
                      I prioritize client collaboration, fostering open communication
                    </p>
                  </div>
                </div>
              </div>

              {/* Top Row - Technology Stack Card (1 column) */}
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30 shadow-sm shadow-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Second Row - Time Zone Card */}
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-purple-500/30 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Global Time Zone</h3>
                  <p className="text-gray-300">
                    Flexible with time zone communications (US, UK, India)
                  </p>
                </div>
              </div>

              {/* Second Row - Contact Card */}
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 shadow-lg shadow-blue-500/10 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-purple-500/30 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Let's Connect</h3>
                  <p className="text-gray-300 mb-4">
                    Let's work together on your next project
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40">
                    Email Me
                  </button>
                </div>
              </div>

              {/* Second Row - Website Showcase Card */}
              <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg w-16 h-16 flex items-center justify-center shadow-lg shadow-purple-500/30 mx-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Website Showcase</h3>
                  <p className="text-gray-300">
                    Websites that stand out and make a difference
                  </p>
                </div>
              </div>

              {/* Bottom Row - Project Status Card (Full Width) */}
              <div className="md:col-span-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">The Inside Scoop</h3>
                    <p className="text-gray-300 text-lg">
                      Currently building a SaaS Application
                    </p>
                  </div>
                </div>
              </div>
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
            title={
              <ScrollFloat animationDuration={1.3} stagger={0.06}>
                Get In Touch
              </ScrollFloat>
            }
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
