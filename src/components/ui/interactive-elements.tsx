"use client";

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'blue' | 'green' | 'red' | 'purple';
}

export function CyberCard({ children, className = '', glowColor = 'blue' }: CyberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const glowClasses = {
    blue: 'hover:shadow-blue-500/20',
    green: 'hover:shadow-green-500/20',
    red: 'hover:shadow-red-500/20',
    purple: 'hover:shadow-purple-500/20',
  };

  return (
    <Card
      className={`cyber-card border-2 border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:border-${glowColor}-500 hover:shadow-2xl ${glowClasses[glowColor]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Card>
  );
}

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <span className={`glitch ${className}`} data-text={text}>
      {text}
    </span>
  );
}

interface NeonBadgeProps {
  children: React.ReactNode;
  color?: 'blue' | 'green' | 'red' | 'purple';
  className?: string;
}

export function NeonBadge({ children, color = 'blue', className = '' }: NeonBadgeProps) {
  const colorClasses = {
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500 neon-blue',
    green: 'bg-green-500/20 text-green-400 border-green-500 neon-green',
    red: 'bg-red-500/20 text-red-400 border-red-500 neon-red',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500',
  };

  return (
    <Badge className={`border ${colorClasses[color]} ${className}`}>
      {children}
    </Badge>
  );
}

interface CyberButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
}

export function CyberButton({ children, onClick, variant = 'primary', className = '' }: CyberButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    onClick?.();
  };

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 border-blue-500 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 border-gray-600 text-gray-200',
    danger: 'bg-red-600 hover:bg-red-700 border-red-500 text-white',
  };

  return (
    <Button
      onClick={handleClick}
      className={`cyber-border animate-pulse-glow transition-all duration-300 ${variantClasses[variant]} ${isClicked ? 'scale-95' : ''} ${className}`}
    >
      {children}
    </Button>
  );
}

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({ target, duration = 2000, suffix = '', className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration]);

  return (
    <span className={`font-mono text-2xl font-bold neon-blue ${className}`}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  color?: 'blue' | 'green' | 'red' | 'purple';
  className?: string;
}

export function CyberProgressBar({ value, max, label, color = 'blue', className = '' }: ProgressBarProps) {
  const percentage = (value / max) * 100;

  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    purple: 'bg-purple-500',
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex justify-between text-sm">
          <span className="text-gray-300">{label}</span>
          <span className="text-gray-400">{value}/{max}</span>
        </div>
      )}
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} transition-all duration-1000 ease-out animate-pulse-glow`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface HologramCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function HologramCard({ title, description, icon, className = '' }: HologramCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative p-6 border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg transition-all duration-500 hover:border-cyan-400 hover:shadow-cyan-500/20 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent animate-cyber-scan" />
      
      {icon && (
        <div className="mb-4 text-cyan-400 text-3xl animate-float">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-bold text-white mb-2 neon-blue">
        {title}
      </h3>
      
      <p className="text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}