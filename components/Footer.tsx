'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Github, Sparkles, AlertTriangle, ArrowUpRight, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0B] border-t border-[#2D2D30] text-[#8E8E93] font-sans">
      
      {/* Disclaimer / Alert Ticker Bar */}
      <div className="bg-[#0D0D0F] border-b border-[#2D2D30] py-3.5 px-4 text-[10px] font-mono text-center text-[#8E8E93] flex items-center justify-center gap-2 flex-wrap uppercase tracking-wider">
        <AlertTriangle className="w-4 h-4 text-white shrink-0" />
        <span>CERTIFICATION INTEGRITY CONFIRMED • WHITE SECURITY IS AN ACCREDITED COMPLIANCE AUDITOR UNDER PT WHITEHAT COMPANY GROUP</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white flex items-center justify-center">
                <div className="w-3 h-3 bg-black rotate-45"></div>
              </div>
              <span className="font-sans font-black text-white text-base tracking-wider uppercase">
                WHITE SECURITY
              </span>
            </div>
            
            <p className="text-xs text-[#8E8E93] leading-relaxed max-w-sm">
              Bagian dari <span className="text-white hover:underline cursor-pointer">WhiteHat Company Group</span>. Membangun infrastruktur keamanan siber, audit sistem informasi, dan teknologi modern dengan profesionalisme, inovasi, dan integritas penuh.
            </p>

            <div className="pt-2 font-mono text-[10px]">
              <span className="text-white font-bold uppercase block mb-1">Motto Perusahaan</span>
              <span className="text-white italic text-xs">“Secure Today, Protect Tomorrow 🛡️”</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-white">Navigasi Utama</h3>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1 group">
                  BERANDA
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors flex items-center gap-1 group">
                  TENTANG KAMI
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                  LAYANAN KEAMANAN & TI
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                  KONTAK RESMI
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Channels */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-white">Identitas & Kontak</h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-gray-300">hubungi@whitehat.com (Simulasi)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-gray-300">+62 812-3456-7890 (Simulasi)</span>
              </div>
              <div className="p-3 bg-[#141416] rounded-none border border-[#2D2D30] space-y-1">
                <span className="font-mono text-[9px] text-white block uppercase font-bold">Staf Administrator Publik</span>
                <span className="text-xs text-white block font-semibold">Muhammad Kivela Villaryo L.</span>
                <span className="text-[10px] text-[#8E8E93] block">Social Media Admin, branding, & PR</span>
              </div>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-[#2D2D30] my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-[#8E8E93]">
          <div>
            <p>© {currentYear} WHITE SECURITY // WHITEHAT COMPANY GROUP. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 transition duration-150">
              <Instagram className="w-3.5 h-3.5" />
              INSTAGRAM
            </a>
            <span className="text-[#2D2D30]">|</span>
            <span>SECURE AUDIT V2.4.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
