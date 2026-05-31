"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GraduationCap, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/facilities", label: "Facilities" },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/academics", label: "Academics" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-academic-navy/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-academic-gold p-2 rounded-lg transition-transform group-hover:scale-110">
              <GraduationCap className="h-6 w-6 text-academic-navy" />
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-wide block">
                MOTHER'S PRIDE
              </span>
              <span className="text-xs text-academic-gold tracking-widest font-semibold block uppercase -mt-1">
                School of Excellence
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-academic-gold text-academic-navy font-semibold shadow-md"
                      : "text-slate-100 hover:text-academic-gold hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/dashboard/students"
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg border border-blue-400/20"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Admin Portal</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggler */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-academic-gold focus:outline-none p-2 rounded-md hover:bg-white/10"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden bg-academic-dark/95 border-b border-white/10 backdrop-blur-lg animate-fadeIn">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-academic-gold text-academic-navy font-bold"
                      : "text-slate-200 hover:bg-white/5 hover:text-academic-gold"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 px-4">
              <Link
                href="/dashboard/students"
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-3 rounded-full font-semibold transition-all shadow-md"
              >
                <ShieldCheck className="h-4 w-4" />
                <span>Admin Portal</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
