import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Penetration Testing", href: "/services/penetration-testing" },
      { name: "Vulnerability Assessment", href: "/services/vulnerability-assessment" },
      { name: "Security Consulting", href: "/services/security-consulting" },
      { name: "Cybercrime Investigation", href: "/services/cybercrime-investigation" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "Security Policy", href: "/security-policy" },
    ],
  },
];

const contactInfo = [
  { icon: Phone, text: "+971 4 388 2014", href: "tel:+97143882014" },
  { icon: Mail, text: "info@latentinfotech.com", href: "mailto:info@latentinfotech.com" },
  { icon: MapPin, text: "Office 308, 1143 Business Center, Port Saeed, Dubai, UAE", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Latent Security</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground max-w-md">
                Protecting your digital assets with cutting-edge cybersecurity solutions. 
                We provide comprehensive security services to keep your business safe from evolving threats.
              </p>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                {contactInfo.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.text}</span>
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={item.label}
                  >
                    <item.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="text-sm font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator />
        
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Latent Security. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Built with security in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}