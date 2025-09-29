"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Briefcase,
  Heart,
  Zap,
  Target,
  Award,
  Coffee,
  Mail,
  Shield,
  BarChart3,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/ui/cta-section";


export default function CareersPage() {
  const companyBenefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited PTO"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Continuous learning opportunities, certifications, and career advancement"
    },
    {
      icon: Zap,
      title: "Cutting-Edge Tech",
      description: "Work with the latest security tools and technologies in the industry"
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Penetration Tester",
      description: "Lead penetration testing engagements and mentor junior team members",
      department: "Security Testing",
      type: "Full-time",
      location: "Remote / Hybrid",
      experience: "5+ years",
      salary: "$120k - $160k",
      responsibilities: [
        "Conduct comprehensive penetration testing assessments",
        "Develop and execute advanced attack scenarios",
        "Mentor junior penetration testers",
        "Create detailed security assessment reports",
        "Stay current with emerging threats and vulnerabilities"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "5+ years of penetration testing experience",
        "OSCP, CEH, or similar security certifications",
        "Strong knowledge of network and web application security",
        "Experience with penetration testing tools and frameworks"
      ],
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health and dental insurance",
        "Professional development budget",
        "Flexible work arrangements"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Analyst",
      description: "Monitor security events and respond to incidents across client environments",
      department: "SOC Operations",
      type: "Full-time",
      location: "Remote",
      experience: "2-4 years",
      salary: "$80k - $110k",
      responsibilities: [
        "Monitor security events and alerts 24/7",
        "Investigate and respond to security incidents",
        "Perform threat hunting and analysis",
        "Maintain security monitoring tools and systems",
        "Document incidents and create reports"
      ],
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "2+ years of SOC or security analysis experience",
        "Knowledge of SIEM tools and security frameworks",
        "Understanding of network protocols and security",
        "Strong analytical and problem-solving skills"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Health, dental, and vision insurance",
        "401(k) with company matching",
        "Professional certification support"
      ]
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Light background image - with unique positioning for careers page */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-14 transform -rotate-12 scale-105"
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
            <Users className="w-4 h-4 mr-2" />
            Join Our Team
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Build Your Career in Cybersecurity
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join Latent Security and be part of a team that's protecting organizations from the world's most sophisticated cyber threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <a href="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Apply for Positions
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/about">
                Learn About Our Culture
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Company Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in creating an environment where our team can thrive, grow, and make a meaningful impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Current Openings</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities and join our mission to secure the digital world.
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-muted/30">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-base">{job.description}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge variant="secondary" className="w-fit">
                        <Shield className="w-3 h-3 mr-1" />
                        {job.department}
                      </Badge>
                      <Badge variant="outline" className="w-fit">
                        {job.type}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.experience}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2 text-primary" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {job.responsibilities.slice(0, 4).map((responsibility, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-primary mt-1 mr-2 flex-shrink-0" />
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                        Requirements
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {job.requirements.slice(0, 4).map((requirement, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-primary mt-1 mr-2 flex-shrink-0" />
                            {requirement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center">
                        <Heart className="w-4 h-4 mr-2 text-primary" />
                        Benefits
                      </h4>
                      <ul className="space-y-2 text-sm">
                        {job.benefits.slice(0, 4).map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="w-3 h-3 text-primary mt-1 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t">
                    <Button className="bg-primary hover:bg-primary/90" asChild>
                      <a href="/contact">
                        <Mail className="w-4 h-4 mr-2" />
                        Apply Now
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/contact">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Contact for Details
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Don't See the Right Role?"
        description="We're always looking for talented individuals to join our team. Contact us and let us know how you can contribute to our mission."
        primaryButtonText="Contact Us"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More About Us"
        secondaryButtonHref="/about"
        backgroundVariant="muted"
        className="py-20"
      />
    </div>
    </>
  );
}