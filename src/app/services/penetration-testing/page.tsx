'use client';

import { ArrowRight, Shield, Target, Search, AlertTriangle, CheckCircle, Clock, Eye, Zap, Star, Users, Award, Globe, Database } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function PenetrationTestingPage() {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Planning and Scoping",
      description: "Define goals, target systems, and rules of engagement with compliance needs (PCI-DSS, HIPAA). Determine test type (black-box, white-box, gray-box)."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Reconnaissance",
      description: "Gather intelligence using WHOIS, Shodan, and social engineering. Passive (OSINT) and active scanning methods to map the target environment."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Vulnerability Identification",
      description: "Use tools like Nmap, Burp Suite, Metasploit and manual techniques to find weaknesses like unpatched software and misconfigurations."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Exploitation",
      description: "Attempt to exploit identified vulnerabilities to gain unauthorized access, escalate privileges, or extract data using controlled methods."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Post-Exploitation",
      description: "Assess impact of successful exploits, evaluate lateral movement potential, and test persistence mechanisms like backdoors."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Reporting and Remediation",
      description: "Deliver detailed reports with exploited vulnerabilities, attack paths, impact assessment, and actionable remediation steps."
    }
  ];

  const process = [
    {
      step: "01",
      title: "Planning and Scoping",
      description: "Define goals, target systems, and rules of engagement with the client. Determine test type and compliance needs (PCI-DSS, HIPAA)."
    },
    {
      step: "02",
      title: "Reconnaissance",
      description: "Gather information about the target using WHOIS, Shodan, or social engineering. Use passive (OSINT) or active (direct scanning) methods."
    },
    {
      step: "03",
      title: "Vulnerability Identification",
      description: "Use tools like Nmap, Burp Suite, Metasploit and manual techniques to find weaknesses like unpatched software, misconfigurations, or weak credentials."
    },
    {
      step: "04",
      title: "Exploitation",
      description: "Attempt to exploit identified vulnerabilities to gain unauthorized access, escalate privileges, or extract data. Example: SQL injection to access databases."
    },
    {
      step: "05",
      title: "Post-Exploitation",
      description: "Assess the impact of successful exploits, evaluate lateral movement potential and persistence mechanisms like backdoors."
    },
    {
      step: "06",
      title: "Reporting and Remediation",
      description: "Deliver detailed report with exploited vulnerabilities, attack paths, impact, and remediation steps. Re-test to confirm fixes."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Proactive Security",
      description: "Identify vulnerabilities before attackers do"
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Compliance Ready",
      description: "Meet industry standards and regulatory requirements"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Expert Analysis",
      description: "Detailed insights from certified security professionals"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Rapid Response",
      description: "Fast turnaround with actionable recommendations"
    }
  ];

  const stats = [
    { value: "500+", label: "Tests Completed" },
    { value: "99.9%", label: "Accuracy Rate" },
    { value: "24h", label: "Report Delivery" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-background overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-background to-orange-950/20" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse" />
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {/* Large glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/20 rounded-full blur-2xl animate-pulse shadow-2xl shadow-red-500/10" />
            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl animate-pulse delay-1000 shadow-2xl shadow-orange-500/10" />
            <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-red-400/20 rounded-full blur-xl animate-pulse delay-500 shadow-2xl shadow-red-400/10" />
            
            {/* Medium particles */}
            <div className="absolute top-1/5 left-3/4 w-6 h-6 bg-red-400/50 rounded-full blur-sm animate-bounce delay-200 shadow-lg shadow-red-400/20" />
            <div className="absolute top-3/5 left-1/8 w-4 h-4 bg-orange-400/50 rounded-full blur-sm animate-bounce delay-800 shadow-lg shadow-orange-400/20" />
            <div className="absolute bottom-1/5 right-1/8 w-8 h-8 bg-red-300/50 rounded-full blur-sm animate-bounce delay-1400 shadow-lg shadow-red-300/20" />
            
            {/* Small floating particles */}
            <div className="absolute top-1/3 left-1/2 w-3 h-3 bg-red-400/60 rounded-full animate-bounce delay-300 shadow-md shadow-red-400/30" />
            <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-orange-400/60 rounded-full animate-bounce delay-700 shadow-md shadow-orange-400/30" />
            <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-red-300/60 rounded-full animate-bounce delay-1200 shadow-md shadow-red-300/30" />
            
            {/* Bright sparkle particles */}
            <div className="absolute top-1/4 left-3/5 w-1 h-1 bg-white rounded-full animate-ping delay-100 shadow-lg shadow-white/50" />
            <div className="absolute top-3/4 left-2/5 w-1 h-1 bg-white rounded-full animate-ping delay-1000 shadow-lg shadow-white/50" />
            <div className="absolute top-1/2 left-4/5 w-1 h-1 bg-white rounded-full animate-ping delay-1500 shadow-lg shadow-white/50" />
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Advanced Penetration Testing 🎯
            </Badge>
            
            {/* Main Heading */}
            <h1 className="font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Comprehensive Security
              </span>
              <br />
              <span className="text-foreground">
                Penetration Testing
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground mb-8">
              Identify vulnerabilities before attackers do. Our expert penetration testing services provide comprehensive security assessments to protect your organization from cyber threats.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-red-500/20 hover:border-red-500/40 hover:bg-red-500/5">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-red-950/10 via-background to-orange-950/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
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
                Comprehensive Testing
              </span>
              <span className="text-foreground"> Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our penetration testing services cover all aspects of your security infrastructure to ensure comprehensive protection.
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
                Our Testing
              </span>
              <span className="text-foreground"> Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to identify, exploit, and remediate security vulnerabilities in your infrastructure.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-red-500/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold">
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
                Key Benefits
              </span>
              <span className="text-foreground"> & Outcomes</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Strengthen your security posture with actionable insights and expert recommendations.
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

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-red-950/10 via-background to-orange-950/10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Ready to Secure
            </span>
            <span className="text-foreground"> Your Infrastructure?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive penetration testing services and identify vulnerabilities before they become threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Schedule Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-red-500/20 hover:border-red-500/40 hover:bg-red-500/5">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}