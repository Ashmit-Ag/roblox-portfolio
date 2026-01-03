"use client";

// import ProjectCarousel from "@/components/ProjectCarousel";
// import VideoPlayer from "@/components/VideoPlayer";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import { Calendar, Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import SmartImage from "./SmartImage";
import { Project } from "@/types";


interface ProjectCardProps {
  project: Project;
  showVideos?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, showVideos = false }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const totalImages = project.images.length;

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setAnimKey((k) => k + 1);
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setAnimKey((k) => k + 1);
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setModalOpen(true)}
        className="cursor-pointer bg-gradient-to-br from-gray-900 to-black rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(147,51,234,0.15)] group overflow-hidden relative"
      >
        {/* Featured */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}

        {/* Image Area */}
        <div className="relative overflow-hidden aspect-[16/9]">
          <SmartImage
            key={animKey}
            src={project.images[currentIndex]}
            alt={project.title}
            width={960}
            height={720}
            className="w-full object-cover animate-fade-slide"
          />

          {/* Controls */}
          {totalImages > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-purple-600 transition"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 p-2 rounded-full hover:bg-purple-600 transition"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-purple-400 text-sm bg-purple-500/10 px-3 py-1 rounded-full">
              <Calendar className="w-3 h-3" />
              {project.year}
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tech */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-purple-600/20 text-purple-200 rounded-full border border-purple-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="relative flex flex-col items-center gap-6 pt-10">
          <div className="relative max-w-6xl w-full min-h-96 overflow-hidden aspect-[16/9]">
            <SmartImage
              key={`modal-${animKey}`}
              src={project.images[currentIndex]}
              alt={project.title}
              width={960}
              height={720}
              className="w-full object-contain rounded-lg animate-fade-slide"
              priority
            />


            {totalImages > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full hover:bg-purple-600 transition"
                >
                  <ChevronLeft className="w-3 h-3 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/70 p-3 rounded-full hover:bg-purple-600 transition"
                >
                  <ChevronRight className="w-3 h-3 text-white" />
                </button>
              </>
            )}
          </div>

          <button
            onClick={() => window.open(project.images[currentIndex], "_blank")}
            className="bg-purple-600 rounded-full px-5 py-2 flex items-center gap-2 text-sm font-medium text-white hover:text-purple-300 transition"
          >
            <ExternalLink className="w-4 h-4" />
            View Full Image
          </button>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
