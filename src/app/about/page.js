"use client";

import React, { useState } from "react";
import { Users, Shield, Lightbulb, Compass, Award, Calendar } from "lucide-react";

const DEPARTMENTS = ["All", "Computer & AI", "Science & Robotics", "Mathematics", "Humanities"];

const TIMELINE_EVENTS = [
  {
    year: "2012",
    title: "The Foundation",
    description: "Mother's Pride School was founded with a small cohort of 50 students, dedicated to personalized child guidance."
  },
  {
    year: "2017",
    title: "CBSE Affiliation",
    description: "Accredited with national standard honors, achieving a 100% board examination pass-rate on first rollout."
  },
  {
    year: "2021",
    title: "Hi-Tech Lab Launch",
    description: "Built the school's primary embedded systems and computing center with full 1:1 screen provisions."
  },
  {
    year: "2025",
    title: "AI & Coding Integration",
    description: "Became a premier pioneer, adding Python syntax coding, AI frameworks, and robotics to regular class grids."
  }
];

const FACULTY = [
  {
    name: "Dr. Ananya Sharma",
    role: "Director & Principal",
    dept: "Computer & AI",
    degree: "Ph.D. in Computer Science (IIT)",
    image: "💻",
    tag: "AI Ethics & Architecture"
  },
  {
    name: "Prof. Rajesh Varma",
    role: "Head of Science Dept.",
    dept: "Science & Robotics",
    degree: "M.Tech in Mechatronics",
    image: "🤖",
    tag: "Embedded Arduino & CAD"
  },
  {
    name: "Mrs. Sarah D'Souza",
    role: "Senior Math Educator",
    dept: "Mathematics",
    degree: "M.Sc. in Applied Mathematics",
    image: "📐",
    tag: "Algorithm Analysis & Stats"
  },
  {
    name: "Mr. Vikram Rathore",
    role: "AI & ML Specialist",
    dept: "Computer & AI",
    degree: "B.Tech in Artificial Intelligence",
    image: "🐍",
    tag: "Python & Machine Learning"
  },
  {
    name: "Ms. Evelyn Carter",
    role: "Humanities Coordinator",
    dept: "Humanities",
    degree: "M.A. in English Literature & Arts",
    image: "📚",
    tag: "Creative Writing & Debate"
  },
  {
    name: "Mr. Amit Singhal",
    role: "Robotics Design Lab Head",
    dept: "Science & Robotics",
    degree: "B.E. in Electronics & Instrumentation",
    image: "⚙️",
    tag: "Microcontrollers & IoT"
  }
];

export default function About() {
  const [activeDept, setActiveDept] = useState("All");

  const filteredFaculty = activeDept === "All"
    ? FACULTY
    : FACULTY.filter(f => f.dept === activeDept);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 bg-grid-pattern pb-20">
      
      {/* Banner / Breadcrumbs */}
      <section className="bg-academic-navy text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-academic-navy to-indigo-950"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-3 px-4">
          <span className="text-xs font-bold text-academic-gold uppercase tracking-widest block">
            About Our School
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Our Legacy, Vision & Mentors
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Discover the values driving our prestigious academic institution and meet the educators fostering future innovators.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        
        {/* Core Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-50 text-indigo-600 p-4 rounded-bl-2xl">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-4 border-b pb-2">
              Our Vision
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To raise a highly creative, technological, and morally grounded generation of learners. We envision a learning framework where children don't just solve math on papers, but translate logical thinking into lines of high-performance program scripts that address modern human problems.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-50 text-amber-600 p-4 rounded-bl-2xl">
              <Compass className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-4 border-b pb-2">
              Our Mission
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To provide state-of-the-art infrastructure alongside standard national CBSE syllabi, ensuring every child achieves complete technology literacy. We dedicate ourselves to keeping student-teacher ratios extremely tight, fostering direct personal guidance and high academic standards.
            </p>
          </div>
        </section>

        {/* Director's Message */}
        <section className="bg-white border border-slate-200 rounded-2xl shadow-md p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
            <div className="w-32 h-32 bg-academic-navy text-white rounded-full flex items-center justify-center text-5xl shadow-lg border-4 border-academic-gold select-none">
              👩‍🏫
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 uppercase">Dr. Ananya Sharma</h3>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Director & Principal</p>
              <p className="text-xs text-indigo-600 font-semibold mt-1">Ph.D. in Computer Science (IIT)</p>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-6">
            <div className="border-l-4 border-academic-gold pl-4">
              <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
                Director's Message
              </h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Fostering standard intelligence with ethical digital rules</p>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed italic">
              "Dear Parents and Learners, in a landscape completely reshaped by neural networks, big data, and machine intelligence, educational standards cannot remain stagnant. At Mother's Pride, we do not view computing as a recreational activity; it is a fundamental language of expression. 
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our vision is to blend CBSE academic curriculum discipline with advanced coding standards so your child graduates with cognitive elasticity and the tools needed to build our future world. We welcome you to experience our classrooms and coding laboratories."
            </p>
          </div>
        </section>

        {/* Academic History Timeline */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              Institutional Journey
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              A Decade of Growth & Awards
            </h3>
            <div className="h-1 w-16 bg-academic-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {TIMELINE_EVENTS.map((evt, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl p-6 relative hover:shadow-md transition-shadow">
                <div className="absolute top-4 right-4 bg-slate-100 p-2 rounded-lg text-indigo-600">
                  <Calendar className="h-5 w-5" />
                </div>
                <span className="text-3xl font-black text-academic-gold block mb-2">
                  {evt.year}
                </span>
                <h4 className="font-bold text-slate-800 text-base mb-2 uppercase">
                  {evt.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {evt.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Expert Faculty Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              Educational Leaders
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              Our Expert Faculty Board
            </h3>
            <div className="h-1 w-16 bg-academic-gold mx-auto rounded-full"></div>
            <p className="text-slate-600 text-sm">
              Our core academic framework is steered by specialists with master's credentials and computational expertise.
            </p>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeDept === dept
                    ? "bg-academic-navy text-white shadow-md scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Faculty Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((teacher, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl p-3 bg-slate-100 rounded-xl block group-hover:scale-110 transition-transform select-none">
                      {teacher.image}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-base uppercase">
                        {teacher.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                        {teacher.role}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2 text-xs">
                    <p className="text-slate-500 font-medium">
                      🎓 <span className="font-semibold text-slate-700">{teacher.degree}</span>
                    </p>
                    <p className="text-slate-500 font-medium">
                      💼 Department: <span className="font-semibold text-slate-700">{teacher.dept}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="bg-indigo-50 text-indigo-700 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                    {teacher.tag}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
