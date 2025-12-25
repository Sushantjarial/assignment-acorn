import { ChevronUp } from "lucide-react";

const salesData = [
  {
    id: 1,
    name: "Armin",
    avatar: "https://i.pravatar.cc/32?img=1",
    avatarBg: "bg-blue-100",
    revenue: "$209,633",
    leads: 118,
    leadsBg: "bg-yellow-400",
    kpi: "0.84",
    winLoss: "31%",
    wins: 12,
    winsBg: "bg-blue-500",
    losses: 29,
    expanded: false,
    shadow: true,
    white:true
  },
  {
    id: 2,
    name: "Mikasa ",
    avatar: "https://i.pravatar.cc/32?img=5",
    avatarBg: "bg-green-400",
    revenue: "$156,841",
    leads: 103,
    leadsBg: "bg-red-500",
    kpi: "0.89",
    winLoss: "39%",
    wins: 21,
    winsBg: "bg-yellow-500",
    losses: 33,
    expanded: true,
  },
];

const platformsData = [
  {
    name: "Dribbble",
    icon: "/dribble.png",
    percentage: "45.3%",
    amount: "$71,048",
    highlight: false,
  },
  {
    name: "Instagram",
    icon: "/instagram.png",
    percentage: "28.1%",
    amount: "$44,072",
    highlight: true,
  },
  {
    name: "Google",
    icon: "/google.png",
    percentage: "14.1%",
    amount: "$22,116",
    highlight: false,
  },
  {
    name: "Behance",
    icon: "/behance.png",
    percentage: "5.4%",
    amount: "$8,469",
    isBehance: true,
  },
  {
    name: "Other",
    icon: "checkbox",
    percentage: "7.1%",
    amount: "$11,135",
    highlight: false,
  },
];

const weeklyData = ["W 1", "W 3", "W 5", "W 7", "W 9", "W 11"];

