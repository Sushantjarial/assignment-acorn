import { Filter, BarChart3 } from "lucide-react";

const platforms = [
  {
    name: "Dribbble",
    icon: "🎨",
    amount: "$227,459",
    percentage: "43%",
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "Instagram",
    icon: "📷",
    amount: "$142,823",
    percentage: "27%",
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "Behance",
    icon: "Bē",
    amount: "$89,935",
    percentage: "11%",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Google",
    icon: "G",
    amount: "$37,028",
    percentage: "7%",
    color: "from-green-400 to-green-600",
  },
];

export const PlatformBreakdown = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Platform List */}
      <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
            <span className="text-base">≡</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-600 hover:bg-gray-100 transition-colors">
            Filters
            <Filter className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="space-y-2">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm flex-shrink-0">
                {platform.icon}
              </div>
              <span className="text-sm text-gray-600 font-medium">
                {platform.name}
              </span>
              <span className="ml-auto text-sm font-semibold text-gray-900 tabular-nums">
                {platform.amount}
              </span>
              <span className="text-sm text-gray-500 tabular-nums w-10 text-right">
                {platform.percentage}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Referrer Category Chart */}
      <div className="bg-white rounded-2xl p-5 shadow-md border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <button className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs text-gray-600 hover:bg-gray-100 transition-colors">
            <BarChart3 className="w-4 h-4" />
            <span className="text-xs">▼</span>
          </button>
          <button className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600 hover:bg-gray-100 transition-colors">
            Filters
            <Filter className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bar Chart Visualization */}
        <div className="relative h-44 flex items-end justify-center gap-3 pt-4 pb-2">
          {/* Behance - Large bar */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-28 rounded-lg flex items-start justify-center pt-2"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 4px, #e8e8e8 4px, #e8e8e8 8px)",
              }}
            >
              <span className="font-bold text-blue-600 text-sm">Bē</span>
            </div>
          </div>

          {/* Dribbble - Second tallest */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-32 rounded-lg flex items-start justify-center pt-2"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 4px, #e8e8e8 4px, #e8e8e8 8px)",
              }}
            >
              <span className="text-pink-500 text-base">⚽</span>
            </div>
          </div>

          {/* Google - Medium bar */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-20 rounded-lg flex items-start justify-center pt-2"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 4px, #e8e8e8 4px, #e8e8e8 8px)",
              }}
            >
              <span className="font-bold text-sm" style={{ color: "#4285F4" }}>
                G
              </span>
            </div>
          </div>

          {/* Instagram - Short bar */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-14 rounded-lg flex items-start justify-center pt-2"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 4px, #e8e8e8 4px, #e8e8e8 8px)",
              }}
            >
              <span className="text-pink-600 text-xs">📷</span>
            </div>
          </div>

          {/* Checkbox - Shortest bar */}
          <div className="flex flex-col items-center">
            <div
              className="w-10 h-10 rounded-lg flex items-start justify-center pt-2"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 4px, #e8e8e8 4px, #e8e8e8 8px)",
              }}
            >
              <span className="text-gray-600 text-xs">☑</span>
            </div>
          </div>
        </div>

        <div className="text-left mt-3">
          <p className="text-xs text-gray-400">Deals amount</p>
          <p className="text-xs">
            <span className="font-semibold text-gray-900">
              by referrer category
            </span>
            <span className="ml-1 text-xs text-gray-400">▼</span>
          </p>
        </div>
      </div>
    </div>
  );
};
