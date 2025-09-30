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
import { useState, useEffect } from "react";
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
      description: "Personal cybersecurity services to protect your digital life.",
      items: [
        {
          title: "Device Cleaning",
          href: "/services/device-cleaning",
        },
        {
          title: "Security Testing",
          href: "/services/security-testing",
        },
        {
          title: "Protection & Monitoring",
          href: "/services/protection-monitoring",
        },
        {
          title: "Security Education",
          href: "/services/security-education",
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 fixed left-0 transition-all duration-500 ease-in-out ${
      isScrolled 
        ? 'top-4' 
        : 'top-0'
    }`}>
      <div className={`mx-auto grid grid-cols-3 items-center transition-all duration-500 ease-in-out ${
         isScrolled 
           ? 'max-w-4xl bg-background/20 backdrop-blur-md border border-border/30 shadow-lg rounded-2xl px-6 py-3 min-h-14' 
           : 'container bg-transparent backdrop-blur-sm px-4 sm:px-6 lg:px-8 min-h-20'
       }`}>
         {/* Logo - Left */}
         <div className="flex justify-start">
           <Link href="/" className="flex items-center space-x-2 group">
             <div className={`flex items-center justify-center rounded-lg transition-all duration-500 ${
               isScrolled ? 'h-7 w-7' : 'h-10 w-10'
             }`}>
               <Image 
                 src="/logo.white.webp" 
                 alt="Latent Logo" 
                 width={isScrolled ? 20 : 32}
                 height={isScrolled ? 20 : 32}
                 className="transition-all duration-500 group-hover:scale-110"
               />
             </div>
             <span className={`font-bold text-white transition-all duration-500 group-hover:text-white/80 ${
               isScrolled ? 'text-base' : 'text-xl'
             }`}>
               Latent
             </span>
           </Link>
         </div>

        {/* Desktop Navigation - Center */}
         <div className={`hidden lg:flex justify-center transition-all duration-500 ${
           isScrolled ? 'scale-95' : 'scale-100'
         }`}>
          <NavigationMenu className="flex justify-center items-center">
            <NavigationMenuList className={`flex justify-center flex-row transition-all duration-500 ${
              isScrolled ? 'gap-1' : 'gap-2'
            }`}>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <NavigationMenuLink asChild>
                      <Link 
                        href={item.href}
                        className={`
                           rounded-md font-medium cursor-pointer
                           transition-all duration-300 ease-in-out
                           ${isScrolled ? 'px-3 py-1.5 text-sm' : 'px-4 py-2 text-sm'}
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
                      <NavigationMenuTrigger className={`font-medium transition-all duration-300 text-white/60 hover:text-white !bg-transparent hover:!bg-transparent focus:!bg-transparent active:!bg-transparent data-[state=open]:text-white data-[state=open]:!bg-transparent ${
                         isScrolled ? 'text-sm' : 'text-sm'
                       }`}>
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
         <div className={`hidden lg:flex justify-end items-center transition-all duration-500 ${
           isScrolled ? 'space-x-2' : 'space-x-4'
         }`}>
          <Button 
            variant="ghost" 
            asChild
            size={isScrolled ? "sm" : "default"}
            className="transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10"
          >
            <Link href="/book-a-call">Book a call</Link>
          </Button>
          <Button 
            asChild
            size={isScrolled ? "sm" : "default"}
            className="transition-all duration-300 hover:scale-105 shadow-lg bg-white text-black hover:bg-white/90"
          >
            <Link href="/get-started" className="flex items-center">
              Get started
              <MoveRight className={`ml-2 transition-all duration-500 ${
                isScrolled ? 'h-3 w-3' : 'h-4 w-4'
              }`} />
            </Link>
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