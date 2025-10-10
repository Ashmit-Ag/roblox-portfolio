import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { vfxProjects } from '@/data/mock';
import { Sparkles, Zap, Wind, Flame } from 'lucide-react';

const VFXPage = () => {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2/3 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-2/3 right-1/2 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-2xl shadow-[0_0_30px_rgba(147,51,234,0.3)]">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent mb-6">
            Visual Effects
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Bringing magic to life through stunning particle effects and visual systems. From spell casting to environmental atmospheres, 
            I create captivating VFX that enhance gameplay immersion and add visual polish to Roblox experiences.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">30+</div>
              <div className="text-xs sm:text-sm text-purple-300">Effects</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Dynamic</div>
              <div className="text-xs sm:text-sm text-purple-300">Particles</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Wind className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Atmosphere</div>
              <div className="text-xs sm:text-sm text-purple-300">Systems</div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 sm:p-6 border border-purple-500/20">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xl sm:text-2xl font-bold text-white">Magical</div>
              <div className="text-xs sm:text-sm text-purple-300">Spells</div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {vfxProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Skills Section */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">VFX Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              'Particle Systems',
              'Roblox VFX',
              'Lua Scripting',
              'TweenService',
              'BeamEffects',
              'Fire & Smoke',
              'Lighting Effects',
              'Post Processing',
              'GUI Effects',
              'Sound Integration',
              'Performance Optimization',
              'Real-time Systems'
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

export default VFXPage;