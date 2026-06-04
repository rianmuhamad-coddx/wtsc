'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Terminal, 
  Cpu, 
  Database, 
  Network, 
  BookOpen, 
  ArrowUpRight, 
  Instagram, 
  AlertCircle, 
  CheckCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  Hammer,
  FileSpreadsheet,
  AlertTriangle,
  Fingerprint,
  FileCheck,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import GridBackground from '@/components/GridBackground';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);
  const [redirecting, setRedirecting] = useState(false);
  const [redirectTime, setRedirectTime] = useState(3);

  // Pre-Audit Checklist State for Interactive Engagement
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter(item => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleInstagramRedirect = (e: React.MouseEvent) => {
    e.preventDefault();
    setRedirecting(true);
    setRedirectTime(3);
    
    const countdown = setInterval(() => {
      setRedirectTime(prev => {
        if (prev <= 1) {
          clearInterval(countdown);
          window.open('https://instagram.com', '_blank');
          setRedirecting(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pipelineSteps = [
    {
      id: 1,
      name: '01 // INTEL_OSINT',
      phase: 'Initial Discovery',
      desc: 'Tahap pengumpulan informasi publik (OSINT) dan analisis kepatuhan kebijakan arsitektur sebelum tindakan ofensif dimulai.'
    },
    {
      id: 2,
      name: '02 // PROBE_ATTACK',
      phase: 'Simulation & Pentest',
      desc: 'Pelaksanaan simulasi ethical hacking dengan mengeksploitasi celah keamanan fisik, logika sistem, dan kerentanan API.'
    },
    {
      id: 3,
      name: '03 // FISCAL_ACCOUNT',
      phase: 'Transparansi Tarif',
      desc: 'Pengecekan biaya, audit fiskal proyek, dan draf invoice dipersiapkan secara presisi oleh Radithya Fasha (Accountant).'
    },
    {
      id: 4,
      name: '04 // REMEDY_SIGN',
      phase: 'Executive Reporting',
      desc: 'CEO Tsani Zaid merilis draf remedi formal, menyerahkan kunci sandi terenkripsi, dan menandatangani sertifikasi kepatuhan.'
    }
  ];

  const services = [
    {
      id: 0,
      code: 'WS-AUD-01',
      badge: 'AUDIT & GOVERNANCE',
      sysAlias: 'COMPLIANCE_ROOT_MODULE',
      title: 'Audit Sistem Informasi & Konsultasi Tata Kelola TI',
      leadOfficer: 'Tsani Zaid Janzabila (CISA)',
      short: 'Evaluasi celah kepatuhan internal dan keamanan sirkuit korporasi berbasis ISO 27001, COBIT, dan NIST framework.',
      description: 'Audit mendalam di bawah pengawasan regulasi internasional guna menilai kerentanan tata kelola organisasi, mengukur efektivitas manajemen sistem informasi, serta menganalisis kepatuhan undang-undang data pribadi. Layanan ini krusial untuk memperoleh sertifikasi ketahanan teknologi tepercaya.',
      features: [
        { name: 'Audit Kepatuhan ISO/IEC 27001 & NIST Framework', desc: 'Pemetaan kesenjangan kontrol administratif, otentikasi login, dan proteksi aset fisik.' },
        { name: 'Analisis Risiko Model Informasi & Aliran Data', desc: 'Pendeteksian kebocoran penyimpanan, enkripsi database lemah, dan akses ilegal dari dalam.' },
        { name: 'Standardisasi Zero Trust Architecture (ZTA)', desc: 'Penyusunan protokol manajemen peran pengguna berlandaskan prinsip pematasan hak akses minimum.' },
        { name: 'Penyusunan Business Continuity Plan (BCP)', desc: 'Desain skema penanganan bencana siber darurat agar kelangsungan operasional bisnis tetap berjalan stabil.' },
        { name: 'Laporan Fiskal & Draf Kepatuhan Legalitas TI', desc: 'Verifikasi anggaran infrastruktur yang dipadukan untuk memaksimalkan ROI pertahanan.' }
      ],
      metrics: {
        severity: 'SIGNIFICANT',
        duration: '5 - 10 HARI KERJA',
        format: 'PDF ENKRIPSI & SALINAN FISIK',
        hash: 'SHA256::C7A2E9F0'
      },
      challenges: [
        { id: 'aud-1', label: 'Belum menetapkan regulasi akses data sensitif bagi staff internal' },
        { id: 'aud-2', label: 'Kurang memiliki draf rencana pulih siber pasca serangan malware' },
        { id: 'aud-3', label: 'Menghadapi tuntutan regulasi ISO 27001 / regulasi industri khusus' }
      ],
      icon: ShieldCheck
    },
    {
      id: 1,
      code: 'WS-PENTEST-02',
      badge: 'ETHICAL HACKING',
      sysAlias: 'PENTEST_ATTACK_ENGINE',
      title: 'Pengujian Penetrasi Jegan & Aplikasi (Penetration Testing)',
      leadOfficer: 'Farhan Septian (CEH v12)',
      short: 'Simulasi serangan siber ofensif nyata guna mendeteksi titik lemah enkripsi sebelum dieksploitasi penjahat digital.',
      description: 'Layanan ethical hacking terintegrasi murni menyerang sasaran uji (portal web, Rest API, basis data cloud, local access terminal) guna menemukan eskalasi hak istimewa administrator, dilanjutkan dengan merilis laporan remediasi pertahanan infosec komprehensif.',
      features: [
        { name: 'Penetration Testing Aplikasi Web & Mobile API', desc: 'Eksploitasi OWASP Top 10 seperti SQL Injection, Cross-Site Scripting, dan Broken Authentication.' },
        { name: 'Audit Sektor Jaringan Korporasi & Wi-Fi', desc: 'Simulasi penyadapan paket nirkabel, scanning port terbuka pada router, dan analisis firewall.' },
        { name: 'Penilaian Kerentanan Otomatis & Manual (VAPT)', desc: 'Penggabungan akurasi sensor tools industri dengan pembuktian serangan manual secara presisi.' },
        { name: 'Modeling Ancaman Sistem & Desain Topologi Baru', desc: 'Pendefinisian ulang gerbang isolasi server agar peretas kesulitan melakukan pergerakan lateral.' },
        { name: 'Potongan Kode Solusi Penambal Celah Keamanan', desc: 'Penyerahan draf perbaikan penulisan kode aman langsung sehingga aman diterapkan tim internal Anda.' }
      ],
      metrics: {
        severity: 'CRITICAL WARNING',
        duration: '3 - 7 HARI KERJA',
        format: 'PDF TERENKRIPSI KUNCI PGP',
        hash: 'SHA256::E2D3B8C1'
      },
      challenges: [
        { id: 'pen-1', label: 'Khawatir terdapat celah keamanan di portal login atau API publik' },
        { id: 'pen-2', label: 'Belum pernah melakukan pengujian penetrasi mandiri dalam 1 tahun terakhir' },
        { id: 'pen-3', label: 'Ingin menguji ketebalan pertahanan server sirkuit Cloud Run atau VPS' }
      ],
      icon: Terminal
    },
    {
      id: 2,
      code: 'WS-DEV-03',
      badge: 'TAILORED DEV & LITERACY',
      sysAlias: 'LITERACY_SECURE_DEV_MODULE',
      title: 'Edukasi Keamanan Digital & Konstruksi Sistem Informasi',
      leadOfficer: 'Muhammad Kivela Villaryo Lavuzarsyah',
      short: 'Sosialisasi literasi media digital, simulasi rekayasa sosial, dan konstruksi perangkat lunak terenkripsi.',
      description: 'Pengembangan media informasi dan penguatan kapasitas sumber daya manusia menghadapi skema eksploitasi psikologis (phishing/social engineering). Layanan ini juga mencakup pembangunan arsitektur platform internal perusahaan sejak baris kode pertama guna meminimalisir kemungkinan bypass sirkuit.',
      features: [
        { name: 'Simulasi Phishing & Rekayasa Sosial Terarah', desc: 'Pengujian kesiapan emosi staff internal melalui jebakan email dan manipulasi telepon persuasif.' },
        { name: 'Pelatihan Prosedur Penyelamatan Kredensial', desc: 'Membekali tim operasional prosedur taktis penutupan gerbang otentikasi saat mengalami insiden.' },
        { name: 'Konstruksi Database Terenkripsi AES-256', desc: 'Perakitan rest-api dan sistem backend dengan lapis pengaman enkripsi berskala militer.' },
        { name: 'Publikasi Kredibilitas Transparansi Korporasi', desc: 'Strategi rilis infosec reguler yang dikonsepkan oleh Kivela guna meningkatkan posisi branding tepercaya.' },
        { name: 'Workshop Mitigasi Kebocoran Data & Pelanggaran Sandi', desc: 'Edukasi interaktif cara mendeteksi malware ransom, pelacakan histori link, dan literasi media.' }
      ],
      metrics: {
        severity: 'MEDIUM - HIGH',
        duration: 'DESAIN KONTRAK KUSTOM',
        format: 'WORKSHOP LANGSUNG & DOKUMEN MODUL',
        hash: 'SHA256::F9A4E2B1'
      },
      challenges: [
        { id: 'dev-1', label: 'Banyak karyawan yang rentan mengeklik tautan asing tidak dikenal' },
        { id: 'dev-2', label: 'Membutuhkan landing page atau sistem internal yang aman dari serangan peretas' },
        { id: 'dev-3', label: 'Ingin meningkatkan otoritas brand melalui laporan publikasi info keamanan' }
      ],
      icon: BookOpen
    }
  ];

  const currentService = services[activeTab];
  const CurrentIcon = currentService.icon;

  // Calculate recommendation score based on user interactive choices
  const totalInScopeChallenges = currentService.challenges.length;
  const tickedChallengesCount = currentService.challenges.filter(c => checkedItems.includes(c.id)).length;
  const prioritizationIndex = tickedChallengesCount === 0 
    ? 'LAZIM' 
    : tickedChallengesCount === 1 
      ? 'MENENGAH' 
      : tickedChallengesCount === 2 
        ? 'DITINGKATKAN' 
        : 'SANGAT SEGERA';

  return (
    <div id="services-gateway" className="relative min-h-screen overflow-hidden text-white bg-[#0A0A0B]">
      <GridBackground />

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-16 relative z-10">
        
        {/* Professional Header Area */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#141416] border border-[#2D2D30] rounded-none text-white font-mono text-[10px] font-bold uppercase tracking-widest leading-none select-none">
            <Cpu className="w-3.5 h-3.5" />
            OFFICIAL SECURITY SUB_SYSTEMS
          </div>
          <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            Sektor Layanan Taktis & Audit
          </h1>
          <div className="w-12 h-[1px] bg-white mx-auto"></div>
          <p className="text-xs sm:text-sm text-[#8E8E93] max-w-2xl mx-auto leading-relaxed font-sans">
            Rangkaian layanan berstandar militer dari PT WhiteHat Company Group guna mengamankan arus modal, integritas sirkuit server, dan literasi siber jangka panjang aset Anda.
          </p>
        </div>

        {/* Operational Audit Pipeline - Dynamic Conveyor Belt */}
        <div className="border border-[#2D2D30] bg-[#141416] rounded-none p-6 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#2D2D30] pb-4 gap-4">
            <div>
              <span className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-widest block font-bold">OPERATIONAL PIPELINE GRAPH</span>
              <h3 className="font-sans font-extrabold text-white text-sm uppercase tracking-wider mt-0.5">Siklus Pelaksanaan Tugas Standardisasi Whitehat</h3>
            </div>
            <div className="font-mono text-[9px] text-white bg-black border border-[#2D2D30] px-2.5 py-1 uppercase tracking-widest flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              SYSTEM_STATUS // ACTIVE
            </div>
          </div>

          {/* Interactive pipeline flow block list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pipelineSteps.map((step, idx) => {
              const isSelected = activePipelineStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActivePipelineStep(idx)}
                  className={`p-4 text-left border rounded-none transition-all duration-150 relative overflow-hidden group cursor-pointer ${
                    isSelected 
                      ? 'border-white bg-white/5 shadow-inner' 
                      : 'border-[#2D2D30] bg-black hover:border-white/40'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1 select-none">
                    <span className={`font-mono text-[10px] font-bold ${isSelected ? 'text-white' : 'text-[#8E8E93]'}`}>
                      {step.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#8E8E93] opacity-30 group-hover:opacity-75">
                      [{idx + 1}]
                    </span>
                  </div>
                  <h4 className={`font-sans font-black text-xs uppercase tracking-wider mb-2 ${isSelected ? 'text-white' : 'text-[#8E8E93]/80'}`}>
                    {step.phase}
                  </h4>
                  <p className="text-[11px] text-[#8E8E93] leading-relaxed font-sans font-medium line-clamp-2">
                    {step.desc}
                  </p>
                  
                  {/* Decorative slide indicator */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Expanded Step Detail Box */}
          <div className="bg-black border border-[#2D2D30] p-4 font-mono text-[11px] text-[#8E8E93]/90 relative overflow-hidden">
            <span className="text-[9px] text-white font-bold tracking-widest block uppercase mb-1">// DESKRIPSI DETAIL PROSEDUR AKHIR LAJU PROSES:</span>
            <p className="font-sans leading-relaxed text-xs">
              {pipelineSteps[activePipelineStep].desc} Seluruh rantai pelaksana diwajibkan mendokumentasikan setiap temuan dalam buku log terenkripsi White Security System untuk meloloskan kepatuhan kedaulatan audit berintegritas.
            </p>
          </div>
        </div>

        {/* Dynamic & Non-Boring Command Center Matrix */}
        <div id="command-center-matrix" className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Navigation Console: 4 Columns on desktop */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 bg-black border border-[#2D2D30] font-mono text-[10px] uppercase text-[#8E8E93] tracking-widest flex justify-between select-none">
              <span>MODULE COMMANDER</span>
              <span>INDEX [3]</span>
            </div>

            <div className="flex flex-col gap-3">
              {services.map((item, idx) => {
                const isSelected = activeTab === idx;
                const ServiceIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(idx);
                      // Clear checked items in sub-pre-audit diagnostic to prevent overlap confusion
                      setCheckedItems([]);
                    }}
                    className={`p-5 text-left border rounded-none transition-all duration-150 cursor-pointer relative group flex justify-between items-center ${
                      isSelected 
                        ? 'bg-[#141416] border-white text-white' 
                        : 'bg-black border-[#2D2D30] text-[#8E8E93] hover:border-white/50 hover:text-white'
                    }`}
                  >
                    <div className="space-y-2 flex-grow pr-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-none ${isSelected ? 'bg-white animate-pulse' : 'bg-transparent border border-[#2D2D30]'}`}></span>
                        <span className="font-mono text-[9px] font-extrabold uppercase tracking-widest">
                          {item.code} // {item.badge}
                        </span>
                      </div>
                      <h3 className="font-sans font-bold text-xs uppercase tracking-wider leading-relaxed">
                        {item.title}
                      </h3>
                      <div className="text-[10px] font-mono text-[#8E8E93]/80 group-hover:text-white transition-colors">
                        PI: <strong className="text-white/90">{item.leadOfficer.split(' ')[0]} {item.leadOfficer.split(' ')[1] || ''}</strong>
                      </div>
                    </div>
                    
                    <div className="shrink-0 flex items-center justify-center p-2.5 bg-black/40 border border-[#2D2D30] group-hover:border-white/60">
                      <ServiceIcon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Monitor Console: 8 Columns on desktop */}
          <div className="lg:col-span-8 p-6 md:p-8 bg-[#141416] border border-[#2D2D30] rounded-none space-y-8 relative overflow-hidden">
            
            {/* Command Monitor Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#2D2D30] pb-5 gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-widest font-bold">MONITOR ACTIVE SYSTEM:</span>
                  <span className="font-mono text-[9px] text-white bg-black px-1.5 py-0.5 border border-[#2D2D30] font-black">{currentService.sysAlias}</span>
                </div>
                <h2 className="font-sans font-black text-white text-lg md:text-xl uppercase tracking-tight">
                  {currentService.title}
                </h2>
              </div>
              
              <div className="shrink-0">
                <div className="p-3 bg-black border border-[#2D2D30] rounded-none">
                  <CurrentIcon className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>

            {/* General Lead Info Tag */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-black border border-[#2D2D30] p-4 text-[11px] font-mono">
              <div className="space-y-1">
                <span className="text-[#8E8E93] block">// EXECUTION RESPONSIBLE:</span>
                <span className="text-white font-extrabold uppercase text-xs">{currentService.leadOfficer}</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#8E8E93] block">// PRIORITY INDICATOR:</span>
                <span className="text-white border border-[#2D2D30] px-2 py-0.5 text-[10px] inline-block font-extrabold">{currentService.metrics.severity}</span>
              </div>
            </div>

            {/* Long Prose Description */}
            <div className="space-y-3 font-sans">
              <div className="font-mono text-[9px] text-white font-bold uppercase tracking-widest block">// PENJELASAN OPERASIONAL:</div>
              <p className="text-xs sm:text-sm text-[#8E8E93] leading-relaxed font-sans font-medium">
                {currentService.description}
              </p>
            </div>

            {/* List Table of Scope Features */}
            <div className="space-y-4">
              <div className="font-mono text-[9px] text-white font-bold uppercase tracking-widest block">// DETIL CAKUPAN AUDIT DAN FITUR OPERASIONAL:</div>
              
              <div className="border border-[#2D2D30] overflow-hidden">
                <div className="grid grid-cols-12 bg-black py-2.5 px-3 border-b border-[#2D2D30] text-[9px] font-mono text-[#8E8E93]/80 uppercase tracking-wider font-extrabold">
                  <div className="col-span-5 sm:col-span-4">CAKUPAN PROGRAM</div>
                  <div className="col-span-7 sm:col-span-8">DESKRIPSI REMEDIASI KINERJA</div>
                </div>

                <div className="divide-y divide-[#2D2D30]/60">
                  {currentService.features.map((feat, idx) => (
                    <div key={idx} className="grid grid-cols-12 py-3 px-3 items-start hover:bg-white/5 transition-colors">
                      <div className="col-span-5 sm:col-span-4 font-mono text-[10px] font-bold text-white uppercase tracking-tight pr-2">
                        {idx + 1}. {feat.name}
                      </div>
                      <div className="col-span-7 sm:col-span-8 text-xs text-[#8E8E93] font-medium leading-relaxed font-sans">
                        {feat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Section - Action Diagnostic Tool */}
            <div className="border border-[#2D2D30] p-5 space-y-4 bg-black/60">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#2D2D30] pb-3 gap-2">
                <div className="space-y-0.5">
                  <span className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-widest block font-extrabold">// PRE-AUDIT DIAGNOSTIC</span>
                  <h4 className="font-sans font-extrabold text-white text-xs uppercase tracking-wider">Deteksi Kerentanan Mandiri</h4>
                </div>
                <div className="font-mono text-[8px] text-[#8E8E93]/80 uppercase">
                  PILIH PERTANYAAN DI BAWAH INI
                </div>
              </div>

              <p className="text-xs text-[#8E8E93] leading-relaxed">
                Centang setiap masalah yang relevan dengan infrastruktur TI instansi Anda hari ini. Algoritma kami akan langsung menghitung tingkat kebutuhan prioritas audit:
              </p>

              {/* Checkboxes Group */}
              <div className="space-y-2.5 pt-1">
                {currentService.challenges.map((challenge) => {
                  const isChecked = checkedItems.includes(challenge.id);
                  return (
                    <label 
                      key={challenge.id}
                      className={`flex items-start gap-3 p-3 border transition-colors cursor-pointer select-none ${
                        isChecked 
                          ? 'border-white bg-white/5 text-white' 
                          : 'border-[#2D2D30] bg-[#0A0A0B]/80 text-[#8E8E93] hover:border-white/50'
                      }`}
                    >
                      <input 
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleCheckboxChange(challenge.id)}
                        className="mt-0.5 accent-white rounded-none w-3.5 h-3.5"
                      />
                      <span className="text-xs font-medium font-sans leading-tight">
                        {challenge.label}
                      </span>
                    </label>
                  );
                })}
              </div>

              {/* Live Scoping Result Panel */}
              <div className="pt-3 border-t border-[#2D2D30] grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="space-y-1">
                  <div className="text-[9px] font-mono text-[#8E8E93] uppercase">
                    TINGKAT REKOMENDASI AUDIT KAMI:
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-white bg-[#141416] px-2 py-0.5 border border-[#2D2D30] font-bold uppercase tracking-wider">
                      {prioritizationIndex}
                    </span>
                    <span className="text-[10px] font-mono text-[#8E8E93] uppercase">
                      ({tickedChallengesCount} dari {totalInScopeChallenges} terpilih)
                    </span>
                  </div>
                </div>

                <div className="text-right sm:text-right">
                  <Link 
                    href={`/contact?service=${currentService.id}&level=${prioritizationIndex.toLowerCase()}`}
                    className="inline-flex w-full sm:w-auto text-center justify-center items-center gap-1.5 px-4 py-2 bg-white hover:bg-gray-200 text-black text-xs font-mono font-black uppercase tracking-wider transition duration-150"
                  >
                    Konsultasikan Hasil
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service Console Footer - Diagnostic Metrics */}
            <div className="pt-6 border-t border-[#2D2D30] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="space-y-1">
                <span className="font-mono text-[8px] text-[#8E8E93] uppercase tracking-widest block">ESTIMASI DURASI</span>
                <span className="font-sans text-xs text-white font-extrabold">{currentService.metrics.duration}</span>
              </div>
              <div className="border-l border-[#2D2D30] pl-4 space-y-1 text-left sm:text-center sm:border-l">
                <span className="font-mono text-[8px] text-[#8E8E93] uppercase tracking-widest block">FORMAT DOKUMEN</span>
                <span className="font-sans text-xs text-white font-extrabold truncate block">{currentService.metrics.format.split(' ')[0]}</span>
              </div>
              <div className="border-t border-[#2D2D30] pt-4 col-span-2 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-4 sm:col-span-2 text-left">
                <span className="font-mono text-[8px] text-[#8E8E93] uppercase tracking-widest block">HASH SIGNATURE</span>
                <span className="font-mono text-xs text-[#8E8E93] font-bold flex items-center gap-1.5">
                  <Fingerprint className="w-3.5 h-3.5 text-white" />
                  {currentService.metrics.hash}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Instagram Redirect Segment Card with kivela */}
        <div className="max-w-4xl mx-auto bg-[#141416] border border-[#2D2D30] p-6 md:p-8 rounded-none grid grid-cols-1 md:grid-cols-12 gap-6 items-center shadow-2xl relative overflow-hidden">
          
          <div className="md:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#0A0A0B] border border-[#2D2D30] rounded-none text-[10px] font-mono text-white font-black uppercase tracking-wider">
              <Instagram className="w-3 h-3" />
              Social Media Channel
            </div>
            <h3 className="font-sans font-black text-xl text-white uppercase tracking-tight">
              Redirect Informasi ke Instagram
            </h3>
            <p className="text-xs md:text-sm text-[#8E8E93] leading-relaxed">
              Ingin berinteraksi, memantau rilis infosec terbaru, atau langsung membaca dokumentasi edukasi cyber yang dipublikasikan oleh <strong>Muhammad Kivela Villaryo L.</strong>? Anda dapat memanfaatkan simulator enkripsi kami guna beralih secara aman ke Instagram resmi kami.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-[#0A0A0B] border border-[#2D2D30] rounded-none relative">
            <AnimatePresence mode="wait">
              {redirecting ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }} 
                  className="text-center space-y-2 py-4"
                >
                  <p className="text-[9px] text-[#8E8E93] font-mono tracking-widest">MEMVERIFIKASI TAUTAN...</p>
                  <div className="text-2xl font-black font-mono text-white animate-pulse">{redirectTime}s</div>
                  <p className="text-[9px] text-[#8E8E93] font-mono uppercase tracking-widest leading-none">HTTPS://INSTAGRAM.COM</p>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0 }} 
                  className="text-center w-full min-h-[92px] flex flex-col justify-between"
                >
                  <span className="text-[9px] font-mono text-[#8E8E93] uppercase tracking-widest block mb-2">OPERATOR PUBLIKASI</span>
                  <p className="text-xs font-semibold text-white truncate mb-4">@white_security.group</p>
                  
                  <button
                    onClick={handleInstagramRedirect}
                    className="w-full justify-center inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-200 text-black font-extrabold text-xs font-mono uppercase tracking-widest rounded-none cursor-pointer transition duration-150"
                  >
                    Redirect Instagram
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
