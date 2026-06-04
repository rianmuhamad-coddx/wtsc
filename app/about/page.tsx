'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Users, 
  ShieldCheck, 
  Terminal, 
  Award, 
  ArrowRight,
  Eye,
  Target,
  FileText,
  Fingerprint,
  UserCheck,
  Cpu
} from 'lucide-react';
import { motion } from 'motion/react';
import GridBackground from '@/components/GridBackground';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Tsani Zaid Janzabila',
      role: 'Founder & Chief Executive Officer (CEO)',
      avatarChar: 'TZ',
      bio: 'Sebagai pendiri White Security, Tsani Zaid Janzabila memimpin arah strategis perusahaan serta memastikan visi dan misi perusahaan dapat diwujudkan secara berkelanjutan di bawah naungan WhiteHat Company Group.',
      credential: 'Certified Information Systems Auditor (CISA)',
      level: 'LEVEL: EXECUTIVE // AUTHORITY',
      highlight: true
    },
    {
      name: 'Farhan Septian',
      role: 'Head Staff Executor',
      avatarChar: 'FS',
      bio: 'Bertanggung jawab dalam koordinasi operasional, pelaksanaan program teknis taktis instrumen pertahanan siber, dan pengawasan aktivitas internal perusahaan.',
      credential: 'Certified Ethical Hacker (CEH) v12',
      level: 'LEVEL: ADMIN // FIELD SPECIALIST',
      highlight: false
    },
    {
      name: 'Radithya Fasha Ruswandi',
      role: 'Accountant',
      avatarChar: 'RF',
      bio: 'Mengelola administrasi keuangan, penyusunan laporan keuangan audit eksternal, serta menjaga transparansi dan akuntabilitas kepatuhan fiskal perusahaan.',
      credential: 'Certified Forensic Accountant / GAAP Practitioner',
      level: 'LEVEL: FINANCE // CONTROLLER',
      highlight: false
    },
    {
      name: 'Muhammad Kivela Villaryo Lavuzarsyah',
      role: 'Social Media Administrator',
      avatarChar: 'ML',
      bio: 'Bertanggung jawab atas pengelolaan media sosial resmi, publikasi informasi kepatuhan keamanan, branding perusahaan, serta jembatan komunikasi digital utama dengan mitra dan masyarakat.',
      credential: 'Digital PR Specialist & Cyber Branding Lead',
      level: 'LEVEL: MEDIA // ADMINISTRATOR',
      highlight: false
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-[#0A0A0B]">
      {/* Sleek matrix/hacker grid background */}
      <GridBackground />

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-20 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141416] border border-[#2D2D30] rounded-none text-white font-mono text-[10px] font-bold uppercase tracking-widest leading-none">
            <Users className="w-3.5 h-3.5" />
            ORGANIZATIONAL IDENTITY
          </span>
          <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            Tentang Kami
          </h1>
          <div className="w-12 h-[1px] bg-white mx-auto"></div>
          <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed font-sans max-w-2xl mx-auto">
            Mengenal lebih dalam sejarah berdirinya White Security, visi misi strategis, serta jajaran kepemimpinan profesional yang berdedikasi tinggi melindungi integritas ekosistem digital demi pertumbuhan industri berkesinambungan.
          </p>
        </div>

        {/* Corporate Profile / Redesigned Brand Story (Professional Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#2D2D30] bg-[#141416] rounded-none overflow-hidden">
          
          {/* Left Column: Visual statement & branding */}
          <div className="lg:col-span-5 p-8 md:p-12 bg-black border-b lg:border-b-0 lg:border-r border-[#2D2D30] flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-white"></span>
                <span className="font-mono text-[10px] text-white uppercase tracking-widest font-black">
                  ESTABLISHED SINCE 2024
                </span>
              </div>
              <h2 className="font-sans font-black text-white text-2xl lg:text-3xl leading-tight uppercase tracking-tight">
                PT WhiteHat Company Group Member
              </h2>
            </div>

            <div className="border-t border-[#2D2D30] pt-6 space-y-4">
              <p className="text-xs text-[#8E8E93] leading-relaxed uppercase font-mono tracking-widest">
                // SYSTEM CORE MOTTO:
              </p>
              <div className="text-lg md:text-xl font-bold font-sans italic text-white">
                &ldquo;Secure Today, Protect Tomorrow&rdquo;
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-4">
              <div className="p-3 bg-[#141416] border border-[#2D2D30] text-center">
                <span className="font-mono text-sm font-black text-white block">LEGIT</span>
                <span className="text-[9px] text-[#8E8E93] font-bold uppercase tracking-wider block mt-1">PT GROUP</span>
              </div>
              <div className="p-3 bg-[#141416] border border-[#2D2D30] text-center">
                <span className="font-mono text-sm font-black text-white block">24/7</span>
                <span className="text-[9px] text-[#8E8E93] font-bold uppercase tracking-wider block mt-1">OPERASIONAL</span>
              </div>
              <div className="p-3 bg-[#141416] border border-[#2D2D30] text-center">
                <span className="font-mono text-sm font-black text-white block">100%</span>
                <span className="text-[9px] text-[#8E8E93] font-bold uppercase tracking-wider block mt-1">INTEGRITAS</span>
              </div>
            </div>
          </div>
          
          {/* Right Column: Detailed story prose */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Award className="w-4.5 h-4.5 text-white shrink-0" />
                <span className="font-mono text-[10px] text-white font-bold uppercase tracking-widest">GOVERNANCE & TRUST</span>
              </div>
              
              <h3 className="font-sans font-extrabold text-white text-lg md:text-xl uppercase tracking-tight">
                Melindungi Aset Digital & Audit Komprehensif
              </h3>

              <div className="space-y-4 text-xs md:text-sm text-[#8E8E93] leading-relaxed font-sans">
                <p>
                  <strong className="text-white">White Security</strong> didirikan dengan tujuan utama menciptakan lingkungan digital yang aman, tepercaya, dan memiliki akuntabilitas mutlak. Kami berkomitmen menyajikan solusi keamanan informasi komprehensif yang berfokus pada efektivitas perlindungan sirkuit, penanganan insiden tanggap darurat, dan mitigasi risiko taktis.
                </p>
                <p>
                  Sebagai bagian integral dari payung bisnis kedaulatan <strong className="text-white">PT WhiteHat Company Group</strong>, kami mengedepankan aspek keunggulan teknis, profesionalisme tingkat tinggi, inovasi struktural, serta integritas moral di setiap layanan audit, analisis pertahanan, dan manajemen risiko yang didelegasikan kepada sistem kami.
                </p>
                <p>
                  Kami tidak hanya bertindak menghalau ancaman siber yang terus ber-evolusi, melainkan aktif melahirkan literasi publik demi menekan kerentanan eksploitasi, pencurian data keuangan, dan skema manipulasi digital dari pihak ketiga yang merugikan.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#2D2D30] flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <p className="text-[10px] font-mono text-[#8E8E93] uppercase tracking-wider">
                CERTIFIED COMPLIANCE // MILITARY-GRADE STANDARDS
              </p>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-white bg-black border border-[#2D2D30] px-2.5 py-1">
                <Cpu className="w-3.5 h-3.5" />
                SECURE_MONITOR v2.4
              </div>
            </div>
          </div>

        </div>

        {/* Corporate Pillars Section (Visi & Misi Redesigned) */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[#8E8E93] font-mono text-[9px] font-bold uppercase tracking-widest block">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              Prinsip Panduan & Visi Misi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Visi card (Asymmetric Minimalist Design) */}
            <div className="p-8 bg-[#141416] border border-[#2D2D30] rounded-none flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-2.5 bg-black border border-[#2D2D30] rounded-none inline-block text-white">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-extrabold text-white text-base md:text-lg uppercase tracking-wider">
                  Visi Perusahaan
                </h3>
                <p className="text-sm md:text-base text-white font-medium tracking-tight italic leading-relaxed">
                  “Menjadi perusahaan keamanan digital dan teknologi yang inovatif, terpercaya, dan berdaya saing tinggi di tingkat nasional maupun internasional.”
                </p>
              </div>

              <div className="pt-4 border-t border-[#2D2D30] text-[10px] font-mono text-[#8E8E93] uppercase tracking-wider">
                * Sasaran strategis ini menuntun semua keputusan taktis yang dijalankan organisasi.
              </div>
            </div>

            {/* Misi card (Strict list detail) */}
            <div className="p-8 bg-[#141416] border border-[#2D2D30] rounded-none space-y-6">
              <div className="space-y-4">
                <div className="p-2.5 bg-black border border-[#2D2D30] rounded-none inline-block text-white">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-sans font-extrabold text-white text-base md:text-lg uppercase tracking-wider">
                  Misi Perusahaan
                </h3>
              </div>

              <ul className="space-y-4 text-xs md:text-sm text-[#8E8E93]">
                {[
                  { title: 'Layanan Kelas Dunia', desc: 'Menyediakan layanan keamanan siber yang profesional dan berkualitas tinggi.' },
                  { title: 'Inovasi Modul', desc: 'Mengembangkan solusi teknologi yang aman, resilien, dan adaptif.' },
                  { title: 'Edukasi Sipil', desc: 'Meningkatkan literasi keamanan digital bagi masyarakat umum & korporasi.' },
                  { title: 'Talenta Terbaik', desc: 'Membangun sumber daya manusia yang kompeten, cerdas, dan berintegritas.' },
                  { title: 'Mitra Kokoh', desc: 'Menjalin kemitraan taktis yang kuat, setara, dan berkelanjutan.' }
                ].map((misi, index) => (
                  <li key={index} className="flex gap-3 items-start border-b border-[#2D2D30]/40 pb-2.5 last:border-b-0 last:pb-0">
                    <span className="font-mono text-[10px] font-black text-white pt-0.5">
                      0{index + 1}.
                    </span>
                    <div>
                      <strong className="text-white text-xs block uppercase tracking-wide">{misi.title}</strong>
                      <span className="text-[#8E8E93] text-xs leading-loose">{misi.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Structure of Organization / Executive & Technical Staff */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#8E8E93] font-mono text-[9px] font-bold uppercase tracking-widest block">
              LEADERSHIP & EXECUTIVE TEAM
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              Struktur Organisasi Pelaksana
            </h2>
            <p className="text-xs text-[#8E8E93] max-w-lg mx-auto">
              Profil jajaran direksi pelaksana, analis, administrasi sosial media, serta pengawas keuangan di bawah naungan resmi White Security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className={`p-6 bg-[#141416] border rounded-none flex flex-col justify-between hover:border-white transition-all duration-150 group relative ${
                  member.highlight ? 'border-white' : 'border-[#2D2D30]'
                }`}
              >
                {member.highlight && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-white text-black text-[9px] font-mono font-bold tracking-widest uppercase">
                    FOUNDER
                  </div>
                )}

                <div className="space-y-4">
                  {/* Custom square visual identifier for team */}
                  <div className="w-12 h-12 bg-black border border-[#2D2D30] group-hover:border-white transition-colors duration-150 flex items-center justify-center font-mono font-bold text-white text-lg select-none">
                    {member.avatarChar}
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-white text-sm md:text-base leading-tight uppercase tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-mono text-[#8E8E93] tracking-wider uppercase mt-1">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs text-[#8E8E93] leading-relaxed font-sans font-medium">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#2D2D30] font-mono text-[9px] text-[#8E8E93] space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-white shrink-0" />
                    <span className="truncate text-white">{member.credential}</span>
                  </div>
                  <div className="text-[8px] tracking-wider text-[#8E8E93]/60">
                    {member.level}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Closing CTA Banner */}
        <div className="p-8 md:p-10 bg-[#141416] border border-[#2D2D30] rounded-none text-center space-y-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <span className="text-[#8E8E93] font-mono text-[9px] font-bold uppercase tracking-widest block">
              CONNECT WITH US
            </span>
            <h3 className="font-sans font-black text-white text-xl md:text-2xl uppercase tracking-tight">
              Terhubung untuk Hari Esok yang Lebih Aman
            </h3>
            <div className="w-10 h-[1px] bg-white mx-auto my-3"></div>
            <p className="text-xs text-[#8E8E93] max-w-xl mx-auto leading-relaxed">
              Menghadapi kompleksitas siber di era modern membutuhkan mitra pelaksana yang sigap dan berintegritas. Segenap staf pelaksana teknis White Security berkomitmen total kepada perlindungan data bisnis Anda.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-200 text-black font-extrabold text-xs font-mono uppercase tracking-widest rounded-none transition duration-150 cursor-pointer"
            >
              Hubungi Tim Kami
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
