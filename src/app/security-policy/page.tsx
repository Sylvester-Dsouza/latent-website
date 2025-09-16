"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, AlertTriangle, FileText, Users, Server, Key } from "lucide-react";

export default function SecurityPolicyPage() {
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
            <Lock className="w-4 h-4 mr-2" />
            Security Policy
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Security & Data Protection
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive security measures and policies to protect your data and ensure 
            the highest standards of cybersecurity.
          </p>
        </div>
      </section>

      {/* Security Policy Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Last Updated */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Last Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This Security Policy was last updated on January 15, 2025.
                </p>
              </CardContent>
            </Card>

            {/* Security Overview */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  At Latent Security, we take the security of your data and our systems extremely seriously. As a cybersecurity company, we implement industry-leading security measures and follow best practices to protect against threats and vulnerabilities.
                </p>
                <p className="text-muted-foreground">
                  This Security Policy outlines our commitment to maintaining the confidentiality, integrity, and availability of all data and systems under our control.
                </p>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  Data Security Measures
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Key className="w-4 h-4" />
                    Encryption
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>All data in transit is encrypted using TLS 1.3 or higher</li>
                    <li>Data at rest is encrypted using AES-256 encryption</li>
                    <li>Database encryption with industry-standard algorithms</li>
                    <li>End-to-end encryption for sensitive communications</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Access Controls
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Multi-factor authentication (MFA) for all user accounts</li>
                    <li>Role-based access control (RBAC) with principle of least privilege</li>
                    <li>Regular access reviews and permission audits</li>
                    <li>Automated account lockout for suspicious activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Server className="w-4 h-4" />
                    Infrastructure Security
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Secure cloud infrastructure with AWS/Azure security controls</li>
                    <li>Network segmentation and firewall protection</li>
                    <li>Intrusion detection and prevention systems (IDS/IPS)</li>
                    <li>Regular security patches and updates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Compliance & Standards */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Compliance & Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We adhere to industry-recognized security frameworks and compliance standards:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>ISO 27001:</strong> Information Security Management System certification</li>
                  <li><strong>SOC 2 Type II:</strong> Service Organization Control 2 compliance</li>
                  <li><strong>GDPR:</strong> General Data Protection Regulation compliance</li>
                  <li><strong>CCPA:</strong> California Consumer Privacy Act compliance</li>
                  <li><strong>NIST Cybersecurity Framework:</strong> Following NIST guidelines</li>
                  <li><strong>OWASP Top 10:</strong> Protection against common web vulnerabilities</li>
                </ul>
              </CardContent>
            </Card>

            {/* Security Monitoring */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Security Monitoring & Response
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">24/7 Security Operations Center (SOC)</h3>
                  <p className="text-muted-foreground">
                    Our dedicated security team monitors all systems around the clock, using advanced SIEM tools and threat intelligence to detect and respond to potential security incidents.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Incident Response</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Documented incident response procedures</li>
                    <li>Rapid containment and mitigation protocols</li>
                    <li>Forensic analysis and root cause investigation</li>
                    <li>Timely notification to affected parties</li>
                    <li>Post-incident review and improvement processes</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Threat Intelligence</h3>
                  <p className="text-muted-foreground">
                    We leverage global threat intelligence feeds and maintain partnerships with security organizations to stay ahead of emerging threats and vulnerabilities.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Employee Security */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Employee Security Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  All employees undergo comprehensive security training and awareness programs:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Security awareness training upon hiring and annually thereafter</li>
                  <li>Phishing simulation and response training</li>
                  <li>Secure coding practices for development teams</li>
                  <li>Data handling and classification procedures</li>
                  <li>Incident reporting and escalation protocols</li>
                  <li>Background checks for all personnel with access to sensitive data</li>
                </ul>
              </CardContent>
            </Card>

            {/* Vulnerability Management */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Vulnerability Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Regular Security Assessments</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Quarterly penetration testing by third-party security firms</li>
                    <li>Continuous vulnerability scanning and assessment</li>
                    <li>Code security reviews and static analysis</li>
                    <li>Infrastructure security audits</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Patch Management</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Automated patch management for operating systems</li>
                    <li>Regular updates for all software and applications</li>
                    <li>Emergency patching procedures for critical vulnerabilities</li>
                    <li>Testing and validation before production deployment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Backup & Recovery */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Data Backup & Disaster Recovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We maintain robust backup and disaster recovery procedures to ensure business continuity:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Automated daily backups with encryption</li>
                  <li>Geographically distributed backup storage</li>
                  <li>Regular backup integrity testing and restoration drills</li>
                  <li>Documented disaster recovery procedures</li>
                  <li>Recovery Time Objective (RTO) of 4 hours</li>
                  <li>Recovery Point Objective (RPO) of 1 hour</li>
                </ul>
              </CardContent>
            </Card>

            {/* Third-Party Security */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Third-Party Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We carefully evaluate and monitor the security practices of all third-party vendors and partners:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Security assessments for all vendors handling sensitive data</li>
                  <li>Contractual security requirements and SLAs</li>
                  <li>Regular vendor security reviews and audits</li>
                  <li>Data processing agreements (DPAs) with cloud providers</li>
                  <li>Supply chain security monitoring</li>
                </ul>
              </CardContent>
            </Card>

            {/* Reporting Security Issues */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Reporting Security Issues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you discover a security vulnerability or have security concerns, please report them immediately:
                </p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Security Email:</strong> security@latentsecurity.com
                  </p>
                  <p className="text-muted-foreground">
                    <strong>PGP Key:</strong> Available upon request for encrypted communications
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Response Time:</strong> We acknowledge security reports within 24 hours
                  </p>
                </div>
                <p className="text-muted-foreground mt-4">
                  We appreciate responsible disclosure and will work with security researchers to address any identified vulnerabilities promptly.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For questions about our security practices or this Security Policy, please contact us at:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> info@latentinfotech.com
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Address:</strong> Office 308, 1143 Business Center, Port Saeed, Dubai, UAE
                  </p>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}