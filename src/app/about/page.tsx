import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Shield, 
  Users, 
  Award, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Clock,
  TrendingUp,
  Zap,
  Star,
  Building
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Clients Protected", icon: Shield },
    { number: "10+", label: "Years Experience", icon: Clock },
    { number: "99.9%", label: "Uptime Guarantee", icon: TrendingUp },
    { number: "24/7", label: "Security Monitoring", icon: Zap }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every security solution we deliver, ensuring the highest standards of protection.",
      icon: Award
    },
    {
      title: "Innovation",
      description: "We stay ahead of emerging threats by continuously innovating and adopting cutting-edge security technologies.",
      icon: Zap
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency and integrity, building trust through honest communication and ethical practices.",
      icon: Shield
    },
    {
      title: "Partnership",
      description: "We view our clients as partners, working collaboratively to understand and address their unique security challenges.",
      icon: Users
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      description: "15+ years in cybersecurity leadership, former CISO at Fortune 500 companies.",
      certifications: ["CISSP", "CISM", "MBA"]
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      description: "Expert in threat intelligence and security architecture with 12+ years experience.",
      certifications: ["CISSP", "SABSA", "TOGAF"]
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Penetration Testing",
      description: "Ethical hacker and security researcher with expertise in advanced persistent threats.",
      certifications: ["OSCP", "OSCE", "CEH"]
    },
    {
      name: "David Thompson",
      role: "Director of Managed Services",
      description: "SOC operations expert specializing in 24/7 security monitoring and incident response.",
      certifications: ["GCIH", "GCFA", "GNFA"]
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
            About LATENT
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Protecting Digital Futures
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted cybersecurity partner, protecting businesses from evolving digital threats 
            with innovative solutions and expert guidance.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group">
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 p-6 text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with comprehensive cybersecurity solutions that protect their digital assets, 
                ensure business continuity, and enable secure digital transformation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to staying ahead of emerging threats and providing our clients with the expertise 
                and tools they need to thrive in an increasingly connected world.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading cybersecurity partner that organizations trust to protect their most valuable assets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We envision a future where businesses can innovate and grow without fear of cyber threats, supported by 
                our cutting-edge security solutions and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6">Our Story</h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Founded in 2014, LATENT INFORMATION TECHNOLOGY emerged from a simple yet powerful vision: 
              to make enterprise-grade cybersecurity accessible to organizations of all sizes. Our founders, 
              seasoned cybersecurity professionals with decades of combined experience, recognized the growing 
              gap between evolving cyber threats and the security capabilities of most businesses.
            </p>
            <p>
              What started as a small team of ethical hackers and security consultants has grown into a 
              comprehensive cybersecurity firm serving over 500 clients across various industries. We've 
              successfully prevented countless security incidents, helped organizations achieve compliance, 
              and built lasting partnerships based on trust and results.
            </p>
            <p>
              Today, we continue to evolve our services and capabilities, staying at the forefront of 
              cybersecurity innovation while maintaining our core commitment to personalized service 
              and measurable security outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These values guide everything we do and shape how we serve our clients and community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 p-6">
                  <div className="text-center">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals leading our cybersecurity initiatives and driving innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs bg-muted/50">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Certifications & Partnerships</h2>
            <p className="text-muted-foreground">
              Trusted by industry leaders and certified by top security organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "ISO 27001 Certified",
              "SOC 2 Type II",
              "CREST Approved",
              "Microsoft Partner",
              "AWS Security Partner",
              "Cisco Security Partner",
              "SANS Training Partner",
              "EC-Council Partner"
            ].map((cert, index) => (
              <Card key={index} className="group border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 p-4">
                <div className="text-center">
                  <div className="flex items-center justify-center h-12 mb-3">
                    <Award className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-xs font-medium text-muted-foreground">{cert}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations that trust LATENT INFORMATION TECHNOLOGY to protect their digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Start Your Security Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-border hover:bg-muted px-8">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}