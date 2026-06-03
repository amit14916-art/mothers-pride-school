'use client';
import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/lib/supabase'; // सुपाबेस लाइव क्लाइंट
import { Search, Users, SlidersHorizontal, ChevronLeft, ChevronRight, GraduationCap, Inbox, Loader2 } from 'lucide-react';

// छात्र और शिक्षक का लोकल डेटा जनरेटर
const GENERATE_MOCK_DATA = () => {
  const sNames = ["Amit Prasad", "Rahul Kumar", "Sneha Singh", "Priya Sharma", "Vikram Verma", "Neha Joshi", "Rohan Gupta"];
  const tNames = ["Mr. S.P. Sahu", "Mrs. Rashmi Dewangan", "Mr. R.K. Patel", "Miss Anjali Tiwari", "Mr. Vinod Nishad"];
  const classes = ["Grade VI", "Grade VII", "Grade VIII", "Grade IX", "Grade X"];
  const subjects = ["Mathematics", "Science", "Hindi", "English", "Social Studies"];

  const students = Array.from({ length: 215 }, (_, i) => ({
    id: `STU2026${String(i + 1).padStart(3, '0')}`,
    name: sNames[i % sNames.length] + ` (${101 + i})`,
    role: `${classes[i % classes.length]} - A`,
    info: `Guardian: ${sNames[(i + 2) % sNames.length]} Senior`,
    status: "Active"
  }));

  const teachers = Array.from({ length: 15 }, (_, i) => ({
    id: `TCH2026${String(i + 1).padStart(2, '0')}`,
    name: tNames[i % tNames.length],
    role: subjects[i % subjects.length],
    info: `In-charge: ${classes[i % classes.length]}`,
    status: "Active"
  }));

  return { students, teachers };
};

