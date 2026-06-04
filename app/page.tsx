'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Shield, 
  Terminal, 
  Lock, 
  Fingerprint, 
  ArrowRight, 
  Plus, 
  Activity, 
  CheckCircle2, 
  Target, 
  Compass, 
  Layers, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';
import GridBackground from '@/components/GridBackground';
import RiskEstimator from '@/components/RiskEstimator';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'profil' | 'visimisi' | 'tentang'>('profil');

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-[#0A0A0B]">
      {/* Sleek matrix/hacker grid background */}
      <GridBackground />

      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-20 md:pt-16 md:pb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#141416] border border-[#2D2D30] rounded-none text-white font-mono text-[10px] font-bold leading-none select-none tracking-widest uppercase">
              <span className="w-1.5 h-1.5 bg-white animate-pulse"></span>
              WHITEHAT COMPANY GROUP MEMBER
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05] !mb-4 uppercase">
              Membangun Masa Depan <br />
              <span className="text-white hover:opacity-90 transition-opacity">
                Keamanan Digital
              </span>
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#8E8E93] max-w-2xl leading-relaxed">
              White Security hadir di bawah naungan <strong>PT WhiteHat Company Group</strong> untuk melindungi data, mengaudit sistem informasi, dan memberikan solusi keamanan siber taktis berstandar militer menghadapi tantangan dunia digital yang terus berevolusi.
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap gap-4 text-[10px] font-mono text-[#8E8E93]">
              <div className="flex items-center gap-2 px-3 py-2 bg-[#141416] rounded-none border border-[#2D2D30]">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>INTEGRITY SECURED</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-[#141416] rounded-none border border-[#2D2D30]">
                <Cpu className="w-4 h-4 text-white" />
                <span>CYBER CONSULTANCY</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/services"
                className="px-6 py-3.5 bg-white hover:bg-gray-200 text-black font-extrabold text-xs tracking-widest uppercase font-mono rounded-none flex items-center justify-center gap-2 transition-all duration-155"
              >
                Eksplor Layanan Kami
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#risk-estimator"
                className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-white border border-[#2D2D30] text-xs font-mono uppercase tracking-widest rounded-none flex items-center justify-center gap-2 transition duration-150"
              >
                Hitung Risiko Sistem Anda
              </Link>
            </div>
          </div>

          {/* Hero graphic / dashboard mockup (without using AI slop graphics) */}
          <div className="lg:col-span-5 relative">
            <div className="relative bg-[#141416] border border-[#2D2D30] rounded-none p-6 shadow-2xl font-mono text-[11px]">
              
              {/* Fake terminal top window control */}
              <div className="flex items-center justify-between border-b border-[#2D2D30] pb-4 mb-4 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-white/20"></span>
                  <span className="w-2 h-2 bg-white/40"></span>
                  <span className="w-2 h-2 bg-white"></span>
                </div>
                <span className="text-[9px] text-[#8E8E93] tracking-widest">SECURE_MONITOR.SH</span>
              </div>

              {/* Terminal code simulation */}
              <div className="space-y-3 font-mono text-[11px] text-[#8E8E93]">
                <div>
                  <span className="text-white">root@white-sec-srv:~#</span> <span className="text-white font-semibold">./init_sec_audit.sh</span>
                </div>
                <div className="text-[10px] text-gray-400 font-mono p-3 bg-[#0A0A0B] rounded-none border border-[#2D2D30] space-y-1.5 uppercase tracking-wide">
                  <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                    White Security (WhiteHat Company Group)
                  </p>
                  <p>Motto: &ldquo;Secure Today, Protect Tomorrow&rdquo;</p>
                  <p>Sektor: IT Audit, Pentest, Digital Consulting</p>
                </div>
                <div className="flex items-center justify-between py-1 bg-white/5 px-2 rounded-none border border-[#2D2D30]">
                  <span className="text-[9px]">INTEGRITY EVALUATION</span>
                  <span className="text-[10px] text-white font-bold">SUCCESS [100%]</span>
                </div>
                <div className="flex items-center justify-between py-1 bg-white/5 px-2 rounded-none border border-[#2D2D30]">
                  <span className="text-[9px]">SYSTEM EXPLOIT MITIGATION</span>
                  <span className="text-[10px] text-white font-bold">READY TO DEPLOY</span>
                </div>
                <div className="pt-2 text-[#8E8E93] text-[9px] flex justify-between">
                  <span>SSL_PORT: 443</span>
                  <span>VERSION: 2.4.0</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Profile / Vision Mission / Tentang Segment Widget */}
      <section className="bg-[#0A0A0B] border-y border-[#2D2D30] py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section heading */}
          <div className="text-center mb-10 max-w-3xl mx-auto space-y-3">
            <span className="text-white font-mono text-[10px] font-bold uppercase tracking-widest block">
              Sekilas Profil Perusahaan
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
              Integritas & Keamanan Prioritas Kami
            </h2>
            <p className="text-xs md:text-sm text-[#8E8E93] leading-relaxed max-w-2xl mx-auto">
              Kami memadukan pendekatan investigatif yang ketat dan solusi teknologi canggih guna menjaga ekosistem IT bisnis Anda dari ancaman penipuan, pemerasan data, dan serangan digital tak terduga.
            </p>
          </div>

          {/* Interactive Navigation Grid for Profile */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 selection:bg-transparent">
            {[
              { id: 'profil', label: 'Profil Perusahaan', icon: Layers },
              { id: 'visimisi', label: 'Visi & Misi', icon: Target },
              { id: 'tentang', label: 'Tentang Kami', icon: Compass },
            ].map(tab => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'profil' | 'visimisi' | 'tentang')}
                  className={`inline-flex items-center gap-2 px-5 py-3 text-xs font-mono uppercase tracking-wider rounded-none border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white/10 border-white text-white font-bold'
                      : 'bg-[#141416] border-[#2D2D30] text-[#8E8E93] hover:text-white hover:border-gray-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Display with animations */}
          <div className="bg-[#141416] border border-[#2D2D30] rounded-none p-6 md:p-10 max-w-4xl mx-auto min-h-[300px] flex items-center justify-center shadow-lg relative">
            
            {activeTab === 'profil' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 w-full">
                <div className="flex items-center gap-3 border-b border-[#2D2D30] pb-4 mb-4">
                  <div className="p-2 bg-[#0D0D0F] border border-[#2D2D30] rounded-none">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-white text-lg md:text-xl uppercase tracking-tight">
                      Profil Perusahaan — White Security
                    </h3>
                    <p className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-wider">Divisi Keamanan Siber & Solusi Digital Utama</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#8E8E93] leading-relaxed">
                  White Security merupakan perusahaan yang bergerak di bidang keamanan siber, teknologi informasi, dan solusi digital yang bernaung di bawah <strong>WhiteHat Company Group</strong>. Dengan fokus pada perlindungan data, keamanan sistem, dan pengembangan teknologi modern, kami hadir untuk membantu individu, organisasi, dan perusahaan menghadapi tantangan dunia digital yang terus berkembang.
                </p>
                <p className="text-xs md:text-sm text-[#8E8E93] leading-relaxed">
                  Sebagai bagian integral dari ekosistem tepercaya kami, kami mengedepankan aspek keunggulan teknis, profesionalisme tingkat tinggi, inovasi struktural, serta integritas moral di setiap layanan audit, analisis pertahanan, dan konsultasi taktis yang didelegasikan.
                </p>
              </motion.div>
            )}

            {activeTab === 'visimisi' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5 w-full">
                <div className="flex items-center gap-3 border-b border-[#2D2D30] pb-4 mb-4">
                  <div className="p-2 bg-[#0D0D0F] border border-[#2D2D30] rounded-none">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-white text-lg md:text-xl uppercase tracking-tight">
                      Visi & Misi White Security
                    </h3>
                    <p className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-wider">Prinsip Panduan & Skala Pengaruh Global</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-[#0D0D0F] border border-l-2 border-l-white border-[#2D2D30] rounded-none">
                    <span className="font-mono text-[9px] text-[#8E8E93] font-bold block mb-1 uppercase tracking-widest">VISI UTAMA</span>
                    <p className="text-xs md:text-sm text-white font-medium italic">
                      “Menjadi perusahaan keamanan digital dan teknologi yang inovatif, terpercaya, dan berdaya saing tinggi di tingkat nasional maupun internasional.”
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <span className="font-mono text-[9px] text-[#8E8E93] font-bold block mb-1 uppercase tracking-widest">MISI KAMI</span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[#8E8E93]">
                      {[
                        'Menyediakan layanan keamanan siber yang profesional dan berkualitas.',
                        'Mengembangkan solusi teknologi yang aman dan inovatif.',
                        'Meningkatkan literasi keamanan digital bagi masyarakat.',
                        'Membangun sumber daya manusia yang kompeten dan berintegritas.',
                        'Menjalin kemitraan yang kuat dan berkelanjutan.',
                      ].map((misiStr, idx) => (
                        <li key={idx} className="flex gap-2 items-start font-medium">
                          <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                          <span>{misiStr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tentang' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 w-full">
                <div className="flex items-center gap-3 border-b border-[#2D2D30] pb-4 mb-4">
                  <div className="p-2 bg-[#0D0D0F] border border-[#2D2D30] rounded-none">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-white text-lg md:text-xl uppercase tracking-tight">
                      Tentang White Security
                    </h3>
                    <p className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-wider">Tujuan, Dedikasi, & Tanggung Jawab Sosial</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-[#8E8E93] leading-relaxed">
                  White Security didirikan dengan tujuan menciptakan lingkungan digital yang aman, terpercaya, dan berkelanjutan. Perusahaan ini berkomitmen untuk memberikan solusi keamanan yang efektif serta mendukung transformasi digital yang aman bagi berbagai kalangan.
                </p>
                <p className="text-xs md:text-sm text-[#8E8E93] leading-relaxed">
                  Dalam menjalankan kegiatannya, White Security tidak hanya berfokus pada perlindungan sistem dan data, tetapi juga berupaya meningkatkan kesadaran masyarakat mengenai pentingnya keamanan informasi di era modern. Kami percaya literasi cyber adalah pilar tameng terkuat dalam perang siber modern.
                </p>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* Cyber Calculator Tool Integration Section */}
      <section className="py-16 md:py-20 px-4 max-w-7xl mx-auto">
        <RiskEstimator />
      </section>

      {/* Nilai-Nilai Perusahaan & Brand Moto (Bento Grid Style) */}
      <section className="bg-[#0A0A0B] border-t border-[#2D2D30] py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-white font-mono text-[10px] font-bold uppercase tracking-widest block">
              Core Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
              Nilai-Nilai Fundamental Perusahaan
            </h2>
            <p className="text-xs text-[#8E8E93] leading-relaxed max-w-2xl mx-auto">
              White Security dan WhiteHat Company Group menjunjung tinggi nilai-nilai utama dalam memastikan standar pelayanan maksimal kepada seluruh pihak.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Integritas', desc: 'Menjalankan setiap aktivitas dengan kejujuran, loyalitas tinggi, dan tanggung jawab profesional.' },
              { title: 'Keamanan', desc: 'Menempatkan perlindungan data, pencegahan serangan siber, dan pertahanan sistem sebagai prioritas mutlak.' },
              { title: 'Inovasi', desc: 'Terus menguji dan menciptakan solusi berdaya saing global yang relevan dengan laju perkembangan teknologi siber.' },
              { title: 'Kolaborasi', desc: 'Membangun kerja sama taktis, transparan, dan kuat dengan klien, regulator, serta mitra eksternal.' },
              { title: 'Keunggulan', desc: 'Konsistensi tinggi dalam memberikan output laporan audit, taktis pertahanan, dan edukasi infosec terbaik.' },
            ].map((valueItem, idx) => (
              <div 
                key={idx} 
                className="p-5 bg-[#141416] border border-[#2D2D30] border-l-2 border-l-white rounded-none space-y-2 hover:-translate-y-1 transition duration-200"
              >
                <div className="flex justify-between items-center">
                  <span className="font-sans font-extrabold text-white text-base uppercase tracking-tight">
                    {valueItem.title}
                  </span>
                  <span className="font-mono text-[10px] text-white font-bold">0{idx + 1}</span>
                </div>
                <p className="text-xs text-[#8E8E93] leading-relaxed font-sans font-medium">
                  {valueItem.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Slogan Banner */}
          <div className="p-8 bg-[#141416] rounded-none border border-[#2D2D30] text-center relative overflow-hidden">
            <span className="font-mono text-[9px] text-[#8E8E93] font-bold tracking-widest block uppercase mb-1">
              Slogan Resmi White Security
            </span>
            <div className="text-2xl md:text-3xl font-extrabold text-white italic mb-2 tracking-wide font-sans uppercase">
              “Secure Today, Protect Tomorrow” 🛡️
            </div>
            <p className="text-xs md:text-sm text-[#8E8E93] max-w-xl mx-auto leading-relaxed">
              Kami berdiri di garis depan pertahanan digital untuk memastikan pertumbuhan ekosistem teknologi Indonesia yang aman, andal, dan siap menyongsong masa depan.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
