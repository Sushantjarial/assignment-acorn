import { Filter, BarChart3, ShoppingBag, Menu, ChartBar } from "lucide-react";

const platforms = [
  {
    name: "Dribbble",
    icon: "/dribble.png",
    amount: "$227,459",
    percentage: "43%",
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "Instagram",
    icon: "/instagram.png",
    amount: "$142,823",
    percentage: "27%",
    color: "from-pink-400 to-pink-600",
  },
  {
    name: "Behance",
    icon: "/behance.png",
    amount: "$89,935",
    percentage: "11%",
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "Google",
    icon: "/google.png",
    amount: "$37,028",
    percentage: "7%",
    color: "from-green-400 to-green-600",
  },
];

export const PlatformBreakdown = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {/* Platform List */}
      <div className="bg-gray-100 rounded-2xl p-2 shadow-md border border-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <button className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs text-gray-600 hover:bg-gray-100 transition-colors">
            <ChartBar className="w-4 h-4" />
            <span className="text-xs">▼</span>
          </button>
          <button className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600 hover:bg-gray-100 transition-colors">
            Filters
            <Menu className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="space-y-1">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-3 sm:py-4 rounded-lg bg-white hover:bg-white/30 transition-colors"
            >
              <img
                className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs flex-shrink-0"
                alt={platform.name}
                src={platform.icon}
              />
              <span className="text-xs text-gray-600 font-medium">
                {platform.name}
              </span>
              <span className="ml-auto text-xs font-semibold text-gray-900 tabular-nums">
                {platform.amount}
              </span>
              <span className="text-xs text-gray-500 tabular-nums w-8 sm:w-10 text-right">
                {platform.percentage}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Referrer Category Chart */}
      <div className="bg-gray-100 rounded-2xl p-3 sm:p-4 shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs text-gray-600 hover:bg-gray-100 transition-colors">
            <BarChart3 className="w-4 h-4" />
            <span className="text-xs">▼</span>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600 hover:bg-gray-100 transition-colors">
            Filters
            <Filter className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bar Chart Visualization */}
        <div className="relative h-32 sm:h-40 flex items-end justify-center gap-0.5 sm:gap-1 pb-2">
          {/* Behance - Large bar */}
          <div className="flex bg-white rounded-xl flex-col items-center">
            <div
              className="w-7 sm:w-10 h-20 sm:h-28 rounded-lg flex items-start justify-center pt-2"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #f5f5f5, #f5f5f5 4px, #e8e8e8 4px, #e8e8e8 8px)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 35%",
                backgroundPosition: "top",
              }}
            >
              <span className="font-bold text-blue-600 text-xs sm:text-sm">
                Bē
              </span>
            </div>
          </div>

          {/* Dribbble - Tallest */}
          <div className="flex flex-col items-center">
            <div className="w-7 sm:w-10 bg-white h-28 sm:h-36 rounded-xl flex items-start justify-center pt-3">
              <img
                src="/dribble.png"
                alt="Dribbble"
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              />
            </div>
          </div>

          {/* Google - Medium bar */}
          <div className="flex flex-col items-center">
            <div className="w-7 sm:w-10 bg-white h-14 sm:h-20 rounded-xl flex items-start justify-center pt-3">
              <img
                src="/google.png"
                alt="Google"
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              />
            </div>
          </div>

          {/* Instagram - Short bar */}
          <div className="flex flex-col items-center">
            <div className="w-7 sm:w-10 h-10 sm:h-14 bg-white rounded-xl flex items-start justify-center pt-3">
              <img
                src="/instagram.png"
                alt="Instagram"
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              />
            </div>
          </div>

          {/*  - Shortest bar */}
          <div className="flex border rounded-xl flex-col items-center">
            <div
              className="w-7 sm:w-10 h-24 sm:h-32 rounded-xl flex items-start justify-center pt-2"
              style={{
                background:
                  "repeating-linear-gradient(45deg, #f8f8f8, #f8f8f8 3px, #ebebeb 3px, #ebebeb 6px)",
              }}
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="text-left mt-4">
          <p className="text-xs text-gray-400">Deals amount</p>
          <p className="text-xs flex items-center">
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
