"use client";

import { useEffect, useState } from 'react';

export function CyberGrid() {
  return (
    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
  );
}

export function MatrixRain() {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute w-px h-20 bg-gradient-to-b from-blue-400 to-transparent animate-matrix-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function FloatingElements() {
  const elements = [
    { icon: '🔒', size: 'text-2xl', delay: 0 },
    { icon: '🛡️', size: 'text-3xl', delay: 1 },
    { icon: '⚡', size: 'text-xl', delay: 2 },
    { icon: '🔐', size: 'text-2xl', delay: 3 },
    { icon: '🌐', size: 'text-3xl', delay: 4 },
    { icon: '💻', size: 'text-2xl', delay: 5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.size} animate-float opacity-30`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${element.delay}s`,
          }}
        >
          {element.icon}
        </div>
      ))}
    </div>
  );
}

export function CyberScanLine() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-cyber-scan opacity-50" />
    </div>
  );
}

export function ParticleField() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-400 opacity-20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${Math.random() * 3 + 2}s`,
          }}
        />
      ))}
    </div>
  );
}

export function CyberBackground({ variant = 'grid' }: { variant?: 'grid' | 'matrix' | 'particles' | 'scan' | 'float' }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {variant === 'grid' && <CyberGrid />}
      {variant === 'matrix' && <MatrixRain />}
      {variant === 'particles' && <ParticleField />}
      {variant === 'scan' && <CyberScanLine />}
      {variant === 'float' && <FloatingElements />}
    </div>
  );
}