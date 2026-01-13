"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Code, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <Link
      href={href}
      onClick={onClick}
      className="text-base font-medium text-foreground hover:text-primary transition-colors"
    >
      {label}
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="#home" className="flex items-center gap-2">
          <Code className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-foreground">Pedro Segui</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="p-6">
                 <Link href="#home" className="flex items-center gap-2 mb-8">
                    <Code className="h-8 w-8 text-primary" />
                    <span className="text-xl font-bold text-foreground">PortfolioCraft</span>
                </Link>
                <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} {...link} onClick={() => setMobileMenuOpen(false)} />
                    ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
