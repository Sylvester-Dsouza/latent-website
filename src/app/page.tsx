import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PulsingParticleBackground } from "@/components/ui/pulsing-particle-background";
import { CTASection } from "@/components/ui/cta-section";
import { Shield, Lock, Eye, Zap, Users, Award, ArrowRight, Sparkles, AlertTriangle, TrendingUp, Building, CheckCircle, Clock, Globe, HelpCircle, ChevronDown } from "lucide-react";


export default function Home() {
  return (
    <>
      <div className="flex flex-col relative">
        {/* Global Pulsing Particle Background */}
        <PulsingParticleBackground />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Light background image with increased opacity */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
            style={{ backgroundImage: 'url(/light-bg.jpg)' }}
          />
          
          {/* Very light overlay to blend with theme */}
          <div className="absolute inset-0 bg-background/10 z-10" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse z-20" />
          
          {/* Floating particles */}
          <div className="absolute inset-0 z-30">
            {/* Large glowing orbs */}
            <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-muted/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-muted/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-muted/10 rounded-full blur-2xl animate-pulse delay-500" />
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-muted/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-muted/5 rounded-full blur-xl animate-pulse delay-500"></div>
          </div>
          
          {/* Minimal overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-40" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/20 border border-muted/40">
                  <Shield className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-primary font-medium text-sm">Trusted by 500+ Organizations</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                    Defend Your Digital
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                    Future Today
                  </span>
                </h1>
                
                {/* Description */}
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Comprehensive cybersecurity services to protect your business from evolving threats. 
                  From penetration testing to compliance audits, we secure your digital future.
                </p>
              </div>



              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="relative group bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="/contact">
                    <span className="relative z-10 flex items-center">
                      Get Free Assessment
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="border-2 border-foreground/20 hover:border-foreground/40 text-foreground hover:bg-foreground/5 font-semibold px-8 py-4 rounded-xl transition-all duration-300" asChild>
                  <Link href="/services">
                    <Shield className="w-5 h-5 mr-2" />
                    View Our Services
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  Setup in minutes
                </div>
              </div>
            </div>

            {/* Right Side - Security Dashboard Model */}
            <div className="relative">
              <div className="relative">
                {/* Main Security Dashboard Card */}
                <Card className="relative p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-foreground/10 rounded-3xl shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                          <Shield className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">Security Dashboard</h3>
                          <p className="text-sm text-muted-foreground">Real-time protection</p>
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    </div>

                    {/* Security Metrics */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-muted/40">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium">Threat Detection</span>
                        </div>
                        <span className="text-primary font-bold">Active</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-muted/40">
                        <div className="flex items-center space-x-3">
                          <Eye className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium">Network Monitoring</span>
                        </div>
                        <span className="text-primary font-bold">Secured</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-muted/40">
                        <div className="flex items-center space-x-3">
                          <Lock className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium">Data Encryption</span>
                        </div>
                        <span className="text-primary font-bold">Protected</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Security Score</span>
                        <span className="text-foreground font-medium">98%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-[98%] animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-muted/20 rounded-2xl backdrop-blur-sm border border-muted/40 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-muted/20 rounded-2xl backdrop-blur-sm border border-muted/40 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/10 to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        <div className="relative container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/20 border border-muted/40 mb-6">
              <Shield className="w-4 h-4 mr-2 text-primary" />
              <span className="text-primary font-medium text-sm">Our Services 🔒</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection across all vectors of your digital infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Security Audits</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive security assessments to identify vulnerabilities and strengthen your defenses against evolving threats.
                </p>
              </div>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Penetration Testing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ethical hacking to discover security weaknesses before malicious actors do, ensuring robust protection.
                </p>
              </div>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Threat Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  24/7 monitoring and rapid response to emerging security threats and incidents with real-time alerts.
                </p>
              </div>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Incident Response</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rapid containment and recovery services to minimize damage from security breaches and restore operations.
                </p>
              </div>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Security Training</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive training programs to educate your team on security best practices and threat awareness.
                </p>
              </div>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ensure your organization meets industry standards and regulatory requirements with expert guidance.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/5 to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        <div className="relative container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/20 border border-muted/40 mb-6">
              <Users className="w-4 h-4 mr-2 text-primary" />
              <span className="text-primary font-medium text-sm">Testimonials ⭐</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our clients say about our cybersecurity solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                quote: "Latent's cybersecurity solutions have been instrumental in protecting our digital assets. Their proactive approach and 24/7 monitoring give us peace of mind.",
                author: "Sarah Johnson",
                role: "CTO, TechCorp",
                company: "TechCorp",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
              },
              {
                quote: "The incident response team at Latent is exceptional. When we faced a security threat, they responded within minutes and contained the issue effectively.",
                author: "Michael Chen",
                role: "Security Director, FinanceFlow",
                company: "FinanceFlow",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
              },
              {
                quote: "Working with Latent has transformed our security posture. Their comprehensive approach covers all our needs from threat detection to compliance.",
                author: "Emily Rodriguez",
                role: "IT Manager, HealthTech Solutions",
                company: "HealthTech",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format&q=80"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group p-6 border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-6">
                  <p className="text-foreground/90 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={`${testimonial.author} avatar`}
                    className="w-12 h-12 rounded-full object-cover mr-4 group-hover:ring-2 group-hover:ring-primary/20 transition-all duration-300"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>


        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          {/* Subtle Radial Gradient */}
          <div className="absolute inset-0 bg-gradient-radial from-slate-900/30 via-black to-black" />
        </div>
        
        <div className="relative container mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm mb-8">
              <Building className="w-4 h-4 mr-2 text-slate-400" />
              <span className="text-slate-400 font-medium text-sm">Industry Expertise</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Specialized Security for Every Sector
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deep industry knowledge and tailored security solutions for diverse business environments
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Financial Services */}
            <Card className="group relative p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Financial Services</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Comprehensive security for banks, fintech, and investment firms with regulatory compliance expertise.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    PCI DSS Compliance
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    Anti-fraud Systems
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    Transaction Security
                  </div>
                </div>
              </div>
            </Card>

            {/* Healthcare */}
            <Card className="group relative p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Healthcare</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  HIPAA-compliant security solutions protecting sensitive patient data and medical systems.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    HIPAA Compliance
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    Medical Device Security
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    Patient Data Protection
                  </div>
                </div>
              </div>
            </Card>

            {/* Technology */}
            <Card className="group relative p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Technology</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Advanced security for SaaS platforms, cloud infrastructure, and emerging technologies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    Cloud Security
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    API Protection
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    DevSecOps Integration
                  </div>
                </div>
              </div>
            </Card>

            {/* Government */}
            <Card className="group relative p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Government</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  High-security solutions for government agencies with clearance-ready personnel.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    FedRAMP Compliance
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    Classified Systems
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    National Security
                  </div>
                </div>
              </div>
            </Card>

            {/* E-commerce */}
            <Card className="group relative p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">E-commerce</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Secure online transactions and customer data protection for retail platforms.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    Payment Security
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    Customer Data Protection
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    Fraud Prevention
                  </div>
                </div>
              </div>
            </Card>

            {/* Critical Infrastructure */}
            <Card className="group relative p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">Critical Infrastructure</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  Protecting essential services and infrastructure with military-grade security protocols.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    SCADA Security
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    Industrial Control Systems
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <CheckCircle className="w-3 h-3 mr-2 text-primary" />
                    National Infrastructure
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
            <span className="text-primary font-medium text-sm">Why Choose Us ✨</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-8 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Advanced Security Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our comprehensive cybersecurity platform offers cutting-edge features designed to protect your business from evolving threats.
            </p>
          </div>

          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-12 gap-6">
            {/* Large Feature Card - Spans 8 columns */}
            <div className="col-span-12 lg:col-span-8">
              <div className="relative group h-full">
                <Card className="relative h-full p-10 border-2 border-transparent bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm hover:bg-black transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 rounded-3xl">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-24 h-24 bg-primary/20 rounded-3xl group-hover:scale-110 transition-transform duration-500">
                        <Shield className="h-12 w-12 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4 text-foreground">AI-Powered Threat Detection</h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        Advanced machine learning algorithms analyze patterns and behaviors to detect sophisticated threats in real-time, providing unparalleled protection against zero-day attacks and advanced persistent threats.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center text-primary">
                          <CheckCircle className="w-5 h-5 mr-3" />
                          <span className="text-sm">99.9% Detection Rate</span>
                        </div>
                        <div className="flex items-center text-primary">
                          <CheckCircle className="w-5 h-5 mr-3" />
                          <span className="text-sm">Real-time Analysis</span>
                        </div>
                        <div className="flex items-center text-primary">
                          <CheckCircle className="w-5 h-5 mr-3" />
                          <span className="text-sm">Zero-day Protection</span>
                        </div>
                        <div className="flex items-center text-primary">
                          <CheckCircle className="w-5 h-5 mr-3" />
                          <span className="text-sm">Behavioral Analytics</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Smaller Feature Card - Spans 4 columns */}
            <div className="col-span-12 lg:col-span-4">
              <div className="relative group h-full">
                <Card className="relative h-full p-8 border-2 border-transparent bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm hover:bg-black transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 rounded-3xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-20 h-20 mb-6 bg-primary/20 rounded-2xl group-hover:scale-110 transition-transform duration-500 mx-auto">
                      <Award className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Compliance Ready</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Built-in compliance frameworks for SOC 2, ISO 27001, GDPR, and other industry standards.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-primary">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm">SOC 2 Type II</span>
                      </div>
                      <div className="flex items-center justify-center text-primary">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-sm">ISO 27001</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Medium Feature Cards - 2 cards spanning 6 columns each */}
            <div className="col-span-12 lg:col-span-6">
              <div className="relative group h-full">
                <Card className="relative h-full p-8 border-2 border-transparent bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm hover:bg-black transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 rounded-3xl">
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      <Eye className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">24/7 Monitoring</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Round-the-clock surveillance with instant alerts and automated response protocols.
                      </p>
                      <div className="flex items-center text-primary">
                        <Globe className="w-4 h-4 mr-2" />
                        <span className="text-sm">Global SOC Coverage</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="relative group h-full">
                <Card className="relative h-full p-8 border-2 border-transparent bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm hover:bg-black transition-all duration-700 hover:shadow-2xl hover:-translate-y-1 rounded-3xl">
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">Rapid Response</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Lightning-fast incident response with automated containment and remediation.
                      </p>
                      <div className="flex items-center text-primary">
                        <Clock className="w-4 h-4 mr-2" />
                        <span className="text-sm">&lt;5min Response Time</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Process Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
        
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Security Methodology 🛡️
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-foreground">
              Our Security Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive four-stage methodology designed to protect, monitor, and evolve your security posture
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border rounded-full hidden lg:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Step 1 - Assessment */}
              <div className="relative flex items-center">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="relative group">
                    <Card className="relative p-8 bg-card border hover:border-muted-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-2xl">
                      <div className="flex items-start gap-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-muted/50 rounded-2xl group-hover:bg-muted transition-colors duration-300 flex-shrink-0">
                          <Eye className="h-10 w-10 text-foreground" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-muted-foreground mb-2">01</div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Security Assessment</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            Comprehensive evaluation of your current security infrastructure, identifying vulnerabilities and risk vectors across all systems.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Vulnerability Scanning</span>
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Risk Analysis</span>
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Compliance Check</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-muted-foreground rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>
                
                <div className="lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Step 2 - Strategy */}
              <div className="relative flex items-center">
                <div className="lg:w-1/2 lg:pr-12"></div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-muted-foreground rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="relative group">
                    <Card className="relative p-8 bg-card border hover:border-muted-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-2xl">
                      <div className="flex items-start gap-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-muted/50 rounded-2xl group-hover:bg-muted transition-colors duration-300 flex-shrink-0">
                          <Shield className="h-10 w-10 text-foreground" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-muted-foreground mb-2">02</div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Strategic Planning</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            Develop customized security strategies aligned with your business objectives and regulatory requirements.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Policy Development</span>
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Framework Design</span>
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Resource Planning</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Step 3 - Implementation */}
              <div className="relative flex items-center">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="relative group">
                    <Card className="relative p-8 bg-card border hover:border-muted-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-2xl">
                      <div className="flex items-start gap-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-muted/50 rounded-2xl group-hover:bg-muted transition-colors duration-300 flex-shrink-0">
                          <Zap className="h-10 w-10 text-foreground" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-muted-foreground mb-2">03</div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Implementation</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            Deploy cutting-edge security solutions with minimal business disruption and maximum protection coverage.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">System Deployment</span>
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Integration</span>
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Testing</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-muted-foreground rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>
                
                <div className="lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Step 4 - Monitoring */}
              <div className="relative flex items-center">
                <div className="lg:w-1/2 lg:pr-12"></div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-muted-foreground rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="relative group">
                    <Card className="relative p-8 bg-card border hover:border-muted-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-2xl">
                      <div className="flex items-start gap-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-muted/50 rounded-2xl group-hover:bg-muted transition-colors duration-300 flex-shrink-0">
                          <TrendingUp className="h-10 w-10 text-foreground" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-muted-foreground mb-2">04</div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Continuous Monitoring</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            24/7 monitoring and optimization to adapt to evolving threats and maintain peak security performance.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Real-time Monitoring</span>
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Threat Detection</span>
                            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">Performance Optimization</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Certification Section */}
          <div className="mt-20 text-center">
            <div className="relative group inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-50"></div>
              <Card className="relative p-8 border border-green-500/20 bg-gradient-to-r from-green-500/5 to-blue-500/5 backdrop-blur-sm rounded-2xl">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-3" />
                    <span className="text-primary font-medium">ISO 27001 Certified</span>
                  </div>
                  <div className="w-px h-6 bg-border hidden sm:block"></div>
                  <div className="flex items-center">
                     <CheckCircle className="w-5 h-5 text-primary mr-3" />
                     <span className="text-primary font-medium">NIST Framework</span>
                   </div>
                   <div className="w-px h-6 bg-border hidden sm:block"></div>
                   <div className="flex items-center">
                     <CheckCircle className="w-5 h-5 text-primary mr-3" />
                     <span className="text-primary font-medium">Zero Trust Architecture</span>
                   </div>
                 </div>
               </Card>
             </div>
           </div>
         </div>
       </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-4">
              <HelpCircle className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-blue-400 font-medium text-sm">Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">
              Security Questions Answered
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get expert insights on cybersecurity challenges and discover how our solutions protect your organization
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <details className="group">
                <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">How quickly can you respond to a security incident?</h3>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-4 pb-2">
                  <p className="text-muted-foreground">
                    Our incident response team is available 24/7 with an average response time of less than 5 minutes for critical threats. We maintain dedicated security operations centers globally to ensure rapid response regardless of your location or time zone.
                  </p>
                </div>
              </details>
            </Card>

            <Card>
              <details className="group">
                <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">What industries do you specialize in?</h3>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-4 pb-2">
                  <p className="text-muted-foreground">
                    We serve diverse industries including financial services, healthcare, government, technology, e-commerce, and critical infrastructure. Our team has deep expertise in industry-specific compliance requirements like HIPAA, PCI DSS, FedRAMP, and SOX.
                  </p>
                </div>
              </details>
            </Card>

            <Card>
              <details className="group">
                <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">How do you ensure compliance with regulations?</h3>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-4 pb-2">
                  <p className="text-muted-foreground">
                    We follow established frameworks like NIST, ISO 27001, and implement Zero Trust architecture. Our compliance experts stay current with evolving regulations and work closely with your team to ensure all security measures meet or exceed industry standards and regulatory requirements.
                  </p>
                </div>
              </details>
            </Card>

            <Card>
              <details className="group">
                <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">What makes your penetration testing different?</h3>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-4 pb-2">
                  <p className="text-muted-foreground">
                    Our penetration testing goes beyond automated scans. We use a combination of manual testing, advanced tools, and real-world attack scenarios. Each test is customized to your environment and includes detailed remediation guidance with risk prioritization.
                  </p>
                </div>
              </details>
            </Card>

            <Card>
              <details className="group">
                <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">Do you provide ongoing security monitoring?</h3>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-4 pb-2">
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive 24/7 security monitoring through our Security Operations Centers (SOCs). This includes real-time threat detection, automated response to common threats, and immediate escalation of critical incidents to our expert analysts.
                  </p>
                </div>
              </details>
            </Card>

            <Card>
              <details className="group">
                <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">How do you handle sensitive data during assessments?</h3>
                  <ChevronDown className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-4 pb-2">
                  <p className="text-muted-foreground">
                    We maintain strict confidentiality protocols and are bound by comprehensive NDAs. All our security professionals undergo background checks and security clearances where required. Data is handled according to the highest security standards and is never retained longer than necessary.
                  </p>
                </div>
              </details>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Secure Your Digital Future?"
        description="Join leading organizations that trust LATENT INFORMATION TECHNOLOGY to protect their most valuable digital assets."
        secondaryButtonText="Learn More"
        secondaryButtonHref="/about"
      />

      </div>
    </>
  );
}
