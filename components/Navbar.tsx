'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Menu, X, Terminal, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [pingTime, setPingTime] = useState(14);

  useEffect(() => {
    // Live Jakarta clock (WIB)
    const updateTime = () => {
      const now = new Date();
      // Adjust to WIB (UTC+7)
      const wibOffset = 7 * 60;
      const localTime = new Date(now.getTime() + (now.getTimezoneOffset() + wibOffset) * 60000);
      
      const hours = String(localTime.getHours()).padStart(2, '0');
      const minutes = String(localTime.getMinutes()).padStart(2, '0');
      const seconds = String(localTime.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds} WIB`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Simple mock ping simulation for cyber-authenticity
    const interval = setInterval(() => {
      setPingTime(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = prev + delta;
        return next < 8 ? 8 : next > 25 ? 25 : next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Layanan', href: '/services' },
    { name: 'Kontak', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0B]/95 border-b border-[#2D2D30] backdrop-blur-md">
      {/* Top micro-bar for High Density cyber data */}
      <div className="hidden md:flex justify-between items-center px-6 py-1.5 bg-[#0A0A0B] border-b border-[#2D2D30] text-[10px] font-mono text-[#8E8E93] tracking-widest uppercase">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-white">
            <Cpu className="w-3 h-3 text-white animate-pulse" />
            OPERATIONAL STATUS: SECURE // ENCRYPTED
          </span>
          <span className="text-[#2D2D30]">|</span>
          <span className="hover:text-white cursor-pointer transition-colors">
            PORTAL SEC-ID: WH-SEC-2026
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span>LATENCY: <span className="text-white font-bold">{pingTime}ms</span></span>
          <span className="text-[#2D2D30]">|</span>
          <span>SYS_TIME: <span className="text-white font-bold">{currentTime || '00:00:00 WIB'}</span></span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white rounded-none flex items-center justify-center transition-transform group-hover:rotate-95">
                <div className="w-4 h-4 bg-black rotate-45"></div>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-[9px] font-bold text-[#8E8E93] tracking-widest leading-none">WHITEHAT COMPANY GROUP</span>
                </div>
                <span className="font-sans font-black text-lg text-white tracking-tight leading-none uppercase">
                  WHITE SECURITY
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex space-x-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all rounded-none ${
                      isActive 
                        ? 'text-white border-b-2 border-white font-bold' 
                        : 'text-[#8E8E93] hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Quick Action Link / Button */}
            <div className="flex items-center gap-4 border-l border-[#2D2D30] pl-6">
              <Link
                href="/contact?chat=direct"
                className="bg-white text-black text-xs font-bold px-4 py-2 hover:bg-gray-200 transition-all rounded-none mono font-mono uppercase tracking-wider"
              >
                Live Chat
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-none text-gray-400 hover:text-white hover:bg-gray-850 transition duration-150 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[#2D2D30] bg-[#0A0A0B] overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 text-sm font-mono uppercase tracking-wider ${
                      isActive 
                        ? 'text-white bg-white/5 border-l-2 border-white' 
                        : 'text-[#8E8E93] hover:text-white hover:bg-white/[0.02]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="pt-4 px-4 border-t border-[#2D2D30]">
                <div className="flex flex-col gap-2 font-mono text-[10px] text-[#8E8E93] mb-3">
                  <span>SYSTEM CLOCK: {currentTime}</span>
                  <span>SYSTEM STATUS: <span className="text-white">SECURE // ENCRYPTED</span></span>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full justify-center inline-flex items-center gap-2 px-4 py-3 bg-white text-black font-bold text-xs font-mono uppercase tracking-widest rounded-none"
                >
                  <Terminal className="w-4 h-4" />
                  Live Chat Box
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
