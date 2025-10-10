import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { buildProjects } from '@/data/mock';
import { Map, Mountain, Building, Compass } from 'lucide-react';

const BuildsPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/5 right-1/5 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)]">
              <Map className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent mb-6">
            World Builds
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Designing immersive game environments that tell stories and create memorable experiences. From mystical forests to futuristic cities, 
            I craft detailed worlds that captivate players and enhance gameplay through thoughtful level design.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Map className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">12+</div>
              <div className="text-xs sm:text-sm text-purple-300">Worlds</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Mountain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Terrain</div>
              <div className="text-xs sm:text-sm text-purple-300">Sculpting</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Building className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Detailed</div>
              <div className="text-xs sm:text-sm text-purple-300">Structures</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Compass className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Interactive</div>
              <div className="text-xs sm:text-sm text-purple-300">Elements</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {buildProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Environment Design Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              'Roblox Studio',
              'Terrain Editor',
              'Level Design',
              'Lighting Systems',
              'Material Application',
              'Part Manipulation',
              'Scripted Events',
              'Atmospheric Design',
              'Performance Optimization',
              'Player Flow',
              'Environmental Storytelling',
              'Interactive Elements'
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

export default BuildsPage;