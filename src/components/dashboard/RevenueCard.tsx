import { ChevronDown, ArrowUp, ChevronRight, Star } from "lucide-react";

const platformStats = [
  {
    id: 1,
    image: "https://i.pravatar.cc/24?img=1",
    amount: "$209,633",
    percentage: "39.63%",
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/24?img=2",
    amount: "$156,841",
    percentage: "29.65%",
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/24?img=3",
    amount: "$117,115",
    percentage: "22.14%",
  },
  {
    id: 4,
    icon: "C",
    amount: "$45,386",
    percentage: "8.58%",
  },
];

export const RevenueCard = () => {
  return (
    <div className="bg-card rounded-xl p-5 shadow-card border border-border/50 flex w-max ">
      {/* Title Section */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-sm font-medium text-foreground mb-1">Revenue</h2>
          <div className="flex items-baseline gap-1">
            <span className="text-[32px] font-semibold text-foreground leading-none tabular-nums">$528,976</span>
            <span className="text-xl text-muted-foreground font-normal">.82</span>
            <div className="flex items-center gap-1.5 ml-2">
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-success/10 text-success text-xs font-medium">
                <ArrowUp className="w-3 h-3" />
                7.9%
              </span>
              <span className="px-1.5 py-0.5 rounded bg-primary/10 text-primary text-xs font-medium">
                $27,335.09
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-1.5 text-xs text-muted-foreground">
            <span>vs prev. $501,641.73</span>
            <span className="text-muted-foreground/50">•</span>
            <span>Jun 1 - Aug 31, 2023</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Timeframe Toggle */}
        {/* <div className="flex items-center gap-2 bg-secondary/70 rounded-lg px-2.5 py-1.5">
          <div className="w-7 h-3.5 rounded-full bg-foreground relative flex items-center justify-end pr-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-card" />
          </div>
          <span className="text-xs font-medium text-foreground">Timeframe</span>
          <span className="text-xs text-muted-foreground">Sep 1 - Nov 30, 2023</span>
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
        </div> */}
      </div>

      {/* Stats Grid - 8px gaps */}
      <div className="grid grid-cols-5 gap-3 mb-5">
        {/* Top Sales */}
        <div className="bg-background rounded-lg p-3 border border-border/40">
          <div className="text-[11px] text-muted-foreground mb-1.5">Top sales</div>
          <div className="text-2xl font-semibold text-foreground tabular-nums leading-none">72</div>
          <div className="flex items-center gap-1.5 mt-2">
            <img
              src="https://i.pravatar.cc/20?img=5"
              alt="Mikasa"
              className="w-5 h-5 rounded-full"
            />
            <span className="text-xs text-foreground">Mikasa</span>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground ml-auto" />
          </div>
        </div>

        {/* Best Deal */}
        <div className="bg-primary/5 rounded-lg p-3 border border-primary/15">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] text-muted-foreground">Best deal</span>
            <Star className="w-3.5 h-3.5 text-primary/40" />
          </div>
          <div className="text-xl font-semibold text-foreground tabular-nums leading-none">$42,300</div>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="w-5 h-5 rounded bg-muted flex items-center justify-center">
              <span className="text-[9px] font-medium text-muted-foreground">R</span>
            </div>
            <span className="text-xs text-foreground">Rolf Inc.</span>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground ml-auto" />
          </div>
        </div>

        {/* Deals */}
        <div className="bg-background rounded-lg p-3 border border-border/40">
          <div className="text-[11px] text-muted-foreground mb-1.5">Deals</div>
          <div className="text-2xl font-semibold text-foreground tabular-nums leading-none">256</div>
          <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
            <ArrowUp className="w-3 h-3" />
            <span className="tabular-nums">5</span>
          </div>
        </div>

        {/* Value */}
        <div className="bg-background rounded-lg p-3 border border-border/40">
          <div className="text-[11px] text-muted-foreground mb-1.5">Value</div>
          <span className="inline-block px-2 py-0.5 rounded bg-primary text-primary-foreground text-sm font-semibold tabular-nums">
            528k
          </span>
          <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
            <ArrowUp className="w-3 h-3" />
            <span className="tabular-nums">7.9%</span>
          </div>
        </div>

        {/* Win Rate */}
        <div className="bg-background rounded-lg p-3 border border-border/40">
          <div className="text-[11px] text-muted-foreground mb-1.5">Win rate</div>
          <div className="text-2xl font-semibold text-muted-foreground/70 tabular-nums leading-none">44%</div>
          <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
            <ArrowUp className="w-3 h-3" />
            <span className="tabular-nums">1.2%</span>
          </div>
        </div>
      </div>

      {/* Platform Stats Row */}
      {/* <div className="flex items-center gap-4 pt-4 border-t border-border/40">
        {platformStats.map((stat) => (
          <div key={stat.id} className="flex items-center gap-2">
            {stat.image ? (
              <img
                src={stat.image}
                alt=""
                className="w-6 h-6 rounded-full object-cover"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-foreground text-card text-[10px] font-semibold flex items-center justify-center">
                {stat.icon}
              </div>
            )}
            <span className="text-sm font-semibold text-foreground tabular-nums">{stat.amount}</span>
            <span className="text-xs text-muted-foreground tabular-nums">{stat.percentage}</span>
          </div>
        ))}
        <button className="ml-auto px-4 py-1.5 bg-foreground text-card rounded-lg text-xs font-medium hover:bg-foreground/90 transition-colors">
          Details
        </button>
      </div> */}
    </div>
  );
};
