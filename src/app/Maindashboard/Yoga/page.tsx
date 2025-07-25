import React from "react";
import Image from "next/image";
import {
  Users,
  Calendar,
  BarChart3,
  Trophy,
  Search,
  ChevronDown,
  Plus,
  Download,
} from "lucide-react";

export default function Dashboard() {
  const participants = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&facepad=2",
      level: "Intermediate",
      levelColor: "bg-green-100 text-green-700",
      sessions: "8 sessions completed",
      attendance: 88,
      attendanceColor: "bg-green-500",
      progress: "On Track",
      progressColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      name: "Raj Patel",
      email: "raj.patel@email.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&facepad=2",
      level: "Beginner",
      levelColor: "bg-blue-100 text-blue-700",
      sessions: "5 sessions completed",
      attendance: 65,
      attendanceColor: "bg-yellow-500",
      progress: "On Track",
      progressColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      name: "Meera Gupta",
      email: "meera.gupta@email.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&facepad=2",
      level: "Advanced",
      levelColor: "bg-purple-100 text-purple-700",
      sessions: "12 sessions completed",
      attendance: 95,
      attendanceColor: "bg-green-500",
      progress: "On Track",
      progressColor: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Active Participants Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">
                Active Participants
              </p>
              <h3 className="text-3xl font-bold text-gray-900">247</h3>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-green-600 text-sm font-medium">↑ +12.5%</span>
          </div>
        </div>

        {/* Classes Today Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">
                Classes Today
              </p>
              <h3 className="text-3xl font-bold text-gray-900">8</h3>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 text-sm font-medium">
              📅 Scheduled
            </span>
          </div>
        </div>

        {/* Attendance Rate Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">
                Attendance Rate
              </p>
              <h3 className="text-3xl font-bold text-gray-900">87%</h3>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-green-600 text-sm font-medium">↑ +3.2%</span>
          </div>
        </div>

        {/* Completion Rate Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">
                Completion Rate
              </p>
              <h3 className="text-3xl font-bold text-gray-900">73%</h3>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <Trophy className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-red-600 text-sm font-medium">↓ -1.8%</span>
          </div>
        </div>
      </div>

      {/* Participants Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search participants..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Level Filter */}
              <div className="relative">
                <select className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
                <Plus className="w-4 h-4" />
                Add Participant
              </button>
              <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 font-medium">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div className="px-6 py-4 border-b border-gray-100">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-500">
            <div className="col-span-3">Trainer</div>
            <div className="col-span-2">Levels</div>
            <div className="col-span-3">Sessions Attended</div>
            <div className="col-span-2">Attendance</div>
            <div className="col-span-2">Progress</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {participants.map((participant) => (
            <div key={participant.id} className="px-6 py-4 hover:bg-gray-50">
              <div className="grid grid-cols-12 gap-4 items-center">
                {/* Trainer Column */}
                <div className="col-span-3 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={participant.avatar}
                      alt={participant.name}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {participant.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {participant.email}
                    </div>
                  </div>
                </div>

                {/* Levels Column */}
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${participant.levelColor}`}
                  >
                    {participant.level}
                  </span>
                </div>

                {/* Sessions Attended Column */}
                <div className="col-span-3">
                  <div className="text-sm text-gray-900">
                    {participant.sessions}
                  </div>
                </div>

                {/* Attendance Column */}
                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${participant.attendanceColor}`}
                        style={{ width: `${participant.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-900 font-medium">
                      {participant.attendance}%
                    </span>
                  </div>
                </div>

                {/* Progress Column */}
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${participant.progressColor}`}
                  >
                    {participant.progress}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
