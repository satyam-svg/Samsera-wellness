import React from "react";
import {
  ChevronRight,
  Eye,
  Activity,
  Moon,
  Target,
  Dumbbell,
} from "lucide-react";
import Image from "next/image";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Box */}
      <div className="bg-white border-b border-gray-100 mb-6">
        <div className="px-6 py-4">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-semibold text-gray-900">My Body</h1>
            <div className="flex items-center space-x-2 ml-8">
              <span className="text-gray-500 text-sm">Dashboard</span>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-orange-500 text-sm font-medium">
                Body Status
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch min-h-[600px]">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col h-full">
            {/* Key Metrics */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Key Metrics
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-sm">♂</span>
                    </div>
                    <span className="text-gray-600 text-sm">Gender</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">Male</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 text-sm">📅</span>
                    </div>
                    <span className="text-gray-600 text-sm">Age</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">32 years</p>
                </div>
              </div>
            </div>

            {/* Body Measurements */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">
                  Body Measurements
                </h2>
                <button className="text-orange-500 text-sm flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>View History</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-2 text-gray-600 text-sm font-medium">
                        Measurement
                      </th>
                      <th className="text-left py-2 text-gray-600 text-sm font-medium">
                        Current
                      </th>
                      <th className="text-left py-2 text-gray-600 text-sm font-medium">
                        In CM
                      </th>
                      <th className="text-left py-2 text-gray-600 text-sm font-medium">
                        Change
                      </th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    {[
                      {
                        measurement: "Height",
                        current: "5'9\" cm",
                        cm: "176 cm",
                        change: "+2 cm",
                        positive: true,
                      },
                      {
                        measurement: "Weight",
                        current: "75 kg",
                        cm: "78 kg",
                        change: "-3 kg",
                        positive: false,
                      },
                      {
                        measurement: "Chest",
                        current: "75 kg",
                        cm: "78 kg",
                        change: "-3 kg",
                        positive: false,
                      },
                      {
                        measurement: "Waist",
                        current: "82 cm",
                        cm: "85 cm",
                        change: "-3 cm",
                        positive: false,
                      },
                      {
                        measurement: "Hips",
                        current: "58 cm",
                        cm: "60 cm",
                        change: "-2 cm",
                        positive: false,
                      },
                      {
                        measurement: "Arms",
                        current: "36 cm",
                        cm: "35 cm",
                        change: "+1 cm",
                        positive: true,
                      },
                      {
                        measurement: "Thighs",
                        current: "58 cm",
                        cm: "60 cm",
                        change: "-2 cm",
                        positive: false,
                      },
                      {
                        measurement: "BMI",
                        current: "88 cm",
                        cm: "92 cm",
                        change: "-4 cm",
                        positive: false,
                      },
                      {
                        measurement: "Body fat",
                        current: "88 cm",
                        cm: "92 cm",
                        change: "-4 cm",
                        positive: false,
                      },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-50">
                        <td className="py-3 text-gray-900 text-sm">
                          {row.measurement}
                        </td>
                        <td className="py-3 text-gray-900 text-sm font-medium">
                          {row.current}
                        </td>
                        <td className="py-3 text-gray-600 text-sm">{row.cm}</td>
                        <td className="py-3">
                          <span
                            className={`text-sm ${
                              row.positive ? "text-green-600" : "text-green-600"
                            }`}
                          >
                            {row.change}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 flex flex-col h-full space-y-6 mb-6">
            {/* Lifestyle Conditions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Lifestyle Conditions
              </h2>

              <div className="space-y-4">
                <div className="border border-red-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <Activity className="w-3 h-3 text-red-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        Hypertension
                      </span>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      Moderate
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Blood pressure consistently ranging between 130-139/80-89
                    mmHg. Currently managed with lifestyle modifications.
                  </p>
                  <p className="text-sm text-gray-500">💊 Medication: None</p>
                </div>

                <div className="border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-xs">😰</span>
                      </div>
                      <span className="font-medium text-gray-900">
                        Mild Anxiety
                      </span>
                    </div>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Controlled
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Occasional episodes of anxiety, primarily work-related.
                    Managing through meditation and breathing exercises.
                  </p>
                  <p className="text-sm text-gray-500">
                    🧘 Therapy: Weekly mindfulness sessions
                  </p>
                </div>

                <div className="border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <Moon className="w-3 h-3 text-purple-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        Sleep Apnea
                      </span>
                    </div>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
                      Needs Attention
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Moderate obstructive sleep apnea with AHI of 22. Using CPAP
                    therapy with moderate compliance.
                  </p>
                  <p className="text-sm text-gray-500">
                    🛏️ Treatment: CPAP therapy
                  </p>
                </div>
              </div>
            </div>

            {/* Dosha Profile */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Your Dosha Profile
              </h2>

              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 flex-shrink-0 rounded-full bg-orange-50 flex items-center justify-center">
                  <Image
                    src="/images/pita.svg"
                    alt="Dosha Symbol"
                    width={96}
                    height={96}
                    className="rounded-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Pitta-Vata Body Type
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Your dominant doshas are Pitta and Vata, indicating a
                    balanced energy profile with both fire and air elements.
                  </p>

                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                      Energetic
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                      Creative
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">
                      Focused
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* My Goals */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                My Goals
              </h2>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium text-gray-900">
                        Target Weight
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      150 lbs (68 kg)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Current: 154 lbs</span>
                    <span>4 lbs to go</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Dumbbell className="w-4 h-4 text-orange-500" />
                      <span className="text-sm font-medium text-gray-900">
                        Target Body Fat
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Current: 19.2%</span>
                    <span>1.2% to go</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
