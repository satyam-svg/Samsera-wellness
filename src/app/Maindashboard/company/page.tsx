"use client";

import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiDownloadCloud, FiShare2 } from "react-icons/fi";
import { useState } from "react";

export default function WellnessDashboard() {
  const [activeContact, setActiveContact] = useState(1);

  return (
    <div className="min-h-screen bg-[#fdf6f3] px-6 ">
      {/* Main Outer Container */}
      <div className="w-full bg-white rounded-2xl shadow-md p-6 flex gap-6">
        {/* Left Content Box */}
        <div className="w-3/4 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          {/* Profile Card Section */}
          <div className="flex items-start gap-6">
            {/* Logo */}
            <div className="w-20 h-20 bg-[#fff3ef] rounded-2xl flex items-center justify-center">
              <Image src="/images/logo.svg" alt="Logo" width={48} height={48} />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">
                Samsara Wellness Corporation
              </h2>

              {/* Info Grid */}
              <div className="mt-4 grid grid-cols-2 gap-y-4 text-sm">
                <div>
                  <p className="text-gray-500">Primary Contact</p>
                  <p className="font-medium text-gray-900">Dr. Rajesh Kumar</p>
                </div>
                <div>
                  <p className="text-gray-500">Contact Number</p>
                  <p className="font-medium text-gray-900">+91 98765 43210</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">
                    Mumbai, Maharashtra, India
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex items-center gap-3">
                {/* Toggle Buttons */}
                <div className="flex bg-gray-100 rounded-full p-1 shadow-inner">
                  <button className="px-4 py-2 bg-[#f07d5c] text-white text-sm font-medium rounded-full">
                    Profile View
                  </button>
                  <button className="px-4 py-2 text-gray-800 text-sm font-medium rounded-full">
                    Form View
                  </button>
                </div>

                {/* View Details */}
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-[#f07d5c] border border-[#f07d5c] rounded-lg">
                  <FaExternalLinkAlt className="text-xs" /> View Details
                </button>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-8">
            {/* Tabs */}
            <div className="flex bg-gray-100 rounded-t-xl overflow-hidden">
              <button
                onClick={() => setActiveContact(1)}
                className={`flex-1 px-5 py-3 text-sm font-medium flex items-center gap-2 justify-center ${
                  activeContact === 1
                    ? "bg-[#f07d5c] text-white"
                    : "text-gray-700"
                }`}
              >
                <span className="text-lg">👤</span> Contact 1
              </button>
              <button
                onClick={() => setActiveContact(2)}
                className={`flex-1 px-5 py-3 text-sm font-medium flex items-center gap-2 justify-center ${
                  activeContact === 2
                    ? "bg-[#f07d5c] text-white"
                    : "text-gray-700"
                }`}
              >
                <span className="text-lg">👤</span> Contact 2
              </button>
            </div>

            {/* Contact Details */}
            <div className="bg-white border border-t-0 border-gray-200 rounded-b-xl p-6">
              {activeContact === 1 ? (
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-900">Sarah Johnson</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Designation</p>
                    <p className="font-medium text-gray-900">
                      Wellness Program Manager
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Mobile Number</p>
                    <p className="font-medium text-gray-900">+91 98765 12345</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Email ID</p>
                    <p className="font-medium text-gray-900">
                      sarah.johnson@samsara.com
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Contact 1</p>
                    <p className="font-medium text-gray-900">
                      Emergency: +91 98765 11111
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Contact 2</p>
                    <p className="font-medium text-gray-900">
                      Office: +91 22 4567 8901
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-900">John Doe</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Designation</p>
                    <p className="font-medium text-gray-900">
                      Assistant Manager
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Mobile Number</p>
                    <p className="font-medium text-gray-900">+91 91234 56789</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Email ID</p>
                    <p className="font-medium text-gray-900">
                      john.doe@samsara.com
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Contact 1</p>
                    <p className="font-medium text-gray-900">
                      Emergency: +91 98765 22222
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Contact 2</p>
                    <p className="font-medium text-gray-900">
                      Office: +91 22 4567 2222
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Content Box */}
        <div className="w-1/4 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          {/* Quick Actions */}
          <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
          <div className="mt-4 space-y-3">
            <button className="w-full flex items-start gap-3 p-4 bg-gray-50 rounded-xl border hover:shadow-sm transition">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
                <FiDownloadCloud className="text-blue-600 text-lg" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">
                  Download Company Report
                </p>
                <p className="text-xs text-gray-500">
                  Export organizational metrics
                </p>
              </div>
            </button>

            <button className="w-full flex items-start gap-3 p-4 bg-gray-50 rounded-xl border hover:shadow-sm transition">
              <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg">
                <FiShare2 className="text-green-600 text-lg" />
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-900">Share Overview</p>
                <p className="text-xs text-gray-500">Send to stakeholders</p>
              </div>
            </button>
          </div>

          {/* Recent Updates */}
          <h3 className="mt-8 text-lg font-semibold text-gray-900">
            Recent Updates
          </h3>
          <div className="mt-4 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-green-500 rounded-full"></span>
              <div>
                <p className="text-gray-900">New Yoga Program Launched</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></span>
              <div>
                <p className="text-gray-900">Monthly Health Report Published</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></span>
              <div>
                <p className="text-gray-900">
                  Employee Feedback Survey Completed
                </p>
                <p className="text-xs text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <h3 className="mt-8 text-lg font-semibold text-gray-900">
            Upcoming Events
          </h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="p-4 bg-blue-50 rounded-xl">
              <p className="font-medium text-gray-900">Wellness Workshop</p>
              <p className="text-xs text-gray-500">Tomorrow, 2:00 PM</p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl">
              <p className="font-medium text-gray-900">Health Screening Camp</p>
              <p className="text-xs text-gray-500">Next Week, Monday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
