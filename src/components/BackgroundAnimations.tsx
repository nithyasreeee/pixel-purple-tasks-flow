import React from 'react';

export const BackgroundAnimations = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full floating-orbs" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-40 w-24 h-24 bg-secondary/15 rounded-full floating-orbs" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-40 w-40 h-40 bg-primary/8 rounded-full floating-orbs" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-secondary/12 rounded-full floating-orbs" style={{ animationDelay: '1s' }} />
      
      {/* Gradient background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 gradient-shift" />
      
      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rotate-45 floating-orbs" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary/40 rounded-full floating-orbs" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-primary/25 floating-orbs" style={{ animationDelay: '5s' }} />
    </div>
  );
};