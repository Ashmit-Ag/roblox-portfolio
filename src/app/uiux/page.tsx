"use client";

import ProjectCard from "@/components/ProjectCard2";
import { uiProjects2 } from "@/data/mock";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-14 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Projects
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of UI concepts, game assets, and experimental designs.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {uiProjects2.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
