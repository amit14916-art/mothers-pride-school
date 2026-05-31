"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Calendar,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Building
} from "lucide-react";

export default function ContactPage() {
  // Form fields
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [phone, setPhone] = useState("");
  const [targetClass, setTargetClass] = useState("Grade I");
  const [message, setMessage] = useState("");

  // UI States
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState("");

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    if (!parentName || !studentName || !phone || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);

    // Mocking 1-second async submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Generate custom inquiry reference ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setInquiryId(`MP-INQ-2026-${randomNum}`);
    
    setLoading(false);
    setSuccess(true);
  };

  const resetForm = () => {
    setParentName("");
    setStudentName("");
    setPhone("");
    setTargetClass("Grade I");
    setMessage("");
    setSuccess(false);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0b2545] font-sans pb-20 relative">
      {/* Decorative Grid Mesh Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      {/* Premium Hero Banner */}
      <section className="bg-[#0b2545] text-white py-16 text-center relative overflow-hidden shadow-md">
        {/* Soft background glow accents */}
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 rounded-full bg-[#ee9b00] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-[-100px] left-[-50px] w-96 h-96 rounded-full bg-[#9e2a2b] opacity-15 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-[#ee9b00] text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full border border-white/10 inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Admission Helpline 2026-27
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-none text-white">
            Connect With Our Academic Desk
          </h1>
          <p className="text-slate-350 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Have questions about CBSE registrations, scholarship portals, computer science courses, or tuition details? Securely log your inquiry today.
          </p>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Sidebar Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#9e2a2b] uppercase tracking-widest block">Direct Communications</span>
              <h2 className="text-2xl font-black text-[#0b2545] uppercase tracking-tight">Department Directory</h2>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                Get in touch through our verified operational lines. Visiting guests must request a gate entry authorization slip at Gate-1 security post.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              
              {/* Admissions Hotline Card */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 hover:border-[#ee9b00]/40 group">
                <div className="bg-[#0b2545] text-white p-3 rounded-xl shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-[#ee9b00]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-[#9e2a2b] font-black uppercase tracking-wider block">Admissions Desk</span>
                  <span className="text-[#0b2545] text-sm font-extrabold block">+91 98765 43210</span>
                  <span className="text-slate-400 text-[11px] block font-medium">Timely updates regarding seats allocation & fee structures.</span>
                </div>
              </div>

              {/* Administrative Email Card */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 hover:border-[#9e2a2b]/40 group">
                <div className="bg-[#9e2a2b] text-white p-3 rounded-xl shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-[#ee9b00]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-[#0b2545] font-black uppercase tracking-wider block">Office Registry</span>
                  <span className="text-slate-700 text-sm font-extrabold block">admissions@mothersprideschool.in</span>
                  <span className="text-slate-400 text-[11px] block font-medium">Send digital transcripts and board verification files.</span>
                </div>
              </div>

              {/* Operational Timings Card */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 hover:border-[#0b2545]/30 group">
                <div className="bg-[#0b2545] text-white p-3 rounded-xl shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-[#ee9b00]" />
                </div>
                <div className="space-y-2 flex-grow">
                  <span className="text-[10px] text-[#9e2a2b] font-black uppercase tracking-wider block">Operational Timings</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-semibold">
                    <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg">
                      <span className="text-[9px] text-[#0b2545] font-bold uppercase block tracking-wide">Summer Cycle</span>
                      <p className="mt-0.5 text-[#9e2a2b]">08:00 AM - 02:00 PM</p>
                      <span className="text-[8px] text-slate-400 font-medium block">Mon - Sat Operations</span>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg">
                      <span className="text-[9px] text-[#0b2545] font-bold uppercase block tracking-wide">Winter Cycle</span>
                      <p className="mt-0.5 text-[#0b2545]">08:30 AM - 02:30 PM</p>
                      <span className="text-[8px] text-slate-400 font-medium block">Mon - Sat Operations</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Campus Address Card */}
              <div className="bg-[#0b2545] text-white rounded-2xl p-6 space-y-4 border border-white/5 shadow-md relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/[0.02] rounded-full blur-xl pointer-events-none"></div>
                <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                  <MapPin className="w-5 h-5 text-[#ee9b00]" />
                  <span className="font-extrabold text-xs uppercase tracking-wider text-white">Dwarka Campus Campus</span>
                </div>
                <div className="space-y-1 text-xs text-slate-300 leading-relaxed font-medium">
                  <p>Sector 12, Dwarka Landmark Area</p>
                  <p>Opposite Metro Corridor Corridor</p>
                  <p>New Delhi, Delhi - 110078</p>
                </div>
                <div className="text-[10px] text-[#ee9b00] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Standard Entry Vetting Enabled
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Inquiry Form with Overlays */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm relative overflow-hidden min-h-[500px]">
            
            {/* FULL SUCCESS OVERLAY */}
            {success && (
              <div className="absolute inset-0 bg-white/98 z-30 flex flex-col items-center justify-center p-6 text-center animate-fade-in transition-all duration-500">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center border-2 border-emerald-500/25 shadow-inner scale-110 duration-500 transition-transform">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                </div>

                <div className="mt-6 space-y-2">
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/50">Submission Secured</span>
                  <h3 className="text-2xl font-black text-[#0b2545] uppercase tracking-tight">Inquiry Logged Successfully!</h3>
                  <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed font-medium">
                    Thank you! Your educational request has been successfully registered. An academic counselor will contact you back in 24 working hours.
                  </p>
                </div>

                {/* Secure Reference Details Box */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 w-full max-w-sm text-xs font-semibold text-slate-600 mt-6 space-y-2 text-left">
                  <div className="flex justify-between items-center border-b border-slate-150 pb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Inquiry Reference ID</span>
                    <span className="font-mono text-xs font-extrabold text-[#9e2a2b] bg-rose-50 px-2 py-0.5 rounded border border-rose-100">{inquiryId}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Parent / Student</span>
                    <span className="text-[#0b2545] truncate font-bold text-right">{parentName} / {studentName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Target Admission</span>
                    <span className="text-[#ee9b00] font-black bg-[#ee9b00]/10 px-2.5 py-0.5 rounded uppercase text-[10px] tracking-wide">{targetClass}</span>
                  </div>
                </div>

                <button
                  onClick={resetForm}
                  className="mt-8 bg-[#0b2545] hover:bg-[#134074] text-white font-extrabold text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg active:scale-95"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}

            {/* FULL LOADING OVERLAY */}
            {loading && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-xs z-25 flex flex-col items-center justify-center space-y-4 transition-all duration-300">
                <div className="w-12 h-12 border-4 border-[#ee9b00] border-t-[#0b2545] rounded-full animate-spin"></div>
                <div className="text-center">
                  <p className="text-xs font-black text-[#0b2545] uppercase tracking-widest animate-pulse">Securing Inquiry Node...</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mt-1">Transmitting data safely to admissions system</p>
                </div>
              </div>
            )}

            {/* ACTUAL FORM INTERFACE */}
            <div className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] text-[#9e2a2b] font-black uppercase tracking-wider block">Admissions Portal</span>
                <h3 className="text-xl md:text-2xl font-black text-[#0b2545] uppercase tracking-tight">Academic Inquiry Form</h3>
                <p className="text-slate-500 text-xs leading-relaxed mt-1 font-medium">
                  Complete the secure registration form below to book a campus visit session or seek syllabus outlines.
                </p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-5">
                
                {/* Names split row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Parent's Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Enter guardian name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs bg-slate-50 font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee9b00]/30 focus:border-[#ee9b00] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Student's Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="Enter child name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs bg-slate-50 font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee9b00]/30 focus:border-[#ee9b00] transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Contact and Target Class row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter 10-digit number"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs bg-slate-50 font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee9b00]/30 focus:border-[#ee9b00] transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      Target Admission Class *
                    </label>
                    <select
                      value={targetClass}
                      onChange={(e) => setTargetClass(e.target.value)}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs bg-slate-50 font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee9b00]/30 focus:border-[#ee9b00] transition-all duration-300 text-slate-700"
                    >
                      <option value="Pre-Kindergarten">Pre-Kindergarten (Pre-K)</option>
                      <option value="Nursery">Nursery / KG</option>
                      <option value="Grade I">Grade I</option>
                      <option value="Grade II">Grade II</option>
                      <option value="Grade III">Grade III</option>
                      <option value="Grade IV">Grade IV</option>
                      <option value="Grade V">Grade V</option>
                      <option value="Grade VI">Grade VI</option>
                      <option value="Grade VII">Grade VII</option>
                      <option value="Grade VIII">Grade VIII</option>
                      <option value="Grade IX">Grade IX</option>
                      <option value="Grade X">Grade X</option>
                    </select>
                  </div>
                </div>

                {/* Message input */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    Detailed Inquiry Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your inquiry (e.g., academic requirements, board alignments, transport queries...)"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-xs bg-slate-50 font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee9b00]/30 focus:border-[#ee9b00] resize-none transition-all duration-300"
                  />
                </div>

                {/* Security policy note */}
                <div className="bg-slate-50 border border-slate-150 rounded-xl p-3 text-[11px] text-slate-500 leading-normal flex items-start gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>By submitting this inquiry, you authorize Mother's Pride School admissions staff to reach back on the phone number provided.</span>
                </div>

                {/* Transmit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0b2545] hover:bg-[#134074] text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer hover:translate-y-[-1px] active:translate-y-[0px]"
                >
                  <span>Transmit Secure Inquiry</span>
                  <Send className="w-3.5 h-3.5 text-[#ee9b00]" />
                </button>

              </form>
            </div>

          </div>

        </div>

        {/* FAQs and Information Panel */}
        <section className="mt-16 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f8fafc] border border-slate-150 p-5 rounded-2xl flex gap-3.5 items-start">
              <div className="bg-[#0b2545]/5 text-[#0b2545] p-2.5 rounded-xl">
                <HelpCircle className="w-5 h-5 text-[#9e2a2b]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-[#0b2545]">CBSE Registration Details</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  Mother's Pride School is fully affiliated with the CBSE board. Admission registrations open every December for the next session.
                </p>
              </div>
            </div>

            <div className="bg-[#f8fafc] border border-slate-150 p-5 rounded-2xl flex gap-3.5 items-start">
              <div className="bg-[#0b2545]/5 text-[#0b2545] p-2.5 rounded-xl">
                <Building className="w-5 h-5 text-[#ee9b00]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-[#0b2545]">Physical Campus Tours</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  Tours are scheduled every Saturday. Visitors must present a valid national identification card to clear campus security.
                </p>
              </div>
            </div>

            <div className="bg-[#f8fafc] border border-slate-150 p-5 rounded-2xl flex gap-3.5 items-start">
              <div className="bg-[#0b2545]/5 text-[#0b2545] p-2.5 rounded-xl">
                <Calendar className="w-5 h-5 text-[#0b2545]" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-extrabold uppercase tracking-wide text-[#0b2545]">Onboarding Timelines</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  Once an inquiry is submitted, our administration desk verifies current vacancy lists and replies via phone or SMS within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
