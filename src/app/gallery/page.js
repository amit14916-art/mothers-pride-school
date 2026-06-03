"use client";

import React, { useState, useEffect } from "react";
import { 
  Camera, 
  Calendar, 
  Cpu, 
  Code, 
  ArrowRight, 
  ArrowLeft, 
  X, 
  Users,
  Compass,
  Laptop,
  CheckCircle,
  Eye,
  Award,
  Globe
} from "lucide-react";

const CATEGORIES = ["All", "Labs", "Sports", "Celebrations"];

const GALLERY_DATA = [
  {
    id: "GAL001",
    title: "Computer & Coding Lab in Arang",
    category: "Labs",
    desc: "Our advanced coding environment supported by Abhikalp Foundation, where students from rural and middle-income backgrounds learn modern computer languages.",
    imgUrl: "/arang_computer_lab.png",
    date: "May 12, 2026",
    details: {
      hardware: "Modern Core-i5 Computers, Local Gigabit LAN Network",
      software: "Scratch Desktop, Python 3.12, Windows 11 Education Suite",
      cohort: "Grades VI - X Computing Cohorts",
      faculty: "Gaurav Shukla, Ms. Rashmi Dewangan"
    }
  },
  {
    id: "GAL002",
    title: "Sankalp Education Kit Distribution",
    category: "Celebrations",
    desc: "A beautiful community ceremony organized by Abhikalp Foundation, where students receive free syllabus kits, uniforms, and textbooks.",
    imgUrl: "/sankalp_kit_distribution.png",
    date: "April 18, 2026",
    details: {
      hardware: "School Kits, Textbooks, Uniforms, Educational Packs",
      software: "Sankalp Sponsorship Index Board",
      cohort: "Nursery - Grade X Underprivileged Students",
      faculty: "Abhikalp Executive Board Volunteers"
    }
  },
  {
    id: "GAL003",
    title: "Annual Science & STEM Exhibition",
    category: "Celebrations",
    desc: "Students proudly displaying hand-wired scientific electric circuit boards and custom physics models during the school science fair.",
    imgUrl: "/science_exhibition.png",
    date: "March 15, 2026",
    details: {
      hardware: "Electric Circuit boards, Physics Project kits, wiring nodes",
      software: "STEM Project logic models",
      cohort: "Grades VI - X Science Guilds",
      faculty: "Mr. R.K. Patel"
    }
  },
  {
    id: "GAL004",
    title: "Annual Sports Day Track Championships",
    category: "Sports",
    desc: "Our children displaying high speeds and collaborative team efforts on our massive 2-acre school campus playground in Arang.",
    imgUrl: "/sports_championships.png",
    date: "Feb 18, 2026",
    details: {
      hardware: "Professional Athletics Track gear, Digital Stopwatches",
      software: "Timing leaderboards database",
      cohort: "All Houses (Red, Navy, Gold, Crimson)",
      faculty: "Mr. Vinod Nishad (Sports In-charge)"
    }
  },
  {
    id: "GAL005",
    title: "Interactive Smart Projector Classroom",
    category: "Labs",
    desc: "Traditional lessons brought to life with smart projectors and digital audio/visual boards to help students master math and science.",
    imgUrl: "/smart_projector.png",
    date: "Jan 10, 2026",
    details: {
      hardware: "Smart HD Projectors, Modular Acoustic Classrooms",
      software: "Interactive Visual Learning Slides",
      cohort: "All Classes (Nursery - Grade X)",
      faculty: "Mrs. Rashmi Dewangan"
    }
  },
  {
    id: "GAL006",
    title: "Independence Day Cultural Parade",
    category: "Celebrations",
    desc: "Patriotic hoisting of the national tricolor followed by traditional dances and patriotic plays at the Arang campus.",
    imgUrl: "/cultural_parade.png",
    date: "August 15, 2025",
    details: {
      hardware: "Sound Systems, Traditional Brass instruments",
      software: "Traditional Plays schedule",
      cohort: "Nursery - Grade X Performers",
      faculty: "Ms. Anjali Tiwari"
    }
  }
];


