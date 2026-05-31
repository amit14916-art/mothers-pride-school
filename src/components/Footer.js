import React from "react";
import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-academic-dark text-slate-300 border-t border-white/10">
      {/* Top Banner Accent */}
      <div className="h-1.5 bg-gradient-to-r from-academic-gold via-indigo-600 to-academic-gold"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: School Identity */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-academic-gold p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-academic-navy" />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-wide block">
                  MOTHER'S PRIDE
                </span>
                <span className="text-xs text-academic-gold tracking-widest font-semibold block uppercase">
                  School of Excellence
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering future leaders with highly innovative education, integrating standard academics with cutting-edge AI and computer science programs.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-academic-gold hover:text-academic-navy transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-academic-gold hover:text-academic-navy transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-academic-gold hover:text-academic-navy transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-academic-gold hover:text-academic-navy transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-6 border-l-4 border-academic-gold pl-3">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-academic-gold transition-colors block">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-academic-gold transition-colors block">
                  About Our Vision
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-academic-gold transition-colors block">
                  Specialized Courses
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-academic-gold transition-colors block">
                  Infrastructure & Labs
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-academic-gold transition-colors block">
                  Admission Roadmap
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-academic-gold transition-colors block">
                  Academic Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Curriculum */}
          <div>
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-6 border-l-4 border-academic-gold pl-3">
              AI & Coding Focus
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses" className="hover:text-academic-gold transition-colors block">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-academic-gold transition-colors block">
                  Python Programming
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-academic-gold transition-colors block">
                  STEM Robotics & Sensors
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-academic-gold transition-colors block">
                  Kids Financial Literacy
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-academic-gold transition-colors block">
                  Smart High-Tech IT Labs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider mb-6 border-l-4 border-academic-gold pl-3">
              School Contact
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-academic-gold flex-shrink-0 mt-0.5" />
                <span>
                  102, Innovation Avenue, Institutional Area, Sector 5, New Delhi, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-academic-gold flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-academic-gold flex-shrink-0" />
                <span>info@mothersprideedu.in</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-academic-gold flex-shrink-0 mt-0.5" />
                <span>
                  Mon - Sat: 8:00 AM - 2:30 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Copyright Row */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>
            &copy; {currentYear} Mother's Pride School. All rights reserved.
          </p>
          <p className="flex items-center mt-4 sm:mt-0">
            <span>Built with dedication for future tech-leaders</span>
            <Heart className="h-3 w-3 text-red-500 mx-1 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
