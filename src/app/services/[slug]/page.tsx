"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Eye, 
  Cloud,
  CheckCircle, 
  ArrowRight,
  ArrowLeft,
  Zap,
  Target,
  Users,
  Clock,
  Award,
  TrendingUp,
  AlertTriangle,
  Server,
  Globe,
  Cpu,
  Database,
  Star,
  Sparkles
} from "lucide-react";

// Service data
const servicesData = {
  "penetration-testing": {
    id: "penetration-testing",
    title: "Penetration Testing",
    subtitle: "Ethical Hacking & Vulnerability Assessment",
    description: "Comprehensive security testing to identify vulnerabilities before malicious actors do. Our expert ethical hackers simulate real-world attacks to strengthen your defenses.",
    icon: Lock,
    features: [
      { title: "Network Penetration Testing", icon: <Globe className="w-6 h-6" />, description: "Comprehensive network infrastructure testing" },
      { title: "Web Application Security Testing", icon: <Eye className="w-6 h-6" />, description: "In-depth web application vulnerability assessment" },
      { title: "Mobile Application Testing", icon: <Cpu className="w-6 h-6" />, description: "Mobile app security evaluation" },
      { title: "Social Engineering Assessments", icon: <Users className="w-6 h-6" />, description: "Human factor security testing" },
      { title: "Wireless Network Testing", icon: <Zap className="w-6 h-6" />, description: "WiFi and wireless security assessment" },
      { title: "Physical Security Testing", icon: <Lock className="w-6 h-6" />, description: "Physical access control evaluation" }
    ],
    benefits: [
      "Identify critical vulnerabilities",
      "Prevent data breaches",
      "Compliance with security standards",
      "Detailed remediation guidance",
      "Risk prioritization",
      "Executive summary reports"
    ],
    process: [
      { step: "Planning & Reconnaissance", desc: "Define scope and gather intelligence" },
      { step: "Scanning & Enumeration", desc: "Identify live systems and services" },
      { step: "Vulnerability Assessment", desc: "Discover potential security weaknesses" },
      { step: "Exploitation", desc: "Attempt to exploit identified vulnerabilities" },
      { step: "Post-Exploitation", desc: "Assess impact and potential damage" },
      { step: "Reporting", desc: "Comprehensive report with remediation steps" }
    ],
    stats: [
      { value: "500+", label: "Tests Completed" },
      { value: "99.9%", label: "Accuracy Rate" },
      { value: "24h", label: "Report Delivery" },
      { value: "100%", label: "Client Satisfaction" }
    ]
  },
  "security-consulting": {
    id: "security-consulting",
    title: "Security Consulting",
    subtitle: "Strategic Security Advisory & Implementation",
    description: "Expert guidance to build robust security frameworks, policies, and procedures tailored to your organization's unique needs and compliance requirements.",
    icon: Shield,
    features: [
      { title: "Security Strategy Development", icon: <Target className="w-6 h-6" />, description: "Comprehensive security roadmap creation" },
      { title: "Risk Assessment & Management", icon: <Shield className="w-6 h-6" />, description: "Identify and mitigate security risks" },
      { title: "Compliance Consulting", icon: <CheckCircle className="w-6 h-6" />, description: "Ensure regulatory compliance" },
      { title: "Security Architecture Review", icon: <Database className="w-6 h-6" />, description: "Evaluate security infrastructure design" },
      { title: "Policy & Procedure Development", icon: <Server className="w-6 h-6" />, description: "Create security policies and procedures" },
      { title: "Security Training Programs", icon: <Users className="w-6 h-6" />, description: "Build security-conscious culture" }
    ],
    benefits: [
      "Comprehensive security strategy",
      "Regulatory compliance assurance",
      "Risk mitigation planning",
      "Cost-effective security investments",
      "Employee security awareness",
      "Continuous improvement framework"
    ],
    process: [
      { step: "Current State Assessment", desc: "Evaluate existing security posture" },
      { step: "Gap Analysis", desc: "Identify security gaps and weaknesses" },
      { step: "Strategy Development", desc: "Create comprehensive security roadmap" },
      { step: "Implementation Planning", desc: "Develop detailed implementation plan" },
      { step: "Execution Support", desc: "Guide implementation and deployment" },
      { step: "Monitoring & Review", desc: "Ongoing assessment and optimization" }
    ],
    stats: [
      { value: "200+", label: "Organizations Advised" },
      { value: "95%", label: "Compliance Success" },
      { value: "60%", label: "Risk Reduction" },
      { value: "24/7", label: "Support Available" }
    ]
  },
  "managed-security": {
    id: "managed-security",
    title: "Managed Security Services",
    subtitle: "24/7 Security Operations & Monitoring",
    description: "Round-the-clock security monitoring, threat detection, and incident response services to protect your organization from evolving cyber threats.",
    icon: Eye,
    features: [
      { title: "24/7 Security Operations Center", icon: <Eye className="w-6 h-6" />, description: "Round-the-clock monitoring" },
      { title: "Real-time Threat Monitoring", icon: <Target className="w-6 h-6" />, description: "Advanced threat identification" },
      { title: "Incident Response Services", icon: <Zap className="w-6 h-6" />, description: "Rapid incident handling" },
      { title: "Vulnerability Management", icon: <Shield className="w-6 h-6" />, description: "Proactive vulnerability handling" },
      { title: "Security Event Correlation", icon: <Database className="w-6 h-6" />, description: "Centralized security monitoring" },
      { title: "Threat Intelligence Integration", icon: <CheckCircle className="w-6 h-6" />, description: "Advanced threat intelligence" }
    ],
    benefits: [
      "Continuous security monitoring",
      "Rapid threat detection",
      "Expert incident response",
      "Reduced security overhead",
      "Proactive threat hunting",
      "Comprehensive reporting"
    ],
    process: [
      { step: "Environment Assessment", desc: "Analyze current security infrastructure" },
      { step: "Service Deployment", desc: "Deploy monitoring and detection tools" },
      { step: "Baseline Establishment", desc: "Create normal behavior baselines" },
      { step: "Continuous Monitoring", desc: "24/7 threat detection and analysis" },
      { step: "Incident Response", desc: "Rapid response to security incidents" },
      { step: "Reporting & Optimization", desc: "Regular reports and service tuning" }
    ],
    stats: [
      { value: "24/7", label: "Monitoring Coverage" },
      { value: "5min", label: "Detection Time" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "1000+", label: "Threats Blocked Daily" }
    ]
  },
  "cloud-security": {
    id: "cloud-security",
    title: "Cloud Security",
    subtitle: "Secure Cloud Infrastructure & Applications",
    description: "Comprehensive cloud security solutions to protect your cloud infrastructure, applications, and data across all major cloud platforms.",
    icon: Cloud,
    features: [
      { title: "Cloud Security Assessment", icon: <Eye className="w-6 h-6" />, description: "Comprehensive cloud security evaluation" },
      { title: "Multi-Cloud Security Architecture", icon: <Cloud className="w-6 h-6" />, description: "Secure multi-cloud architecture design" },
      { title: "Container & Kubernetes Security", icon: <Cpu className="w-6 h-6" />, description: "Container security and orchestration" },
      { title: "Cloud Compliance Management", icon: <CheckCircle className="w-6 h-6" />, description: "Cloud compliance assurance" },
      { title: "Identity & Access Management", icon: <Users className="w-6 h-6" />, description: "Secure user access controls" },
      { title: "Data Protection & Encryption", icon: <Lock className="w-6 h-6" />, description: "Advanced data protection measures" }
    ],
    benefits: [
      "Secure cloud migration",
      "Multi-cloud visibility",
      "Automated compliance",
      "Scalable security controls",
      "Cost optimization",
      "DevSecOps integration"
    ],
    process: [
      { step: "Cloud Assessment", desc: "Evaluate current cloud security posture" },
      { step: "Architecture Design", desc: "Design secure cloud architecture" },
      { step: "Security Implementation", desc: "Deploy security controls and policies" },
      { step: "Compliance Validation", desc: "Ensure regulatory compliance" },
      { step: "Monitoring Setup", desc: "Implement continuous monitoring" },
      { step: "Optimization", desc: "Ongoing security optimization" }
    ],
    stats: [
      { value: "100+", label: "Cloud Deployments" },
      { value: "99.99%", label: "Security Uptime" },
      { value: "50%", label: "Cost Reduction" },
      { value: "0", label: "Security Incidents" }
    ]
  }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const service = servicesData[params.slug as keyof typeof servicesData];
  
  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section - Smaller and Modern */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Button variant="ghost" size="sm" asChild className="mb-4 text-slate-300 hover:text-white hover:bg-slate-800/50">
              <Link href="/services" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Services
              </Link>
            </Button>
            
            <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0">
              <IconComponent className="h-4 w-4 mr-2" />
              {service.title}
            </Badge>
            
            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              {service.subtitle}
            </h1>
            
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white" asChild>
                <Link href="/contact">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Modern Design */}
      <section className="py-12 border-y border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {service.stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced Design */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-blue-400 mr-2" />
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Service Features
              </h2>
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive capabilities designed to meet your security needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg text-blue-400 group-hover:from-blue-600/30 group-hover:to-cyan-600/30 transition-all">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Modern Timeline */}
      <section className="py-16 bg-gradient-to-r from-slate-900/80 to-slate-800/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-cyan-400 mr-2" />
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Our Process
              </h2>
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              A systematic approach ensuring comprehensive coverage and optimal results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <CardTitle className="text-lg text-white">{step.step}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-slate-300">
                    {step.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Grid Layout */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-green-400 mr-2" />
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  Key Benefits
                </h2>
              </div>
              <p className="text-lg text-slate-300">
                Why choose our {service.title.toLowerCase()} services?
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center space-x-3 text-base">
                      <CheckCircle className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform" />
                      <span className="text-white">{benefit}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Gradient */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 text-center relative">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-6 w-6 text-white mr-2" />
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Ready to Get Started?
            </h2>
          </div>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-white/90">
            Contact us today to discuss your {service.title.toLowerCase()} needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100" asChild>
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900" asChild>
              <Link href="/contact">
                Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}