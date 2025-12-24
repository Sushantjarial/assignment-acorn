import { ChevronDown } from "lucide-react";

export const PlatformChart = () => {
  return (
    <div className="bg-card rounded-xl p-4 shadow-card border border-border/50">
      <div className="flex items-center gap-4 mb-4">
        {/* Platform selector */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <span className="text-sm">🏀</span>
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground leading-tight">Platform value</div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium text-foreground">
                Dribbble
              </span>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-0.5 ml-auto bg-muted/50 rounded-lg p-0.5">
          <button className="px-3 py-1 rounded-md bg-foreground text-card text-[11px] font-medium">
            Revenue
          </button>
          <button className="px-3 py-1 rounded-md text-muted-foreground text-[11px] font-medium hover:text-foreground transition-colors">
            Leads
          </button>
          <button className="px-3 py-1 rounded-md text-muted-foreground text-[11px] font-medium hover:text-foreground transition-colors">
            W/L
          </button>
        </div>
      </div>

      {/* Chart Area */}
      <div className="flex gap-4">
        {/* Summary Box */}
        <div className="w-28 bg-primary rounded-xl p-3 text-primary-foreground flex-shrink-0">
          <div className="text-[9px] opacity-70 mb-3">Average monthly</div>
          <div className="space-y-2.5">
            <div>
              <div className="text-[9px] opacity-70">Revenue</div>
              <div className="text-sm font-semibold tabular-nums">$18,552</div>
            </div>
            <div>
              <div className="text-[9px] opacity-70">Leads</div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold tabular-nums">373</span>
                <span className="text-[9px] opacity-70 tabular-nums">97/276</span>
              </div>
            </div>
            <div>
              <div className="text-[9px] opacity-70">Win/lose</div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold tabular-nums">16%</span>
                <span className="text-[9px] opacity-70 tabular-nums">51/318</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex-1 relative">
          {/* Y-axis label */}
          <div className="absolute right-0 top-0 text-[9px] text-muted-foreground tabular-nums">
            $14,500
          </div>

          <div className="flex items-end gap-2 h-36 pt-4">
            {/* Bar 1 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="text-[10px] font-medium text-foreground mb-1 tabular-nums">
                $9,901
              </div>
              <div className="w-full h-24 bg-muted/60 rounded-t-md relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/14?img=${i}`}
                      alt=""
                      className="w-3.5 h-3.5 rounded-full border border-card"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bar 2 - Highlighted */}
            <div className="flex-1 flex flex-col items-center">
              <div className="px-1.5 py-0.5 bg-primary text-primary-foreground text-[10px] font-medium rounded mb-1 tabular-nums">
                $11,035
              </div>
              <div className="w-full h-32 bg-muted/60 rounded-t-md relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex -space-x-1">
                  {[4, 5].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/14?img=${i}`}
                      alt=""
                      className="w-3.5 h-3.5 rounded-full border border-card"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bar 3 */}
            <div className="flex-1 flex flex-col items-center">
              <div className="px-1.5 py-0.5 bg-chart-green text-success-foreground text-[10px] font-medium rounded mb-1 tabular-nums">
                $9,288
              </div>
              <div className="w-full h-28 bg-muted/60 rounded-t-md relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex -space-x-1">
                  {[6, 7].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/14?img=${i}`}
                      alt=""
                      className="w-3.5 h-3.5 rounded-full border border-card"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Bar 4 */}
            <div className="flex-1 flex flex-col items-center justify-end">
              <div className="w-full h-20 bg-muted/60 rounded-t-md relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex -space-x-1">
                  <img
                    src="https://i.pravatar.cc/14?img=8"
                    alt=""
                    className="w-3.5 h-3.5 rounded-full border border-card"
                  />
                </div>
              </div>
            </div>

            {/* Bar 5 */}
            <div className="flex-1 flex flex-col items-center justify-end">
              <div className="w-full h-16 bg-muted/60 rounded-t-md relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex -space-x-1">
                  <img
                    src="https://i.pravatar.cc/14?img=9"
                    alt=""
                    className="w-3.5 h-3.5 rounded-full border border-card"
                  />
                </div>
              </div>
            </div>

            {/* Bar 6 */}
            <div className="flex-1 flex flex-col items-center justify-end">
              <div className="w-full h-12 bg-muted/60 rounded-t-md relative">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex -space-x-1">
                  {[10, 11].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/14?img=${i}`}
                      alt=""
                      className="w-3.5 h-3.5 rounded-full border border-card"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between mt-4 text-[10px] text-muted-foreground">
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
          </div>
        </div>
      </div>
    </div>
  );
};
