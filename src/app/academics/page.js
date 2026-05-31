"use client";

import React, { useState } from "react";
import { 
  Clock, 
  Sparkles, 
  Shirt, 
  Calendar, 
  ChevronRight, 
  CheckCircle2, 
  Info,
  Layers,
  MapPin,
  Cpu,
  GraduationCap
} from "lucide-react";

const CALENDAR_EVENTS = [
  {
    date: "April 06, 2026",
    title: "New Academic Session Initiation",
    type: "Academic",
    desc: "Commencement of the 2026-27 CBSE registration cycle and introductory Python programming bootcamps."
  },
  {
    date: "May 15, 2026",
    title: "Parent-Teacher Sync Meet (Term 1)",
    type: "Sync Meet",
    desc: "Mandatory parental feedback loops reviewing child mechatronics development logs and computer science scores."
  },
  {
    date: "June 01, 2026",
    title: "Summer Vacation Commencement",
    type: "Holiday",
    desc: "Campus closed for standard classes. Advanced AI laboratory access remains active for select research teams."
  },
  {
    date: "August 15, 2026",
    title: "Independence Day Cultural Parade",
    type: "Academic",
    desc: "Patriotic parade showcase by students, flag hoisting ceremony, followed by classical brass band performances."
  },
  {
    date: "November 14, 2026",
    title: "Annual Day Drama & Coding Exhibition",
    type: "Exhibition",
    desc: "Auditorium stage showcase displaying microcontrollers, IoT weather systems, and software platforms compiled by students."
  },
  {
    date: "December 20, 2026",
    title: "Winter Break Commencement",
    type: "Holiday",
    desc: "Campus winter closure. Specialized online revision sessions scheduled for Grade X CBSE board candidates."
  },
  {
    date: "February 18, 2027",
    title: "National STEM Robotics Olympiad",
    type: "Exhibition",
    desc: "Inter-school autonomous rover navigation challenges, LiDAR maze solvers, and custom CAD hardware presentations."
  },
  {
    date: "March 12, 2027",
    title: "CBSE Board Examination Evaluations",
    type: "Academic",
    desc: "Final evaluations and board compile scores release for senior cohorts graduating standard curriculum."
  }
];

