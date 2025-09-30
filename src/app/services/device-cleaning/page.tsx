'use client';

import { ArrowRight, Shield, Trash2, Search, AlertTriangle, CheckCircle, Clock, RefreshCw, Zap, Star, Users, Award, Smartphone, HardDrive, Target } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';



export default function DeviceCleaningPage() {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Deep Malware Scan",
      description: "Comprehensive scanning of your phone, tablet, or computer to find hidden malware, spyware, and malicious apps that regular antivirus might miss."
    },
    {
      icon: <Trash2 className="h-6 w-6" />,
      title: "Complete Malware Removal",
      description: "Safe removal of all detected threats including viruses, trojans, ransomware, and suspicious apps without damaging your important files."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "System Recovery",
      description: "Restore your device's performance and fix issues caused by malware like slow performance, pop-ups, and unexpected behavior."
    },
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "Data Recovery",
      description: "Recover important photos, documents, and files that may have been hidden, encrypted, or damaged by malware attacks."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security Hardening",
      description: "Strengthen your device's defenses by updating software, configuring security settings, and removing vulnerabilities."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "All Device Types",
      description: "Expert cleaning for iPhones, Android phones, tablets, Windows PCs, and Macs - we handle all types of compromised devices."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Device Assessment",
      description: "We examine your device to understand what happened, identify symptoms, and determine the extent of the compromise or infection."
    },
    {
      step: "02",
      title: "Deep Scanning",
      description: "Run comprehensive scans using professional tools to detect all malware, spyware, suspicious apps, and hidden threats on your device."
    },
    {
      step: "03",
      title: "Safe Removal",
      description: "Carefully remove all detected threats without damaging your personal files, photos, or important data stored on the device."
    },
    {
      step: "04",
      title: "System Repair",
      description: "Fix any damage caused by malware including corrupted files, changed settings, and performance issues to restore normal operation."
    },
    {
      step: "05",
      title: "Data Recovery",
      description: "Recover any files that were hidden, encrypted, or damaged by the malware attack and ensure all your important data is accessible."
    },
    {
      step: "06",
      title: "Protection Setup",
      description: "Install proper security software, update your device, and configure settings to prevent future infections and keep you safe."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Complete Cleaning",
      description: "Remove all malware and restore your device to safe operation"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Data Protection",
      description: "Keep your personal files, photos, and data safe during cleaning"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Expert Service",
      description: "Professional technicians with years of malware removal experience"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Quick Recovery",
      description: "Fast service to get your device working normally again"
    }
  ];

  const stats = [
    { value: "1000+", label: "Devices Cleaned" },
    { value: "99.8%", label: "Malware Removal Rate" },
    { value: "2-4h", label: "Average Cleaning Time" },
    { value: "100%", label: "Data Recovery Success" }
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background relative">
        {/* Navigation + Hero Background Elements */}
        <div className="absolute top-0 left-0 right-0 h-[calc(100vh)] z-0">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: 'url(/Gradient-bg/bg2.jpg)' }}
          />
          
          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-background/80 to-orange-950/30" />
        </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-transparent overflow-hidden mt-20 z-10">

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Professional Device Cleaning 🧹
            </Badge>
            
            {/* Main Heading */}
            <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Device Cleaning
              </span>
              <br className="sm:hidden" />
              <span className="text-foreground">
                <span className="hidden sm:inline"> </span>& Recovery
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground mb-8">
              Your phone, tablet, or computer has been hacked or infected? We'll completely remove all malware and restore your device to safe, normal operation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                Clean My Device
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-red-500/20 hover:border-red-500/40 hover:bg-red-500/5">
                Emergency Help
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Metrics Section */}
      <section className="relative py-16 bg-gradient-to-r from-red-950/10 via-background to-orange-950/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-red-500/20 rounded-full blur-xl animate-pulse shadow-lg shadow-red-500/10" />
          <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000 shadow-lg shadow-orange-500/10" />
          <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-red-400/30 rounded-full blur-sm animate-bounce delay-500" />
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
              <Card key={index} className="group relative p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-red-500/10 hover:border-orange-500/10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative text-center space-y-3">
                  {/* Icon based on index */}
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-2 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl group-hover:from-red-500/10 group-hover:to-orange-500/10 transition-all duration-300">
                    {index === 0 && <Target className="w-6 h-6 text-white" />}
                    {index === 1 && <CheckCircle className="w-6 h-6 text-white" />}
                    {index === 2 && <Clock className="w-6 h-6 text-white" />}
                    {index === 3 && <Star className="w-6 h-6 text-white" />}
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
                      className="bg-gradient-to-r from-red-400/10 to-orange-400/10 h-1 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${85 + index * 5}%` }}
                    />
                  </div>
                </div>
                
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-red-500/30 to-orange-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Complete Device
              </span>
              <span className="text-foreground"> Cleaning</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional malware removal and device recovery services to get your phone, tablet, or computer working safely again.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-red-500/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-400 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-300">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-red-950/5 via-background to-orange-950/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Our Cleaning
              </span>
              <span className="text-foreground"> Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A step-by-step approach to completely remove malware and restore your device to safe, normal operation.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-red-500/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-bold">
                        {step.step}
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Why Choose
              </span>
              <span className="text-foreground"> Our Service</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional device cleaning with guaranteed results and complete protection of your personal data.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-red-500/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-red-500/10 to-orange-500/10 text-red-400 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all duration-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
    </>
  );
}