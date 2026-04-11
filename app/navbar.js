"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { User, LogOut, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const protectRoute = [
    "/",
    "/registerd",
    "/login",
    "/rules/login",
    "/onboarding",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  if (protectRoute.includes(pathname)) {
    return null;
  }

  return (
    <nav className="h-20 w-full bg-[#000000] fixed top-0 z-50 border-b border-[#24aa4d]/30 flex items-center justify-center">
      <div className="w-full max-w-[1440px] px-4 md:px-8 flex items-center justify-between relative">
        {/* LEFT: Logo & Mobile Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            className="md:hidden text-[#24aa4d]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="flex items-center group">
            <img
              src="/white_logo.png" 
              alt="Bargad Logo"
              className="h-10 md:h-14 w-auto object-contain cursor-pointer transition-transform duration-200 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* CENTER: Title - Responsive font size and visibility */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
          <h1 className="text-[#24aa4d] text-sm md:text-xl font-black uppercase tracking-[0.05em] text-center whitespace-nowrap">
            API Documentation
          </h1>
        </div>

        {/* RIGHT: User Profile Section */}
        <div className="relative flex-shrink-0" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-full border border-[#24aa4d]/50 bg-black hover:border-[#5edd7c] transition-all duration-300 overflow-hidden"
          >
            <div
              className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white ${isOpen ? "bg-[#5edd7c]" : "bg-[#24aa4d]"}`}
            >
              <User size={18} />
            </div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-4 w-60 md:w-64 bg-[#080808] border border-[#24aa4d]/40 rounded-2xl shadow-2xl z-[60] overflow-hidden"
              >
                <div className="px-5 py-4 border-b border-[#24aa4d]/10 bg-[#24aa4d]/5">
                  <div className="flex items-center gap-2 text-[#5edd7c] mb-1">
                    <Mail size={12} />
                    <span className="text-[9px] uppercase tracking-widest font-black">
                      Support
                    </span>
                  </div>
                  <p className="text-white text-xs md:text-sm font-bold truncate">
                    support@bargad.ai
                  </p>
                </div>
                <div className="p-2">
                  <button
                    onClick={() => router.push("/login")}
                    className="w-full flex items-center gap-3 px-4 py-3 text-white/80 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all group"
                  >
                    <LogOut size={16} />
                    <span className="text-xs font-black uppercase">
                      Log Out
                    </span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-20 bg-black z-[40] md:hidden border-r border-[#24aa4d]/20 w-3/4 shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-6">
              <Link
                href="/product"
                className="text-[#24aa4d] font-black uppercase tracking-widest text-lg border-b border-[#24aa4d]/10 pb-4"
              >
                Dashboard
              </Link>
              <Link
                href="/rules"
                className="text-white/70 font-black uppercase tracking-widest text-lg border-b border-[#24aa4d]/10 pb-4"
              >
                Manage Rules
              </Link>
              <Link
                href="/analytics"
                className="text-white/70 font-black uppercase tracking-widest text-lg border-b border-[#24aa4d]/10 pb-4"
              >
                Analytics
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
