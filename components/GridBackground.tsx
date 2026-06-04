'use client';

import React from 'react';

export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#0A0A0B] overflow-hidden">
      {/* Heavy mesh grid background in white */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Radial soft ambient glow centers */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-white/[0.015] blur-[150px] pointer-events-none"></div>

      {/* Vertical grid partitioning lines */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2D2D30] to-transparent hidden lg:block"></div>
      <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2D2D30] to-transparent hidden lg:block"></div>
    </div>
  );
}
