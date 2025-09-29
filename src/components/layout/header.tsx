"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Services",
      description: "Comprehensive IT solutions for your business needs.",
      items: [
        {
          title: "Cloud Solutions",
          href: "/services/cloud",
        },
        {
          title: "Cybersecurity",
          href: "/services/security",
        },
        {
          title: "IT Consulting",
          href: "/services/consulting",
        },
        {
          title: "Support & Maintenance",
          href: "/services/support",
        },
      ],
    },
    {
      title: "Company",
      description: "Learn more about Latent and our mission.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Our Team",
          href: "/team",
        },
        {
          title: "Careers",
          href: "/careers",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];

  const [isOpen, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full z-50 fixed top-0 left-0 bg-transparent backdrop-blur-sm">
      <div className="container relative mx-auto min-h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg">
            <Image 
              src="/logo.white.webp" 
              alt="Latent Logo" 
              width={32}
              height={32}
              className="transition-all duration-300 group-hover:scale-110"
            />
          </div>
          <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-white/80">
            Latent
          </span>
        </Link>

        {/* Desktop Navigation - Center */}
        <div className="hidden lg:flex justify-center flex-1">
          <NavigationMenu className="flex justify-center items-center">
            <NavigationMenuList className="flex justify-center gap-2 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Link 
                        href={item.href}
                        className={`
                          px-4 py-2 rounded-md font-medium text-sm cursor-pointer
                          transition-all duration-300 ease-in-out
                          ${pathname === item.href 
                            ? 'text-white' 
                            : 'text-white/60 hover:text-white'
                          }
                        `}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm transition-all duration-300 text-white/60 hover:text-white !bg-transparent hover:!bg-transparent focus:!bg-transparent active:!bg-transparent data-[state=open]:text-white data-[state=open]:!bg-transparent">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4 backdrop-blur-xl border border-border">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base text-foreground font-semibold">{item.title}</p>
                              <p className="text-muted-foreground text-sm mt-2">
                                {item.description}
                              </p>
                            </div>
                            <Button 
                              size="sm" 
                              className="mt-6 transition-all duration-300 hover:scale-105"
                              asChild
                            >
                              <Link href="/book-a-call">Book a call today</Link>
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-accent py-3 px-4 rounded transition-all duration-300 text-foreground hover:text-primary group"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Buttons - Right */}
        <div className="hidden lg:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            asChild
            className="transition-all duration-300"
          >
            <Link href="/book-a-call">Book a call</Link>
          </Button>
          <Button 
            asChild
            className="transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Link href="/get-started">Get started</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden backdrop-blur-xl border-t border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`
                        block py-2 text-foreground hover:text-primary transition-colors duration-300
                        ${pathname === item.href ? 'text-primary' : ''}
                      `}
                      onClick={() => setOpen(false)}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <div>
                      <p className="text-foreground font-semibold py-2">{item.title}</p>
                      <div className="ml-4 space-y-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block py-1 text-muted-foreground hover:text-primary transition-colors duration-300"
                            onClick={() => setOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Button 
                  variant="ghost" 
                  asChild
                  className="w-full"
                >
                  <Link href="/book-a-call" onClick={() => setOpen(false)}>Book a call</Link>
                </Button>
                <Button 
                  asChild
                  className="w-full"
                >
                  <Link href="/get-started" onClick={() => setOpen(false)}>Get started</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;