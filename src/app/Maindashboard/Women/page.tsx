import React from "react";
import {
  Users,
  Activity,
  Target,
  Star,
  UserPlus,
  Calendar,
  Award,
  Clock,
  Heart,
  Shield,
  User,
  FileText,
} from "lucide-react";

export default function Dashboard() {
  const metrics = [
    {
      title: "Total Active Patients",
      value: "1,247",
      change: "+8.3%",
      icon: Users,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Treatment Success Rate",
      value: "92%",
      change: "+4.2%",
      icon: Target,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Ongoing Treatments",
      value: "342",
      change: "+12.1%",
      icon: Activity,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Patient Satisfaction Score",
      value: "4.7",
      change: "+0.3",
      icon: Star,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  const treatmentCards = [
    {
      title: "PCOS/PCOD Management",
      activePatients: "156 Active Patients",
      treatmentProgress: 78,
      successRate: 89,
      icon: Heart,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      progressColor: "bg-purple-500",
    },
    {
      title: "Thyroid Care",
      activePatients: "98 Active Patients",
      treatmentProgress: 85,
      successRate: 94,
      icon: Shield,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      progressColor: "bg-blue-500",
    },
    {
      title: "Menopause Wellness",
      activePatients: "89 Active Patients",
      treatmentProgress: 92,
      successRate: 96,
      icon: User,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      progressColor: "bg-pink-500",
    },
    {
      title: "Period Tracker",
      activePatients: "243 Active Users",
      treatmentProgress: 82,
      successRate: 91,
      icon: FileText,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      progressColor: "bg-red-500",
    },
  ];

  const pieData = [
    { name: "Period Tracking", value: 243, color: "#FF6B6B", percentage: 40 },
    { name: "PCOS/PCOD", value: 156, color: "#4ECDC4", percentage: 26 },
    { name: "Thyroid", value: 98, color: "#45B7D1", percentage: 16 },
    { name: "Menopause", value: 89, color: "#FFA07A", percentage: 18 },
  ];

  // Clean Pie Chart Component
  const CleanPieChart = () => {
    const size = 200;
    const center = size / 2;
    const radius = 70;
    const innerRadius = 30;

    let cumulativePercentage = 0;

    return (
      <svg width={size} height={size}>
        {pieData.map((item, index) => {
          const startAngle = (cumulativePercentage / 100) * 360;
          const endAngle =
            ((cumulativePercentage + item.percentage) / 100) * 360;

          const startAngleRad = ((startAngle - 90) * Math.PI) / 180;
          const endAngleRad = ((endAngle - 90) * Math.PI) / 180;

          const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

          const x1 = center + radius * Math.cos(startAngleRad);
          const y1 = center + radius * Math.sin(startAngleRad);
          const x2 = center + radius * Math.cos(endAngleRad);
          const y2 = center + radius * Math.sin(endAngleRad);

          const ix1 = center + innerRadius * Math.cos(startAngleRad);
          const iy1 = center + innerRadius * Math.sin(startAngleRad);
          const ix2 = center + innerRadius * Math.cos(endAngleRad);
          const iy2 = center + innerRadius * Math.sin(endAngleRad);

          const pathData = [
            `M ${ix1} ${iy1}`,
            `L ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `L ${ix2} ${iy2}`,
            `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${ix1} ${iy1}`,
          ].join(" ");

          cumulativePercentage += item.percentage;

          return (
            <path
              key={index}
              d={pathData}
              fill={item.color}
              stroke="white"
              strokeWidth="2"
              className="hover:opacity-80 transition-opacity duration-200"
            />
          );
        })}
      </svg>
    );
  };

  const recentActivities = [
    {
      icon: UserPlus,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      title: "New PCOS patient registered",
      time: "5 minutes ago",
    },
    {
      icon: Calendar,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Thyroid consultation completed",
      time: "18 minutes ago",
    },
    {
      icon: Award,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "5-star review from patient",
      time: "42 minutes ago",
    },
    {
      icon: Clock,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "Menopause treatment reminder",
      time: "1 hour ago",
    },
    {
      icon: FileText,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      title: "Prescription updated",
      time: "2 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
        {/* First Row - Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-between mb-3 lg:mb-4">
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full ${metric.iconBg} flex items-center justify-center`}
                >
                  <metric.icon
                    className={`w-5 h-5 lg:w-6 lg:h-6 ${metric.iconColor}`}
                  />
                </div>
                <span className="text-xs lg:text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {metric.change}
                </span>
              </div>

              {/* Metric Content */}
              <div>
                <h3 className="text-xs lg:text-sm font-medium text-gray-600 mb-1 lg:mb-2">
                  {metric.title}
                </h3>
                <p className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                  {metric.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Treatment Cards with Progress Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {treatmentCards.map((treatment, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-3 lg:mb-4">
                <div
                  className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full ${treatment.iconBg} flex items-center justify-center mr-3`}
                >
                  <treatment.icon
                    className={`w-4 h-4 lg:w-5 lg:h-5 ${treatment.iconColor}`}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm lg:text-lg font-semibold text-gray-900 truncate">
                    {treatment.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-500 truncate">
                    {treatment.activePatients}
                  </p>
                </div>
              </div>

              {/* Stats with Progress Bars */}
              <div className="space-y-3 lg:space-y-4">
                {/* Treatment Progress with Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs lg:text-sm text-gray-600">
                      Treatment Progress
                    </span>
                    <span className="text-sm lg:text-lg font-semibold text-gray-900">
                      {treatment.treatmentProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${treatment.progressColor}`}
                      style={{ width: `${treatment.treatmentProgress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Success Rate with Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs lg:text-sm text-gray-600">
                      Success Rate
                    </span>
                    <span className="text-sm lg:text-lg font-semibold text-gray-900">
                      {treatment.successRate}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${treatment.progressColor}`}
                      style={{ width: `${treatment.successRate}%` }}
                    ></div>
                  </div>
                </div>

                {/* Additional tracking info for Period Tracker */}
                {treatment.title === "Period Tracker" && (
                  <>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs lg:text-sm text-gray-600">
                          Regular Tracking
                        </span>
                        <span className="text-sm lg:text-lg font-semibold text-gray-900">
                          82%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-red-500"
                          style={{ width: "82%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs lg:text-sm text-gray-600">
                          Cycle Prediction Accuracy
                        </span>
                        <span className="text-sm lg:text-lg font-semibold text-gray-900">
                          91%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-red-500"
                          style={{ width: "91%" }}
                        ></div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - Patient Distribution & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Patient Distribution Card */}
          <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                Patient Distribution
              </h3>
              <span className="text-xs lg:text-sm text-gray-500">
                Active Participants
              </span>
            </div>

            {/* Chart and Legend Side by Side */}
            <div className="flex flex-col lg:flex-row items-center justify-between">
              {/* Legend - Top on mobile, Left on desktop */}
              <div className="w-full lg:flex-1 space-y-3 lg:space-y-4 lg:pr-6 mb-4 lg:mb-0">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-3 h-3 lg:w-4 lg:h-4 rounded mr-3 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs lg:text-sm font-medium text-gray-700 truncate">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.value} users
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clean Pie Chart - Bottom on mobile, Right on desktop */}
              <div className="flex-shrink-0">
                <div className="scale-75 lg:scale-100">
                  <CleanPieChart />
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <h3 className="text-base lg:text-lg font-semibold text-gray-900">
                Recent Activities
              </h3>
              <button className="text-xs lg:text-sm text-orange-500 hover:text-orange-600 font-medium">
                View All Activities
              </button>
            </div>

            <div className="space-y-3 lg:space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`w-6 h-6 lg:w-8 lg:h-8 rounded-full ${activity.iconBg} flex items-center justify-center mr-3 mt-1 flex-shrink-0`}
                  >
                    <activity.icon
                      className={`w-3 h-3 lg:w-4 lg:h-4 ${activity.iconColor}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs lg:text-sm font-medium text-gray-900 mb-1 truncate">
                      {activity.title}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
