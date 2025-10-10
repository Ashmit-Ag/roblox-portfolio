'use client'

import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

type VideoPlayerProps = {
  src: string,
  title: string,
  poster: string
}

const VideoPlayer = ({ src, title, poster }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoRef, setVideoRef] = useState<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef) {
      if (isPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef) {
      videoRef.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden bg-black group">
      <video
        ref={setVideoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        muted={isMuted}
        loop
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Video Controls Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6 ml-1" />
          )}
        </button>

        {/* Bottom Controls */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
            {title}
          </div>
          
          <button
            onClick={toggleMute}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Loading State */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-purple-600/20 backdrop-blur-sm rounded-full p-6">
            <Play className="w-8 h-8 text-purple-400 ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;