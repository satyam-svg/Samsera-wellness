import React from "react";
import {
  Calendar,
  Users,
  UserCheck,
  Star,
  Search,
  ChevronDown,
  Plus,
  Download,
} from "lucide-react";

export default function Dashboard() {
  const participants = [
    {
      id: 1,
      name: "Jessica Williams",
      email: "jessica.williams@email.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&facepad=2",
      workshop: "Morning Group Meditation",
      workshopColor: "bg-purple-100 text-purple-700",
      registrationDate: "Dec 15, 2024",
      sessionsAttended: "8/10 sessions",
      attendance: 88,
      attendanceColor: "bg-green-500",
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: 2,
      name: "Robert Johnson",
      email: "robert.johnson@email.com",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&facepad=2",
      workshop: "Stress Relief Workshop",
      workshopColor: "bg-blue-100 text-blue-700",
      registrationDate: "Dec 18, 2024",
      sessionsAttended: "5/8 sessions",
      attendance: 65,
      attendanceColor: "bg-yellow-500",
      status: "Active",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: 3,
      name: "Amanda Davis",
      email: "amanda.davis@email.com",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&facepad=2",
      workshop: "Weekend Retreat",
      workshopColor: "bg-green-100 text-green-700",
      registrationDate: "Dec 20, 2024",
      sessionsAttended: "2/4 sessions",
      attendance: 88,
      attendanceColor: "bg-green-500",
      status: "Registered",
      statusColor: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Active Workshops Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">
                Total Active Workshops
              </p>
              <h3 className="text-2xl font-bold text-gray-900">24</h3>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-green-600 text-xs font-medium">↑ +15.2%</span>
          </div>
        </div>

        {/* Total Participants Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">
                Total Participants
              </p>
              <h3 className="text-2xl font-bold text-gray-900">342</h3>
            </div>
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-blue-600 text-xs font-medium">
              ↑ +18 new registrations
            </span>
          </div>
        </div>

        {/* Instructor Assignment Rate Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">
                Instructor Assignment Rate
              </p>
              <h3 className="text-2xl font-bold text-gray-900">96%</h3>
            </div>
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-purple-600" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-green-600 text-xs font-medium">↑ +4.1%</span>
          </div>
        </div>

        {/* Average Workshop Rating Card */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-3">
            <div>
              <p className="text-gray-500 text-sm font-medium mb-1">
                Average Workshop Rating
              </p>
              <h3 className="text-2xl font-bold text-gray-900">4.7</h3>
            </div>
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-600" />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-green-600 text-xs font-medium">↑ +0.3</span>
          </div>
        </div>
      </div>

      {/* Participants Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              {/* Search Bar */}
              <div className="relative flex-1 min-w-[180px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search workshop participants..."
                  className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
              </div>

              {/* Workshop Filter */}
              <div className="relative flex-1 min-w-[180px]">
                <select className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">
                  <option>All Workshops</option>
                  <option>Morning Group Meditation</option>
                  <option>Stress Relief Workshop</option>
                  <option>Weekend Retreat</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg flex items-center gap-2 font-medium text-sm">
                <Plus className="w-4 h-4" />
                Register Participant
              </button>
              <button className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-3 py-2 rounded-lg flex items-center gap-2 font-medium text-sm">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 gap-3 px-4 py-3 border-b border-gray-100 text-xs font-medium text-gray-500">
          <div className="col-span-3">Trainer</div>
          <div className="col-span-2">Workshop</div>
          <div className="col-span-2">Registration Date</div>
          <div className="col-span-2">Sessions Attended</div>
          <div className="col-span-2">Attendance</div>
          <div className="col-span-1">Status</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-100">
          {participants.map((participant) => (
            <div key={participant.id} className="p-4 hover:bg-gray-50">
              {/* Mobile Layout */}
              <div className="md:hidden">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 border border-gray-300">
                    <img
                      src={participant.avatar}
                      alt={participant.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">
                      {participant.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {participant.email}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-500">Workshop</div>
                  <div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${participant.workshopColor}`}
                    >
                      {participant.workshop}
                    </span>
                  </div>

                  <div className="text-gray-500">Registration Date</div>
                  <div className="text-gray-900">
                    {participant.registrationDate}
                  </div>

                  <div className="text-gray-500">Sessions Attended</div>
                  <div className="text-gray-900">
                    {participant.sessionsAttended}
                  </div>

                  <div className="text-gray-500">Attendance</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${participant.attendanceColor}`}
                        style={{ width: `${participant.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-900 font-medium">
                      {participant.attendance}%
                    </span>
                  </div>

                  <div className="text-gray-500">Status</div>
                  <div>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${participant.statusColor}`}
                    >
                      {participant.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-12 gap-3 items-center">
                {/* Trainer Column */}
                <div className="col-span-3 flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 border border-gray-300">
                    <img
                      src={participant.avatar}
                      alt={participant.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-gray-900 truncate">
                      {participant.name}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {participant.email}
                    </div>
                  </div>
                </div>

                {/* Workshop Column */}
                <div className="col-span-2">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${participant.workshopColor}`}
                  >
                    {participant.workshop}
                  </span>
                </div>

                {/* Registration Date Column */}
                <div className="col-span-2">
                  <div className="text-sm text-gray-900">
                    {participant.registrationDate}
                  </div>
                </div>

                {/* Sessions Attended Column */}
                <div className="col-span-2">
                  <div className="text-sm text-gray-900">
                    {participant.sessionsAttended}
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
                    <span className="text-xs text-gray-900 font-medium">
                      {participant.attendance}%
                    </span>
                  </div>
                </div>

                {/* Status Column */}
                <div className="col-span-1">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${participant.statusColor}`}
                  >
                    {participant.status}
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