export default function AcademicsPage() {
  const [selectedTerm, setSelectedTerm] = useState("All");

  const filteredEvents = selectedTerm === "All"
    ? CALENDAR_EVENTS
    : CALENDAR_EVENTS.filter(evt => {
        if (selectedTerm === "Academic") return evt.type === "Academic";
        if (selectedTerm === "Sync Meet") return evt.type === "Sync Meet";
        if (selectedTerm === "Exhibition") return evt.type === "Exhibition";
        return true;
      });

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0b2545] pb-20 relative">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      {/* Hero Header */}
      <section className="bg-[#0b2545] text-white py-16 text-center relative overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2545] via-[#134074] to-[#0b2545] opacity-90"></div>
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 rounded-full bg-[#ee9b00] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-[-100px] left-[-50px] w-96 h-96 rounded-full bg-[#9e2a2b] opacity-15 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[#ee9b00] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/10 inline-flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#ee9b00]" /> Operations & Milestones
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
            Academics Timing & Calendar
          </h1>
          <p className="text-slate-350 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Review our summer/winter operational cycles, uniform codes, and the official Academic Calendar mapping exams, hackathons, and exhibitions.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10 space-y-16">
        
        {/* ROW 1: Side-by-side Timings and Uniform Guidelines Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SECTION (Col-span 7): Operational Timings Cycles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#9e2a2b] uppercase tracking-widest block">Daily Operation Cycles</span>
              <h2 className="text-2xl font-black text-[#0b2545] uppercase tracking-tight">School Timings</h2>
              <p className="text-slate-500 text-xs leading-relaxed max-w-lg font-medium">
                To guarantee CBSE academic compliance alongside high-fidelity computational lab commitments, Mother's Pride School operates two distinct cycles.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Summer Cycle Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden hover:border-[#ee9b00]/30 group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#ee9b00]/5 rounded-bl-full group-hover:scale-110 transition-transform duration-300"></div>
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                  <div className="bg-[#ee9b00]/10 p-2 rounded-xl text-[#ee9b00]">
                    <Clock className="w-5 h-5 text-[#ee9b00]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0b2545] text-sm uppercase">Summer Cycle</h3>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">April - October</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3.5 text-xs text-slate-600 font-semibold">
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Kindergarten (Pre-K/KG)</span>
                    <span className="text-[#0b2545] text-right">08:00 AM - 12:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Grades I - X</span>
                    <span className="text-[#0b2545] text-right">08:00 AM - 02:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Advanced AI Labs Hub</span>
                    <span className="text-[#9e2a2b] text-right font-black">02:00 PM - 03:30 PM</span>
                  </div>
                </div>

                <div className="mt-5 text-[10px] text-slate-400 font-bold flex items-center gap-1.5 leading-none">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ee9b00]" /> Standard CBSE Hours Included
                </div>
              </div>

              {/* Winter Cycle Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden hover:border-[#9e2a2b]/30 group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#9e2a2b]/5 rounded-bl-full group-hover:scale-110 transition-transform duration-300"></div>
                <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3">
                  <div className="bg-[#9e2a2b]/10 p-2 rounded-xl text-[#9e2a2b]">
                    <Clock className="w-5 h-5 text-[#9e2a2b]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#0b2545] text-sm uppercase">Winter Cycle</h3>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">November - March</span>
                  </div>
                </div>

                <div className="mt-4 space-y-3.5 text-xs text-slate-600 font-semibold">
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Kindergarten (Pre-K/KG)</span>
                    <span className="text-[#0b2545] text-right">08:30 AM - 01:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Grades I - X</span>
                    <span className="text-[#0b2545] text-right">08:30 AM - 02:30 PM</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-50 p-2 rounded-lg border border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400">Advanced AI Labs Hub</span>
                    <span className="text-[#ee9b00] text-right font-black">02:30 PM - 04:00 PM</span>
                  </div>
                </div>

                <div className="mt-5 text-[10px] text-slate-400 font-bold flex items-center gap-1.5 leading-none">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#9e2a2b]" /> Extra Winter Care Vetting Enabled
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION (Col-span 5): Uniform Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#ee9b00] uppercase tracking-widest block">Scholastic Appearance</span>
              <h2 className="text-2xl font-black text-[#0b2545] uppercase tracking-tight">Uniform Guidelines</h2>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm font-medium">
                Students must present themselves in clean, fully complying uniforms matching their specific cycles. Custom ties are issued at registrations.
              </p>
            </div>

            {/* Detailed Uniform Box Card */}
            <div className="bg-[#0b2545] text-white rounded-3xl p-6 shadow-md border border-white/5 space-y-6 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/[0.02] rounded-full blur-xl pointer-events-none"></div>
              
              {/* Summer Uniform Guidelines */}
              <div className="space-y-3 border-b border-white/10 pb-5">
                <div className="flex items-center gap-2">
                  <Shirt className="w-4 h-4 text-[#ee9b00]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#ee9b00]">Summer Uniform Details</span>
                </div>
                <ul className="text-slate-350 text-xs space-y-1.5 list-disc pl-5 font-semibold leading-relaxed">
                  <li>Navy blue shorts (Pre-K to Grade V) or navy trousers (Grade VI-X).</li>
                  <li>Short-sleeved sky blue shirt with school emblem logo.</li>
                  <li>Custom vertical blue-gold striped tie and woven belt.</li>
                  <li>Complying black leather shoes with standard navy socks.</li>
                </ul>
              </div>

              {/* Winter Uniform Guidelines */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shirt className="w-4 h-4 text-[#9e2a2b]" />
                  <span className="text-xs font-black uppercase tracking-wider text-[#9e2a2b]">Winter Uniform Details</span>
                </div>
                <ul className="text-slate-350 text-xs space-y-1.5 list-disc pl-5 font-semibold leading-relaxed">
                  <li>Full navy blue woolen trousers or matching checks skirts.</li>
                  <li>Long-sleeved sky blue shirts, custom school tie and belt.</li>
                  <li><strong className="text-white">Crimson wool pullover</strong> or heavy brand double-breasted blazers.</li>
                  <li>Black leather shoes worn with warm navy woolen socks.</li>
                </ul>
              </div>
            </div>
          </div>

        </section>

        {/* ROW 2: Academic Calendar 2026 Grid */}
        <section className="space-y-8 pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div className="space-y-1 text-left">
              <span className="text-xs font-bold text-[#9e2a2b] uppercase tracking-widest block">Term Milestones</span>
              <h2 className="text-2xl md:text-3xl font-black text-[#0b2545] uppercase tracking-tight">Academic Calendar 2026-27</h2>
              <p className="text-slate-500 text-xs leading-relaxed max-w-xl font-medium">
                Comprehensive tracking of examinations, parental sync meets, science exhibits, and vacation dates scheduled for the upcoming academic cycle.
              </p>
            </div>

            {/* Filter pills to narrow down events */}
            <div className="flex gap-2">
              {["All", "Academic", "Sync Meet", "Exhibition"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedTerm(type)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                    selectedTerm === type
                      ? "bg-[#0b2545] text-white border-[#0b2545] shadow"
                      : "bg-white text-slate-500 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            
            {filteredEvents.map((evt, idx) => {
              // Custom colors matching badges
              let badgeStyle = "bg-[#0b2545]/10 text-[#0b2545] border-[#0b2545]/20"; // Academic
              if (evt.type === "Sync Meet") {
                badgeStyle = "bg-[#ee9b00]/10 text-[#0b2545] border-[#ee9b00]/30";
              } else if (evt.type === "Exhibition") {
                badgeStyle = "bg-[#9e2a2b]/10 text-[#9e2a2b] border-[#9e2a2b]/20";
              } else if (evt.type === "Holiday") {
                badgeStyle = "bg-emerald-50 text-emerald-700 border-emerald-100";
              }

              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-slate-350 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    
                    {/* Badge and date row */}
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded-md text-[9px] font-extrabold uppercase tracking-widest border ${badgeStyle}`}>
                        {evt.type}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        <Calendar className="w-3.5 h-3.5 text-[#0b2545]" />
                        <span>Date Logged</span>
                      </div>
                    </div>

                    {/* Title and details */}
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-slate-800 text-base uppercase leading-tight group-hover:text-[#9e2a2b] transition-colors duration-300">
                        {evt.title}
                      </h4>
                      <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider block">
                        📅 {evt.date}
                      </p>
                      <p className="text-slate-500 text-xs leading-relaxed pt-2 font-medium">
                        {evt.desc}
                      </p>
                    </div>

                  </div>

                  {/* Operational signoff info */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 text-[9px] tracking-wide text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> CBSE Checked
                    </span>
                    <span className="text-[#0b2545] font-extrabold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform duration-300">
                      View Details <ChevronRight className="w-3 h-3 text-[#ee9b00]" />
                    </span>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Empty filtered list state */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl p-8 max-w-sm mx-auto">
              <Layers className="w-10 h-10 text-slate-350 mx-auto" />
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight mt-2">No Milestones Logged</h4>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                We do not have events matching "{selectedTerm}" category scheduled for 2026.
              </p>
            </div>
          )}

        </section>

        {/* INFO NOTICE BOTTOM BOARD */}
        <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between shadow-inner">
          <div className="flex gap-4 items-start text-left max-w-2xl">
            <div className="bg-[#0b2545] text-white p-3 rounded-2xl flex-shrink-0 shadow-sm border border-white/5">
              <Info className="w-5 h-5 text-[#ee9b00]" />
            </div>
            <div className="space-y-1">
              <h4 className="font-extrabold text-sm uppercase tracking-wide text-[#0b2545]">CBSE Registration Vetting Notice</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                All term examinations schedules represent official board timelines issued directly by CBSE. Any shift in holiday codes triggered by regional govt directives will be programmatically highlighted on the student portal home.
              </p>
            </div>
          </div>
          <a 
            href="/contact" 
            className="bg-[#0b2545] hover:bg-[#134074] text-white font-extrabold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl shadow-md transition-all duration-300 border border-white/5 hover:translate-y-[-1px]"
          >
            Inquire Registrations
          </a>
        </section>

      </div>
    </div>
  );
}
