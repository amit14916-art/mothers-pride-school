"use client";

import React from "react";
import { Laptop, Cpu, BookOpen, Dribbble, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";

const FACILITIES = [
  {
    title: "Hi-Tech Computer & AI Lab",
    icon: Cpu,
    color: "from-blue-600 to-indigo-700",
    stats: "40+ Devices | 1:1 Student Screen Provision",
    specs: ["Core i7 Processors & Dedicated GPUs", "Arduino IDE & Embedded Microcontrollers", "3D Printing & Filament Fabrication Deck", "Local Gigabit LAN & High-Speed Optic Web Connection"],
    description: "The crown jewel of our tech academy. Outfitted with hardware systems optimized for machine learning classifiers, neural simulations, CAD drafting, and mechanical programming."
  },
  {
    title: "Smart Classrooms",
    icon: Laptop,
    color: "from-indigo-600 to-indigo-800",
    stats: "Interactive LED Panels | Fully Air-Conditioned",
    specs: ["86-inch Multi-touch Screen Displays", "Acoustic Insulation & Visual Projectors", "Digital Lecture-Recording Capabilities", "Ergonomic Modular Seating Configurations"],
    description: "Traditional boards are replaced by high-definition interactive displays. Teachers integrate live Python execution, robotic simulations, and real-time learning diagrams directly into classes."
  },
  {
    title: "The Innovation Library",
    icon: BookOpen,
    color: "from-amber-500 to-amber-600",
    stats: "5,000+ Printed Volumes | Digital E-Reader Terminals",
    specs: ["Academic Reference Manuals (CBSE & International Standard)", "Subscription to Leading Scientific Journals", "Kindle Devices with 200+ Program Reference Books", "Silent Learning pods & Group Collaboration desks"],
    description: "A gorgeous sanctuary that merges classic literature with digital libraries. Our e-readers contain specialized texts on algorithms, STEM sciences, economics, and computational reasoning."
  },
  {
    title: "Sports Arena & Playground",
    icon: Dribbble,
    color: "from-emerald-500 to-teal-600",
    stats: "2-Acre Synthetic Turf | Certified Trainers",
    specs: ["Professional Basketball Court & Nets", "Enclosed Cricket Nets with Automatic Bowling Engine", "Indoors Gymnastics & Chess Arenas", "Certified Physical Health Supervisors"],
    description: "Fostering physical balance alongside academic intensity. Standard training and annual inter-school events ensure our children grow up healthy, collaborative, and strong."
  }
];

export default function Facilities() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 bg-grid-pattern pb-20">
      
      {/* Header Banner */}
      <section className="bg-academic-navy text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-academic-navy to-indigo-950"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-3 px-4">
          <span className="text-xs font-bold text-academic-gold uppercase tracking-widest block">
            Premium Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Our Advanced Campus & Labs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Take a visual tour through our smart lecture halls, advanced technology labs, sports complexes, and reading sanctuaries.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        
        {/* Core Layout Loop */}
        <section className="space-y-16">
          {FACILITIES.map((facility, index) => {
            const IconComp = facility.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch hover:shadow-lg transition-all duration-300`}
              >
                {/* Visual Left Banner */}
                <div
                  className={`lg:col-span-4 bg-gradient-to-br ${facility.color} p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/[0.05] rounded-full blur-2xl"></div>
                  
                  <div className="bg-white/10 p-3 rounded-2xl w-14 h-14 flex items-center justify-center backdrop-blur-md">
                    <IconComp className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="space-y-2 pt-12 relative z-10">
                    <span className="text-[10px] text-academic-gold uppercase tracking-widest font-black block">
                      Mother's Pride Provision
                    </span>
                    <h3 className="text-2xl font-black uppercase leading-tight tracking-tight">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-slate-200 font-semibold uppercase tracking-wider">
                      {facility.stats}
                    </p>
                  </div>
                </div>

                {/* Content Right Section */}
                <div className="lg:col-span-8 p-8 md:p-10 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="h-px bg-slate-100 my-4"></div>

                    {/* Specs / Features Grid */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-academic-gold" />
                        <span>System Capabilities & Hardware</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {facility.specs.map((spec, specIdx) => (
                          <div
                            key={specIdx}
                            className="flex items-start space-x-2 text-xs text-slate-600"
                          >
                            <span className="text-academic-gold font-bold">•</span>
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 flex items-center justify-between border-t border-slate-100 text-xs">
                    <span className="bg-indigo-50 text-indigo-700 font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                      Standard Verified
                    </span>
                    <a
                      href="/contact"
                      className="text-indigo-600 hover:text-indigo-800 font-bold uppercase tracking-wider flex items-center space-x-1"
                    >
                      <span>Book Campus Tour</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* Security & Health Banner */}
        <section className="bg-academic-navy text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="absolute right-0 bottom-0 w-1/4 h-full bg-white/[0.02] skew-x-12"></div>
          <div className="space-y-4 max-w-3xl relative z-10">
            <h3 className="text-2xl font-black uppercase tracking-tight text-academic-gold">
              Complete Child Safety & Medical Surveillance
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our campus features round-the-clock CCTV operations, RFID student tracking alerts at check-in/out, and a dedicated infirmary managed by a registered full-time nurse, ensuring full safety parameters for every student.
            </p>
          </div>
          <div className="flex-shrink-0 relative z-10">
            <div className="bg-white/10 border border-white/20 p-5 rounded-2xl backdrop-blur-md flex items-center space-x-3">
              <ShieldCheck className="h-8 w-8 text-academic-gold" />
              <div>
                <span className="text-xs font-bold text-white uppercase block">
                  ISO Certified
                </span>
                <span className="text-[10px] text-slate-400 block uppercase">
                  Safety Compliant
                </span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
