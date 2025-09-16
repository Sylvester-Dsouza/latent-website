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
      id: "penetration-testing",
      title: "Penetration Testing",
      subtitle: "Controlled Simulated Attacks",
      description: "A controlled, simulated attack to evaluate the security of IT infrastructure, applications, or human processes by exploiting vulnerabilities to assess their real-world impact.",
      icon: Shield,
      gradient: "from-red-500 to-orange-500",
      features: [
        "Planning and scoping with defined goals and rules of engagement",
        "Reconnaissance using WHOIS, Shodan, and social engineering",
        "Vulnerability identification with Nmap, Burp Suite, and Metasploit",
        "Active exploitation to gain unauthorized access",
        "Post-exploitation impact assessment and lateral movement",
        "Comprehensive reporting with actionable remediation steps"
      ],
      benefits: [
        "Identify exploitable weaknesses before attackers do",
        "Assess real-world impact of security vulnerabilities",
        "Compliance with PCI-DSS, HIPAA, and industry standards",
        "Detailed attack paths and remediation guidance"
      ],
      stats: [
        { value: "500+", label: "Tests Completed" },
        { value: "99.9%", label: "Accuracy Rate" },
        { value: "24h", label: "Report Delivery" },
        { value: "100%", label: "Compliance Ready" }
      ]
    },
    {
      id: "vulnerability-assessment",
      title: "Vulnerability Assessment",
      subtitle: "Comprehensive Security Scanning",
      description: "Systematic identification and evaluation of security vulnerabilities in systems, networks, and applications using automated tools and manual techniques.",
      icon: Search,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Planning and scoping with stakeholder alignment",
        "Discovery and scanning using Nessus, Qualys, OpenVAS",
        "Analysis and prioritization using CVSS scores",
        "Detailed reporting with risk ratings and remediation",
        "Remediation support and validation through re-scanning",
        "Network, host, application, and cloud-based assessments"
      ],
      benefits: [
        "Identify vulnerabilities before exploitation",
        "Prioritize risks based on business impact",
        "Compliance with PCI-DSS, GDPR requirements",
        "Continuous security posture improvement"
      ],
      stats: [
        { value: "10,000+", label: "Vulnerabilities Found" },
        { value: "95%", label: "Risk Reduction" },
        { value: "48h", label: "Report Delivery" },
        { value: "100%", label: "Remediation Success" }
      ]
    },
    {
      id: "cybercrime-investigation",
      title: "Cybercrime Investigation",
      subtitle: "Digital Forensics & Investigation",
      description: "Comprehensive investigation of cyber incidents using advanced digital forensics techniques to identify perpetrators and gather evidence for legal proceedings.",
      icon: Search,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Planning and preparation with legal compliance",
        "Evidence collection and preservation using forensic tools",
        "Analysis and examination of digital artifacts",
        "Detailed reporting with chain of custody documentation",
        "Expert testimony and legal support",
        "Incident reconstruction and timeline analysis"
      ],
      benefits: [
        "Legal-grade evidence collection",
        "Expert forensic analysis and reporting",
        "Support for criminal and civil proceedings",
        "Incident attribution and threat actor identification"
      ],
      stats: [
        { value: "200+", label: "Cases Investigated" },
        { value: "98%", label: "Evidence Recovery" },
        { value: "72h", label: "Initial Analysis" },
        { value: "100%", label: "Court Admissible" }
      ]
    },
    {
      id: "security-consulting",
      title: "Security Consulting",
      subtitle: "Strategic Security Advisory",
      description: "Comprehensive cybersecurity consulting services providing strategic guidance, risk assessment, and tailored security solutions to strengthen your organization's security posture.",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Planning and assessment with stakeholder engagement",
        "Analysis and strategy development using industry frameworks",
        "Implementation support with project management",
        "Monitoring and optimization with continuous improvement",
        "Security architecture design and review",
        "Compliance consulting for GDPR, PCI-DSS, ISO 27001"
      ],
      benefits: [
        "Strategic security roadmap development",
        "Risk-based security investment decisions",
        "Regulatory compliance achievement",
        "Enhanced security culture and awareness"
      ],
      stats: [
        { value: "150+", label: "Organizations Advised" },
        { value: "98%", label: "Compliance Success" },
        { value: "40+", label: "Security Frameworks" },
        { value: "85%", label: "Risk Reduction" }
      ]
    }
  ];

  const additionalServices = [
    {
      title: "Cloud Security Assessment",
      description: "Comprehensive evaluation of cloud infrastructure security across AWS, Azure, and GCP platforms.",
      icon: Cloud,
      color: "text-blue-600"
    },
    {
      title: "Security Auditing",
      description: "Thorough evaluation of security controls and compliance with industry standards and frameworks.",
      icon: FileCheck,
      color: "text-green-600"
    },
    {
      title: "Incident Response",
      description: "24/7 rapid response and recovery services for security incidents and data breaches.",
      icon: AlertTriangle,
      color: "text-red-600"
    },
    {
      title: "Security Training",
      description: "Comprehensive security awareness training programs and phishing simulation exercises.",
      icon: Award,
      color: "text-purple-600"
    },
    {
      title: "Risk Management",
      description: "Strategic risk assessment and management services using quantitative and qualitative methods.",
      icon: Target,
      color: "text-orange-600"
    },
    {
      title: "Compliance Services",
      description: "Ensure compliance with GDPR, PCI-DSS, ISO 27001, SOX, and other regulatory requirements.",
      icon: CheckCircle,
      color: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-cyan/5" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-cyan/40 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/20 rounded-full animate-pulse delay-2000" />
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-cyan/30 rounded-full animate-pulse delay-3000" />
        </div>
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary">
            <Shield className="w-4 h-4 mr-2" />
            Cybersecurity Services
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Comprehensive Security Solutions
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Protect your digital assets with our industry-leading cybersecurity services. 
            From penetration testing to managed security operations, we provide end-to-end protection.
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
                    <div className="flex items-center space-x-3 mb-4 group">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} text-white transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg`}>
                        <IconComponent className="h-6 w-6 transition-transform duration-300" />
                      </div>
                      <Badge variant="outline" className="text-xs transition-all duration-300 group-hover:border-primary/50">
                        Core Service
                      </Badge>
                    </div>
                    
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
                        {service.features.slice(0, 6).map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-sm group/feature hover:bg-muted/30 p-2 rounded-md transition-all duration-200" style={{animationDelay: `${idx * 100}ms`}}>
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0 transition-transform duration-200 group-hover/feature:scale-110" />
                            <span className="transition-colors duration-200 group-hover/feature:text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Link href={`/services/${service.id}`}>
                        <Button className={`group bg-gradient-to-r ${service.gradient} text-white hover:opacity-90 hover:scale-105 hover:shadow-lg transition-all duration-300 relative overflow-hidden`}>
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
                                <ArrowRight className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
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
              Additional Security Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized security services to complement your comprehensive security strategy.
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get started with a comprehensive security assessment and discover how we can protect your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-cyber text-white" asChild>
                <Link href="/contact">
                  Start Your Security Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}