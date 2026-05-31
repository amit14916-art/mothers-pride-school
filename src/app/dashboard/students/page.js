"use client";

import React, { useState, useMemo } from "react";
import { 
  Users, 
  Layers, 
  Activity, 
  Search, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  XCircle
} from "lucide-react";

// Inline programmatic database loop generator for exactly 215 student records
const generateMockStudents = () => {
  const firstNames = [
    "Aarav", "Diya", "Kabir", "Ananya", "Rohan", "Neha", "Aditya", "Meera", "Ishaan", "Sanya",
    "Pranav", "Kriti", "Rishi", "Kiara", "Yash", "Tanvi", "Aryan", "Riya", "Devansh", "Simran",
    "Arjun", "Avni", "Manav", "Tara", "Raghav", "Shruti", "Dhruv", "Isha", "Karan", "Sneha",
    "Aditi", "Samar", "Parth", "Mehak", "Shreyas", "Alisha", "Nikhil", "Pooja", "Gaurav", "Deepak"
  ];
  
  const lastNames = [
    "Sharma", "Patel", "Mehta", "Iyer", "Das", "Sen", "Varma", "Nair", "Goel", "Gupta",
    "Rao", "Malhotra", "Kapoor", "Singh", "Singhal", "Saxena", "Reddy", "Roy", "Bhatia", "Joshi",
    "Pillai", "Dwivedi", "Deshmukh", "Sethi", "Hegde", "Chaudhari", "Tandon", "Johar", "Patil", "Khurana"
  ];

  const classes = [
    "Grade I", "Grade II", "Grade III", "Grade IV", "Grade V", 
    "Grade VI", "Grade VII", "Grade VIII", "Grade IX", "Grade X"
  ];

  const sections = ["A", "B", "C"];

  const studentsList = [];
  
  for (let i = 1; i <= 215; i++) {
    // ID formatted precisely as STU2026001 to STU2026215
    const id = `STU2026${String(i).padStart(3, "0")}`;
    
    // Deterministic selection using indexes to avoid math.random and keep it consistent
    const fn = firstNames[(i * 3 + 17) % firstNames.length];
    const ln = lastNames[(i * 7 + 23) % lastNames.length];
    const name = `${fn} ${ln}`;
    
    // Roll number STU2026001 -> R26-001
    const roll = `R26-${String(i).padStart(3, "0")}`;
    
    // Uniform distribution of classes and sections
    const gradeClass = classes[i % classes.length];
    const section = sections[(i * 2 + 1) % sections.length];
    
    // Parent Name
    const parentFn = firstNames[(i * 9 + 5) % firstNames.length];
    const parentName = `Mr. ${parentFn} ${ln}`;
    
    // Status: ~91% Active, ~9% Inactive
    const status = (i % 11 !== 0) ? "Active" : "Inactive";
    
    studentsList.push({
      id,
      name,
      roll,
      class: gradeClass,
      section,
      parentName,
      status
    });
  }
  
  return studentsList;
};

