'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, UserCheck, CheckCircle, ShieldAlert, Cpu, Terminal, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: string;
  sender: 'user' | 'agent';
  agentName?: string;
  text: string;
  timestamp: string;
}

let messageIdCounter = 1000;
function getNextMessageId(): string {
  messageIdCounter += 1;
  return messageIdCounter.toString();
}

function getSecureTimeString(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

export default function LiveChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'agent',
      agentName: 'Farhan Septian (Head Staff Executor)',
      text: 'Selamat datang di Sentral Keamanan Intelijen White Security. Saya Farhan, koordinator operasional. Ada sistem atau jaringan yang ingin Anda audit/amankan hari ini?',
      timestamp: 'Baru saja',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [activeAgent, setActiveAgent] = useState({
    name: 'Farhan Septian',
    role: 'Head Staff Executor',
    avatarChar: 'FS',
    status: 'Sistem Operasional Aktif',
  });

  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll inside chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // 1. Add user message
    const userMsg: Message = {
      id: getNextMessageId(),
      sender: 'user',
      text: textToSend,
      timestamp: getSecureTimeString(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // 2. Select predefined bot reply
    setTimeout(() => {
      let replyText = 'Pesan Anda telah direkam oleh White Security System. Staf kami akan segera menganalisis arsitektur Anda.';
      let newAgent = { ...activeAgent };

      const textLower = textToSend.toLowerCase();
      if (textLower.includes('harga') || textLower.includes('biaya') || textLower.includes('audit') || textLower.includes('penetrasi')) {
        replyText = 'Untuk audit sistem informasi atau Penetration Testing (Layanan 2), biaya tergantung jumlah endpoint & IP publik. Teknisi kami akan menganalisis target, lalu mengajukan proposal formal dari tim Accountant (Radithya Fasha). Berkenan memberi alamat email?';
        newAgent = {
          name: 'Farhan Septian',
          role: 'Head Staff Executor',
          avatarChar: 'FS',
          status: 'Menyusun Proposal Audit',
        };
      } else if (textLower.includes('instagram') || textLower.includes('instagram redirect') || textLower.includes('sosmed') || textLower.includes('ig')) {
        replyText = 'Halo! Saya Muhammad Kivela, Social Media Admin. Anda dapat memantau publikasi, branding, dan update literasi cyber kami di Instagram resmi kami. Ketik tombol "Redirect Instagram" di menu Layanan jika ingin langsung beralih!';
        newAgent = {
          name: 'Muhammad Kivela Villaryo',
          role: 'Social Media Admin',
          avatarChar: 'MK',
          status: 'Online (Branding)',
        };
      } else if (textLower.includes('ceo') || textLower.includes('tsani') || textLower.includes('pendiri') || textLower.includes('founder')) {
        replyText = 'Saya Tsani Zaid Janzabila (CEO). Di bawah naungan WhiteHat Company Group, komitmen kami adalah "Secure Today, Protect Tomorrow". Jika Anda ingin melakukan kemitraan strategis tingkat tinggi, Anda telah terhubung ke terminal yang tepat. Silakan kirim detail proposal kerja sama Anda.';
        newAgent = {
          name: 'Tsani Zaid Janzabila',
          role: 'Founder & CEO',
          avatarChar: 'TZ',
          status: 'Enkripsi Penuh - Jalur Khusus',
        };
      } else if (textLower.includes('halo') || textLower.includes('hi') || textLower.includes('p') || textLower.includes('siang') || textLower.includes('pagi')) {
        replyText = 'Halo! Saya Farhan Septian. Layanan penanganan darurat infosec dan mitigasi resiko kebocoran data kami beroperasi 24/7 secara taktis. Ada modul web atau database yang perlu kami tes?';
      }

      setActiveAgent(newAgent);
      setIsTyping(false);

      const agentMsg: Message = {
        id: getNextMessageId(),
        sender: 'agent',
        agentName: `${newAgent.name} (${newAgent.role})`,
        text: replyText,
        timestamp: getSecureTimeString(),
      };
      setMessages(prev => [...prev, agentMsg]);
    }, 1200);
  };

  const handleSuggestionClick = (prompt: string) => {
    handleSendMessage(prompt);
  };

  return (
    <div className="w-full bg-[#141416] border border-[#2D2D30] rounded-none flex flex-col h-[520px] shadow-2xl relative overflow-hidden">
      
      {/* Top Header of Chatbox */}
      <div className="bg-[#0A0A0B] px-4 py-3 border-b border-[#2D2D30] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-none bg-[#0D0D0F] border border-[#2D2D30] text-white font-mono flex items-center justify-center font-bold text-sm">
              {activeAgent.avatarChar}
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-white border-2 border-[#0A0A0B] rounded-none animate-pulse"></div>
          </div>
          <div>
            <h4 className="font-sans font-extrabold text-sm text-white uppercase tracking-wider">
              {activeAgent.name}
            </h4>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-none"></span>
              <span className="font-mono text-[9px] text-[#8E8E93] uppercase tracking-widest leading-none">
                {activeAgent.status}
              </span>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-[#0A0A0B] border border-[#2D2D30] rounded-none text-[9px] font-mono text-[#8E8E93] uppercase tracking-wider">
          <Terminal className="w-3 h-3 text-white" />
          SECURE_SSL_TLS_v1.3
        </div>
      </div>

      {/* Message Output Frame */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4 font-sans text-xs sm:text-sm scrollbar-thin scrollbar-thumb-zinc-800">
        
        {messages.map((msg) => {
          const isMe = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
            >
              {!isMe && (
                <span className="text-[10px] font-mono text-white font-bold mb-1 ml-1 flex items-center gap-1 uppercase tracking-wider">
                  <UserCheck className="w-3 h-3" />
                  {msg.agentName}
                </span>
              )}
              <div
                className={`max-w-[85%] rounded-none px-3.5 py-2.5 leading-relaxed text-xs ${
                  isMe
                    ? 'bg-white text-black font-semibold'
                    : 'bg-[#0D0D0F] text-gray-200 border border-[#2D2D30]'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[9px] text-[#8E8E93] font-mono mt-1 px-1">
                {msg.timestamp}
              </span>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex flex-col items-start">
            <span className="text-[9px] font-mono text-[#8E8E93] mb-1 ml-1 uppercase tracking-wider">
              STATUS // DECRYPTING RESPONSIVE BIND...
            </span>
            <div className="bg-[#0D0D0F] text-gray-400 border border-[#2D2D30] rounded-none px-4 py-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-white rounded-none animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1.5 h-1.5 bg-white rounded-none animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1.5 h-1.5 bg-white rounded-none animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Suggested Quick Messages */}
      <div className="px-4 py-2 border-t border-[#2D2D30] bg-[#141416] flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none scroll-smooth">
        {[
          'Berapa biaya audit & test rentan?',
          'Ingin redirect ke Instagram Admin',
          'Saya ingin berdiskusi dengan CEO',
          'Bagaimana cara memesan Service 1?',
        ].map((prompt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSuggestionClick(prompt)}
            className="px-3 py-1.5 text-[10px] font-mono bg-black hover:bg-white hover:text-black text-[#8E8E93] border border-[#2D2D30] rounded-none transition-all duration-150 uppercase tracking-wider cursor-pointer"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Message Inputs */}
      <div className="p-3 bg-[#0A0A0B] border-t border-[#2D2D30] flex gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
          placeholder="KETIK PESAN ENKRIPSI KE TERMINAL..."
          className="flex-grow bg-[#141416] border border-[#2D2D30] focus:border-white focus:outline-none rounded-none px-4 py-2 text-xs sm:text-sm text-white font-mono placeholder-gray-650"
        />
        <button
          type="button"
          onClick={() => handleSendMessage(inputText)}
          disabled={!inputText.trim()}
          className="p-3 bg-white hover:bg-gray-200 disabled:opacity-30 text-black font-bold rounded-none transition duration-150 cursor-pointer flex items-center justify-center shrink-0"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