export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  // Filter images based on active tab
  const filteredData = activeCategory === "All"
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeCategory);

  const openLightbox = (item, idx) => {
    setSelectedItem(item);
    setLightboxIndex(idx);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedItem(null);
    setLightboxIndex(-1);
    document.body.style.overflow = "unset";
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIdx = (lightboxIndex + 1) % filteredData.length;
    setSelectedItem(filteredData[nextIdx]);
    setLightboxIndex(nextIdx);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIdx = (lightboxIndex - 1 + filteredData.length) % filteredData.length;
    setSelectedItem(filteredData[prevIdx]);
    setLightboxIndex(prevIdx);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === -1) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") handleNext(e);
      if (e.key === "ArrowLeft") handlePrev(e);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredData]);

  return (
    <div className="bg-school-watermark min-h-screen text-[#0b2545] pb-20 relative">
      {/* Decorative Grid Mesh Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      {/* Hero Header */}
      <section className="bg-[#0b2545] text-white py-16 text-center relative overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2545] via-[#134074] to-[#0b2545] opacity-90"></div>
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 rounded-full bg-[#ee9b00] opacity-10 blur-3xl"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[#ee9b00] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/10 inline-flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5" /> Media Archives 2025 - 2026
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
            Hi-Tech Campus Media Gallery
          </h1>
          <p className="text-slate-350 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Inspect our advanced coding laboratories, sports championships, and cultural celebrations documenting the journey of our future-ready cohorts.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 space-y-12">
        
        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  // Reset lightbox details just in case
                  setSelectedItem(null);
                  setLightboxIndex(-1);
                }}
                className={`px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer border ${
                  isActive
                    ? "bg-[#0b2545] text-white border-[#0b2545] scale-105 glow-blue"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredData.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, idx)}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-video overflow-hidden bg-slate-950">
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-90"
                />

                {/* Elegant hover overlay */}
                <div className="absolute inset-0 bg-[#0b2545]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                  <div className="bg-[#ee9b00] text-[#0b2545] p-3.5 rounded-full shadow-lg scale-75 group-hover:scale-100 transition-transform duration-500 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-[#0b2545]" />
                  </div>
                </div>

                {/* Category Badge overlay */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#0b2545] border border-slate-200 font-extrabold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  {item.category}
                </span>

                {/* Event date badge overlay */}
                <span className="absolute bottom-4 right-4 bg-[#9e2a2b] text-white font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-md shadow">
                  {item.date}
                </span>
              </div>

              {/* Title & Description details */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] text-[#9e2a2b] font-black uppercase tracking-wider block">{item.id}</span>
                  <h3 className="font-extrabold text-slate-800 text-lg uppercase group-hover:text-[#9e2a2b] transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mt-1 font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#0b2545]" />
                    <span>{item.date}</span>
                  </span>
                  <span className="text-[#0b2545] group-hover:text-[#9e2a2b] group-hover:translate-x-1.5 transition-all duration-300 flex items-center gap-0.5">
                    <span>Specs Card</span>
                    <ArrowRight className="w-3 h-3 text-[#ee9b00]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state panel */}
        {filteredData.length === 0 && (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-3xl p-8 space-y-4 max-w-lg mx-auto">
            <Camera className="w-12 h-12 text-slate-300 mx-auto" />
            <h4 className="font-bold text-slate-800 text-lg uppercase tracking-tight">No Media Records Available</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              We are currently compiling academic archives in the "{activeCategory}" segment. Check back shortly to inspect the portfolios.
            </p>
          </div>
        )}

      </div>

      {/* 4. PREMIUM SPEC LIGHTBOX MODAL */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Modal Content container */}
          <div 
            className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] lg:max-h-[80vh] border border-slate-200 relative animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button top corner */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-40 bg-black/60 text-white hover:bg-[#9e2a2b] hover:text-white p-2 rounded-full backdrop-blur-md transition-all duration-300 cursor-pointer shadow-md"
              aria-label="Close details"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Media Screen */}
            <div className="lg:col-span-7 bg-slate-900 relative flex items-center justify-center min-h-[30vh] lg:min-h-0">
              <img 
                src={selectedItem.imgUrl} 
                alt={selectedItem.title}
                className="w-full h-full object-cover max-h-[40vh] lg:max-h-full"
              />
              
              {/* Navigation overlays */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white hover:bg-[#ee9b00] hover:text-[#0b2545] p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-md cursor-pointer active:scale-90"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white hover:bg-[#ee9b00] hover:text-[#0b2545] p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-md cursor-pointer active:scale-90"
                aria-label="Next image"
              >
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Tag Category overlay */}
              <span className="absolute bottom-4 left-4 bg-[#ee9b00] text-[#0b2545] font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                {selectedItem.category} Archive
              </span>
            </div>

            {/* Right Tech Spec details screen */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] lg:max-h-full bg-slate-50 border-l border-slate-100">
              <div className="space-y-6">
                
                {/* Header specs */}
                <div className="border-b border-slate-200 pb-4 space-y-1">
                  <span className="text-[9px] text-[#9e2a2b] font-black uppercase tracking-widest block bg-[#9e2a2b]/10 px-2 py-0.5 rounded w-max border border-[#9e2a2b]/15">
                    SPEC SHEET #{selectedItem.id}
                  </span>
                  <h2 className="text-xl md:text-2xl font-extrabold text-[#0b2545] uppercase tracking-tight leading-tight pt-1">
                    {selectedItem.title}
                  </h2>
                </div>

                {/* Description info */}
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                  {selectedItem.desc}
                </p>

                {/* Technical Parameters grid */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 pb-1.5">
                    Technical & Facility Parameters
                  </h4>

                  {/* Param 1: Hardware */}
                  <div className="flex items-start gap-3 text-xs">
                    <div className="bg-[#0b2545]/5 text-[#0b2545] p-2 rounded-lg flex-shrink-0 mt-0.5 border border-[#0b2545]/10">
                      <Cpu className="w-4 h-4 text-[#0b2545]" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-400 block uppercase text-[9px] tracking-wider">Deployments / Hardware</span>
                      <span className="text-slate-700 font-extrabold">{selectedItem.details.hardware}</span>
                    </div>
                  </div>

                  {/* Param 2: Software */}
                  <div className="flex items-start gap-3 text-xs">
                    <div className="bg-[#9e2a2b]/5 text-[#9e2a2b] p-2 rounded-lg flex-shrink-0 mt-0.5 border border-[#9e2a2b]/10">
                      <Code className="w-4 h-4 text-[#9e2a2b]" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-400 block uppercase text-[9px] tracking-wider">Frameworks / Stack</span>
                      <span className="text-slate-700 font-extrabold">{selectedItem.details.software}</span>
                    </div>
                  </div>

                  {/* Param 3: Cohort */}
                  <div className="flex items-start gap-3 text-xs">
                    <div className="bg-amber-50 text-amber-700 p-2 rounded-lg flex-shrink-0 mt-0.5 border border-[#ee9b00]/15">
                      <Users className="w-4 h-4 text-[#ee9b00]" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-400 block uppercase text-[9px] tracking-wider">Student Cohort Group</span>
                      <span className="text-slate-700 font-extrabold uppercase text-[10px]">{selectedItem.details.cohort}</span>
                    </div>
                  </div>

                  {/* Param 4: Faculty */}
                  <div className="flex items-start gap-3 text-xs">
                    <div className="bg-emerald-50 text-emerald-700 p-2 rounded-lg flex-shrink-0 mt-0.5 border-emerald-100">
                      <Award className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-400 block uppercase text-[9px] tracking-wider">Faculty Overseer</span>
                      <span className="text-slate-700 font-extrabold">{selectedItem.details.faculty}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Modal footer detail */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#9e2a2b]" />
                  <span>Captured: {selectedItem.date}</span>
                </span>
                <span className="bg-[#0b2545] text-[#ee9b00] px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow border border-white/5">
                  Verified Spec
                </span>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