export default function StudentsDirectoryPage() {
  // Load generated student data once
  const allStudents = useMemo(() => generateMockStudents(), []);

  // Filter States
  const [searchTerm, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("All");
  const [sectionFilter, setSectionFilter] = useState("All");
  const [recordsPerPage, setRecordsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset Filters handler
  const resetFilters = () => {
    setSearchTerm("");
    setClassFilter("All");
    setSectionFilter("All");
    setCurrentPage(1);
  };

  // Memoized filtered array to optimize calculation overhead
  const filteredStudents = useMemo(() => {
    return allStudents.filter((student) => {
      // Check search match (Name or ID case-insensitive)
      const matchesSearch = 
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Check dropdown match
      const matchesClass = classFilter === "All" || student.class === classFilter;
      const matchesSection = sectionFilter === "All" || student.section === sectionFilter;

      return matchesSearch && matchesClass && matchesSection;
    });
  }, [allStudents, searchTerm, classFilter, sectionFilter]);

  // Total records count after filters
  const totalFilteredRecords = filteredStudents.length;

  // Pagination bounds
  const totalPages = Math.ceil(totalFilteredRecords / recordsPerPage) || 1;

  // Sliced paginated list
  const paginatedStudents = useMemo(() => {
    const startIdx = (currentPage - 1) * recordsPerPage;
    return filteredStudents.slice(startIdx, startIdx + recordsPerPage);
  }, [filteredStudents, currentPage, recordsPerPage]);

  // Adjust page boundary if filters exceed available range
  React.useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#0b2545] pb-20 relative">
      {/* Decorative Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      {/* Admin Dashboard Page Header */}
      <section className="bg-[#0b2545] text-white py-12 relative overflow-hidden shadow-md">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b2545] via-[#134074] to-[#0b2545] opacity-90"></div>
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 rounded-full bg-[#ee9b00] opacity-10 blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
              <ShieldCheck className="w-4 h-4 text-[#ee9b00]" />
              <span className="text-[10px] font-black tracking-widest uppercase text-slate-200">
                Administrative Terminal
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-none">
              Student Directory DB
            </h1>
            <p className="text-slate-350 text-xs sm:text-sm max-w-xl font-medium">
              Secure administrative directory managing computer labs, attendance index, active sections, and dynamic student registration matrices.
            </p>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={resetFilters}
              className="bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-widest px-4 py-3 rounded-xl border border-white/10 flex items-center gap-2 transition-all duration-300 cursor-pointer shadow active:scale-95"
            >
              <RotateCcw className="w-4 h-4 text-[#ee9b00]" /> Reset Filters
            </button>
          </div>
        </div>
      </section>

      {/* Analytics Metric Cards Grid (Total: 215, Active Sections: 30, Attendance: 96.8%) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 md:p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* Card 1: Total Students (Crimson theme accent) */}
          <div className="bg-white border-l-4 border-[#9e2a2b] p-5 rounded-r-2xl shadow-inner flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest block">Total Enrollment</span>
              <span className="text-3xl font-black text-[#0b2545] block leading-none">215</span>
              <span className="text-[9px] text-[#9e2a2b] font-bold block">Grade I to X Cohort</span>
            </div>
            <div className="bg-[#9e2a2b]/15 text-[#9e2a2b] p-3 rounded-2xl">
              <Users className="w-6 h-6 text-[#9e2a2b]" />
            </div>
          </div>

          {/* Card 2: Active Sections (Navy theme accent) */}
          <div className="bg-white border-l-4 border-[#0b2545] p-5 rounded-r-2xl shadow-inner flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest block">Active Sections</span>
              <span className="text-3xl font-black text-[#0b2545] block leading-none">30</span>
              <span className="text-[9px] text-[#0b2545]/70 font-bold block">A / B / C Groups Active</span>
            </div>
            <div className="bg-[#0b2545]/10 text-[#0b2545] p-3 rounded-2xl">
              <Layers className="w-6 h-6 text-[#0b2545]" />
            </div>
          </div>

          {/* Card 3: Attendance Index (Gold theme accent) */}
          <div className="bg-white border-l-4 border-[#ee9b00] p-5 rounded-r-2xl shadow-inner flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black text-slate-450 uppercase tracking-widest block">Attendance Index</span>
              <span className="text-3xl font-black text-[#0b2545] block leading-none">96.8%</span>
              <span className="text-[9px] text-[#ee9b00] font-black block">Wetted CBSE Compliance</span>
            </div>
            <div className="bg-[#ee9b00]/15 text-[#0b2545] p-3 rounded-2xl">
              <Activity className="w-6 h-6 text-[#ee9b00]" />
            </div>
          </div>

        </div>
      </div>

      {/* Table and Filter Controls Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-6">
        
        {/* Search and Filters Options Bar */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-5 items-end">
          
          {/* Live search input field */}
          <div className="md:col-span-4 space-y-1.5">
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Live Search Database
            </label>
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // reset to page 1 on search
                }}
                placeholder="Search Student Name or ID (e.g., STU2026042)"
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-xs bg-slate-50 font-semibold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee9b00]/30 focus:border-[#ee9b00] transition-all duration-300 text-slate-700"
              />
            </div>
          </div>

          {/* Classes dropdown select */}
          <div className="md:col-span-3 space-y-1.5">
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Standard Class Tier
            </label>
            <div className="relative">
              <select
                value={classFilter}
                onChange={(e) => {
                  setClassFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-3 border border-slate-200 rounded-xl text-xs bg-slate-50 font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee9b00]/30 focus:border-[#ee9b00] text-slate-600 appearance-none"
              >
                <option value="All">All Grades (Grade I-X)</option>
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

          {/* Sections dropdown select */}
          <div className="md:col-span-2 space-y-1.5">
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Class Section Group
            </label>
            <select
              value={sectionFilter}
              onChange={(e) => {
                setSectionFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full px-3 py-3 border border-slate-200 rounded-xl text-xs bg-slate-50 font-bold focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee9b00]/30 focus:border-[#ee9b00] text-slate-600 appearance-none"
            >
              <option value="All">All Sections</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>
          </div>

          {/* Records per page dropdown select */}
          <div className="md:col-span-3 space-y-1.5">
            <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Viewport Rows Range
            </label>
            <select
              value={recordsPerPage}
              onChange={(e) => {
                setRecordsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="w-full px-3 py-3 border border-slate-200 rounded-xl text-xs bg-slate-50 font-black focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ee9b00]/30 focus:border-[#ee9b00] text-slate-700 appearance-none"
            >
              <option value={20}>20 records per page</option>
              <option value={50}>50 records per page</option>
            </select>
          </div>

        </div>

        {/* Dynamic Records directory Grid Table */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0b2545] text-white text-[10px] font-black uppercase tracking-widest border-b border-slate-200">
                  <th className="p-5 pl-8">Student ID</th>
                  <th className="p-5">Roll No.</th>
                  <th className="p-5">FullName</th>
                  <th className="p-5">Standard</th>
                  <th className="p-5 text-center">Section</th>
                  <th className="p-5">Parent / Guardian Name</th>
                  <th className="p-5">Account Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-600">
                {paginatedStudents.map((student) => {
                  const isActive = student.status === "Active";
                  return (
                    <tr 
                      key={student.id} 
                      className="hover:bg-slate-55/40 transition-colors duration-250 border-slate-100"
                    >
                      {/* ID */}
                      <td className="p-5 pl-8 font-mono text-[11px] font-black text-[#9e2a2b]">
                        {student.id}
                      </td>
                      
                      {/* Roll */}
                      <td className="p-5 font-mono text-[11px] font-bold text-slate-400">
                        {student.roll}
                      </td>

                      {/* Name */}
                      <td className="p-5 text-[#0b2545] font-extrabold uppercase tracking-wide">
                        {student.name}
                      </td>

                      {/* Class */}
                      <td className="p-5 font-bold uppercase text-slate-500">
                        {student.class}
                      </td>

                      {/* Section */}
                      <td className="p-5 text-center">
                        <span className="bg-[#0b2545]/5 text-[#0b2545] border border-slate-200 px-2 py-0.5 rounded text-[10px] font-black">
                          {student.section}
                        </span>
                      </td>

                      {/* Parent */}
                      <td className="p-5 font-medium text-slate-500">
                        {student.parentName}
                      </td>

                      {/* Status */}
                      <td className="p-5">
                        <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                          isActive
                            ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                            : "bg-rose-50 text-rose-700 border-rose-250"
                        }`}>
                          {isActive ? (
                            <>
                              <CheckCircle className="w-3 h-3 text-emerald-600" /> Active
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3 h-3 text-rose-600" /> Inactive
                            </>
                          )}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Directory Empty state */}
          {totalFilteredRecords === 0 && (
            <div className="text-center py-20 p-8 space-y-4 max-w-sm mx-auto">
              <Users className="w-12 h-12 text-slate-350 mx-auto" />
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-tight">No Matching Profiles</h4>
              <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                No students matched the filter queries or search term "{searchTerm}". Clear filters to reset the system.
              </p>
            </div>
          )}

          {/* Pagination Controls Section (Prev, current/total pages badge, Next) */}
          {totalFilteredRecords > 0 && (
            <div className="bg-slate-50 border-t border-slate-100 p-4 px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
              
              {/* Sliced Record range detail */}
              <div>
                Showing <strong className="text-[#0b2545]">{(currentPage - 1) * recordsPerPage + 1}</strong> to <strong className="text-[#0b2545]">{Math.min(currentPage * recordsPerPage, totalFilteredRecords)}</strong> of <strong className="text-[#0b2545]">{totalFilteredRecords}</strong> student profiles
              </div>

              {/* Action buttons with custom Prev/Next layout */}
              <div className="flex items-center gap-3">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white text-slate-600 font-extrabold cursor-pointer transition-all flex items-center gap-1 shadow-sm active:scale-95 disabled:pointer-events-none"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4 text-[#0b2545]" /> <span>Prev</span>
                </button>

                {/* Page badges indicator */}
                <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-[10px] font-black uppercase text-[#0b2545] tracking-widest shadow-sm flex items-center gap-1">
                  <span>Page</span>
                  <span className="text-[#9e2a2b] font-black text-xs">{currentPage}</span>
                  <span>of</span>
                  <span className="text-[#0b2545] font-black text-xs">{totalPages}</span>
                </div>

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                  className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-white text-slate-600 font-extrabold cursor-pointer transition-all flex items-center gap-1 shadow-sm active:scale-95 disabled:pointer-events-none"
                  aria-label="Next Page"
                >
                  <span>Next</span> <ChevronRight className="w-4 h-4 text-[#0b2545]" />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
