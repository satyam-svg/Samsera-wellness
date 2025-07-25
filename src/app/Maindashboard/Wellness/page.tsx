import {
  Users,
  Activity,
  Target,
  Star,
  UserPlus,
  Calendar,
  Award,
  Clock,
} from "lucide-react";

export default function DashboardMetrics() {
  const metrics = [
    {
      title: "Total Active Users",
      value: "2,847",
      change: "+12.5%",
      icon: Users,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Ongoing Sessions",
      value: "342",
      change: "+12.1%",
      icon: Activity,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Program Completion Rate",
      value: "87%",
      change: "+5.3%",
      icon: Target,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Overall Satisfaction",
      value: "4.8",
      change: "+0.2",
      icon: Star,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ];

  const pieData = [
    { name: "Meditation", value: 742, color: "#3B82F6", percentage: 44 },
    { name: "Yoga", value: 456, color: "#10B981", percentage: 27 },
    { name: "Ayurveda", value: 298, color: "#F59E0B", percentage: 18 },
    { name: "Workshops", value: 186, color: "#EF4444", percentage: 11 },
  ];

  // Clean Pie Chart Component without percentage labels
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

          // Adjust angles to start from top (subtract 90 degrees)
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
      title: "New registration for Morning Yoga",
      time: "2 minutes ago",
    },
    {
      icon: Calendar,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Meditation session completed",
      time: "15 minutes ago",
    },
    {
      icon: Award,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "5-star rating received",
      time: "32 minutes ago",
    },
    {
      icon: Clock,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      title: "Workshop reminder sent",
      time: "1 hour ago",
    },
  ];

  const programCards = [
    {
      title: "Yoga Programs",
      activeSessions: "18 Active Sessions",
      participants: "456",
      completionRate: "92%",
      icon: Users,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Ayurveda Sessions",
      activeSessions: "12 Active Sessions",
      participants: "298",
      completionRate: "85%",
      icon: Activity,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Meditation Classes",
      activeSessions: "24 Active Sessions",
      participants: "742",
      completionRate: "89%",
      icon: Target,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Workshops",
      activeSessions: "8 Active Sessions",
      participants: "186",
      completionRate: "94%",
      icon: Star,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* First Row - Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${metric.iconBg} flex items-center justify-center`}
                >
                  <metric.icon className={`w-6 h-6 ${metric.iconColor}`} />
                </div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {metric.change}
                </span>
              </div>

              {/* Metric Content */}
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  {metric.title}
                </h3>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {metric.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Program Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programCards.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-center mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${program.iconBg} flex items-center justify-center mr-3`}
                >
                  <program.icon className={`w-5 h-5 ${program.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {program.activeSessions}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Participants</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {program.participants}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Completion Rate</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {program.completionRate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Third Row - Program Distribution & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Program Distribution Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Program Distribution
              </h3>
              <span className="text-sm text-gray-500">Active Participants</span>
            </div>

            {/* Chart and Legend Side by Side */}
            <div className="flex items-center justify-between">
              {/* Legend - Left Side */}
              <div className="flex-1 space-y-4 pr-6">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-4 h-4 rounded mr-3 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-700">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.value} users
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Clean Pie Chart - Right Side */}
              <div className="flex-shrink-0">
                <CleanPieChart />
              </div>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Recent Activity
              </h3>
              <button className="text-sm text-orange-500 hover:text-orange-600 font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`w-8 h-8 rounded-full ${activity.iconBg} flex items-center justify-center mr-3 mt-1 flex-shrink-0`}
                  >
                    <activity.icon
                      className={`w-4 h-4 ${activity.iconColor}`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 mb-1">
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
