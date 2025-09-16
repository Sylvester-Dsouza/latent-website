import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Zap, Users, Award, ArrowRight, Sparkles, AlertTriangle, TrendingUp, Building, CheckCircle, Clock, Globe, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-background to-purple-950/20" />
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px] animate-pulse" />
          
          {/* Floating particles */}
           <div className="absolute inset-0">
             {/* Large glowing orbs - much more visible */}
             <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500/30 rounded-full blur-2xl animate-pulse shadow-2xl shadow-blue-500/20" />
             <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-pulse delay-1000 shadow-2xl shadow-purple-500/20" />
             <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan-500/30 rounded-full blur-xl animate-pulse delay-500 shadow-2xl shadow-cyan-500/20" />
             <div className="absolute top-1/6 right-1/2 w-28 h-28 bg-green-500/25 rounded-full blur-xl animate-pulse delay-1500 shadow-2xl shadow-green-500/20" />
             <div className="absolute bottom-1/3 left-1/6 w-36 h-36 bg-indigo-500/25 rounded-full blur-2xl animate-pulse delay-2000 shadow-2xl shadow-indigo-500/20" />
             
             {/* Medium particles - more visible */}
             <div className="absolute top-1/5 left-3/4 w-8 h-8 bg-blue-400/70 rounded-full blur-sm animate-bounce delay-200 shadow-lg shadow-blue-400/30" />
             <div className="absolute top-3/5 left-1/8 w-6 h-6 bg-purple-400/70 rounded-full blur-sm animate-bounce delay-800 shadow-lg shadow-purple-400/30" />
             <div className="absolute bottom-1/5 right-1/8 w-10 h-10 bg-cyan-400/70 rounded-full blur-sm animate-bounce delay-1400 shadow-lg shadow-cyan-400/30" />
             <div className="absolute top-2/5 right-2/3 w-6 h-6 bg-green-400/70 rounded-full blur-sm animate-bounce delay-600 shadow-lg shadow-green-400/30" />
             <div className="absolute top-1/8 left-1/2 w-7 h-7 bg-pink-400/70 rounded-full blur-sm animate-bounce delay-1700 shadow-lg shadow-pink-400/30" />
             <div className="absolute bottom-1/8 right-1/2 w-5 h-5 bg-yellow-400/70 rounded-full blur-sm animate-bounce delay-2200 shadow-lg shadow-yellow-400/30" />
             
             {/* Small floating particles - more visible */}
             <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-blue-400/80 rounded-full animate-bounce delay-300 shadow-md shadow-blue-400/40" />
             <div className="absolute top-2/3 left-1/5 w-3 h-3 bg-purple-400/80 rounded-full animate-bounce delay-700 shadow-md shadow-purple-400/40" />
             <div className="absolute top-1/5 right-1/5 w-3 h-3 bg-cyan-400/80 rounded-full animate-bounce delay-1200 shadow-md shadow-cyan-400/40" />
             <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-green-400/80 rounded-full animate-bounce delay-900 shadow-md shadow-green-400/40" />
             <div className="absolute top-1/8 left-1/6 w-3 h-3 bg-blue-300/80 rounded-full animate-bounce delay-400 shadow-md shadow-blue-300/40" />
             <div className="absolute top-7/8 right-1/3 w-4 h-4 bg-purple-300/80 rounded-full animate-bounce delay-1100 shadow-md shadow-purple-300/40" />
             <div className="absolute top-3/8 left-4/5 w-3 h-3 bg-cyan-300/80 rounded-full animate-bounce delay-1600 shadow-md shadow-cyan-300/40" />
             <div className="absolute bottom-1/8 left-2/3 w-3 h-3 bg-green-300/80 rounded-full animate-bounce delay-1800 shadow-md shadow-green-300/40" />
             <div className="absolute top-5/8 right-1/6 w-4 h-4 bg-indigo-400/80 rounded-full animate-bounce delay-500 shadow-md shadow-indigo-400/40" />
             <div className="absolute bottom-3/8 right-3/4 w-3 h-3 bg-pink-400/80 rounded-full animate-bounce delay-1300 shadow-md shadow-pink-400/40" />
             <div className="absolute top-1/12 right-1/12 w-3 h-3 bg-blue-200/80 rounded-full animate-bounce delay-2100 shadow-md shadow-blue-200/40" />
             <div className="absolute bottom-1/12 left-1/12 w-3 h-3 bg-purple-200/80 rounded-full animate-bounce delay-2300 shadow-md shadow-purple-200/40" />
             
             {/* Bright sparkle particles */}
             <div className="absolute top-1/4 left-3/5 w-2 h-2 bg-white rounded-full animate-ping delay-100 shadow-lg shadow-white/50" />
             <div className="absolute top-3/4 left-2/5 w-2 h-2 bg-white rounded-full animate-ping delay-1000 shadow-lg shadow-white/50" />
             <div className="absolute top-1/2 left-4/5 w-2 h-2 bg-white rounded-full animate-ping delay-1500 shadow-lg shadow-white/50" />
             <div className="absolute bottom-1/4 right-2/5 w-2 h-2 bg-white rounded-full animate-ping delay-2000 shadow-lg shadow-white/50" />
             <div className="absolute top-1/6 left-1/5 w-2 h-2 bg-white rounded-full animate-ping delay-800 shadow-lg shadow-white/50" />
             <div className="absolute bottom-1/6 right-1/5 w-2 h-2 bg-white rounded-full animate-ping delay-1200 shadow-lg shadow-white/50" />
             <div className="absolute top-3/5 right-1/4 w-2 h-2 bg-white rounded-full animate-ping delay-1900 shadow-lg shadow-white/50" />
             <div className="absolute bottom-2/5 left-3/4 w-2 h-2 bg-white rounded-full animate-ping delay-2400 shadow-lg shadow-white/50" />
           </div>
          
          {/* Network connection lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" fill="none">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse" />
              <path d="M200,400 Q400,300 600,400 T1000,400" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse delay-500" />
              <path d="M50,600 Q250,500 450,600 T850,600" stroke="url(#lineGradient)" strokeWidth="1" className="animate-pulse delay-1000" />
              <circle cx="200" cy="200" r="3" fill="#3b82f6" className="animate-pulse" />
              <circle cx="500" cy="200" r="3" fill="#8b5cf6" className="animate-pulse delay-300" />
              <circle cx="800" cy="200" r="3" fill="#06b6d4" className="animate-pulse delay-600" />
            </svg>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          {/* Badge */}
          <Badge variant="secondary" className="mb-8 px-4 py-2 text-sm font-medium">
            <Shield className="w-4 h-4 mr-2" />
            Trusted by 500+ Organizations 🛡️
          </Badge>
          
          {/* Main Heading */}
          <h2 className="font-bold tracking-tight text-4xl sm:text-5xl lg:text-6xl mb-6 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Advanced Cybersecurity
            </span>
            <br />
            <span className="text-foreground drop-shadow-2xl">
              Solutions
            </span>
            {/* Subtle glow effect behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl -z-10 animate-pulse" />
          </h2>
          
          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground mb-10">
            Comprehensive cybersecurity services to protect your business from evolving threats. 
            From penetration testing to compliance audits, we secure your digital future.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="px-8 py-3 text-base font-medium" asChild>
              <Link href="/contact">
                Get Security Assessment
                <Shield className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" className="gradient-cyber text-white px-8 py-3 text-base font-medium" asChild>
              <Link href="/services">
                View Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/10 to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <Shield className="w-4 h-4 mr-2" />
              Our Services 🔒
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive protection across all vectors of your digital infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Shield className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Security Audits</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive security assessments to identify vulnerabilities and strengthen your defenses against evolving threats.
                </p>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center text-sm text-primary font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Lock className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Penetration Testing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ethical hacking to discover security weaknesses before malicious actors do, ensuring robust protection.
                </p>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center text-sm text-primary font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Eye className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Threat Monitoring</h3>
                <p className="text-muted-foreground leading-relaxed">
                  24/7 monitoring and rapid response to emerging security threats and incidents with real-time alerts.
                </p>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center text-sm text-primary font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Zap className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Incident Response</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rapid containment and recovery services to minimize damage from security breaches and restore operations.
                </p>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center text-sm text-primary font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Users className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Security Training</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive training programs to educate your team on security best practices and threat awareness.
                </p>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center text-sm text-primary font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>

            <Card className="group p-8 hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 hover:scale-105 bg-gradient-to-br from-background to-muted/30">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-muted/50 rounded-2xl shadow-lg group-hover:shadow-lg transition-all duration-300">
                  <Award className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ensure your organization meets industry standards and regulatory requirements with expert guidance.
                </p>
              </div>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center text-sm text-primary font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/10 via-background to-muted/10 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <TrendingUp className="w-4 h-4 mr-2" />
              Our Impact 📊
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Proven Results in Cybersecurity
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that demonstrate our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group p-8 text-center border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition-colors duration-300">
                <Shield className="h-8 w-8 text-blue-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <p className="text-muted-foreground text-sm">Organizations Protected</p>
            </Card>

            <Card className="group p-8 text-center border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-500/10 rounded-2xl group-hover:bg-green-500/20 transition-colors duration-300">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
              <p className="text-muted-foreground text-sm">Threat Detection Rate</p>
            </Card>

            <Card className="group p-8 text-center border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-purple-500/10 rounded-2xl group-hover:bg-purple-500/20 transition-colors duration-300">
                <Clock className="h-8 w-8 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">&lt;5min</div>
              <p className="text-muted-foreground text-sm">Average Response Time</p>
            </Card>

            <Card className="group p-8 text-center border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-cyan-500/10 rounded-2xl group-hover:bg-cyan-500/20 transition-colors duration-300">
                <Globe className="h-8 w-8 text-cyan-500" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <p className="text-muted-foreground text-sm">Global Monitoring</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/5 to-background overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
        
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Testimonials ⭐
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
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
                company: "TechCorp"
              },
              {
                quote: "The incident response team at Latent is exceptional. When we faced a security threat, they responded within minutes and contained the issue effectively.",
                author: "Michael Chen",
                role: "Security Director, FinanceFlow",
                company: "FinanceFlow"
              },
              {
                quote: "Working with Latent has transformed our security posture. Their comprehensive approach covers all our needs from threat detection to compliance.",
                author: "Emily Rodriguez",
                role: "IT Manager, HealthTech Solutions",
                company: "HealthTech"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="group p-6 border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-6">
                  <p className="text-foreground/90 italic leading-relaxed">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-muted/30 rounded-full flex items-center justify-center text-foreground font-bold mr-4 group-hover:bg-muted/50 transition-colors duration-300">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Company Logos */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-8 font-medium">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
                <div className="w-8 h-8 bg-muted/40 rounded"></div>
                TechCorp
              </div>
              <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
                <div className="w-8 h-8 bg-muted/40 rounded"></div>
                FinanceSecure
              </div>
              <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
                <div className="w-8 h-8 bg-muted/40 rounded"></div>
                DataFlow
              </div>
              <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
                <div className="w-8 h-8 bg-muted/40 rounded"></div>
                SecureNet
              </div>
              <div className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
                <div className="w-8 h-8 bg-muted/40 rounded"></div>
                CloudGuard
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/20 via-background to-slate-800/20 overflow-hidden">
        {/* Hexagonal Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 px-6 py-3 text-sm font-medium border-gradient-to-r from-blue-500/50 to-purple-500/50 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
              <Building className="w-4 h-4 mr-2" />
              Industry Expertise 🏢
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              Specialized Security for Every Sector
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deep industry knowledge and tailored security solutions for diverse business environments
            </p>
          </div>

          {/* Hexagonal-inspired Grid Layout */}
          <div className="relative">
            {/* Top Row - 2 cards */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <Card className="relative p-8 border-2 border-transparent bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-gradient-to-r hover:from-blue-500/50 hover:to-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 rounded-3xl">
                    <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Building className="h-10 w-10 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Financial Services</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Comprehensive security for banks, fintech, and investment firms with regulatory compliance expertise.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-blue-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        PCI DSS Compliance
                      </div>
                      <div className="flex items-center text-sm text-blue-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Anti-fraud Systems
                      </div>
                      <div className="flex items-center text-sm text-blue-400">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Transaction Security
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <Card className="relative p-8 border-2 border-transparent bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-gradient-to-r hover:from-green-500/50 hover:to-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 rounded-3xl">
                    <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-10 w-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Healthcare</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      HIPAA-compliant security solutions protecting sensitive patient data and medical systems.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        HIPAA Compliance
                      </div>
                      <div className="flex items-center text-sm text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Medical Device Security
                      </div>
                      <div className="flex items-center text-sm text-green-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Patient Data Protection
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Middle Row - 2 cards offset */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl md:translate-x-32">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <Card className="relative p-8 border-2 border-transparent bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-gradient-to-r hover:from-purple-500/50 hover:to-violet-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 rounded-3xl">
                    <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-10 w-10 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Technology</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Advanced security for SaaS platforms, cloud infrastructure, and emerging technologies.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-purple-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        Cloud Security
                      </div>
                      <div className="flex items-center text-sm text-purple-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        API Protection
                      </div>
                      <div className="flex items-center text-sm text-purple-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        DevSecOps Integration
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  <Card className="relative p-8 border-2 border-transparent bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-gradient-to-r hover:from-orange-500/50 hover:to-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 rounded-3xl">
                    <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Lock className="h-10 w-10 text-orange-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Government</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      High-security solutions for government agencies with clearance-ready personnel.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-orange-400">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        FedRAMP Compliance
                      </div>
                      <div className="flex items-center text-sm text-orange-400">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        Classified Systems
                      </div>
                      <div className="flex items-center text-sm text-orange-400">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                        National Security
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Bottom Row - 2 cards */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <div className="relative group">
                   <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                   <Card className="relative p-8 border-2 border-transparent bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-gradient-to-r hover:from-cyan-500/50 hover:to-teal-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2 rounded-3xl">
                     <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                       <Eye className="h-10 w-10 text-cyan-400" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 text-foreground">E-commerce</h3>
                     <p className="text-muted-foreground mb-6 leading-relaxed">
                       Secure online transactions and customer data protection for retail platforms.
                     </p>
                     <div className="space-y-2">
                       <div className="flex items-center text-sm text-cyan-400">
                         <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                         Payment Security
                       </div>
                       <div className="flex items-center text-sm text-cyan-400">
                         <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                         Customer Data Protection
                       </div>
                       <div className="flex items-center text-sm text-cyan-400">
                         <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                         Fraud Prevention
                       </div>
                     </div>
                   </Card>
                 </div>

                 <div className="relative group">
                   <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                   <Card className="relative p-8 border-2 border-transparent bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-gradient-to-r hover:from-yellow-500/50 hover:to-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-2 rounded-3xl">
                     <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                       <Zap className="h-10 w-10 text-yellow-400" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4 text-foreground">Critical Infrastructure</h3>
                     <p className="text-muted-foreground mb-6 leading-relaxed">
                       Protecting essential services and infrastructure with military-grade security protocols.
                     </p>
                     <div className="space-y-2">
                       <div className="flex items-center text-sm text-yellow-400">
                         <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                         SCADA Security
                       </div>
                       <div className="flex items-center text-sm text-yellow-400">
                         <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                         Industrial Control Systems
                       </div>
                       <div className="flex items-center text-sm text-yellow-400">
                         <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                         National Infrastructure
                       </div>
                     </div>
                   </Card>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Features Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-950/30 via-background to-purple-950/30 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-cyan-400/30 rounded-full animate-bounce" style={{animationDelay: '5s'}}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-8 px-6 py-3 text-sm font-medium border-indigo-500/50 bg-indigo-500/10 text-indigo-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Choose Us ✨
            </Badge>
            <h2 className="text-5xl font-bold tracking-tight mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
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
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                <Card className="relative h-full p-10 border-2 border-transparent bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm hover:border-gradient-to-r hover:from-blue-500/50 hover:to-cyan-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 rounded-3xl">
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl group-hover:scale-110 transition-transform duration-500">
                        <Shield className="h-12 w-12 text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold mb-4 text-foreground">AI-Powered Threat Detection</h3>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        Advanced machine learning algorithms analyze patterns and behaviors to detect sophisticated threats in real-time, providing unparalleled protection against zero-day attacks and advanced persistent threats.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center text-blue-400">
                          <CheckCircle className="w-5 h-5 mr-3" />
                          <span className="text-sm">99.9% Detection Rate</span>
                        </div>
                        <div className="flex items-center text-blue-400">
                          <CheckCircle className="w-5 h-5 mr-3" />
                          <span className="text-sm">Real-time Analysis</span>
                        </div>
                        <div className="flex items-center text-blue-400">
                          <CheckCircle className="w-5 h-5 mr-3" />
                          <span className="text-sm">Zero-day Protection</span>
                        </div>
                        <div className="flex items-center text-blue-400">
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                <Card className="relative h-full p-8 border-2 border-transparent bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm hover:border-gradient-to-r hover:from-purple-500/50 hover:to-violet-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1 rounded-3xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-500 mx-auto">
                      <Award className="h-10 w-10 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Compliance Ready</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Built-in compliance frameworks for SOC 2, ISO 27001, GDPR, and other industry standards.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-purple-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        <span className="text-sm">SOC 2 Type II</span>
                      </div>
                      <div className="flex items-center justify-center text-purple-400">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                <Card className="relative h-full p-8 border-2 border-transparent bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm hover:border-gradient-to-r hover:from-cyan-500/50 hover:to-teal-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-1 rounded-3xl">
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      <Eye className="h-8 w-8 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">24/7 Monitoring</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Round-the-clock surveillance with instant alerts and automated response protocols.
                      </p>
                      <div className="flex items-center text-cyan-400">
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
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                <Card className="relative h-full p-8 border-2 border-transparent bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-sm hover:border-gradient-to-r hover:from-orange-500/50 hover:to-red-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1 rounded-3xl">
                  <div className="flex items-start gap-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      <Zap className="h-8 w-8 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-foreground">Rapid Response</h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        Lightning-fast incident response with automated containment and remediation.
                      </p>
                      <div className="flex items-center text-orange-400">
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-background overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        </div>
        
        {/* Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 10,0 L 10,10 M 0,10 L 20,10" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                <circle cx="10" cy="10" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <Shield className="w-4 h-4 mr-2" />
              Security Methodology 🛡️
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Our Security Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive four-stage methodology designed to protect, monitor, and evolve your security posture
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-cyan-500/50 rounded-full hidden lg:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Step 1 - Assessment */}
              <div className="relative flex items-center">
                <div className="lg:w-1/2 lg:pr-12">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                    <Card className="relative p-8 border-2 border-transparent bg-gradient-to-br from-blue-500/5 to-cyan-500/5 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 rounded-3xl">
                      <div className="flex items-start gap-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                          <Eye className="h-10 w-10 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-blue-400 mb-2">01</div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Security Assessment</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            Comprehensive evaluation of your current security infrastructure, identifying vulnerabilities and risk vectors across all systems.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Vulnerability Scanning</span>
                            <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm">Risk Analysis</span>
                            <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">Compliance Check</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>
                
                <div className="lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Step 2 - Strategy */}
              <div className="relative flex items-center">
                <div className="lg:w-1/2 lg:pr-12"></div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                    <Card className="relative p-8 border-2 border-transparent bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-sm hover:border-green-500/30 transition-all duration-700 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 rounded-3xl">
                      <div className="flex items-start gap-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                          <Shield className="h-10 w-10 text-green-400" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-green-400 mb-2">02</div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Strategic Planning</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            Develop customized security strategies aligned with your business objectives and regulatory requirements.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">Policy Development</span>
                            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm">Framework Design</span>
                            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm">Resource Planning</span>
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
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                    <Card className="relative p-8 border-2 border-transparent bg-gradient-to-br from-purple-500/5 to-violet-500/5 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 rounded-3xl">
                      <div className="flex items-start gap-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                          <Zap className="h-10 w-10 text-purple-400" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-purple-400 mb-2">03</div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Implementation</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            Deploy cutting-edge security solutions with minimal business disruption and maximum protection coverage.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">System Deployment</span>
                            <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm">Integration</span>
                            <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Testing</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>
                
                <div className="lg:w-1/2 lg:pl-12"></div>
              </div>

              {/* Step 4 - Monitoring */}
              <div className="relative flex items-center">
                <div className="lg:w-1/2 lg:pr-12"></div>
                
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-background shadow-lg hidden lg:block z-10"></div>
                
                <div className="lg:w-1/2 lg:pl-12">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                    <Card className="relative p-8 border-2 border-transparent bg-gradient-to-br from-orange-500/5 to-red-500/5 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 rounded-3xl">
                      <div className="flex items-start gap-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                          <TrendingUp className="h-10 w-10 text-orange-400" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-orange-400 mb-2">04</div>
                          <h3 className="text-2xl font-bold mb-4 text-foreground">Continuous Monitoring</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                            24/7 monitoring and optimization to adapt to evolving threats and maintain peak security performance.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Real-time Monitoring</span>
                            <span className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm">Threat Detection</span>
                            <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Performance Optimization</span>
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
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400 font-medium">ISO 27001 Certified</span>
                  </div>
                  <div className="w-px h-6 bg-border hidden sm:block"></div>
                  <div className="flex items-center">
                     <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                     <span className="text-blue-400 font-medium">NIST Framework</span>
                   </div>
                   <div className="w-px h-6 bg-border hidden sm:block"></div>
                   <div className="flex items-center">
                     <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                     <span className="text-purple-400 font-medium">Zero Trust Architecture</span>
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
            <Badge variant="outline" className="mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Security Questions Answered
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get expert insights on cybersecurity challenges and discover how our solutions protect your organization
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">How quickly can you respond to a security incident?</h3>
                  <HelpCircle className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">
                    Our incident response team is available 24/7 with an average response time of less than 5 minutes for critical threats. We maintain dedicated security operations centers globally to ensure rapid response regardless of your location or time zone.
                  </p>
                </div>
              </details>
            </Card>

            <Card>
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">What industries do you specialize in?</h3>
                  <HelpCircle className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">
                    We serve diverse industries including financial services, healthcare, government, technology, e-commerce, and critical infrastructure. Our team has deep expertise in industry-specific compliance requirements like HIPAA, PCI DSS, FedRAMP, and SOX.
                  </p>
                </div>
              </details>
            </Card>

            <Card>
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">How do you ensure compliance with regulations?</h3>
                  <HelpCircle className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">
                    We follow established frameworks like NIST, ISO 27001, and implement Zero Trust architecture. Our compliance experts stay current with evolving regulations and work closely with your team to ensure all security measures meet or exceed industry standards and regulatory requirements.
                  </p>
                </div>
              </details>
            </Card>

            <Card>
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">What makes your penetration testing different?</h3>
                  <HelpCircle className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">
                    Our penetration testing goes beyond automated scans. We use a combination of manual testing, advanced tools, and real-world attack scenarios. Each test is customized to your environment and includes detailed remediation guidance with risk prioritization.
                  </p>
                </div>
              </details>
            </Card>

            <Card>
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">Do you provide ongoing security monitoring?</h3>
                  <HelpCircle className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground">
                    Yes, we offer comprehensive 24/7 security monitoring through our Security Operations Centers (SOCs). This includes real-time threat detection, automated response to common threats, and immediate escalation of critical incidents to our expert analysts.
                  </p>
                </div>
              </details>
            </Card>

            <Card>
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold">How do you handle sensitive data during assessments?</h3>
                  <HelpCircle className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
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
      <section className="relative py-24 bg-gradient-to-br from-background via-slate-950/30 to-background overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.01)_50%,transparent_100%)] bg-[length:100px_100px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                  <Shield className="w-4 h-4 mr-2 text-blue-400" />
                  <span className="text-blue-400 font-medium text-sm">Secure Your Future</span>
                </div>
                
                <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                    Ready to Protect
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    What Matters Most?
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Join thousands of organizations that trust us to safeguard their digital assets. Start with a comprehensive security assessment.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">5min</div>
                  <div className="text-sm text-muted-foreground">Response</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    Get Free Assessment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
                
                <Button size="lg" variant="outline" className="border-2 border-foreground/20 hover:border-foreground/40 text-foreground hover:bg-foreground/5 font-semibold px-8 py-4 rounded-xl transition-all duration-300">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-400" />
                  Setup in minutes
                </div>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative">
              <div className="relative">
                {/* Main Card */}
                <Card className="relative p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-foreground/10 rounded-3xl shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">Security Dashboard</h3>
                          <p className="text-sm text-muted-foreground">Real-time protection</p>
                        </div>
                      </div>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>

                    {/* Security Metrics */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-sm font-medium">Threat Detection</span>
                        </div>
                        <span className="text-green-400 font-bold">Active</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <div className="flex items-center space-x-3">
                          <Eye className="w-5 h-5 text-blue-400" />
                          <span className="text-sm font-medium">Network Monitoring</span>
                        </div>
                        <span className="text-blue-400 font-bold">Secured</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <div className="flex items-center space-x-3">
                          <Lock className="w-5 h-5 text-purple-400" />
                          <span className="text-sm font-medium">Data Encryption</span>
                        </div>
                        <span className="text-purple-400 font-bold">Protected</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Security Score</span>
                        <span className="text-foreground font-medium">98%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2">
                        <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-[98%] animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-blue-500/20 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-sm border border-green-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
