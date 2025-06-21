"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Bell,
  Home,
  User,
  BookOpen,
  Calendar,
  Users,
  UserCheck,
  Activity,
  Clock,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function WellnessDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 py-4 gap-4">
          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center space-x-4">
              <button
                className="md:hidden text-gray-500"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={24} />
              </button>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=300&h=300&fit=crop&crop=faces"
                    alt="Sarah Mitchell"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Sarah Mitchell
                  </h2>
                  <p className="text-sm text-gray-500">sarah@example.com</p>
                </div>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-4 md:hidden">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium text-sm md:text-base">
                Dashboard
              </button>
            </div>
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium">
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Mobile */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
            <aside className="w-64 bg-white h-screen fixed top-0 left-0 z-50">
              <div className="p-4 flex justify-end">
                <button
                  className="p-2 text-gray-500"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="p-4">
                <div className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                  >
                    <Home className="w-5 h-5" />
                    <span>Dashboard</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span>Profile</span>
                    <ChevronDown className="w-4 h-4 ml-auto" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>My Classes</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Events</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                  >
                    <Users className="w-5 h-5" />
                    <span>Group Classes</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                  >
                    <UserCheck className="w-5 h-5" />
                    <span>1:1 Classes</span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                  >
                    <Activity className="w-5 h-5" />
                    <span>My Body</span>
                  </a>
                </div>
              </nav>
            </aside>
          </div>
        )}

        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 bg-white shadow-sm h-screen sticky top-0">
          <nav className="p-6">
            <div className="space-y-2">
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
              >
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
              >
                <BookOpen className="w-5 h-5" />
                <span>My Classes</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
              >
                <Calendar className="w-5 h-5" />
                <span>Events</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
              >
                <Users className="w-5 h-5" />
                <span>Group Classes</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
              >
                <UserCheck className="w-5 h-5" />
                <span>1:1 Classes</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
              >
                <Activity className="w-5 h-5" />
                <span>My Body</span>
              </a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-6 md:p-10 shadow-md overflow-hidden">
            {/* Left Content */}
            <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-orange-500">S</span>
                </div>
                <h1 className="text-xl font-bold text-gray-700">SAMSARA</h1>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                Welcome to Your Wellness Journey
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Discover personalized classes, join events, and connect with our
                wellness community.
              </p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 mt-6 md:mt-0 relative">
              <img
                src="/5d6543db-a64e-4b2d-b770-f116c13357f3.png"
                alt="Wellness space"
                className="w-full h-auto rounded-xl object-cover"
              />
              {/* Floating "H" avatar */}
              <div className="absolute top-3 right-3 w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl">
                H
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Events Section */}
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                <div className="relative mb-4 md:mb-6 rounded-lg md:rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop"
                    alt="Meditation Session"
                    width={400}
                    height={200}
                    className="w-full h-36 md:h-48 object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                  Events
                </h3>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Morning Flow
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        Today, 8:00 AM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Meditation Session
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500 flex items-center">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        Tomorrow, 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Group Classes Section */}
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                <div className="relative mb-4 md:mb-6 rounded-lg md:rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop"
                    alt="Group Yoga Class"
                    width={400}
                    height={200}
                    className="w-full h-36 md:h-48 object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                  Group Classes
                </h3>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Yoga Basics
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">
                        10 spots available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-100 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 md:w-5 md:h-5 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Mindfulness
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">
                        5 spots available
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 1:1 Classes Section */}
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-lg md:rounded-xl p-4 md:p-6 shadow-sm">
                <div className="relative mb-4 md:mb-6 rounded-lg md:rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop"
                    alt="Personal Training"
                    width={400}
                    height={200}
                    className="w-full h-36 md:h-48 object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                  1:1 Classes
                </h3>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <UserCheck className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Personal Training
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">
                        Book a session
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <UserCheck className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        Wellness Coaching
                      </h4>
                      <p className="text-xs md:text-sm text-gray-500">
                        Schedule consultation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 md:mt-12 text-center text-gray-500 text-xs md:text-sm">
            <p>
              Copyright© 2025 Samsara Wellness. All rights reserved. Powered by
              Samsara Innovations
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
