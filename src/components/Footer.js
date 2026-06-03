'use client';
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b2545] text-slate-300 pt-12 pb-6 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        {/* Column 1: School Brand */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-[#ee9b00] rounded-lg text-[#0b2545] font-black text-sm">MP</span>
            <div>
              <h3 className="font-black text-white leading-tight">MOTHER'S PRIDE</h3>
              <p className="text-[10px] text-[#ee9b00] font-bold uppercase tracking-wider">School of Excellence</p>
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            नर्सरी से कक्षा 10वीं तक (हिंदी व अंग्रेजी माध्यम)। छत्तीसगढ़ बोर्ड (C.G. Board) पर आधारित गुणवत्तापूर्ण एवं आधुनिक शिक्षा।
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://instagram.com/mothersprideschool_arang/" target="_blank" className="p-2 bg-slate-800 hover:bg-pink-600 rounded-full text-white transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com/mothersprideschool_arang/" target="_blank" className="p-2 bg-slate-800 hover:bg-blue-600 rounded-full text-white transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://wa.me/919876543210" target="_blank" className="p-2 bg-slate-800 hover:bg-emerald-600 rounded-full text-white transition">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-4 border-l-2 border-[#ee9b00] pl-2">Quick Links</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><a href="/" className="hover:text-white transition">Home Page</a></li>
            <li><a href="/about" className="hover:text-white transition">About Our Vision</a></li>
            <li><a href="/admissions" className="hover:text-white transition">Admission Information</a></li>
            <li><a href="/gallery" className="hover:text-white transition">Campus Media Gallery</a></li>
            <li><a href="/academics" className="hover:text-white transition">Academic Calendar</a></li>
          </ul>
        </div>

        {/* Column 3: Features */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-4 border-l-2 border-[#ee9b00] pl-2">Our Key Highlights</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>✓ C.G. Board Curriculum</li>
            <li>✓ Hindi & English Medium</li>
            <li>✓ Nursery to Class 10th</li>
            <li>✓ प्रवेश शुल्क - पूर्णतः निःशुल्क</li>
            <li>✓ Smart High-Tech IT Focus</li>
          </ul>
        </div>

        {/* Column 4: Corrected School Contact */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-4 border-l-2 border-[#9e2a2b] pl-2">School Contact</h4>
          <ul className="space-y-3 text-xs text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#9e2a2b] shrink-0 mt-0.5" />
              <span>कैथापार, आरंग, जिला-रायपुर (छ.ग.)<br/>Kaithapar, Arang, Arang</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#ee9b00] shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#ee9b00] shrink-0" />
              <span className="truncate">info@motherspridearang.edu.in</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-slate-500 shrink-0" />
              <span>Mon - Sat: 8:00 AM - 2:30 PM</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal bar */}
      <div className="max-w-6xl mx-auto px-4 pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-slate-500">
        <p>© 2026 Mother's Pride School, Arang. All rights reserved.</p>
        <p>Built with dedication for Arang Education Node.</p>
      </div>
    </footer>
  );
}