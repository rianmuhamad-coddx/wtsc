'use client';

import React, { useState } from 'react';
import { Shield, Sparkles, Server, Network, Smartphone, Database, ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

type SystemType = 'web' | 'network' | 'cloud' | 'database';

export default function RiskEstimator() {
  const [systemType, setSystemType] = useState<SystemType>('web');
  const [scale, setScale] = useState<number>(10); // user count/endpoints
  const [hasPreviousAudit, setHasPreviousAudit] = useState<boolean>(false);
  const [resultsCalculated, setResultsCalculated] = useState(false);
  const [calculating, setCalculating] = useState(false);

  // Estimator Logic
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculating(true);
    setTimeout(() => {
      setCalculating(false);
      setResultsCalculated(true);
    }, 1000);
  };

  const calculateRiskScore = () => {
    let score = 45; // baseline
    if (systemType === 'web') score += 15;
    if (systemType === 'cloud') score += 20;
    if (systemType === 'network') score += 10;
    if (systemType === 'database') score += 25;

    if (scale > 50) score += 15;
    else if (scale > 20) score += 8;

    if (!hasPreviousAudit) score += 20;
    else score -= 15;

    // Boundary cap
    return score > 95 ? 95 : score < 20 ? 20 : score;
  };

  const getRiskLevel = (score: number) => {
    if (score >= 75) return { label: 'CRITICAL RISK', color: 'text-red-500 border-red-500/30 bg-red-950/20' };
    if (score >= 50) return { label: 'MEDIUM RISK', color: 'text-amber-500 border-amber-500/30 bg-amber-950/20' };
    return { label: 'OPTIMAL / LOW RISK', color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20' };
  };

  const score = calculateRiskScore();
  const level = getRiskLevel(score);

  return (
    <div id="risk-estimator" className="p-6 md:p-8 bg-[#141416] border border-[#2D2D30] rounded-none relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      
      <div className="flex items-center gap-2 mb-6">
        <div className="p-1 bg-[#141416] border border-[#2D2D30] rounded-none">
          <Shield className="w-4 h-4 text-white" />
        </div>
        <span className="font-mono text-xs text-white font-bold tracking-widest uppercase">
          Interactive Security Calculator
        </span>
      </div>

      <h3 className="font-sans font-extrabold text-xl md:text-2xl text-white mb-2 uppercase tracking-tight">
        Evaluasi Resiko Keamanan Digital Mandiri
      </h3>
      <p className="text-sm text-[#8E8E93] mb-6 max-w-2xl leading-relaxed">
        Pilih jenis infrastruktur Anda di bawah ini untuk mensimulasikan estimasi tingkat kerentanan siber sirkuit Anda berdasarkan standar audit industri White Security.
      </p>

      <form onSubmit={handleCalculate} className="space-y-6">
        {/* Step 1: System Type */}
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8E8E93] mb-3 font-semibold">
            1. Pilih Fokus Utama Infrastruktur
          </label>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { id: 'web', label: 'Web / App SaaS', icon: Smartphone, desc: 'Aplikasi Client-facing' },
              { id: 'network', label: 'Local Network', icon: Network, desc: 'Instansi / Ruko / Kantor' },
              { id: 'cloud', label: 'Cloud API Host', icon: Server, desc: 'Docker / Cloud Run / VPS' },
              { id: 'database', label: 'Database Vault', icon: Database, desc: 'SQL / Firestore / NoSQL' },
            ].map(item => {
              const Icon = item.icon;
              const isSelected = systemType === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setSystemType(item.id as SystemType);
                    setResultsCalculated(false);
                  }}
                  className={`flex flex-col text-left p-3.5 rounded-none border transition-all text-sm group ${
                    isSelected 
                      ? 'border-white bg-white/5' 
                      : 'border-[#2D2D30] bg-[#0A0A0B] hover:border-white/50'
                  }`}
                >
                  <Icon className={`w-5 h-5 mb-2 transition-colors ${isSelected ? 'text-white' : 'text-[#8E8E93] group-hover:text-white'}`} />
                  <span className="font-sans font-bold text-white block truncate uppercase tracking-tight text-xs">{item.label}</span>
                  <span className="font-sans text-[11px] text-[#8E8E93] block leading-tight mt-0.5">{item.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Slider for scale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8E8E93] font-semibold">
                2. Estimasi Jumlah Titik/User
              </label>
              <span className="font-mono text-white font-bold bg-[#0A0A0B] border border-[#2D2D30] px-2 py-0.5 rounded-none text-xs">
                {scale} Endpoints / Klien
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="150"
              value={scale}
              onChange={(e) => {
                setScale(Number(e.target.value));
                setResultsCalculated(false);
              }}
              className="w-full accent-white bg-[#2D2D30] h-1 rounded-none appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#8E8E93] font-mono mt-1">
              <span>Sederhana (5)</span>
              <span>Sedang (50)</span>
              <span>Enterprise (150+)</span>
            </div>
          </div>

          <div>
            <label className="block font-mono text-[11px] uppercase tracking-wider text-[#8E8E93] mb-2 font-semibold">
              3. Riwayat Penetrasi & Audit Keamanan
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  setHasPreviousAudit(true);
                  setResultsCalculated(false);
                }}
                className={`py-2 px-3 border rounded-none text-xs font-medium text-center transition-all ${
                  hasPreviousAudit
                    ? 'border-white bg-white/5 text-white'
                    : 'border-[#2D2D30] bg-[#0A0A0B] text-[#8E8E93] hover:border-gray-500'
                }`}
              >
                Sudah Pernah Di-audit (1 Tahun Terakhir)
              </button>
              <button
                type="button"
                onClick={() => {
                  setHasPreviousAudit(false);
                  setResultsCalculated(false);
                }}
                className={`py-2 px-3 border rounded-none text-xs font-medium text-center transition-all ${
                  !hasPreviousAudit
                    ? 'border-white bg-white/5 text-white'
                    : 'border-[#2D2D30] bg-[#0A0A0B] text-[#8E8E93] hover:border-gray-500'
                }`}
              >
                Belum Pernah / Terakhir &gt; 1 Tahun
              </button>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex justify-start">
          <button
            type="submit"
            disabled={calculating}
            className="px-6 py-2.5 bg-white hover:bg-gray-200 disabled:bg-gray-405 text-black font-extrabold text-xs tracking-widest uppercase font-mono rounded-none flex items-center gap-2 cursor-pointer transition duration-150"
          >
            {calculating ? 'Analyzing Metrics...' : 'Mulai Hitung Kerentanan'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </form>

      {/* Results output panel */}
      {resultsCalculated && (
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 pt-6 border-t border-[#2D2D30] grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          {/* Risk Level gauge */}
          <div className="md:col-span-4 bg-[#0A0A0B] border border-[#2D2D30] rounded-none p-4 text-center">
            <span className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-widest block mb-1">
              ESTIMASI INDEKS RISIKO
            </span>
            <div className="text-4xl font-extrabold font-mono text-white tracking-tight mb-2">
              {score}%
            </div>
            <div className={`text-[10px] py-1 px-2.5 rounded-none font-mono font-bold inline-block border ${level.color}`}>
              {level.label}
            </div>
          </div>

          {/* Core breakdown & actionable steps */}
          <div className="md:col-span-8 space-y-3">
            <h4 className="font-sans font-bold text-white text-base uppercase tracking-tight">
              Rekomendasi Penilaian Keamanan Sistem
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-[#8E8E93]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Rekomendasi Layanan :</strong> {systemType === 'web' || systemType === 'cloud' 
                    ? 'Audit Keamanan Sistem Informasi & Penetration Testing Web (Service 2)' 
                    : 'Konsultasi Manajemen Risiko TI Komprehensif (Service 1/3)'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Waktu Pelaksanaan Teroptimal :</strong> Sekitar {Math.ceil(scale / 10) + 3} hari kerja, mencakup audit arsitektur dan laporan komprehensif.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Rekomendasi Mitigasi :</strong> Segera amankan kredensial administrasi, lakukan update patch library versi bermasalah, dan edukasikan staf internal tentang phishing.
                </span>
              </li>
            </ul>
            <div className="pt-2 text-[10px] font-mono text-[#8E8E93] uppercase">
              *Tingkat risiko ini adalah simulasi awal. Konsultasikan detail arsitektur Anda dengan <strong>Farhan Septian (Head Staff Executor)</strong> untuk verifikasi audit militer yang kredibel.
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