export default function AdminDashboard() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  const [loadingStudents, setLoadingStudents] = useState(false);
  const [loadingTeachers, setLoadingTeachers] = useState(false);
  const [loadingInquiries, setLoadingInquiries] = useState(false);

  const [activeTab, setActiveTab] = useState('students'); 
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;

  const fetchStudents = async () => {
    setLoadingStudents(true);
    try {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('id', { ascending: true });
      if (error) throw error;
      
      const formattedStudents = (data || []).map(s => ({
        id: s.id,
        name: s.roll_no ? `${s.name} (${s.roll_no})` : s.name,
        role: s.class_level ? `${s.class_level} - ${s.section || ''}` : '',
        info: s.parent_name ? `Guardian: ${s.parent_name}` : '',
        status: s.status || "Active"
      }));
      setStudents(formattedStudents);
    } catch (err) {
      console.error("Error fetching students:", err.message);
    } finally {
      setLoadingStudents(false);
    }
  };

  const fetchTeachers = async () => {
    setLoadingTeachers(true);
    try {
      const { data, error } = await supabase
        .from('teachers')
        .select('*')
        .order('id', { ascending: true });
      if (error) throw error;

      const formattedTeachers = (data || []).map(t => ({
        id: t.id,
        name: t.name,
        role: t.subject || '',
        info: t.class_in_charge ? `In-charge: ${t.class_in_charge}` : '',
        status: t.status || "Active"
      }));
      setTeachers(formattedTeachers);
    } catch (err) {
      console.error("Error fetching teachers:", err.message);
    } finally {
      setLoadingTeachers(false);
    }
  };

  const fetchInquiries = async () => {
    setLoadingInquiries(true);
    try {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('id', { ascending: false });
      if (error) throw error;
      const formattedInquiries = data.map(inq => ({
        id: `INQ-${String(inq.id).padStart(3, '0')}`,
        name: inq.name,
        role: inq.phone,
        info: inq.question,
        status: "New Inquiry"
      }));
      setInquiries(formattedInquiries);
    } catch (err) {
      console.error("Error fetching inquiries:", err.message);
    } finally {
      setLoadingInquiries(false);
    }
  };

  // Fetch counts and initial data on mount
  useEffect(() => {
    fetchStudents();
    fetchTeachers();
    fetchInquiries();
  }, []);

  // Refresh tab data when active tab changes
  useEffect(() => {
    if (activeTab === 'students') {
      fetchStudents();
    } else if (activeTab === 'teachers') {
      fetchTeachers();
    } else if (activeTab === 'inquiries') {
      fetchInquiries();
    }
  }, [activeTab]);

  const isLoading = useMemo(() => {
    if (activeTab === 'students') return loadingStudents;
    if (activeTab === 'teachers') return loadingTeachers;
    return loadingInquiries;
  }, [activeTab, loadingStudents, loadingTeachers, loadingInquiries]);

  const currentDataset = useMemo(() => {
    if (activeTab === 'students') return students;
    if (activeTab === 'teachers') return teachers;
    return inquiries;
  }, [activeTab, students, teachers, inquiries]);

  const filteredData = useMemo(() => {
    return currentDataset.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.info.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [currentDataset, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / recordsPerPage) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * recordsPerPage;
    return filteredData.slice(start, start + recordsPerPage);
  }, [filteredData, currentPage]);

  return (
    <div className="py-6 bg-slate-50 min-h-screen text-xs sm:text-sm text-slate-700">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Top Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
            <div><p className="text-slate-400 font-bold text-[10px] uppercase">Total Students</p><h3 className="text-xl font-black text-[#0b2545]">{students.length}</h3></div>
            <Users className="w-7 h-7 text-[#0b2545] opacity-20" />
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
            <div><p className="text-slate-400 font-bold text-[10px] uppercase">Faculty Members</p><h3 className="text-xl font-black text-[#9e2a2b]">{teachers.length}</h3></div>
            <GraduationCap className="w-7 h-7 text-[#9e2a2b] opacity-20" />
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
            <div><p className="text-slate-400 font-bold text-[10px] uppercase">Live Inquiries</p><h3 className="text-xl font-black text-emerald-600">{inquiries.length}</h3></div>
            <Inbox className="w-7 h-7 text-emerald-600 opacity-20" />
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between shadow-sm">
            <div><p className="text-slate-400 font-bold text-[10px] uppercase">Database Status</p><h3 className="text-xl font-black text-[#ee9b00]">Connected</h3></div>
            <SlidersHorizontal className="w-7 h-7 text-[#ee9b00] opacity-20" />
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 mb-4 gap-1 sm:gap-2">
          <button onClick={() => { setActiveTab('students'); setSearchTerm(''); setCurrentPage(1); }} className={`py-2 px-3 font-bold border-b-2 text-xs transition cursor-pointer ${activeTab === 'students' ? 'border-[#0b2545] text-[#0b2545]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
            👥 Students ({students.length})
          </button>
          <button onClick={() => { setActiveTab('teachers'); setSearchTerm(''); setCurrentPage(1); }} className={`py-2 px-3 font-bold border-b-2 text-xs transition cursor-pointer ${activeTab === 'teachers' ? 'border-[#0b2545] text-[#0b2545]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
            🧑‍🏫 Teachers ({teachers.length})
          </button>
          <button onClick={() => { setActiveTab('inquiries'); setSearchTerm(''); setCurrentPage(1); }} className={`py-2 px-3 font-bold border-b-2 text-xs transition cursor-pointer ${activeTab === 'inquiries' ? 'border-[#0b2545] text-[#0b2545]' : 'border-transparent text-slate-400 hover:text-slate-600'}`}>
            📥 Inquiries Desk ({inquiries.length})
          </button>
        </div>

        {/* Search Input */}
        <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm mb-4 flex items-center">
          <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
          <input type="text" placeholder={`Search fields inside ${activeTab}...`} value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }} className="w-full text-xs bg-transparent focus:outline-none" />
        </div>

        {/* Grid Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="p-12 flex items-center justify-center gap-2 text-slate-400 text-xs">
                <Loader2 className="w-4 h-4 animate-spin text-[#0b2545]" /> सुपाबेस से लाइव डेटा लोड हो रहा है...
              </div>
            ) : (
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#0b2545] text-white font-bold uppercase tracking-wider text-[10px]">
                    <th className="p-3">{activeTab === 'inquiries' ? 'Inquiry ID' : 'ID Code'}</th>
                    <th className="p-3">Full Name</th>
                    <th className="p-3">{activeTab === 'inquiries' ? 'Phone Number' : activeTab === 'students' ? 'Class & Roll' : 'Subject'}</th>
                    <th className="p-3">{activeTab === 'inquiries' ? 'User Question / Message' : 'Additional Info'}</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-150 text-slate-600">
                  {paginatedData.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50 transition">
                      <td className="p-3 font-bold text-slate-900">{row.id}</td>
                      <td className="p-3 font-semibold text-[#0b2545]">{row.name}</td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded font-medium ${activeTab === 'inquiries' ? 'bg-emerald-50 text-emerald-800 border border-emerald-100' : 'bg-slate-100 text-slate-700'}`}>
                          {row.role}
                        </span>
                      </td>
                      <td className="p-3 text-slate-500 max-w-xs truncate md:max-w-none">{row.info}</td>
                      <td className="p-3">
                        <span className={`inline-flex items-center font-bold px-2 py-0.5 rounded-full text-[10px] ${row.status === 'Active' || row.status === 'Reviewed' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {paginatedData.length === 0 && (
                    <tr>
                      <td colSpan="5" className="p-8 text-center text-slate-400 text-xs">कोई रिकॉर्ड नहीं मिला।</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>

          {/* Footer Controls */}
          <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <span className="text-[11px] text-slate-400 font-medium">Matches: {filteredData.length} records</span>
            <div className="flex items-center gap-2">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} className="p-1 border border-slate-200 rounded bg-white hover:bg-slate-100 disabled:opacity-40 cursor-pointer"><ChevronLeft className="w-4 h-4" /></button>
              <span className="text-xs font-bold text-[#0b2545]">Page {currentPage} of {totalPages}</span>
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} className="p-1 border border-slate-200 rounded bg-white hover:bg-slate-100 disabled:opacity-40 cursor-pointer"><ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}