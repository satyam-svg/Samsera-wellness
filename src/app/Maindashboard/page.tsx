import { Calendar } from "lucide-react";
import { FaHeartbeat, FaUser, FaCheckCircle, FaClock } from "react-icons/fa";
import Wellness from "../../../Components/Wellness";

const stats = [
  {
    icon: <FaHeartbeat className="text-orange-500 text-xl" />,
    label: "Overall Wellness Score",
    value: "87/100",
    subLabel: "+12% from last period",
    badge: "Overall",
    color: "bg-[#FFEDD5]",
    iconBg: "bg-[#FFEDD5]",
  },
  {
    icon: <FaUser className="text-blue-500 text-xl" />,
    label: "Total Active Users",
    value: "2,847",
    subLabel: "+8.5% from last period",
    badge: "Active",
    color: "bg-blue-100",
    iconBg: "bg-[#EFF6FF]",
  },
  {
    icon: <FaCheckCircle className="text-green-500 text-xl" />,
    label: "Program Completion Rate",
    value: "74%",
    subLabel: "+5.2% from last period",
    badge: "Completion",
    color: "bg-green-100",
    iconBg: "bg-[#DCFCE7]",
  },
  {
    icon: <FaClock className="text-purple-500 text-xl" />,
    label: "Avg Session Duration",
    value: "28min",
    subLabel: "+3.1% from last period",
    badge: "Session",
    color: "bg-purple-100",
    iconBg: "bg-[#F3E8FF]",
  },
];

