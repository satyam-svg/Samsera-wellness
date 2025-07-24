import React from "react";

const Wellness = () => {
  const programData = [
    { name: "Yoga Program", value: 35, color: "bg-blue-400" },
    { name: "Women's Health", value: 28, color: "bg-orange-400" },
    { name: "Meditation", value: 22, color: "bg-yellow-400" },
    { name: "Ayurveda", value: 15, color: "bg-green-400" },
  ];

  const demographicsData = [
    { name: "25-35 years", value: 40, color: "bg-blue-400" },
    { name: "35-45 years", value: 30, color: "bg-green-400" },
    { name: "45+ years", value: 20, color: "bg-yellow-400" },
    { name: "55+ years", value: 10, color: "bg-orange-400" },
  ];

  const createDonutChart = (data) => {
    let cumulativePercentage = 0;
    const radius = 90;
    const innerRadius = 55;
    const centerX = 110;
    const centerY = 110;

    const colors = {
      "bg-blue-400": "#60a5fa",
      "bg-orange-400": "#fb923c",
      "bg-yellow-400": "#facc15",
      "bg-green-400": "#4ade80",
    };

    return (
      <div className="relative">
        <svg width="220" height="220" className="transform -rotate-90">
          {data.map((item, index) => {
            const startAngle = (cumulativePercentage / 100) * 360;
            const endAngle = ((cumulativePercentage + item.value) / 100) * 360;

            const startAngleRad = (startAngle * Math.PI) / 180;
            const endAngleRad = (endAngle * Math.PI) / 180;

            const x1 = centerX + radius * Math.cos(startAngleRad);
            const y1 = centerY + radius * Math.sin(startAngleRad);
            const x2 = centerX + radius * Math.cos(endAngleRad);
            const y2 = centerY + radius * Math.sin(endAngleRad);

            const x3 = centerX + innerRadius * Math.cos(endAngleRad);
            const y3 = centerY + innerRadius * Math.sin(endAngleRad);
            const x4 = centerX + innerRadius * Math.cos(startAngleRad);
            const y4 = centerY + innerRadius * Math.sin(startAngleRad);

            const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

            const pathData = [
              `M ${x1} ${y1}`,
              `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
              `L ${x3} ${y3}`,
              `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
              "Z",
            ].join(" ");

            const midAngleRad = (startAngleRad + endAngleRad) / 2;
            const lineStartX = centerX + (radius + 5) * Math.cos(midAngleRad);
            const lineStartY = centerY + (radius + 5) * Math.sin(midAngleRad);
            const lineEndX = centerX + (radius + 20) * Math.cos(midAngleRad);
            const lineEndY = centerY + (radius + 20) * Math.sin(midAngleRad);

            const labelX = centerX + (radius + 30) * Math.cos(midAngleRad);
            const labelY = centerY + (radius + 30) * Math.sin(midAngleRad);

            cumulativePercentage += item.value;

            return (
              <g key={index}>
                <path
                  d={pathData}
                  fill={colors[item.color]}
                  className="hover:opacity-80 transition-opacity duration-200"
                />
                <line
                  x1={lineStartX}
                  y1={lineStartY}
                  x2={lineEndX}
                  y2={lineEndY}
                  stroke={colors[item.color]}
                  strokeWidth="1"
                />
                <text
                  x={labelX}
                  y={labelY}
                  fill="#666"
                  fontSize="10"
                  alignmentBaseline="middle"
                  textAnchor={Math.cos(midAngleRad) >= 0 ? "start" : "end"}
                >
                  {item.name.length > 6
                    ? item.name.slice(0, 4) + "..."
                    : item.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    );
  };

  return (
    <div
      className="col-span-1 md:col-span-2 xl:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
      style={{ width: 600 }}
    >
      {/* Program Success Rates */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Program Success Rates
          </h3>
          <p className="text-sm text-gray-500">
            Completion and satisfaction metrics
          </p>
        </div>

        <div className="flex justify-center mb-4">
          {createDonutChart(programData)}
        </div>

        <div className="space-y-2">
          {programData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${item.color} mr-2 flex-shrink-0`}
                ></div>
                <span className="text-sm text-gray-700 truncate">
                  {item.name}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-900 ml-2">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* User Demographics */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            User Demographics
          </h3>
          <p className="text-sm text-gray-500">
            Age and department distribution
          </p>
        </div>

        <div className="flex justify-center mb-4">
          {createDonutChart(demographicsData)}
        </div>

        <div className="space-y-2">
          {demographicsData.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${item.color} mr-2 flex-shrink-0`}
                ></div>
                <span className="text-sm text-gray-700 truncate">
                  {item.name}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-900 ml-2">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wellness;
