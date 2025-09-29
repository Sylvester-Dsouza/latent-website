"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  Phone, 
  Mail, 
  MessageSquare, 
  Shield, 
  Users, 
  Target,
  MapPin,
  Globe,
  Eye,
  Award,
  Star,
  Gift,
  AlertTriangle,
  Send,
  ArrowRight,
  Zap,
  Building,
  Lock
} from "lucide-react";
import { CTASection } from "@/components/ui/cta-section";


export default function BookACallPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    urgency: "",
    currentChallenges: "",
    message: ""
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Consultation request submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const serviceTypes = [
    {
      value: "onsite-assessment",
      label: "Free Onsite Security Assessment",
      description: "Comprehensive on-location security evaluation",
      icon: MapPin,
      badge: "FREE",
      color: "text-green-500"
    },
    {
      value: "phone-consultation",
      label: "Free Phone Consultation",
      description: "Expert security advice over the phone",
      icon: Phone,
      badge: "FREE",
      color: "text-blue-500"
    },
    {
      value: "video-call",
      label: "Video Call Consultation",
      description: "Face-to-face security discussion via video",
      icon: Globe,
      badge: "FREE",
      color: "text-purple-500"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Expert Security Analysis",
      description: "Get insights from certified cybersecurity professionals"
    },
    {
      icon: Eye,
      title: "Vulnerability Identification",
      description: "Discover potential security gaps in your infrastructure"
    },
    {
      icon: Lock,
      title: "Tailored Recommendations",
      description: "Receive customized security solutions for your business"
    },
    {
      icon: Award,
      title: "Industry Best Practices",
      description: "Learn about the latest security standards and compliance"
    }
  ];

  const stats = [
    { number: "500+", label: "Security Assessments Completed", icon: CheckCircle },
    { number: "99.9%", label: "Client Satisfaction Rate", icon: Star },
    { number: "24/7", label: "Emergency Response Available", icon: Clock },
    { number: "15+", label: "Years of Combined Experience", icon: Award }
  ];

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Light background image - with unique positioning for book-a-call page */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-18 transform rotate-3 scale-110"
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
        
        <div className="relative container mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary/20 bg-primary/5 text-primary">
            <Gift className="w-4 h-4 mr-2" />
            Free Security Consultation
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Book Your Free Security Assessment
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Get expert cybersecurity insights at no cost. Our certified security professionals will assess your current security posture and provide actionable recommendations to protect your business.
          </p>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {serviceTypes.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <IconComponent className={`w-6 h-6 ${service.color}`} />
                      <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                        {service.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-left">{service.label}</CardTitle>
                    <CardDescription className="text-left">{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-semibold">Schedule Your Free Consultation</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and our security experts will contact you within 24 hours to schedule your free assessment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
                        placeholder="+971 50 123 4567"
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company"
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="serviceType" className="text-sm font-medium">Consultation Type *</Label>
                    <select 
                      className="flex h-10 w-full items-center justify-between rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange("serviceType", e.target.value)}
                      value={formData.serviceType}
                      required
                    >
                      <option value="">Select consultation type</option>
                      <option value="onsite-assessment">Free Onsite Security Assessment</option>
                      <option value="phone-consultation">Free Phone Consultation</option>
                      <option value="video-call">Video Call Consultation</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate" className="text-sm font-medium">Preferred Date</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("preferredDate", e.target.value)}
                        className="bg-background/50 border-border/50 focus:border-primary/50"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime" className="text-sm font-medium">Preferred Time</Label>
                      <select 
                        className="flex h-10 w-full items-center justify-between rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange("preferredTime", e.target.value)}
                        value={formData.preferredTime}
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 5:00 PM)</option>
                        <option value="evening">Evening (5:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-sm font-medium">Urgency Level</Label>
                    <select 
                      className="flex h-10 w-full items-center justify-between rounded-md border border-border/50 bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleInputChange("urgency", e.target.value)}
                      value={formData.urgency}
                    >
                      <option value="">Select urgency</option>
                      <option value="low">Low - General inquiry</option>
                      <option value="medium">Medium - Planning security improvements</option>
                      <option value="high">High - Active security concerns</option>
                      <option value="critical">Critical - Suspected security incident</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentChallenges" className="text-sm font-medium">Current Security Challenges</Label>
                    <Textarea
                      id="currentChallenges"
                      value={formData.currentChallenges}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("currentChallenges", e.target.value)}
                      placeholder="Describe any current security concerns or challenges you're facing..."
                      rows={3}
                      className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Additional Information</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("message", e.target.value)}
                      placeholder="Any additional information about your security needs or questions..."
                      rows={4}
                      className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Free Consultation
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Benefits & Information */}
            <div className="space-y-6">
              {/* What You'll Get */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg font-semibold">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    What You'll Get
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <IconComponent className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium mb-1">{benefit.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg font-semibold">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Why Choose Latent Security?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Certified cybersecurity professionals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">15+ years of combined experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">500+ successful security assessments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 emergency response available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Compliance with international standards</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">No obligation - completely free consultation</span>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="border-red-500/20 bg-red-500/5 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg font-semibold text-red-500">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Security Emergency?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    If you're experiencing an active security incident, don't wait for a scheduled consultation.
                  </p>
                  <Button variant="destructive" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Emergency Hotline: +971 4 388 2014
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Secure Your Business?"
        description="Join hundreds of satisfied clients who trust Latent Security to protect their digital assets. Schedule your free consultation today."
        primaryButtonText="Book Free Assessment"
        secondaryButtonText="View Our Services"
        primaryButtonHref="/book-a-call"
        secondaryButtonHref="/services"
        backgroundVariant="gradient"
        className="py-20"
      />
    </div>
    </>
  );
}