"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { 
  Shield, 
  Search, 
  CheckCircle, 
  ArrowRight,
  Users,
  FileText,
  TrendingUp,
  Award,
  Clock,
  Zap,
  Eye,
  Lock,
  Smartphone,
  AlertTriangle,
  Scan,
  Activity,
  Settings,
  BookOpen
} from "lucide-react";


export default function SecurityTestingPage() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const features = [
    {
      icon: <Scan className="h-8 w-8" />,
      title: "Deep Security Scan",
      description: "Comprehensive scanning of your device to check for hidden threats, suspicious apps, and security vulnerabilities."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Threat Detection",
      description: "Advanced detection of malware, spyware, keyloggers, and other malicious software that might be hiding on your device."
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Performance Analysis",
      description: "Check if your device is running normally or showing signs of compromise like slow performance or unusual behavior."
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Privacy Check",
      description: "Verify that your personal information, photos, and data are secure and haven't been accessed by unauthorized apps."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Assessment",
      description: "Evaluate your device's overall security status and identify weak points that could be exploited by hackers."
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Risk Evaluation",
      description: "Get a clear report on what risks your device faces and what immediate actions you should take to stay safe."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "We examine your device and discuss what symptoms or problems you've noticed to understand what might be wrong."
    },
    {
      step: "02",
      title: "Comprehensive Scanning",
      description: "Run multiple security scans using professional tools to detect malware, spyware, and other threats on your device."
    },
    {
      step: "03",
      title: "Security Analysis",
      description: "Analyze scan results to identify all security issues, vulnerabilities, and potential risks affecting your device."
    },
    {
      step: "04",
      title: "Safety Report",
      description: "Provide you with a clear, easy-to-understand report about your device's security status and recommended next steps."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Peace of Mind",
      description: "Know exactly what's happening with your device and if it's safe to use"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Clear Results",
      description: "Easy-to-understand report showing what we found and what you need to do"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Professional Testing",
      description: "Advanced security tools and techniques used by cybersecurity experts"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick Analysis",
      description: "Fast testing process to quickly determine if your device is compromised"
    }
  ];

  const stats = [
    { value: "800+", label: "Devices Tested" },
    { value: "97%", label: "Threat Detection Rate" },
    { value: "1-2h", label: "Average Test Time" },
    { value: "100%", label: "Report Accuracy" }
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background relative">
        {/* Navigation + Hero Background Elements */}
        <div className="absolute top-0 left-0 right-0 h-[calc(100vh)] z-0">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: 'url(/Gradient-bg/bg3.jpg)' }}
          />
          
          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-background/80 to-pink-950/30" />
        </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden mt-20 z-10">

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <Search className="w-4 h-4 mr-2" />
              Professional Security Testing 🔍
            </Badge>

            {/* Main Heading */}
            <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                Security Testing
              </span>
              <br className="sm:hidden" />
              <span className="text-foreground">
                <span className="hidden sm:inline"> </span>& Analysis
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground mb-8">
              Professional security testing to check if your device has been compromised and identify potential threats or vulnerabilities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Test My Device
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 rounded-lg font-semibold border-purple-500/20 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300">
                Learn About Testing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Metrics Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-950/10 via-background to-pink-950/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse shadow-lg shadow-purple-500/10" />
          <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000 shadow-lg shadow-pink-500/10" />
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-purple-400/30 rounded-full blur-sm animate-bounce delay-500" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-white">
                Service Metrics
              </span>
            </h2>
            <p className="text-muted-foreground">Real-time performance indicators</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="group relative p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-purple-500/10 hover:border-pink-500/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative text-center space-y-3">
                  {/* Icon based on index */}
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-2 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300">
                    {index === 0 && <Smartphone className="w-6 h-6 text-white" />}
                    {index === 1 && <Search className="w-6 h-6 text-white" />}
                    {index === 2 && <Clock className="w-6 h-6 text-white" />}
                    {index === 3 && <CheckCircle className="w-6 h-6 text-white" />}
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
                      className="bg-gradient-to-r from-purple-400/10 to-pink-400/10 h-1 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${85 + index * 5}%` }}
                    />
                  </div>
                </div>
                
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Complete Security Testing
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional security analysis to check if your device has been compromised or infected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-purple-500/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-purple-400 transition-colors duration-300">
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Testing Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A thorough step-by-step approach to analyze your device and identify any security threats.
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
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Our Testing
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional security testing with clear results and expert analysis you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
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