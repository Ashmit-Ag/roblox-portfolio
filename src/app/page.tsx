import React from "react";
import ProjectCard2 from "@/components/ProjectCard";
import ProjectCard from "@/components/ProjectCard2";
import { uiProjects, uiProjects2 } from "@/data/mock";
import { Palette, Monitor, Smartphone, Clock, DollarSign } from "lucide-react";
import Discord from "@/assets/discord-white-icon.webp"
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)]">
              <Palette className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent mb-6">
            Spidy UI Designs
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            I craft clean, intuitive, and immersive user experiences for Roblox games blending creativity and function.
            With over 2+ years of experience, I deliver designs that combine aesthetic appeal with seamless functionality.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Mobile</div>
              <div className="text-xs sm:text-sm text-purple-300">Friendly</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Fast</div>
              <div className="text-xs sm:text-sm text-purple-300">Delivery</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Clean</div>
              <div className="text-xs sm:text-sm text-purple-300">Designs</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Custom</div>
              <div className="text-xs sm:text-sm text-purple-300">Icons</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {uiProjects2.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
          {uiProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Prices Section */}
        <div className="text-center my-16">
          <h2 className="text-3xl font-bold text-white mb-8">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Design Pricing */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-purple-500/20 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">UI Design</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Starting at <span className="font-bold text-purple-400">$5</span> per frame.
              </p>
              <p className="text-gray-400 text-sm">
                You will recieve all the images as PNG or figma file. <br></br>(Extra for custom icons)
              </p>
            </div>

            {/* Implementation Pricing */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-purple-500/20 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Monitor className="w-6 h-6 text-purple-400" />
                <h3 className="text-2xl font-bold text-white">Importing in Roblox</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Between <span className="font-bold text-purple-400">$2 - $8</span> per frame.
              </p>
              <p className="text-gray-400 text-sm">
                You will recieve RBXM file of your UI.

              </p>
            </div>
          </div>
        </div>

        {/* Contact Me Section */}
        <div className="text-center my-16">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-300 mb-6">
            Have a project in mind? Let’s bring it to life! Reach out to me on Discord.
          </p>
          <a
            href="https://discord.com/users/spidy9544" // replace with your Discord URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-full text-white font-medium"
          >
            <Image
              src={Discord}
              alt="discord logo"
              className="w-5 h-5" />
            Contact Me on Discord
          </a>
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Technical Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              'Roblox Studio GUI',
              'Adobe Illustrator',
              'Adobe Photoshop',
              'Figma',
              'Mobile Optimization',
              'UI Animation',
              'Color Theory',
              'UX Research',
              'Wireframing',
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black rounded-lg p-3 sm:p-4 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
              >
                <span className="text-purple-200 font-medium text-sm">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
