"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { MailIcon, UserIcon } from "lucide-react";
import Lottie from "lottie-react";
import successAnimation from "./sucess.json";

export default function Home() {
  const [role, setRole] = useState("Student");
  const [step, setStep] = useState("signin"); // 'signin', 'verification', or 'success'
  const [verificationCode, setVerificationCode] = useState(Array(4).fill(""));
  const [circleSize, setCircleSize] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate circle size based on container width
  useEffect(() => {
    if (containerRef.current && step === "success") {
      const containerWidth = containerRef.current.offsetWidth;
      setCircleSize(containerWidth * 2);
    }
  }, [step]);

  const handleSignIn = () => {
    setStep("verification");
  };

  const handleVerify = () => {
    setStep("success");

    setTimeout(() => {
      console.log("Redirecting to dashboard...");
      // router.push('/dashboard');
    }, 3000);
  };

  const handleCodeChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      if (value && index < 3) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden font-sans">
      {/* Left Side - Welcome */}
      <div className="hidden md:flex w-1/2 relative">
        <Image
          src="/images/yogroom.png"
          alt="Wellness Room"
          fill
          className="object-cover filter brightness-110 blur-[2px]"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col justify-center px-12 text-black">
          <div className="max-w-lg relative -translate-y-16">
            <h1 className="text-[36px] font-bold mb-4 text-black text-center">
              Welcome to Your Wellness Journey
            </h1>
            <p className="text-[18px] leading-relaxed text-gray-800 text-center">
              Begin your transformation with{" "}
              <span className="font-semibold">Samsara Wellness</span>. Join our
              community of mindful individuals seeking balance and inner peace.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div
        ref={containerRef}
        className={`w-full md:w-1/2 flex flex-col justify-center items-center px-4 sm:px-6 md:px-16 ${
          step === "success"
            ? "bg-gradient-to-b from-white to-orange-100"
            : "bg-white"
        } py-8 relative`}
      >
        <div className="w-full max-w-md relative">
          {/* Sign In + Verification */}
          {step !== "success" && (
            <>
              {/* Logo + SAMSARA Text */}
              <div className="flex justify-center items-center gap-2 mb-6">
                <div className="w-10 h-10 md:w-14 md:h-14 relative">
                  <Image
                    src="/images/logo.png"
                    alt="Samsara Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl md:text-2xl font-semibold text-gray-500 tracking-wide">
                  SAMSARA
                </span>
              </div>
            </>
          )}

          {step === "signin" && (
            <>
              <h2 className="text-center font-semibold text-2xl sm:text-3xl md:text-[34px]">
                Sign In to Samsara
              </h2>
              <p className="text-center text-gray-500 mb-6 text-sm">
                Continue your wellness journey
              </p>

              {/* Role Switch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                {["Student", "Wellness Coach"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setRole(item)}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-[20px] border-2 transition ${
                      role === item
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full ${
                        role === item ? "bg-orange-100" : "bg-orange-50"
                      }`}
                    >
                      <UserIcon
                        size={14}
                        className={`${
                          role === item ? "text-orange-500" : "text-orange-400"
                        }`}
                      />
                    </div>
                    <span
                      className={`font-semibold text-sm sm:text-base ${
                        role === item ? "text-gray-900" : "text-gray-700"
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                ))}
              </div>

              {/* Email Input */}
              <div className="relative mb-4">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                  <MailIcon size={16} />
                </span>
                <input
                  type="email"
                  placeholder="Enter Email ID"
                  className="w-full rounded-full border border-gray-200 bg-white pl-10 pr-4 py-2.5 sm:py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
                />
              </div>

              <button
                onClick={handleSignIn}
                className="w-full bg-[#EB855F] text-white py-2.5 sm:py-2 rounded-full hover:bg-orange-500 transition text-sm sm:text-base font-medium cursor-pointer"
              >
                Sign In
              </button>
            </>
          )}

          {step === "verification" && (
            <div className="animate-fadeIn">
              <h2 className="text-center font-semibold text-2xl sm:text-3xl md:text-[33px] mb-2">
                Verification Code
              </h2>
              <p className="text-center text-gray-500 mb-8 text-sm">
                We have sent the verification code to your email address
              </p>

              <div className="flex justify-center space-x-3 mb-8">
                {verificationCode.map((digit, index) => (
                  <input
                    key={index}
                    id={`code-input-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                    inputMode="numeric"
                  />
                ))}
              </div>

              <button
                onClick={handleVerify}
                className="w-full bg-[#EB855F] text-white py-2.5 sm:py-2 rounded-full hover:bg-orange-500 transition text-sm sm:text-base font-medium cursor-pointer"
              >
                Continue
              </button>
            </div>
          )}

          {step === "success" && (
            <div className="flex flex-col items-center justify-center w-full animate-fadeIn">
              {/* Concentric Circles */}
              {circleSize > 0 && (
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden -z-10"></div>
              )}

              {/* Success Animation */}
              <div className="w-64 h-64 mb-6">
                <Lottie animationData={successAnimation} loop={false} />
              </div>

              {/* SUCCESS Texts */}
              <div className="flex flex-col items-center justify-center w-full animate-fadeIn relative -translate-y-20">
                <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
                  Success!
                </h2>
                <p className="text-gray-600 text-center text-base">
                  Congratulations! You have been <br />
                  successfully authenticated
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer (Hidden in Success) */}
        {step !== "success" && (
          <div className="mt-10 sm:mt-16 text-center text-xs text-gray-400">
            <p>Copyright © 2025 Samsara Wellness. All rights reserved.</p>
            <p>Powered by Samsara Innovations</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
