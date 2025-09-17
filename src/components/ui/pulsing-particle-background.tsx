import React from 'react';

interface PulsingParticleBackgroundProps {
  className?: string;
}

export function PulsingParticleBackground({ className = "" }: PulsingParticleBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large Pulsing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Additional scattered orbs for more coverage */}
        <div className="absolute top-10 right-1/3 w-48 h-48 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-2/3 left-10 w-40 h-40 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/3 right-10 w-52 h-52 bg-primary/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/30 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-primary/30 rounded-full animate-bounce" style={{animationDelay: '5s'}}></div>
        
        {/* Additional floating particles */}
        <div className="absolute top-1/5 left-1/2 w-2 h-2 bg-primary/25 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-4/5 left-1/5 w-1.5 h-1.5 bg-primary/25 rounded-full animate-bounce" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-2/5 right-1/5 w-1 h-1 bg-primary/25 rounded-full animate-bounce" style={{animationDelay: '6s'}}></div>
        <div className="absolute top-3/5 left-4/5 w-2.5 h-2.5 bg-primary/25 rounded-full animate-bounce" style={{animationDelay: '7s'}}></div>
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-primary/25 rounded-full animate-bounce" style={{animationDelay: '8s'}}></div>
        <div className="absolute bottom-1/6 left-2/3 w-1.5 h-1.5 bg-primary/25 rounded-full animate-bounce" style={{animationDelay: '9s'}}></div>
        
        {/* Micro particles for subtle effect */}
        <div className="absolute top-1/3 left-1/6 w-0.5 h-0.5 bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 right-1/6 w-0.5 h-0.5 bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute bottom-1/3 left-5/6 w-0.5 h-0.5 bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '5.5s'}}></div>
        <div className="absolute top-5/6 right-2/3 w-0.5 h-0.5 bg-primary/40 rounded-full animate-pulse" style={{animationDelay: '7.5s'}}></div>
      </div>
    </div>
  );
}