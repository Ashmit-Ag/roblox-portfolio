"use client";

import React, { useState } from "react";
import ProjectCarousel from "@/components/ProjectCarousel";
import VideoPlayer from "@/components/VideoPlayer";
import Modal from "@/components/Modal";
import { Calendar, Star, Download, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  year: number | string;
  description: string;
  technologies: string[];
  images: string[];
  videos?: string[];
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  showVideos?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, showVideos = false }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDownload = () => {
    if (!project.images || project.images.length === 0) return;

    const imageUrl = project.images[0];
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${project.title.replace(/\s+/g, "_")}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    if (!project.images || project.images.length === 0) return;
    const imageUrl = project.images[0];
    window.open(imageUrl, "_blank");
  };

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setModalOpen(true)}
        className="cursor-pointer bg-gradient-to-br from-gray-900 to-black rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] group overflow-hidden relative"
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            {showVideos && project.videos && project.videos.length > 0 ? (
              <div className="space-y-4">
                {project.videos.map((video, index) => (
                  <VideoPlayer
                    key={index}
                    src={video}
                    title={`${project.title} - Demo ${index + 1}`}
                    poster={project.images[0]}
                  />
                ))}
                {project.images && project.images.length > 0 && (
                  <ProjectCarousel images={project.images} title={project.title} />
                )}
              </div>
            ) : (
              <ProjectCarousel images={project.images} title={project.title} />
            )}
          </div>

          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-purple-400 text-sm font-medium bg-purple-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                <Calendar className="w-3 h-3" />
                {project.year}
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-2 bg-purple-600/20 text-purple-200 rounded-full border border-purple-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="flex flex-col items-center gap-6">
          {project.images && project.images.length > 0 && (
            <img
              src={project.images[0]}
              alt={project.title}
              className="max-h-[500px] object-contain rounded-lg"
            />
          )}

          <div className="flex gap-4">
            {/* Download Button */}
            <button
              onClick={handleOpenNewTab}
              className="bg-purple-600 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-white hover:text-purple-300 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              View
            </button>
            {/* <button
              onClick={handleDownload}
              className="bg-purple-600 rounded-full px-4 py-2 flex items-center gap-2 text-sm font-medium text-white hover:text-purple-300 transition-colors duration-300"
            >
              <Download className="w-4 h-4" />
              Download Image
            </button> */}

            {/* View in New Tab Button */}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
