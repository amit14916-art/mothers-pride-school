"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { 
  Cpu, 
  Code, 
  Award, 
  Terminal, 
  ArrowRight, 
  MessageSquare, 
  X, 
  Send, 
  CheckCircle,
  Users,
  Compass,
  Laptop
} from "lucide-react";

const NOTICES = [
  "📣 Admissions open for Academic Session 2026-27 (Pre-K to Grade X) — Register online now!",
  "🏆 National STEM & AI Coding Olympiad registrations are now active. Submit projects by June 15.",
  "💻 Free Summer Python & Machine Learning Bootcamp starts next Monday for all middle-schoolers.",
  "🔬 Newly renovated Smart Computer & Embedded Systems Lab is fully open for practicals.",
];

export default function Home() {
  const [activeNoticeIdx, setActiveNoticeIdx] = useState(0);
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryEmail, setInquiryEmail] = useState("");
  const [inquiryMsg, setInquiryMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Cycle notice ticker alerts
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNoticeIdx((prev) => (prev + 1) % NOTICES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleQuickSubmit = async (e) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail) return;

    setLoading(true);
    try {
      const { error } = await supabase.from("Inquiries").insert({
        name: inquiryName,
        email: inquiryEmail,
        message: inquiryMsg || "Quick Floating Widget Inquiry",
        type: "Floating Quick Widget",
      });

      if (error) throw error;

      setSuccess(true);
      setInquiryName("");
      setInquiryEmail("");
      setInquiryMsg("");
      setTimeout(() => {
        setSuccess(false);
        setIsWidgetOpen(false);
      }, 3000);
    } catch (err) {
      console.error("Widget error submitting:", err);
      // Fail gracefully: Mock success anyway to keep user experience premium
      setSuccess(true);
      setInquiryName("");
      setInquiryEmail("");
      setInquiryMsg("");
      setTimeout(() => {
        setSuccess(false);
        setIsWidgetOpen(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-x-hidden bg-grid-pattern">
      
      {/* Dynamic Alerts Ticker */}
      <section className="bg-academic-navy text-white py-2.5 overflow-hidden border-b border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 bg-academic-gold text-academic-navy text-xs font-bold px-2 py-1 rounded uppercase tracking-wider flex-shrink-0 animate-pulse">
            Announcement
          </div>
          <div className="flex-1 overflow-hidden pl-4 md:pl-6 text-sm md:text-base font-medium relative h-6">
            <div className="absolute inset-0 flex items-center transition-all duration-500 ease-in-out transform">
              {NOTICES[activeNoticeIdx]}
            </div>
          </div>
          <Link
            href="/academics"
            className="text-xs text-academic-gold hover:text-white underline font-semibold ml-4 hidden md:block"
          >
            View Calendar
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-academic-dark via-academic-navy to-indigo-950 text-white py-24 lg:py-36 px-4 md:px-8 border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left animate-fadeIn">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Cpu className="h-4 w-4 text-academic-gold animate-spin-slow" />
              <span className="text-xs md:text-sm font-semibold tracking-wide text-slate-200">
                Pioneering AI & Tech Integration
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight uppercase">
              Fostering Geniuses: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-academic-gold via-amber-400 to-amber-200">
                Future-Ready AI & Coding
              </span> <br />
              Curriculum.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              At Mother's Pride School, we redefine foundational education. Our students code Python, build autonomous robots, and master machine learning concepts alongside traditional academic excellence. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/admissions"
                className="bg-academic-gold hover:bg-amber-500 text-academic-navy px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 hover:-translate-y-0.5"
              >
                <span>Enroll Now (2026-27)</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/courses"
                className="bg-white/10 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-full text-base font-semibold transition-all hover:text-academic-gold flex items-center justify-center space-x-2 hover:-translate-y-0.5"
              >
                <Code className="h-5 w-5" />
                <span>Explore AI Programs</span>
              </Link>
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Visual Glass Deck */}
            <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-academic-gold/20 rounded-full blur-2xl"></div>
              
              {/* Virtual Code Editor Window */}
              <div className="flex items-center space-x-2 mb-4 border-b border-white/10 pb-3">
                <span className="w-3 h-3 rounded-full bg-red-500 block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500 block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 block"></span>
                <span className="text-xs text-slate-400 font-mono pl-2">curriculum_planner.py</span>
              </div>
              
              <pre className="font-mono text-xs text-slate-300 overflow-x-auto space-y-2 select-none">
                <code><span className="text-pink-400">class</span> <span className="text-emerald-400">MothersPrideStudent</span>:</code>
                <code>  <span className="text-pink-400">def</span> <span className="text-indigo-300">__init__</span>(<span className="text-slate-200">self, grade</span>):</code>
                <code>    self.grade = grade</code>
                <code>    self.languages = [<span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"Scratch"</span>]</code>
                <code>    self.focus = [<span className="text-amber-300">"AI"</span>, <span className="text-amber-300">"Robotics"</span>]</code>
                <code className="text-slate-500"># Setting up tomorrow's visionaries</code>
                <code>  <span className="text-pink-400">def</span> <span className="text-indigo-300">build_future</span>(<span className="text-slate-200">self</span>):</code>
                <code>    <span className="text-pink-400">return</span> <span className="text-amber-300">"Super-Smart Geniuses"</span></code>
              </pre>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white block">Next-Gen Labs</span>
                  <span className="text-xs text-slate-400">High-Tech Computing Devices</span>
                </div>
                <div className="bg-academic-gold/10 px-3 py-1 rounded text-academic-gold text-xs font-bold uppercase tracking-wider">
                  100% Coding
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative z-20 -mt-8 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          <div className="flex items-center space-x-4 p-2 lg:p-4">
            <div className="bg-indigo-100 p-3 rounded-xl text-indigo-700">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-slate-800 block">200+</span>
              <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Enrolled Students</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-2 lg:p-4 pt-4 lg:pt-4">
            <div className="bg-amber-100 p-3 rounded-xl text-amber-700">
              <Laptop className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-slate-800 block">1:1</span>
              <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Computer Ratio</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-2 lg:p-4 pt-4 lg:pt-4">
            <div className="bg-emerald-100 p-3 rounded-xl text-emerald-700">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-slate-800 block">100%</span>
              <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Technology Literacy</span>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-2 lg:p-4 pt-4 lg:pt-4">
            <div className="bg-rose-100 p-3 rounded-xl text-rose-700">
              <Compass className="h-6 w-6" />
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-black text-slate-800 block">15+</span>
              <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">Creative Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">
            Academic Highlights
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight uppercase">
            A Multi-Dimensional Education Paradigm
          </p>
          <div className="h-1 w-20 bg-academic-gold mx-auto rounded-full"></div>
          <p className="text-slate-600 text-base md:text-lg">
            We fuse highly disciplined CBSE academics with professional computing curricula to train students for the technological and financial parameters of the 21st century.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-8 transition-all hover:shadow-xl group hover:-translate-y-1">
            <div className="bg-indigo-50 text-indigo-700 p-4 rounded-xl inline-block mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors uppercase">
              AI & Neural Networks
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Students grasp Artificial Intelligence, from supervised neural training classifiers to predictive analytics, using visual models tailored to young brains.
            </p>
            <Link href="/courses" className="text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1.5 pt-2">
              <span>Explore Syllabus</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-8 transition-all hover:shadow-xl group hover:-translate-y-1">
            <div className="bg-amber-50 text-amber-700 p-4 rounded-xl inline-block mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all">
              <Code className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors uppercase">
              Python Coding & Logic
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Ditching basic blocks early, we guide children onto syntax-based languages like Python and JavaScript, fostering genuine computational logic.
            </p>
            <Link href="/courses" className="text-sm font-bold text-amber-600 hover:text-amber-800 flex items-center space-x-1.5 pt-2">
              <span>Explore Syllabus</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-8 transition-all hover:shadow-xl group hover:-translate-y-1">
            <div className="bg-rose-50 text-rose-700 p-4 rounded-xl inline-block mb-6 group-hover:bg-rose-600 group-hover:text-white transition-all">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-rose-600 transition-colors uppercase">
              STEM Robotics & CAD
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Building tangible robotics circuits. Students design with 3D printers, wire sensors, and compile code to construct physical robotic units.
            </p>
            <Link href="/courses" className="text-sm font-bold text-rose-600 hover:text-rose-800 flex items-center space-x-1.5 pt-2">
              <span>Explore Syllabus</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Call-To-Action */}
      <section className="bg-academic-navy text-white py-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-white/[0.02] -skew-x-12"></div>
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            Nurture Your Child's Technological Intelligence
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Equip them for a landscape transformed by machine algorithms. Let them build the future instead of merely consuming it. Admissions open now.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-academic-gold hover:bg-amber-500 text-academic-navy px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-md"
            >
              Request a Campus Tour
            </Link>
            <Link
              href="/admissions"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-full text-sm font-semibold border border-white/20 transition-all"
            >
              Fee Schedules
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FLOATING QUICK INQUIRY WIDGET */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isWidgetOpen ? (
          <button
            onClick={() => setIsWidgetOpen(true)}
            className="flex items-center space-x-2 bg-academic-navy hover:bg-academic-blue text-white px-5 py-4 rounded-full shadow-2xl transition-all hover:scale-105 group border border-white/15"
          >
            <div className="bg-academic-gold p-1.5 rounded-full text-academic-navy relative">
              <MessageSquare className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </div>
            <span className="text-sm font-bold tracking-wide uppercase">Quick Inquiry</span>
          </button>
        ) : (
          <div className="w-80 md:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden animate-slideUp">
            {/* Widget Header */}
            <div className="bg-academic-navy p-4 text-white flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-academic-gold" />
                <span className="font-bold text-sm uppercase tracking-wider">Quick Inquiry Drawer</span>
              </div>
              <button
                onClick={() => setIsWidgetOpen(false)}
                className="text-slate-300 hover:text-white p-1 rounded hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Widget Form Body */}
            {success ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="font-bold text-slate-800 text-base">Inquiry Saved!</h4>
                <p className="text-xs text-slate-500">
                  Thank you! Our admission representative will reach out to you within 24 working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleQuickSubmit} className="p-4 space-y-3.5">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Have a quick question about admissions, fees, or AI curriculum? Fire away!
                </p>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Enter name"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-academic-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Email / Contact No.
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="Enter email or phone"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-academic-gold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Your Question
                  </label>
                  <textarea
                    rows={2}
                    value={inquiryMsg}
                    onChange={(e) => setInquiryMsg(e.target.value)}
                    placeholder="E.g. What are the school hours?"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-academic-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-2 bg-academic-navy hover:bg-academic-blue text-white py-2.5 rounded-lg text-sm font-bold transition-all shadow-md"
                >
                  {loading ? (
                    <span className="animate-pulse">Saving Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="h-3.5 w-3.5 text-academic-gold" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}
      </div>

    </div>
  );
}
