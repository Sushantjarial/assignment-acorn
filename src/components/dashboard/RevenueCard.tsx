import {
  ChevronDown,
  ChevronRight,
  ArrowUp,
  Star,
  ChevronsDown,
  ChevronUp,
  ChevronsUp,
} from "lucide-react";

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
    <div className=" rounded-xl mt-2 bg-background shadow-card justify-between gap-10 items-center flex w-max ">
      {/* Title Section */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-sm font-semibold  text-foreground mb-1">Revenue</h2>
          <div className="flex items-baseline gap-1">
            <span className="text-[32px] font-semibold text-foreground leading-none tabular-nums">
              $528,976
            </span>
            <span className="text-xl text-muted-foreground font-normal">
              .82
            </span>
            <div className="flex items-center gap-1.5 ml-2">
              <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-full bg-pink-600 text-white text-xs font-medium">
                <ArrowUp className="w-3 h-3" />
                7.9%
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-pink-600 text-white text-xs font-medium">
                $27,335.09
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-1.5 text-xs font-semibold text-muted-black">
            <span>vs prev. $501,641.73</span>
            <span className="text-muted-foreground/50">•</span>
            <span>Jun 1 - Aug 31, 2023</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </div>
        </div>

    
      </div>

      {/* Stats Grid - 8px gaps */}
      <div className="flex  gap-4 mb-5  ">
        {/* Top Sales */}
        <div className="flex flex-col border items-start bg-white rounded-xl px-2 py-3 shadow-lg">
          <div className="text-[11px] text-muted-foreground mb-1">
            Top sales
          </div>
          <div className="text-2xl font-semibold text-foreground tabular-nums leading-none">
            72
          </div>
          <div className="flex items-center gap-16 mt-1.5">
            <div className="flex items-center gap-1.5">
              <img
                src="https://i.pravatar.cc/20?img=5"
                alt="Mikasa"
                className="w-5 h-5 rounded-full"
              />
              <span className="text-xs text-foreground">Mikasa</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground ml-auto" />
          </div>
        </div>

        {/* Best Deal */}
        <div className="bg-black rounded-lg p-2.5 border border-border/40 shadow-md relative flex flex-col justify-center">
          <div className="flex items-center justify-between gap-16 mb-1">
            <span className="text-[11px] text-gray-400">Best deal</span>
            <Star className="w-3.5 h-3.5 text-gray-400" fill="currentColor" />
          </div>
          <div className="text-xl font-semibold text-white tabular-nums leading-none mb-1.5">
            $42,300
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-white">Rolf Inc.</span>
            <ChevronRight className="w-3.5 h-3.5 bg-white rounded text-black ml-auto" />
          </div>
        </div>

        {/* Deals */}
        <div className="bg-white rounded-lg p-2.5 border border-border/40 shadow-md flex justify-center items-center flex-col">
          <div className="text-[11px] text-muted-foreground mb-1">Deals</div>
          <span className="inline-block px-3 py-0.5 rounded-full bg-muted text-white text-sm font-semibold tabular-nums">
            268
          </span>
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <ChevronsDown className="w-3 h-3" />
            <span className="tabular-nums">5</span>
          </div>
        </div>

        {/* Value */}
        <div className="bg-white rounded-lg p-2.5 border-2 shadow-md flex flex-col justify-center items-center border-pink-600">
          <div className="text-[11px]  text-muted-foreground mb-1">Value</div>
          <span className="inline-block px-3 py-0.5 rounded-full bg-pink-600 text-white text-sm font-semibold tabular-nums">
            528k
          </span>
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <ChevronsUp className="w-3 h-3" />
            <span className="tabular-nums">7.9%</span>
          </div>
        </div>

        {/* Win Rate */}
        <div className="bg-white rounded-lg p-2.5 border border-border/40 shadow-md flex flex-col justify-center items-center">
          <div className="text-[11px] text-muted-foreground mb-1">Win rate</div>
          <span className="inline-block px-3 py-0.5 rounded-full bg-muted text-white text-sm font-semibold tabular-nums">
            44%
          </span>
          <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
            <ChevronsUp className="w-3 h-3" />
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