export const Sales = () => (
  <div className="rounded-3xl shadow-sm  " >
    {/* Header Row */}
    <div className="grid grid-cols-6 gap-4 text-xs text-gray-400 mb-3 ">
      <span>Sales</span>
      <span>Revenue</span>
      <span>Leads</span>
      <span>KPI</span>
      <span>W/L</span>
      <span></span>
    </div>

    {/* Sales Rows */}
    {salesData.map((person) => (
      <div key={person.id} className=" "
      style={person.white ? {} : { background: 'linear-gradient(180deg, #F4F6FA 0%, #F4E9F4 15%, #fdf2f8 30%, #FBEAEA 60%)' }}
      
      >
        <div className={`grid text-xs grid-cols-6 gap-4  items-center py-1 rounded-full   ${person.shadow ? "shadow-lg" : ""}`}>
          {/* Avatar & Name */}
          <div className="flex  items-center  gap-2">
            <div
              className={`w-5 h-5 min-w-6 min-h-6 flex-shrink-0 rounded-full ${person.avatarBg} overflow-hidden flex items-center justify-center `}
            >
              <img
                src={person.avatar}
                alt={person.name}
                className="w-full h-full  object-cover"
              />
            </div>
            <span className="text-xs  font-medium text-gray-800">
              {person.name}
            </span>
          </div>

          {/* Revenue */}
          <span className="text-xs font-medium text-gray-800">
            {person.revenue}
          </span>

          {/* Leads */}
          <div className="flex items-center gap-2">
            <span
              className={` rounded-xl bg-black px-2 text-white text-xs font-semibold flex items-center justify-center`}
            >
              {person.id === 1 ? 41 : 54}
            </span>
            <span className="text-xs bg-gray-200 rounded-xl px-1 text-gray-600">
              {person.leads}
            </span>
          </div>

          {/* KPI */}
          <span className="text-xs text-gray-600">{person.kpi}</span>
          {/* W/L */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600">{person.winLoss}</span>
            <span
              className={` rounded-xl bg-black px-2 text-white text-xs font-semibold flex items-center justify-center`}
            >
              {person.wins}
            </span>
            <span className="text-xs rounded-xl bg-gray-200 px-2 text-gray-600">
              {person.losses}
            </span>
          </div>

          {/* Expand Button */}
          <div className="flex justify-end">
            {person.expanded && (
              <button className="w-5 h-5 rounded-full bg-pink-500 text-white flex items-center justify-center">
                <ChevronUp className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Expanded Content for Mikasa */}
        {person.expanded && (
          <div className="mt-2 mb-4 ">
            {/* Tags */}
            <div className="flex gap-2 mb-4 px-2">
              <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-100">
                Top sales 💪
              </span>
              <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-100">
                Sales streak 🔥
              </span>
              <span className="px-3 py-1.5 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-100">
                Top review 👍
              </span>
            </div>

            {/* Work with platforms */}
            <div className="px-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-800">
                  Work with platforms
                </span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-600 rounded-lg text-xs font-medium">
                    <ChevronUp className="w-3 h-3" />3
                  </span>
                  <span className="text-sm font-semibold text-pink-500">
                    $156,841
                  </span>
                </div>
              </div>

              {/* Platform Cards */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {/* Dribbble Card */}
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 col-span-1 row-span-2">
                  <div className="flex items-center gap-2 mb-8">
                    <img
                      src="/dribble.png"
                      alt="Dribbble"
                      className="w-5 h-5"
                    />
                    <span className="text-sm font-medium text-gray-800">
                      Dribbble
                    </span>
                  </div>
                  <div className="mt-auto">
                    <span className="text-3xl font-bold text-gray-900">
                      45.3%
                    </span>
                    <span className="text-lg text-gray-400 ml-2">$71,048</span>
                  </div>
                </div>

                {/* Instagram Card */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-3 shadow-sm border border-orange-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                      <img
                        src="/instagram.png"
                        alt="Instagram"
                        className="w-4 h-4"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-800">
                      Instagram
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      28.1%
                    </span>
                    <span className="text-sm text-gray-400">$44,072</span>
                  </div>
                </div>

                {/* Google Card */}
                <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/google.png" alt="Google" className="w-5 h-5" />
                    <span className="text-sm font-medium text-gray-800">
                      Google
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      14.1%
                    </span>
                    <span className="text-sm text-gray-400">$22,116</span>
                  </div>
                </div>

                {/* Behance Card */}
                <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold">●▌</span>
                    <span className="text-sm font-medium text-gray-800">
                      5.4%
                    </span>
                    <span className="text-sm text-gray-400">$8,469</span>
                  </div>
                </div>

                {/* Other Card */}
                <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-sm font-medium text-gray-800">
                      Other
                    </span>
                    <span className="ml-auto text-sm text-gray-400">7.1%</span>
                    <span className="text-sm text-gray-400">$11,135</span>
                  </div>
                </div>
              </div>

              {/* Sales Dynamic */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-800">
                    Sales dynamic
                  </span>
                  <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </button>
                </div>

                {/* Chart Area */}
                <div className="relative h-24 mb-2">
                  {/* Chart lines */}
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 400 100"
                    preserveAspectRatio="none"
                  >
                    {/* Pink line (main) */}
                    <path
                      d="M0,70 Q30,65 60,60 T120,55 T180,45 T240,50 T300,40 T360,35 T400,30"
                      fill="none"
                      stroke="#f472b6"
                      strokeWidth="2"
                    />
                    {/* Light pink line */}
                    <path
                      d="M0,75 Q30,70 60,68 T120,62 T180,55 T240,58 T300,48 T360,45 T400,40"
                      fill="none"
                      stroke="#fecdd3"
                      strokeWidth="1.5"
                    />
                    {/* Another pink line */}
                    <path
                      d="M0,80 Q30,78 60,75 T120,70 T180,65 T240,68 T300,60 T360,55 T400,50"
                      fill="none"
                      stroke="#fda4af"
                      strokeWidth="1.5"
                    />
                  </svg>

                  {/* Progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 flex rounded-full overflow-hidden">
                    <div
                      className="bg-red-400 h-full"
                      style={{ width: "25%" }}
                    ></div>
                    <div
                      className="bg-green-400 h-full"
                      style={{ width: "20%" }}
                    ></div>
                    <div
                      className="bg-yellow-400 h-full"
                      style={{ width: "30%" }}
                    ></div>
                    <div
                      className="bg-green-400 h-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>

                  {/* Platform markers */}
                  <div className="absolute bottom-3 left-[25%] transform -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shadow-md">
                      <span className="text-white text-xs font-bold">Bē</span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-[50%] transform -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center shadow-md">
                      <img
                        src="/dribble.png"
                        alt="Dribbble"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-[75%] transform -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-pink-400 flex items-center justify-center shadow-md">
                      <img
                        src="/dribble.png"
                        alt="Dribbble"
                        className="w-4 h-4"
                      />
                    </div>
                  </div>
                </div>

                {/* Week labels */}
                <div className="flex justify-between text-xs text-gray-400 px-2">
                  {weeklyData.map((week) => (
                    <span key={week}>{week}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    ))}

    {/* Bottom Row - Eren */}
    <div className="grid grid-cols-6 gap-4 items-center py-3 px-2 border-t border-gray-100 mt-2">
      {/* Avatar & Name */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-orange-100 overflow-hidden flex items-center justify-center">
          <img
            src="/anirudh.webp"
            alt="Eren Y."
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-sm font-medium text-gray-800">Eren Y.</span>
      </div>

      {/* Revenue */}
      <span className="text-sm font-medium text-gray-800">$117,115</span>

      {/* Leads */}
      <div className="flex items-center gap-2">
        <span className="w-7 h-7 rounded-full bg-red-500 text-white text-xs font-semibold flex items-center justify-center">
          22
        </span>
        <span className="text-sm text-gray-600">84</span>
      </div>

      {/* KPI */}
      <span className="text-sm text-gray-600">0.79</span>

      {/* W/L */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">32%</span>
        <span className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs font-semibold flex items-center justify-center">
          7
        </span>
        <span className="text-sm text-gray-600">15</span>
      </div>

      {/* Empty */}
      <div></div>
    </div>
  </div>
);
