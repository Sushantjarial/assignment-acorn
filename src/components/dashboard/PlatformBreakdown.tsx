import { Filter, BarChart3 } from "lucide-react";

const platforms = [
  { name: "Dribbble", icon: "🏀", amount: "$227,459", percentage: "43%" },
  { name: "Instagram", icon: "📷", amount: "$142,823", percentage: "27%" },
  { name: "Behance", icon: "Bē", amount: "$89,935", percentage: "11%" },
  { name: "Google", icon: "G", amount: "$37,028", percentage: "7%" },
];

export const PlatformBreakdown = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Platform List */}
      <div className="bg-card rounded-xl p-4 shadow-card border border-border/50">
        <div className="flex items-center gap-2 mb-3">
          <button className="w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors">
            <span className="text-xs">≡</span>
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border/60 text-xs text-foreground hover:bg-muted/50 transition-colors">
            Filters
            <Filter className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="space-y-1">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-muted/40 transition-colors"
            >
              <div className="w-7 h-7 rounded-lg bg-muted/60 flex items-center justify-center text-sm">
                {platform.icon === "Bē" ? (
                  <span className="font-bold text-chart-blue text-xs">{platform.icon}</span>
                ) : platform.icon === "G" ? (
                  <span className="font-bold text-chart-orange text-xs">{platform.icon}</span>
                ) : (
                  <span className="text-xs">{platform.icon}</span>
                )}
              </div>
              <span className="text-xs text-foreground">{platform.name}</span>
              <span className="ml-auto text-sm font-semibold text-foreground tabular-nums">
                {platform.amount}
              </span>
              <span className="text-xs text-muted-foreground w-8 text-right tabular-nums">
                {platform.percentage}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Referrer Category Chart */}
      <div className="bg-card rounded-xl p-4 shadow-card border border-border/50">
        <div className="flex items-center gap-2 mb-3">
          <button className="w-8 h-8 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors">
            <BarChart3 className="w-3.5 h-3.5" />
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-border/60 text-xs text-foreground hover:bg-muted/50 transition-colors">
            Filters
            <Filter className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bubble Chart Visualization */}
        <div className="relative h-36 flex items-center justify-center">
          <div className="absolute w-20 h-20 rounded-full bg-chart-blue/15 flex items-center justify-center">
            <span className="text-chart-blue font-bold text-sm">Bē</span>
          </div>
          <div className="absolute w-10 h-10 rounded-full bg-chart-green/15 flex items-center justify-center text-chart-green font-bold text-[10px] top-2 right-10">
            G
          </div>
          <div className="absolute w-11 h-11 rounded-full bg-gradient-to-tr from-purple-400/15 to-pink-400/15 flex items-center justify-center bottom-2 right-6">
            <span className="text-sm">📷</span>
          </div>
          <div className="absolute w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center bottom-6 left-10">
            <span className="text-xs">📋</span>
          </div>
        </div>

        <div className="text-center mt-1">
          <span className="text-[11px] text-muted-foreground leading-tight">
            Deals amount<br />by referrer category
          </span>
        </div>
      </div>
    </div>
  );
};
