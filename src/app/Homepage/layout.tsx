"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  User,
  BookOpen,
  Calendar,
  Users,
  User2,
  Activity,
  ChevronDown,
  ChevronUp,
  Bell,
  Search,
  Menu,
} from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col md:flex-row bg-[#fdf4f2]">
      {/* Mobile Top Bar */}
      <div className="flex md:hidden items-center justify-between p-3 bg-[#fdf4f2]">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
          <span className="font-semibold text-gray-700 text-[15px]">
            SAMSARA
          </span>
        </div>
        <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } 
        fixed md:static w-64 p-6 bg-[#fdf4f2] z-10 h-full transition-transform duration-300 ease-in-out md:block`}
      >
        <div className="flex flex-col items-start gap-2 pl-2">
          <Image
            src="https://randomuser.me/api/portraits/women/44.jpg"
            width={80}
            height={80}
            className="rounded-full object-cover"
            alt="Profile"
          />
          <h2 className="font-semibold text-[16px]">Sarah Mitchell</h2>
          <p className="text-gray-500 text-sm">sarah@example.com</p>
        </div>

        <nav className="mt-10 space-y-5 text-gray-700 text-sm">
          <MenuItem icon={<CalendarDays size={18} />} label="Dashboard" />
          <div>
            <button
              onClick={() => setProfileOpen(!isProfileOpen)}
              className="w-full flex justify-between items-center text-left"
            >
              <MenuItem icon={<User size={18} />} label="Profile" />
              {isProfileOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
          </div>
          <MenuItem icon={<BookOpen size={18} />} label="My Classes" />
          <MenuItem icon={<Calendar size={18} />} label="Events" />
          <MenuItem icon={<Users size={18} />} label="Group Classes" />
          <MenuItem icon={<User2 size={18} />} label="1:1 Classes" />
          <MenuItem icon={<Activity size={18} />} label="My Body" />
        </nav>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between px-6 py-3 bg-[#fdf4f2] mt-8">
          <div className="relative w-full max-w-md">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-2xl pl-10 pr-4 py-2 rounded-full bg-white border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="flex items-center gap-4 ml-4">
            <Bell className="text-gray-500 cursor-pointer" size={20} />
            <button className="bg-[#EB855F] text-white px-4 py-2 rounded-md text-sm hover:bg-orange-500 transition">
              Dashboard
            </button>
          </div>
        </div>

        {/* Scrollable Content Area - Scrollbar Hidden */}
        <div className="flex-1 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {children}
        </div>
      </div>
    </div>
  );
}

function MenuItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 px-1 py-1 hover:text-black cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}
