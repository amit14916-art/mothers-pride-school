"use client";

import React, { useState } from "react";
import { Cpu, Code, ShieldCheck, DollarSign, ArrowRight, Laptop, Award, BookOpen } from "lucide-react";

const PROGRAMS = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    age: "Grades VI - X",
    duration: "1 Year (2 Semesters)",
    level: "Advanced",
    icon: Cpu,
    color: "from-indigo-600 to-blue-700",
    bgLight: "bg-indigo-50 text-indigo-700 border-indigo-100",
    description: "Understand the core concepts of cognitive computing, convolutional classifiers, neural networks, and prompt engineering parameters.",
    modules: [
      "Semester 1: Foundation of Data Models & Supervised Classifiers",
      "Semester 2: Visual Neural Networks & Multi-layer Models",
      "Lab Focus: Custom classifier training using visual datasets",
    ],
    outcomes: ["Build custom model predictions", "Master standard data manipulation", "Accredited AI Architect badge"]
  },
  {
    id: "python-coding",
    title: "Python & Logic Engineering",
    age: "Grades IV - VIII",
    duration: "6 Months",
    level: "Intermediate",
    icon: Code,
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50 text-amber-700 border-amber-100",
    description: "Ditch drag-and-drop code blocks for syntax-based logic. Master python libraries, algorithmic scripts, loops, and OOP parameters.",
    modules: [
      "Module 1: Variables, Conditional Logic & Loop Scripting",
      "Module 2: Advanced Data Structures (Lists, Dictionaries)",
      "Module 3: Functions & Intro to Object-Oriented Syntax",
    ],
    outcomes: ["Write clean command-line scripts", "Formulate compound algorithmic logic", "Create customized text-based gaming platforms"]
  },
  {
    id: "stem-robotics",
    title: "STEM Robotics & IoT",
    age: "Grades V - X",
    duration: "1 Year",
    level: "Intermediate to Advanced",
    icon: Laptop,
    color: "from-rose-500 to-red-600",
    bgLight: "bg-rose-50 text-rose-700 border-rose-100",
    description: "Construct physical circuits, assemble Arduino components, configure servo motors, and program autonomous vehicles.",
    modules: [
      "Phase 1: Electronic Fundamentals & Resistor Wiring",
      "Phase 2: Arduino Microcontrollers & C-Based Commands",
      "Phase 3: Sensor Integrations (Infrared, Ultrasonic Waves)",
    ],
    outcomes: ["Design and solder real hardware circuits", "Program path-following smart robots", "IoT and home-automation controllers"]
  },
  {
    id: "kids-finance",
    title: "Kids Financial Literacy",
    age: "Grades III - VIII",
    duration: "4 Months",
    level: "Foundational",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50 text-emerald-700 border-emerald-100",
    description: "Learn compound interest, budget paradigms, equity, and cryptocurrency history in a interactive, game-like simulation env.",
    modules: [
      "Phase 1: Currency History & Banking Paradigms",
      "Phase 2: Budgeting Models, Savings & Smart Expenditures",
      "Phase 3: Investments, Compound Interest & Equities",
    ],
    outcomes: ["Develop positive saving habits", "Understand trade concepts & ledger balances", "Create modular classroom budget proposals"]
  }
];

export default function Courses() {
  const [selectedProg, setSelectedProg] = useState("all");

  const filteredPrograms = selectedProg === "all"
    ? PROGRAMS
    : PROGRAMS.filter(p => p.id === selectedProg);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 bg-grid-pattern pb-20">
      
      {/* Header Banner */}
      <section className="bg-academic-navy text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-academic-navy to-indigo-950"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-3 px-4">
          <span className="text-xs font-bold text-academic-gold uppercase tracking-widest block">
            Futuristic Curriculum
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Specialized Tech Programs
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discover courses engineered to elevate creative logic, programmatic command, and systemic thinking from an early grade.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        
        {/* Navigation Selector */}
        <div className="flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedProg("all")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              selectedProg === "all"
                ? "bg-academic-navy text-white shadow-md scale-105"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }`}
          >
            All Programs
          </button>
          {PROGRAMS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedProg(p.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedProg === p.id
                  ? "bg-academic-navy text-white shadow-md scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Dynamic Card Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredPrograms.map((prog) => {
            const IconComponent = prog.icon;
            return (
              <div
                key={prog.id}
                className="bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className={`bg-gradient-to-r ${prog.color} p-6 md:p-8 text-white relative`}>
                  <div className="absolute right-4 top-4 bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <span className="bg-white/20 text-white font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {prog.level} Course
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight">
                      {prog.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-200 pt-1">
                      <span>Age Group: {prog.age}</span>
                      <span>•</span>
                      <span>Duration: {prog.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 md:p-8 space-y-6 flex-grow">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {prog.description}
                  </p>

                  {/* Modules */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                      <BookOpen className="h-4 w-4 text-academic-gold" />
                      <span>Curriculum Breakdown</span>
                    </h4>
                    <ul className="space-y-2">
                      {prog.modules.map((mod, idx) => (
                        <li key={idx} className="flex items-start text-xs text-slate-600 space-x-2">
                          <span className="text-academic-gold font-bold">•</span>
                          <span>{mod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-2">
                      <Award className="h-4 w-4 text-academic-gold" />
                      <span>Syllabus Highlights</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {prog.outcomes.map((out, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg border border-slate-200"
                        >
                          ✓ {out}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold uppercase">
                    Register Online
                  </span>
                  <a
                    href="/admissions"
                    className="flex items-center space-x-1.5 text-indigo-600 hover:text-indigo-800 text-sm font-bold uppercase tracking-wide group"
                  >
                    <span>Admission Roadmap</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Certification Block */}
        <section className="bg-academic-navy text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="absolute right-0 bottom-0 w-1/4 h-full bg-white/[0.02] skew-x-12"></div>
          <div className="space-y-4 max-w-2xl relative z-10">
            <h3 className="text-2xl font-black uppercase tracking-tight text-academic-gold">
              Technology Capstone Badging
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every course terminates in a rigorous Capstone Project evaluation. Students present functional solutions (autonomous controllers, financial budgets, Python packages) to receive certified high-tech badges.
            </p>
          </div>
          <div className="flex-shrink-0 relative z-10">
            <div className="bg-white/10 border border-white/20 p-6 rounded-2xl backdrop-blur-md text-center max-w-[220px]">
              <ShieldCheck className="h-10 w-10 text-academic-gold mx-auto mb-2 animate-bounce" />
              <span className="text-xs font-bold text-white uppercase tracking-wider block">
                100% Certified
              </span>
              <span className="text-[10px] text-slate-400 block mt-1">
                Curriculum approved by leading academic tech experts.
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