export default function WellnessDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Analytics Overview
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex flex-wrap bg-gray-100 rounded-lg p-1 gap-1">
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-400 text-white rounded-md text-sm font-medium">
                Weekly
              </button>
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-gray-600 rounded-md text-sm font-medium hover:bg-gray-50">
                Monthly
              </button>
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-gray-600 rounded-md text-sm font-medium hover:bg-gray-50">
                Quarterly
              </button>
              <button className="px-3 py-1.5 sm:px-4 sm:py-2 text-gray-600 rounded-md text-sm font-medium hover:bg-gray-50">
                Yearly
              </button>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
              Filters
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 text-sm">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Export Data
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Main Dashboard */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl shadow bg-white p-4 sm:p-5 flex flex-col gap-3"
                style={{ minHeight: "160px" }}
              >
                <div className="flex items-center justify-between">
                  <div className={`rounded-full p-3 ${stat.iconBg}`}>
                    {stat.icon}
                  </div>
                  <span className="font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-xs whitespace-nowrap">
                    {stat.badge}
                  </span>
                </div>
                <div className="flex flex-col gap-1 min-h-0">
                  <p className="text-sm text-gray-600 leading-tight">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-semibold text-gray-900 leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm text-green-600 leading-tight">
                    {stat.subLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Program Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {/* Yoga Metrics */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900 min-w-0">
                  Yoga Metrics
                </span>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-600">
                    Session Attendance
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div className="w-[82%] h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 min-w-[30px]">
                      82%
                    </span>
                  </div>
                </div>
                <div className="min-w-0">
                  <span className="text-sm text-gray-600 block">
                    Most Popular Class
                  </span>
                  <div className="text-sm font-semibold text-gray-900 truncate">
                    Hatha Yoga Flow
                  </div>
                </div>
                <div className="min-w-0">
                  <span className="text-sm text-gray-600 block">
                    Average Rating
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-semibold">4.8</span>
                    <div className="flex gap-[1px]">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ayurveda Metrics */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.35 11.1h-2.83c-.51 0-.99-.31-1.18-.78l-.74-1.85c-.27-.68-.97-1.18-1.73-1.18s-1.46.5-1.73 1.18l-.74 1.85c-.19.47-.67.78-1.18.78H8.39c-.81 0-1.47.66-1.47 1.47 0 .81.66 1.47 1.47 1.47h2.83c.51 0 .99.31 1.18.78l.74 1.85c.27.68.97 1.18 1.73 1.18s1.46-.5 1.73-1.18l.74-1.85c.19-.47.67-.78 1.18-.78h2.83c.81 0 1.47-.66 1.47-1.47 0-.81-.66-1.47-1.47-1.47z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900 min-w-0">
                  Ayurveda Metrics
                </span>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center gap-3">
                  <span className="text-sm text-gray-600 flex-shrink-0">
                    Consultation Bookings
                  </span>
                  <span className="text-sm font-semibold whitespace-nowrap">
                    156
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-600">
                    Diet Plan Adherence
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div className="w-[78%] h-full bg-yellow-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 min-w-[30px]">
                      78%
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-600">
                    Treatment Success Rate
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div className="w-[91%] h-full bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 min-w-[30px]">
                      91%
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Women Wellness */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="w-9 h-9 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.34-.21 3.41-.6.3-.11.49-.4.49-.72 0-.42-.34-.76-.76-.76-.17 0-.33.06-.46.14-.87.31-1.79.47-2.68.47-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 1.48-.4 2.87-1.11 4.06-.14.24-.14.54 0 .78.71 1.19 1.11 2.58 1.11 4.06 0 .42.34.76.76.76s.76-.34.76-.76c0-5.52-4.48-10-10-10z" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900 min-w-0">
                  Women Wellness
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-gray-600">
                    Program Enrollment
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div className="w-[68%] h-full bg-pink-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-900 min-w-[30px]">
                      68%
                    </span>
                  </div>
                </div>
                {[
                  ["PCOD/PCOS", "45%"],
                  ["Thyroid", "32%"],
                  ["Menopause", "23%"],
                  ["Period Tracker", "15%"],
                ].map(([label, value], i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center gap-3"
                  >
                    <span className="text-sm text-gray-600 flex-shrink-0">
                      {label}
                    </span>
                    <span className="text-sm font-semibold whitespace-nowrap">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Program Engagement Trend */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Program Engagement Trend
                </h3>
                <p className="text-sm text-gray-500">
                  Weekly participation across all programs
                </p>
              </div>

              <div className="relative h-80 sm:h-96">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-2">
                  <span>600</span>
                  <span>500</span>
                  <span>400</span>
                  <span>300</span>
                  <span>200</span>
                  <span>100</span>
                  <span>0</span>
                </div>

                {/* Chart area */}
                <div className="ml-8 h-full flex items-end justify-between gap-2 sm:gap-3">
                  {[
                    { time: "6AM", value: 115, height: 200 },
                    { time: "9AM", value: 270, height: 100 },
                    { time: "12PM", value: 440, height: 60 },
                    { time: "3PM", value: 375, height: 80 },
                    { time: "6PM", value: 510, height: 30 },
                    { time: "9PM", value: 175, height: 50 },
                  ].map((bar, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center flex-1 max-w-16"
                    >
                      <div
                        className="w-full bg-blue-400 rounded-t-lg mb-2 min-h-[20px]"
                        style={{ height: bar.height }}
                      ></div>
                      <span className="text-xs text-gray-600 font-medium">
                        {bar.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* User Activity Distribution */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  User Activity Distribution
                </h3>
                <p className="text-sm text-gray-500">
                  Peak usage times and patterns
                </p>
              </div>

              <div className="relative h-80 sm:h-96">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-400 pr-2">
                  <span>600</span>
                  <span>500</span>
                  <span>400</span>
                  <span>300</span>
                  <span>200</span>
                  <span>100</span>
                  <span>0</span>
                </div>

                {/* Chart area */}
                <div className="ml-8 h-full flex items-end justify-between gap-2 sm:gap-3">
                  {[
                    { time: "6AM", value: 115, height: 200 },
                    { time: "9AM", value: 270, height: 100 },
                    { time: "12PM", value: 440, height: 60 },
                    { time: "3PM", value: 375, height: 80 },
                    { time: "6PM", value: 510, height: 30 },
                    { time: "9PM", value: 175, height: 50 },
                  ].map((bar, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center flex-1 max-w-16"
                    >
                      <div
                        className="w-full bg-blue-400 rounded-t-lg mb-2 min-h-[20px]"
                        style={{ height: bar.height }}
                      ></div>
                      <span className="text-xs text-gray-600 font-medium">
                        {bar.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Wellness />
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="w-full lg:w-80 bg-white border-t lg:border-l lg:border-t-0 border-gray-200 p-4 sm:p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Wellness Calendar
            </h3>
            <div className="text-center text-gray-500 text-sm mb-4 flex items-center justify-between">
              <button className="p-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <span>May 2025</span>
              <button className="p-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-6">
              {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                <div key={day} className="p-2 font-semibold text-gray-600">
                  {day}
                </div>
              ))}
              {["11", "12", "13", "14", "15", "16", "17"].map((date) => (
                <div
                  key={date}
                  className={`p-2 ${
                    date === "14"
                      ? "bg-orange-400 text-white rounded-lg"
                      : "text-gray-700"
                  }`}
                >
                  {date}
                </div>
              ))}
              {["18", "19", "20", "21", "22", "23", "24"].map((date) => (
                <div key={date} className="p-2 text-gray-700">
                  {date}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-md font-semibold text-gray-900 mb-3">
              Quick Actions
            </h4>
            <div className="space-y-2">
              <button className="w-full text-left p-3 bg-orange-50 rounded-xl text-sm flex items-center gap-3 hover:bg-orange-100 transition-colors">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 01-7.5-7.5c0-4.14 3.36-7.5 7.5-7.5S16.5 5.36 16.5 9.5c0 2.33-1.06 4.41-2.73 5.78L15 17z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="font-medium text-gray-900">Set Alerts</div>
                  <div className="text-xs text-gray-500">
                    Configure notifications
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-md font-semibold text-gray-900 mb-3">
              Program Statistics
            </h4>
            <div className="bg-gray-50 rounded-xl p-4 space-y-3">
              <div className="flex justify-between items-center gap-3">
                <span className="text-sm text-gray-600 flex-shrink-0">
                  Goals Achievement
                </span>
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-sm font-semibold text-blue-600 whitespace-nowrap">
                    Q1 2025
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-600">Wellness Sessions</span>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div className="w-[92%] h-full bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 min-w-[30px]">
                    92%
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-600">Health Metrics</span>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div className="w-[78%] h-full bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900 min-w-[30px]">
                    78%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4 gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-gray-600">Stress Score</span>
              </div>
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm text-gray-600">Fitness Index</span>
              </div>
            </div>
            <div className="flex justify-between items-center gap-3">
              <div className="text-center min-w-0">
                <div className="text-2xl font-bold text-green-600">67%</div>
                <div className="text-xs text-gray-500 whitespace-nowrap">
                  ↓ 12% from last month
                </div>
              </div>
              <div className="text-center min-w-0">
                <div className="text-2xl font-bold text-orange-600">83%</div>
                <div className="text-xs text-gray-500 whitespace-nowrap">
                  ↑ 8% from last month
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
