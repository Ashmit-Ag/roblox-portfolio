import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { modelProjects } from '@/data/mock';
import { Box, Layers, Paintbrush, Maximize } from 'lucide-react';

const ModelsPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)]">
              <Box className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent mb-6">
            3D Models
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Creating detailed 3D assets that bring game worlds to life. From architectural elements to weapons and props, 
            I design optimized models that balance visual quality with performance for seamless Roblox gameplay.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Box className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">100+</div>
              <div className="text-xs sm:text-sm text-purple-300">Models</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Low-Poly</div>
              <div className="text-xs sm:text-sm text-purple-300">Optimized</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Paintbrush className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Textured</div>
              <div className="text-xs sm:text-sm text-purple-300">Materials</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Maximize className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Scalable</div>
              <div className="text-xs sm:text-sm text-purple-300">Design</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {modelProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">3D Modeling Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              'Blender',
              'Roblox Studio',
              'Substance Painter',
              'UV Mapping',
              'Low-Poly Modeling',
              'Texturing',
              'Material Creation',
              'Animation Rigging',
              'Optimization',
              'Asset Management',
              'PBR Workflows',
              'Lighting Setup'
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

export default ModelsPage;