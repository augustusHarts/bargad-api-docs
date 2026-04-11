"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);

  // This ensures the component only acts "Client-Side" for specific logic
  useEffect(() => {
    setMounted(true);
  }, []);

  function routeChange() {
    router.push("/product");
  }

  // To prevent the "Flash of Unstyled Content" or Hydration errors
  // on specific dynamic elements, we can check if mounted.
  // However, for inputs, suppressHydrationWarning={true} is usually enough.

  return (
    <div className="relative">
      {/* Corner Brackets */}
      <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-white rounded-tl-3xl opacity-90" />
      <div className="absolute -top-10 -right-10 w-20 h-20 border-t-2 border-r-2 border-white rounded-tr-3xl opacity-90" />
      <div className="absolute -bottom-10 -left-10 w-20 h-20 border-b-2 border-l-2 border-white rounded-bl-3xl opacity-90" />
      <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-white rounded-br-3xl opacity-90" />

      {/* Top Header Shields */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[60%] flex items-end justify-center -space-x-1 z-20">
        <ShieldSVG size="small" />
        <ShieldSVG size="large" />
        <ShieldSVG size="small" />
      </div>

      {/* Main Form Card */}
      <div className="w-[420px] bg-gradient-to-b from-[#0d3319] via-[#04150a] to-black rounded-[40px] p-8 border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.9)]">
        <h2 className="text-white text-center font-bold tracking-wider text-base mb-8 uppercase">
          Login
        </h2>

        <div className="space-y-5">
          {/* User ID Input */}
          <div className="space-y-1.5">
            <label className="text-gray-100 text-[10px] font-bold ml-4 uppercase tracking-wider">
              User ID
            </label>
            <input
              type="text"
              value={username}
              placeholder="Enter your email"
              onChange={(e) => setUsername(e.target.value)}
              suppressHydrationWarning={true} // <--- FIX 1: Prevents attribute mismatch errors
              className="w-full bg-black/50 border border-[#24aa4d]/40 rounded-full py-3 px-6 text-white placeholder:text-gray-700 outline-none focus:border-[#24aa4d] transition-all text-xs"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1.5 relative">
            <label className="text-gray-100 text-[10px] font-bold ml-4 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                suppressHydrationWarning={true} // <--- FIX 2: Prevents attribute mismatch errors
                className="w-full bg-black/50 border border-[#24aa4d]/40 rounded-full py-3 px-6 text-white placeholder:text-gray-700 outline-none focus:border-[#24aa4d] transition-all text-xs"
              />
              <div
                className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeSlashIcon className="w-4 h-4" />
                ) : (
                  <EyeIcon className="w-4 h-4" />
                )}
              </div>
            </div>
          </div>

          {/* Checkbox & Forgot Password */}
          <div className="flex items-center justify-between text-[10px] font-bold px-4">
            <label className="flex items-center gap-2 text-gray-400 cursor-pointer">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded border-gray-800 bg-black accent-[#24aa4d]"
              />
              Remember me
            </label>
            <span className="text-gray-400 cursor-pointer hover:text-[#24aa4d]">
              Forgot password?
            </span>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="w-full bg-[#24aa4d] text-white font-black py-3.5 rounded-full shadow-[0_5px_20px_rgba(36,170,77,0.3)] mt-2 tracking-widest text-xs cursor-pointer"
            onClick={routeChange}
          >
            Login
          </motion.button>

          {/* Bottom Help Text */}
          <div className="text-center space-y-4 pt-2">
            <p className="text-[9px] text-gray-600 font-medium">
              Please contact administrator, in case you are unable to login
            </p>
            <a href="/registerd" className="border-t border-white/10 pt-4">
              <p className="text-gray-200 text-[11px] font-black tracking-[0.2em] cursor-pointer hover:text-[#24aa4d] transition-colors">
                SIGN IN TO DASHBOARD
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fingerprint Icon */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl border-[4px] border-black">
        <FingerprintIcon className="w-8 h-8 text-black" />
      </div>
    </div>
  );
}

// Cleaned up Shield Component
function ShieldSVG({ size }) {
    const className = size === "large" ? "size-16" : "size-8";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#fff"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FingerprintIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M12 3.75a6.715 6.715 0 0 0-3.722 1.118.75.75 0 1 1-.828-1.25 8.25 8.25 0 0 1 12.8 6.883c0 3.014-.574 5.897-1.62 8.543a.75.75 0 0 1-1.395-.551A21.69 21.69 0 0 0 18.75 10.5 6.75 6.75 0 0 0 12 3.75ZM6.157 5.739a.75.75 0 0 1 .21 1.04A6.715 6.715 0 0 0 5.25 10.5c0 1.613-.463 3.12-1.265 4.393a.75.75 0 0 1-1.27-.8A6.715 6.715 0 0 0 3.75 10.5c0-1.68.503-3.246 1.367-4.55a.75.75 0 0 1 1.04-.211ZM12 7.5a3 3 0 0 0-3 3c0 3.1-1.176 5.927-3.105 8.056a.75.75 0 1 1-1.112-1.008A10.459 10.459 0 0 0 7.5 10.5a4.5 4.5 0 1 1 9 0c0 .547-.022 1.09-.067 1.626a.75.75 0 0 1-1.495-.123c.041-.495.062-.996.062-1.503a3 3 0 0 0-3-3Zm0 2.25a.75.75 0 0 1 .75.75c0 3.908-1.424 7.485-3.781 10.238a.75.75 0 0 1-1.14-.975A14.19 14.19 0 0 0 11.25 10.5a.75.75 0 0 1 .75-.75Zm3.239 5.183a.75.75 0 0 1 .515.927 19.417 19.417 0 0 1-2.585 5.544.75.75 0 0 1-1.243-.84 17.915 17.915 0 0 0 2.386-5.116.75.75 0 0 1 .927-.515Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
