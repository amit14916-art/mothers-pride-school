'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase'; // सुपाबेस लाइव क्लाइंट
import { Send, Loader2, CheckCircle2, MapPin, Instagram, Facebook, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', question: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // सुपाबेस की 'inquiries' टेबल में लाइव डेटा इन्सर्ट करना
      const { error } = await supabase
        .from('inquiries')
        .insert([
          { 
            name: formData.name, 
            phone: formData.phone, 
            question: formData.question 
          }
        ]);

      if (error) throw error;

      setSuccess(true);
      setFormData({ name: '', phone: '', question: '' });
      setTimeout(() => setSuccess(false), 4000);
    } catch (err) {
      console.error("Error saving inquiry to Supabase:", err.message);
      alert("क्वेरी सेव करने में समस्या आई, कृपया दोबारा प्रयास करें।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-school-watermark min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-[#0b2545] mb-2">Mother's Pride School, Arang</h1>
        <p className="text-slate-600 text-sm">Connect directly via our Official Channels or visit our Campus.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* सोशल मीडिया और सही एड्रेस ग्रिड */}
        <div className="space-y-3 text-xs text-slate-600">
          <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-start gap-3 shadow-sm">
            <MapPin className="w-5 h-5 text-[#9e2a2b] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#0b2545]">स्कूल कैंपस पता</h4>
              <p className="mt-0.5 leading-relaxed">कैथापार, आरंग, जिला-रायपुर (छ.ग.)<br/>Kaithapar, Arang, Arang</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-3">
            <h4 className="font-bold text-[#0b2545] border-b pb-2">Official Digital Nodes</h4>
            <a href="https://instagram.com/mothersprideschool_arang/" target="_blank" className="flex items-center gap-2 text-pink-600 font-bold hover:underline">
              <Instagram className="w-4 h-4" /> Instagram Profile
            </a>
            <a href="https://facebook.com/mothersprideschool_arang/" target="_blank" className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
              <Facebook className="w-4 h-4" /> Facebook Page
            </a>
            <a href="https://wa.me/919876543210" target="_blank" className="flex items-center gap-2 text-emerald-600 font-bold hover:underline">
              <MessageSquare className="w-4 h-4" /> Live WhatsApp Chat
            </a>
          </div>
        </div>

        {/* लाइव एडमिशन क्वेरी फॉर्म */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative">
          {success && (
            <div className="absolute inset-0 bg-white/95 z-10 flex flex-col items-center justify-center text-center p-4 rounded-xl">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mb-2" />
              <h3 className="font-bold text-slate-800">Inquiry Logged Securely!</h3>
              <p className="text-xs text-slate-500">आपका नाम, नंबर और प्रश्न सीधे सुपाबेस क्लाउड डेटाबेस में लाइव सेव हो चुका है।</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="आपका नाम (Name)" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="p-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:outline-none focus:border-blue-900" />
              <input type="tel" placeholder="मोबाइल नंबर (Phone No.)" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required className="p-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:outline-none focus:border-blue-900" />
            </div>
            <textarea placeholder="आपका प्रश्न या संदेश (Your Query / Question)" rows="4" value={formData.question} onChange={(e) => setFormData({...formData, question: e.target.value})} required className="w-full p-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:outline-none focus:border-blue-900"></textarea>
            
            <button type="submit" disabled={loading} className="w-full bg-[#0b2545] text-white font-bold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer hover:bg-[#134074] transition">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Send className="w-4 h-4" /> सबमिट करें (Save Live Data)</>}
            </button>
          </form>
        </div>

        </div>
      </div>
    </div>
  );
}