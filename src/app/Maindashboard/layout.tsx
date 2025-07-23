"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  Calendar,
  User,
  Heart,
  Settings,
  Headphones,
  BarChart3,
  Bell,
  Download,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="h-screen flex bg-[#fdf4f2]">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } fixed md:static w-64 bg-[#fdf4f2] h-full shadow-lg transition-transform duration-300 z-20 flex flex-col`}
      >
        {/* Fixed top section */}
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Samsara</h1>
              <p className="text-sm text-gray-500">Wellness Platform</p>
            </div>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Scrollable navigation section */}
        <div className="flex-1 overflow-y-auto px-6 pb-6">
          <nav className="space-y-2">
            <NavItem
              icon={<LayoutGrid size={18} />}
              label="Dashboard"
              isActive={pathname === "/dashboard"}
              onClick={() => router.push("/dashboard")}
            />
            <NavItem
              icon={<User size={18} />}
              label="Company Profile"
              isActive={pathname === "/company-profile"}
              onClick={() => router.push("/company-profile")}
            />

            <CollapsibleMenu
              label="Wellness Program"
              icon={<Heart size={18} />}
              items={[
                { label: "Yoga", route: "/wellness/yoga" },
                { label: "Ayurveda", route: "/wellness/ayurveda" },
                { label: "Meditation", route: "/wellness/meditation" },
              ]}
              pathname={pathname}
              router={router}
            />

            <CollapsibleMenu
              label="Women’s Program"
              icon={<User size={18} />}
              items={[
                { label: "PCOS/PCOD", route: "/women/pcos" },
                { label: "Thyroid", route: "/women/thyroid" },
                { label: "Menopause", route: "/women/menopause" },
                { label: "Period Tracker", route: "/women/period-tracker" },
              ]}
              pathname={pathname}
              router={router}
            />

            <NavItem
              icon={<Heart size={18} />}
              label="Mental Health"
              isActive={pathname === "/mental-health"}
              onClick={() => router.push("/mental-health")}
            />

            <div className="mt-4 border-t border-gray-300 pt-4 text-xs uppercase text-gray-500">
              Management
            </div>

            <NavItem
              icon={<BarChart3 size={18} />}
              label="Reports & Analytics"
              isActive={pathname === "/reports"}
              onClick={() => router.push("/reports")}
            />
            <NavItem
              icon={<Settings size={18} />}
              label="Settings"
              isActive={pathname === "/settings"}
              onClick={() => router.push("/settings")}
            />
            <NavItem
              icon={<Headphones size={18} />}
              label="Help & Support"
              isActive={pathname === "/help"}
              onClick={() => router.push("/help")}
            />
          </nav>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header (fixed) */}
        <div className="fixed left-0 md:left-64 right-0 top-0 z-10 bg-[#fdf4f2] border-b border-gray-200 flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              Human Resource Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              Comprehensive wellness metrics and program analytics
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition">
              <Bell size={16} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-lg bg-white shadow hover:bg-gray-100 transition">
              <Download size={16} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Scrollable page content */}
        <div className="mt-24 p-6 overflow-y-auto flex-1">{children}</div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-30 md:hidden bg-white border rounded-full p-2 shadow"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <span className="sr-only">Toggle Sidebar</span>
        <LayoutGrid size={20} />
      </button>
    </div>
  );
}

function NavItem({
  icon,
  label,
  onClick,
  isActive,
}: {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition ${
        isActive
          ? "bg-white text-orange-600 font-semibold"
          : "hover:bg-gray-100 text-gray-700"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function CollapsibleMenu({
  label,
  icon,
  items,
  pathname,
  router,
}: {
  label: string;
  icon: React.ReactNode;
  items: { label: string; route: string }[];
  pathname: string;
  router: ReturnType<typeof useRouter>;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 text-gray-700"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{label}</span>
        </div>
        {open ? (
          <ChevronUp size={16} className="text-gray-500" />
        ) : (
          <ChevronDown size={16} className="text-gray-500" />
        )}
      </div>
      {open && (
        <div className="ml-6 mt-1 space-y-1">
          {items.map((item) => (
            <NavItem
              key={item.label}
              label={item.label}
              isActive={pathname === item.route}
              onClick={() => router.push(item.route)}
              icon={<span className="w-2 h-2 bg-orange-400 rounded-full" />}
            />
          ))}
        </div>
      )}
    </div>
  );
}
