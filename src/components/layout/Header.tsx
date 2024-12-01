'use client'

import React, { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <Camera className="w-8 h-8 text-[#4AB8D3]" />
            <span className="text-xl font-bold">AI Photo</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/pricing" className="hover:text-[#4AB8D3] transition">定價</a>
            <a href="/gallery" className="hover:text-[#4AB8D3] transition">相簿</a>
            <a href="/billing" className="hover:text-[#4AB8D3] transition">帳單</a>
            <a href="/login" className="hover:text-[#4AB8D3] transition">登入</a>
            <a 
              href="/signup" 
              className="bg-gradient-to-r from-[#FF6B4A] to-pink-500 px-6 py-2 rounded-full font-medium hover:opacity-90 transition"
            >
              開始拍照
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 py-4">
            <div className="flex flex-col space-y-4 px-6">
              <a href="/pricing" className="hover:text-[#4AB8D3] transition">定價</a>
              <a href="/gallery" className="hover:text-[#4AB8D3] transition">相簿</a>
              <a href="/billing" className="hover:text-[#4AB8D3] transition">帳單</a>
              <a href="/login" className="hover:text-[#4AB8D3] transition">登入</a>
              <a 
                href="/signup" 
                className="bg-gradient-to-r from-[#FF6B4A] to-pink-500 px-6 py-2 rounded-full font-medium text-center"
              >
                開始拍照
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 