'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  ChevronRight, 
  Send, 
  CheckCircle, 
  ShieldAlert, 
  Clock, 
  Terminal,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import GridBackground from '@/components/GridBackground';
import LiveChat from '@/components/LiveChat';

export default function ContactPage() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formService, setFormService] = useState('audit');
  const [formMessage, setFormMessage] = useState('');
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!formName.trim() || !formEmail.trim() || !formMessage.trim()) {
      setFormError('Harap lengkapi semua isian wajib (*).');
      return;
    }

    setSubmitting(true);
    
    // Simulate high-profile cyber submit logs
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Clear inputs
      setFormName('');
      setFormEmail('');
      setFormCompany('');
      setFormMessage('');
    }, 1550);
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-[#0A0A0B]">
      <GridBackground />

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141416] border border-[#2D2D30] rounded-none text-white font-mono text-[10px] font-bold uppercase tracking-widest leading-none">
            <MessageSquare className="w-3.5 h-3.5" />
            COMMUNICATION GATEWAY
          </span>
          <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            Hubungi White Security
          </h1>
          <p className="text-sm text-[#8E8E93] leading-relaxed font-sans max-w-2xl mx-auto">
            Miliki respons penanganan insiden instan, konsultasikan mitigasi risiko perusahaan Anda, atau hubungi pusat bantuan interaktif kami melalui kanal resmi yang tersedia.
          </p>
        </div>

        {/* Contact info cards (WhatsApp & Email) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="p-6 bg-[#141416] border border-[#2D2D30] rounded-none flex items-start gap-4 hover:border-white transition-all">
            <div className="p-3 bg-[#0A0A0B] border border-[#2D2D30] rounded-none text-white">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[9px] text-[#8E8E93] font-bold uppercase tracking-widest block">
                RESPON CEPAT (WHATSAPP SIMULASI)
              </span>
              <h3 className="font-sans font-black text-white text-base">
                +62 812-3456-7890
              </h3>
              <p className="text-xs text-[#8E8E93] font-sans">
                Terhubung dengan <strong>Farhan Septian (Head Staff Executor)</strong> untuk pengurusan jadwal audit taktis dan darurat.
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-6 bg-[#141416] border border-[#2D2D30] rounded-none flex items-start gap-4 hover:border-white transition-all">
            <div className="p-3 bg-[#0A0A0B] border border-[#2D2D30] rounded-none text-white">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[9px] text-[#8E8E93] font-bold uppercase tracking-widest block">
                KORESPONDEN FORMAL (EMAIL SIMULASI)
              </span>
              <h3 className="font-sans font-black text-white text-base">
                hubungi@whitehat.com
              </h3>
              <p className="text-xs text-[#8E8E93] font-sans">
                Gunakan kanal ini jika ingin mengirim berkas NDA, penawaran tender, atau korespondensi resmi dengan CEO Tsani Zaid.
              </p>
            </div>
          </div>
        </div>

        {/* Form and Chatbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Inquiry submit form */}
          <div className="lg:col-span-6 bg-[#141416] border border-[#2D2D30] p-6 md:p-8 rounded-none space-y-6">
            <div className="space-y-1 border-b border-[#2D2D30] pb-4">
              <h3 className="font-sans font-black text-white text-lg md:text-xl uppercase tracking-tight">
                Kirim Pengajuan Audit Baru
              </h3>
              <p className="text-xs text-[#8E8E93]">
                Lengkapi formulir di bawah ini dengan valid. Tim akuntan & teknisi kami akan mengkaji data Anda dalam 1x24 jam kerja.
              </p>
            </div>

            {formError && (
              <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-none text-xs text-red-400 font-mono font-bold uppercase">
                {formError}
              </div>
            )}

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="p-6 bg-[#0A0A0B] border border-[#2D2D30] rounded-none text-center space-y-3"
              >
                <div className="w-12 h-12 bg-[#141416] text-white border border-[#2D2D30] rounded-none flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="font-sans font-extrabold text-white text-base uppercase tracking-wider">Pengajuan Berhasil Dikirim!</h4>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-sans max-w-md mx-auto">
                  Dokumen terenkripsi Anda telah diterima oleh White Security System. <strong>Radithya Fasha (Accountant)</strong> akan memproses data perpajakan dan draf invoice, serta segera merilis proposal formal via email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 bg-black hover:bg-white hover:text-black border border-[#2D2D30] text-[#8E8E93] font-mono text-[9px] rounded-none uppercase font-bold tracking-widest transition duration-150"
                >
                  Kirim Pengajuan Baru
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold mb-1.5">
                      Nama Lengkap Anda *
                    </label>
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Contoh: Budi Santoso"
                      className="w-full bg-[#0A0A0B] border border-[#2D2D30] focus:border-white focus:outline-none rounded-none px-3 py-2 text-xs text-white placeholder-gray-650"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold mb-1.5">
                      Alamat Email Aktif *
                    </label>
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="budi@perusahaan.com"
                      className="w-full bg-[#0A0A0B] border border-[#2D2D30] focus:border-white focus:outline-none rounded-none px-3 py-2 text-xs text-white placeholder-gray-650"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold mb-1.5">
                      Nama Instansi / Perusahaan
                    </label>
                    <input
                      type="text"
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="PT Sukses Bersama"
                      className="w-full bg-[#0A0A0B] border border-[#2D2D30] focus:border-white focus:outline-none rounded-none px-3 py-2 text-xs text-white placeholder-gray-650"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold mb-1.5">
                      Kategori Layanan *
                    </label>
                    <select
                      value={formService}
                      onChange={(e) => setFormService(e.target.value)}
                      className="w-full bg-[#0A0A0B] border border-[#2D2D30] focus:border-white focus:outline-none select-none rounded-none px-3 py-2 text-xs text-white"
                    >
                      <option value="audit">Service 1: Audit & Consulting</option>
                      <option value="pentest">Service 2: Penetration Testing & Risiko TI</option>
                      <option value="education">Service 3: Edukasi & Solusi Kustom</option>
                      <option value="other">Kemitraan Khusus / Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-[#8E8E93] uppercase tracking-widest font-bold mb-1.5">
                    Detail Pengajuan / Pesan *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Deskripsikan secara ringkas sistem yang ingin Anda amankan..."
                    className="w-full bg-[#0A0A0B] border border-[#2D2D30] focus:border-white focus:outline-none rounded-none px-3 py-2 text-xs text-white placeholder-gray-650 resize-none font-sans"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-white hover:bg-gray-200 active:bg-gray-300 text-black font-mono font-bold text-xs uppercase tracking-widest rounded-none transition duration-150 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? 'Mengirim Data Enkripsi...' : 'Kirim Pengajuan'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Block: Live Chat simulation */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-1">
              <h3 className="font-sans font-black text-white text-lg uppercase tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-none animate-pulse"></span>
                Chatbox Live (Simulasi)
              </h3>
              <p className="text-xs text-[#8E8E93] font-sans">
                Interaksi seketika 24/7 dengan operator pelaksana White Security. Pilih prompt cepat atau ketik kebutuhan Anda di bawah ini:
              </p>
            </div>

            <LiveChat />
          </div>

        </div>

      </div>
    </div>
  );
}
