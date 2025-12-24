import { ArrowUp, ChevronDown } from "lucide-react";

const leaderboardData = [
  {
    id: 1,
    name: "Armin A.",
    avatar: "https://i.pravatar.cc/32?img=1",
    revenue: "$209,633",
    sales: 41,
    leads: 118,
    kpi: "0.84",
    winLoss: "31%",
    wl1: 12,
    wl2: 29,
  },
  {
    id: 2,
    name: "Mikasa A.",
    avatar: "https://i.pravatar.cc/32?img=5",
    revenue: "$156,841",
    sales: 54,
    salesHighlight: true,
    leads: 103,
    kpi: "0.89",
    winLoss: "39%",
    wl1: 21,
    wl2: 33,
    highlight: true,
  },
];

export const Leaderboard = () => {
  return (
    <div className="bg-card rounded-xl p-4 shadow-card border border-border/50">
      {/* Header */}
      <div className="grid grid-cols-[1fr_72px_48px_48px_56px_72px] gap-2 text-[10px] font-medium text-muted-foreground mb-2 px-2">
        <div>Sales</div>
        <div>Revenue</div>
        <div className="text-center">Sales</div>
        <div className="text-center">Leads</div>
        <div className="text-center">KPI</div>
        <div className="text-right">W/L</div>
      </div>

      {/* Rows */}
      <div className="space-y-1">
        {leaderboardData.map((person) => (
          <div
            key={person.id}
            className={`grid grid-cols-[1fr_72px_48px_48px_56px_72px] gap-2 items-center px-2 py-2 rounded-lg ${
              person.highlight ? "bg-primary/5 border border-primary/15" : "hover:bg-muted/40"
            } transition-colors`}
          >
            <div className="flex items-center gap-2">
              <img
                src={person.avatar}
                alt={person.name}
                className="w-7 h-7 rounded-full object-cover"
              />
              <span className="text-xs font-medium text-foreground truncate">
                {person.name}
              </span>
            </div>
            <div className="text-xs font-semibold text-foreground tabular-nums">
              {person.revenue}
            </div>
            <div className="flex justify-center">
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-semibold tabular-nums ${
                  person.salesHighlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/70 text-foreground"
                }`}
              >
                {person.sales}
              </span>
            </div>
            <div className="text-xs text-foreground text-center tabular-nums">{person.leads}</div>
            <div className="text-xs text-foreground text-center tabular-nums">{person.kpi}</div>
            <div className="flex items-center justify-end gap-1">
              <span className="text-xs text-foreground tabular-nums">{person.winLoss}</span>
              <span className="px-1 py-0.5 rounded bg-muted/70 text-[10px] font-medium text-foreground tabular-nums">
                {person.wl1}
              </span>
              <span className="text-xs text-foreground tabular-nums">{person.wl2}</span>
              {person.highlight && (
                <button className="w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center ml-1">
                  <ArrowUp className="w-2.5 h-2.5" />
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Badges Row for Mikasa */}
        <div className="flex items-center gap-1.5 px-2 pb-2">
          <span className="px-2 py-0.5 rounded-full bg-muted/60 text-[10px] font-medium text-foreground">
            Top sales 💪
          </span>
          <span className="px-2 py-0.5 rounded-full bg-muted/60 text-[10px] font-medium text-foreground">
            Sales streak 🔥
          </span>
          <span className="px-2 py-0.5 rounded-full bg-muted/60 text-[10px] font-medium text-foreground">
            Top review 👍
          </span>
        </div>

        {/* Platform work section */}
        <div className="pt-3 border-t border-border/40">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-medium text-foreground">
              Work with platforms
            </span>
            <div className="flex items-center gap-2">
              <span className="text-chart-green text-xs font-semibold">● 3</span>
              <span className="text-primary text-xs font-semibold tabular-nums">$156,841</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-3 gap-y-1 text-[10px] px-1">
            <div className="flex items-center gap-1">
              <span>🏀</span>
              <span className="text-muted-foreground">Dribbble</span>
            </div>
            <div className="flex items-center gap-1">
              <span>📷</span>
              <span className="text-muted-foreground">Instagram</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-chart-orange font-bold">G</span>
              <span className="text-muted-foreground">Google</span>
            </div>
            <div className="text-muted-foreground tabular-nums">28.1% $44,072</div>
            <div className="text-muted-foreground flex items-center gap-0.5 tabular-nums">
              <span className="text-primary">●●</span> 5.4% $8,469
            </div>
            <div></div>
          </div>

          {/* Percentage Display */}
          <div className="flex items-baseline gap-2 mt-3 px-1">
            <span className="text-2xl font-semibold text-foreground tabular-nums">45.3%</span>
            <span className="text-lg text-muted-foreground tabular-nums">$71,048</span>
          </div>

          {/* Other row */}
          <div className="flex items-center gap-1.5 mt-1.5 text-[10px] text-muted-foreground px-1">
            <span>📋 Other</span>
            <span className="tabular-nums">7.1% $11,135</span>
          </div>
        </div>

        {/* Sales Dynamic Section */}
        <div className="pt-3 border-t border-border/40 mt-3">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-medium text-foreground">
              Sales dynamic
            </span>
            <button className="text-muted-foreground hover:text-foreground p-1">
              <ChevronDown className="w-3.5 h-3.5 rotate-[-45deg]" />
            </button>
          </div>

          {/* Week labels */}
          <div className="flex justify-between text-[9px] text-muted-foreground mb-1.5 px-1">
            {["W 1", "W 3", "W 5", "W 7", "W 9", "W 11"].map((week) => (
              <span key={week}>{week}</span>
            ))}
          </div>

          {/* Line Chart Visualization */}
          <div className="h-14 relative px-1">
            <svg className="w-full h-full" viewBox="0 0 280 50" preserveAspectRatio="none">
              <path
                d="M0,42 C20,40 40,36 70,32 C100,28 130,22 160,18 C190,14 220,16 250,22 C260,24 270,26 280,28"
                fill="none"
                stroke="hsl(var(--chart-pink))"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M0,46 C20,44 40,42 70,40 C100,38 130,36 160,34 C190,32 220,30 250,32 C260,33 270,34 280,36"
                fill="none"
                stroke="hsl(var(--chart-gray))"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Highlight dot */}
              <circle cx="250" cy="22" r="4" fill="hsl(var(--chart-green))" />
            </svg>
          </div>
        </div>

        {/* Bottom row - Eren */}
        <div className="grid grid-cols-[1fr_72px_48px_48px_56px_72px] gap-2 items-center px-2 py-2 rounded-lg hover:bg-muted/40 transition-colors mt-3 border-t border-border/40 pt-3">
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/32?img=3"
              alt="Eren Y."
              className="w-7 h-7 rounded-full object-cover"
            />
            <span className="text-xs font-medium text-foreground">Eren Y.</span>
          </div>
          <div className="text-xs font-semibold text-foreground tabular-nums">$117,115</div>
          <div className="flex justify-center">
            <span className="px-1.5 py-0.5 rounded bg-muted/70 text-[10px] font-semibold text-foreground tabular-nums">
              22
            </span>
          </div>
          <div className="text-xs text-foreground text-center tabular-nums">84</div>
          <div className="text-xs text-foreground text-center tabular-nums">0.79</div>
          <div className="flex items-center justify-end gap-1">
            <span className="text-xs text-foreground tabular-nums">32%</span>
            <span className="px-1 py-0.5 rounded bg-primary text-primary-foreground text-[10px] font-medium tabular-nums">
              7
            </span>
            <span className="text-xs text-foreground tabular-nums">15</span>
          </div>
        </div>
      </div>
    </div>
  );
};
