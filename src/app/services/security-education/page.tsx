"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { 
  Shield, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  AlertTriangle,
  TrendingUp,
  Award,
  BookOpen,
  Lock,
  Globe,
  GraduationCap,
  Lightbulb,
  Monitor,
  Activity,
  FileCheck,
  Settings
} from "lucide-react";


export default function SecurityEducationPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Password Security",
      description: "Learn how to create strong passwords, use password managers, and enable two-factor authentication."
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Phishing Protection",
      description: "Identify and avoid phishing emails, fake websites, and social engineering attacks."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe Browsing",
      description: "Best practices for secure internet browsing, avoiding malicious websites and downloads."
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Privacy Settings",
      description: "Configure privacy settings on social media, apps, and devices to protect your personal information."
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Device Security",
      description: "Secure your devices with proper settings, updates, and security software."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Security Awareness",
      description: "Stay informed about the latest threats and develop good cybersecurity habits."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Evaluate your current security knowledge and create a personalized learning plan."
    },
    {
      step: "02", 
      title: "Interactive Learning",
      description: "Engage with hands-on tutorials, real-world scenarios, and practical exercises."
    },
    {
      step: "03",
      title: "Practice & Application",
      description: "Apply what you've learned with guided practice sessions and security simulations."
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Receive continued guidance, updates on new threats, and refresher training."
    }
  ];

  const benefits = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Expert Instruction",
      description: "Learn from certified cybersecurity professionals with real-world experience"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Practical Learning",
      description: "Hands-on training with real scenarios and interactive exercises"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Progressive Curriculum",
      description: "Start with basics and advance to more complex security concepts"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certification Ready",
      description: "Prepare for industry certifications and validate your knowledge"
    }
  ];

  const stats = [
    { value: "500+", label: "Students Trained" },
    { value: "95%", label: "Completion Rate" },
    { value: "20+", label: "Course Modules" },
    { value: "24/7", label: "Learning Support" }
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background relative">
        {/* Navigation + Hero Background Elements */}
        <div className="absolute top-0 left-0 right-0 h-[calc(100vh)] z-0">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: 'url(/Gradient-bg/bg1.jpg)' }}
          />
          
          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-background/80 to-emerald-950/30" />
        </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden mt-20 z-10">

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <GraduationCap className="w-4 h-4 mr-2" />
              Cybersecurity Education 🎓
            </Badge>

            {/* Main Heading */}
            <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent">
                Security Education
              </span>
              <br className="sm:hidden" />
              <span className="text-foreground">
                <span className="hidden sm:inline"> </span>& Training
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground mb-8">
              Learn essential cybersecurity skills to protect yourself online with expert-led training and practical exercises.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 rounded-lg font-semibold border-green-500/20 hover:border-green-500/40 hover:bg-green-500/5 transition-all duration-300">
                View Courses
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Metrics Section */}
      <section className="relative py-16 bg-gradient-to-r from-green-950/10 via-background to-emerald-950/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse shadow-lg shadow-green-500/5" />
          <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-emerald-500/10 rounded-full blur-xl animate-pulse delay-1000 shadow-lg shadow-emerald-500/5" />
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-green-400/10 rounded-full blur-sm animate-bounce delay-500" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">
                Learning Metrics
              </span>
            </h2>
            <p className="text-muted-foreground">Security education program statistics</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="group relative p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-green-500/10 hover:border-emerald-500/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative text-center space-y-3">
                  {/* Icon based on index */}
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-2 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-300">
                    {index === 0 && <Users className="w-6 h-6 text-white" />}
                    {index === 1 && <TrendingUp className="w-6 h-6 text-white" />}
                    {index === 2 && <BookOpen className="w-6 h-6 text-white" />}
                    {index === 3 && <Clock className="w-6 h-6 text-white" />}
                  </div>
                  
                  {/* Value */}
                  <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm text-white font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="w-full bg-muted/30 rounded-full h-1 mt-3">
                    <div 
                      className="bg-gradient-to-r from-green-400/10 to-emerald-400/10 h-1 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${85 + index * 4}%` }}
                    />
                  </div>
                </div>
                
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Essential Security Topics
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn the fundamental cybersecurity skills you need to stay safe online and protect your digital life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-green-500/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-green-400 group-hover:text-emerald-400 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-green-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Our Learning Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach to building your cybersecurity knowledge and skills step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20">
                  <span className="text-primary-foreground font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Why Choose Our Training
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional cybersecurity education with expert guidance and practical skills you can use immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-green-400 group-hover:text-emerald-400 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
    </>
  );
}