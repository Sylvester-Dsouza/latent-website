"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Eye, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Server,
  Smartphone,
  Cloud,
  AlertTriangle,
  Zap,
  Globe,
  Database,
  Monitor,
  Activity,
  Target,
  Search,
  Settings,
  FileCheck,
  Award
} from "lucide-react";
import Link from "next/link";


export default function ServicesPage() {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const mainServices = [
    {
      id: "device-cleaning",
      title: "Device Cleaning & Recovery",
      subtitle: "Remove Malware & Restore Your Device",
      description: "Your phone, tablet, or computer has been hacked? We'll completely clean it up and restore it to a secure state, removing all malware, scammer apps, and malicious software.",
      icon: Shield,
      gradient: "from-primary/20 to-primary/10",
      features: [
        "Complete malware and virus removal from all devices",
        "Scammer app detection and removal",
        "System restoration to clean, secure state",
        "Data recovery for affected files and photos"
      ],
      benefits: [
        "Get your device working safely again",
        "Remove all traces of hacker access",
        "Recover important files and data",
        "Peace of mind with clean device"
      ],
      stats: [
        { value: "500+", label: "Devices Cleaned" },
        { value: "99.9%", label: "Malware Removed" },
        { value: "24h", label: "Turnaround Time" },
        { value: "100%", label: "Success Rate" }
      ]
    },
    {
      id: "security-testing",
      title: "Security Testing & Analysis",
      subtitle: "Check If Your Device Is Really Safe",
      description: "We thoroughly test your device to make sure it's completely secure and check what personal information may have been stolen or compromised.",
      icon: Search,
      gradient: "from-primary/20 to-primary/10",
      features: [
        "Deep scan for hidden threats and backdoors",
        "Privacy audit to check exposed personal data",
        "Vulnerability assessment of device weaknesses",
        "Account security review for compromised logins"
      ],
      benefits: [
        "Know exactly what was compromised",
        "Find hidden threats others miss",
        "Understand how the breach happened",
        "Get clear next steps for protection"
      ],
      stats: [
        { value: "1,000+", label: "Devices Tested" },
        { value: "95%", label: "Hidden Threats Found" },
        { value: "48h", label: "Analysis Complete" },
        { value: "100%", label: "Detailed Reports" }
      ]
    },
    {
      id: "protection-monitoring",
      title: "Ongoing Protection & Monitoring",
      subtitle: "Keep Your Devices Safe Long-Term",
      description: "Set up proper security software and get regular check-ups to make sure your devices stay protected from future attacks and scams.",
      icon: Eye,
      gradient: "from-primary/20 to-primary/10",
      features: [
        "Professional security software setup and configuration",
        "Regular health checks and security scans",
        "Real-time monitoring for new threats",
        "Emergency support when you need help fast"
      ],
      benefits: [
        "Stay protected from future attacks",
        "Get help immediately when needed",
        "Learn how to spot and avoid scams",
        "Regular peace of mind check-ups"
      ],
      stats: [
        { value: "300+", label: "Protected Devices" },
        { value: "98%", label: "Attack Prevention" },
        { value: "24/7", label: "Emergency Support" },
        { value: "100%", label: "Client Satisfaction" }
      ]
    },
    {
      id: "security-education",
      title: "Security Education & Support",
      subtitle: "Learn How to Stay Safe Online",
      description: "Get personalized training on how to recognize scams, protect your personal information, and keep your devices secure from future attacks.",
      icon: Users,
      gradient: "from-primary/20 to-primary/10",
      features: [
        "One-on-one security training sessions",
        "Scam recognition and prevention education",
        "Safe browsing and app installation guidance",
        "Personal security plan development"
      ],
      benefits: [
        "Avoid falling for scams in the future",
        "Understand how to protect yourself",
        "Get personalized security advice",
        "Build confidence using technology safely"
      ],
      stats: [
        { value: "200+", label: "People Trained" },
        { value: "90%", label: "Scam Avoidance" },
        { value: "1-on-1", label: "Personal Training" },
        { value: "100%", label: "Easy to Understand" }
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Emergency Device Recovery",
      description: "Immediate help when your device has been compromised or you suspect unauthorized access.",
      icon: AlertTriangle,
      color: "text-primary"
    },
    {
      title: "Identity Theft Protection",
      description: "Check if your personal information has been stolen and help secure your online accounts.",
      icon: Lock,
      color: "text-primary"
    },
    {
      title: "Family Device Security",
      description: "Protect all family devices including phones, tablets, and computers with comprehensive security.",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "Senior Citizen Support",
      description: "Specialized support for older adults who are often targeted by scammers and need extra help.",
      icon: Award,
      color: "text-primary"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Light background image - positioned at top-left */}
        <div 
          className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-top bg-no-repeat opacity-15"
          style={{ backgroundImage: 'url(/light-bg.jpg)' }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-muted/5" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-muted-foreground/40 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-2000" />
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-muted-foreground/30 rounded-full animate-pulse delay-3000" />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary">
            <Smartphone className="w-4 h-4 mr-2" />
            Device Security Help
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Your Device Has Been Hacked?
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help individuals whose phones, tablets, or computers have been compromised by hackers or scammers. 
            Get your device cleaned, secured, and protected from future attacks.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Our Core Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions designed to protect your business at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {mainServices.map((service, index) => {
        const IconComponent = service.icon;
        const isEven = index % 2 === 0;
        
        return (
          <section key={service.id} className={`py-16 ${isEven ? 'bg-background' : 'bg-muted/30'} transition-all duration-500`}>
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''} animate-in fade-in-50 slide-in-from-bottom-8 duration-700`}>
                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>

                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg font-medium text-primary/80 mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-base text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary flex items-center">
                        <Zap className="h-4 w-4 mr-2" />
                        Key Features
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-sm group/feature hover:bg-muted/30 p-2 rounded-md transition-all duration-200" style={{animationDelay: `${idx * 100}ms`}}>
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover/feature:scale-110" />
                            <span className="transition-colors duration-200 group-hover/feature:text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href={`/services/${service.id}`}>
                        <Button className={`group bg-gradient-to-r ${service.gradient} text-foreground hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
                          <span className="relative z-10">Learn More</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                          <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Stats Card */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center group">
                          <Activity className="h-5 w-5 mr-2 text-primary transition-transform duration-300 group-hover:scale-110" />
                          Service Metrics
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {service.stats.map((stat, idx) => (
                            <div key={idx} className="text-center p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-all duration-300 hover:scale-105 cursor-default" style={{animationDelay: `${idx * 150}ms`}}>
                              <div className="text-xl font-bold text-primary transition-colors duration-300">{stat.value}</div>
                              <div className="text-sm text-muted-foreground transition-colors duration-300">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Benefits */}
                        <div>
                          <h4 className="font-semibold mb-3 text-primary flex items-center">
                            <Award className="h-4 w-4 mr-2" />
                            Key Benefits
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm">
                                <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Additional Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">
              Additional Support Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Extra help and specialized support for specific situations and ongoing protection needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${service.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <IconComponent className="h-5 w-5 text-white transition-transform duration-300" />
                      </div>
                      <CardTitle className="text-lg transition-colors duration-300 group-hover:text-primary">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 transition-colors duration-300 group-hover:text-foreground/80">{service.description}</p>
                    <Button variant="outline" className="w-full group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


    </div>
  );
}