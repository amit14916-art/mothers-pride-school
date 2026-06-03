"use client";

import React from "react";
import { CheckCircle2, ChevronRight, ClipboardList, Info, HelpCircle, ArrowRight } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Inquiry Submission",
    desc: "Complete the online contact inquiry form or floating inquiry widget. Our dean of admissions will connect within 24 working hours."
  },
  {
    num: "02",
    title: "Campus Interactive Tour",
    desc: "Visit our campus to inspect the smart lecture halls, hi-tech AI computing labs, playground, and meet our senior directors."
  },
  {
    num: "03",
    title: "Document Vetting",
    desc: "Submit critical paperwork (Transfer Certificate, Aadhaar, Photos, Birth Certificate) for validation by our academic desk."
  },
  {
    num: "04",
    title: "Fee Deposit & Boarding",
    desc: "Complete the registration fee deposit, secure the student syllabus kit, uniforms, and receive their official Admission number."
  }
];

const DOCUMENTS = [
  "Official Birth Certificate (issued by municipal authority)",
  "Original Transfer Certificate (TC) from the previous recognized school",
  "Report card/Academic transcripts of the previous class",
  "Aadhaar Card copy of both the student and parents",
  "Recent passport-sized photographs (6 copies of student, 2 of parents)",
  "Medical fitness certificate signed by a registered practitioner"
];

const FEE_STRUCTURE = [
  { grade: "Pre-K to Kindergarten", tuition: "₹18,000", computerLab: "₹2,500", devFee: "₹3,500", total: "₹24,000" },
  { grade: "Grade I to Grade V", tuition: "₹22,000", computerLab: "₹4,000", devFee: "₹4,000", total: "₹30,000" },
  { grade: "Grade VI to Grade VIII", tuition: "₹25,000", computerLab: "₹6,000", devFee: "₹4,500", total: "₹35,500" },
  { grade: "Grade IX to Grade X", tuition: "₹28,000", computerLab: "₹8,000", devFee: "₹5,000", total: "₹41,000" }
];

export default function Admissions() {
  return (
    <div className="bg-school-watermark min-h-screen text-slate-800 pb-20">
      
      {/* Header Banner */}
      <section className="bg-academic-navy text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-academic-navy to-indigo-950"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-3 px-4">
          <span className="text-xs font-bold text-academic-gold uppercase tracking-widest block">
            Enrollment Guide
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
            Admissions Roadmap & Fees
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Review our step-by-step onboarding sequence, essential files checklists, and clear academic class-wise fee schedules.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        
        {/* Step-by-Step Roadmap */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              The Process
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              4-Step Admission Lifecycle
            </h3>
            <div className="h-1 w-16 bg-academic-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {STEPS.map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 relative hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <span className="text-4xl font-black text-slate-100 block mb-4 select-none">
                    {step.num}
                  </span>
                  <h4 className="font-bold text-slate-800 text-base mb-2 uppercase">
                    {step.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents Checklist */}
        <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-amber-50 text-amber-700 p-4 rounded-2xl inline-block">
              <ClipboardList className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight">
              Documents Checklist
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Please gather these certified papers before completing Phase 3 of your admission journey. Vetting delays will postpone code registration.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DOCUMENTS.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 p-3 bg-slate-50 border border-slate-150 rounded-xl"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600 font-medium leading-relaxed">
                  {doc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Class-wise Fee Structure */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
              Financial Transparency
            </h2>
            <h3 className="text-3xl font-extrabold text-slate-900 uppercase tracking-tight">
              Class-Wise Annual Fees
            </h3>
            <div className="h-1 w-16 bg-academic-gold mx-auto rounded-full"></div>
            <p className="text-slate-600 text-sm">
              We maintain absolute pricing integrity with no surprise charges. Lab charges cover individual micro-sensor access.
            </p>
          </div>

          {/* Responsive Table Wrapper */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-academic-navy text-white text-xs font-bold uppercase tracking-wider">
                    <th className="p-4 pl-6">Grade / Standard Level</th>
                    <th className="p-4">Annual Tuition Fee</th>
                    <th className="p-4">Tech & AI Lab Fee</th>
                    <th className="p-4">Development Fee</th>
                    <th className="p-4 pr-6 text-right">Total Annual Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {FEE_STRUCTURE.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4 pl-6 font-bold text-slate-800 uppercase">{fee.grade}</td>
                      <td className="p-4 text-slate-600">{fee.tuition}</td>
                      <td className="p-4 text-slate-600">{fee.computerLab}</td>
                      <td className="p-4 text-slate-600">{fee.devFee}</td>
                      <td className="p-4 pr-6 text-right font-bold text-indigo-600">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fee Policy Information Bar */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 flex items-start space-x-3 text-xs text-indigo-800">
            <Info className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block uppercase tracking-wider">Fee Regulations Policy:</span>
              <p className="leading-relaxed">
                Fees can be deposited in four equal quarterly installments (by the 10th of April, July, October, and January). Late payment penalties apply post grace periods. IT & AI lab charges cover full license fees and hardware upgrades.
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic FAQ / CTA Bar */}
        <section className="bg-academic-dark text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="absolute right-0 bottom-0 w-1/4 h-full bg-white/[0.02] skew-x-12"></div>
          <div className="space-y-4 max-w-2xl relative z-10">
            <h3 className="text-2xl font-black uppercase tracking-tight text-academic-gold">
              Ready to Secure a Seat?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our seats fill up extremely fast due to our small 10:1 student-teacher ratio limit. Submit your registration inquiry to reserve a vetting appointment.
            </p>
          </div>
          <div className="flex-shrink-0 relative z-10">
            <a
              href="/contact"
              className="bg-academic-gold hover:bg-amber-500 text-academic-navy font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider block text-center transition-all shadow-lg hover:shadow-xl"
            >
              Start Admission Inquiry
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
