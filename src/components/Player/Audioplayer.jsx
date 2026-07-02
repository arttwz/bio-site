import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

export const AudioPlayer = ({ src, title, artist }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-glass backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4 text-white w-full max-w-sm">
      <div className="w-12 h-12 bg-gray-800 rounded-lg animate-pulse" />
      <div className="flex-1">
        <h4 className="text-sm font-bold">{title}</h4>
        <p className="text-xs text-gray-400">{artist}</p>
      </div>
      <button onClick={togglePlay} className="p-2 hover:scale-110 transition-transform">
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
      <audio ref={audioRef} src={src} loop />
    </div>
  );
};
