import { ChevronDown } from "lucide-react";

export const PlatformChart = () => {
  return (
    <div className="bg-card rounded-xl pr-4 mt-5  pt-4 bg-gray-100 shadow-card border border-border/50 ">
      <div className="flex items-center gap-4 mb-4">
        {/* Platform selector */}
        <div className="flex items-center   gap-2">
          <div className="w-8 h-8 rounded-lg p-1  flex items-center justify-center">
            <img src="/dribble.png" alt="" />
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground leading-tight">
              Platform value
            </div>
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
      <div className="flex gap-2">
        {/* Summary Box */}
        <div className="bg-primary rounded-tr-2xl rounded-bl-2xl text-primary-foreground flex-shrink-0 flex overflow-hidden">
          {/* Vertical "Average monthly" text */}
          <div className="bg-primary/80 flex items-center justify-center px-1.5 py-3">
            <span
              className="text-[9px] opacity-80 whitespace-nowrap"
              style={{
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              Average monthly
            </span>
          </div>
          {/* Stats section */}
          <div className="p-2.5 space-y-2">
            <div>
              <div className="text-[9px] opacity-70">Revenue</div>
              <div className="text-sm font-semibold tabular-nums">$18,552</div>
            </div>
            <div>
              <div className="text-[9px] opacity-70">Leads</div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold tabular-nums">373</span>
                <span className="text-sm opacity-70 tabular-nums">97/276</span>
              </div>
            </div>
            <div>
              <div className="text-[9px] opacity-70">Win/lose</div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-semibold tabular-nums">16%</span>
                <span className="text-sm opacity-70 tabular-nums">51/318</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex-1 relative">
          {/* Y-axis labels on right */}
          <div className="absolute right-0 top-0 bottom-6 flex flex-col justify-between text-[8px] text-muted-foreground tabular-nums">
            <span>$14,500</span>
            <span>$11,000</span>
            <span>$7,500</span>
            <span>$4,000</span>
            <span></span>
          </div>

          <div className="flex items-end gap-3 h-36 pt-2 pr-10">
            {/* September - 3 bars */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-end gap-1 justify-center">
                {/* Bar 1 - with label */}
                <div className="flex flex-col items-center">
                  <div className="px-1 py-0.5 bg-primary text-primary-foreground text-[8px] font-medium rounded mb-0.5 tabular-nums">
                    $6,901
                  </div>
                  <div
                    className="w-5 h-14 rounded-t-md relative"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, #e5e5e5, #e5e5e5 2px, #d4d4d4 2px, #d4d4d4 4px)",
                    }}
                  >
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
                      <div className="relative w-4 h-4">
                        <img
                          src="https://i.pravatar.cc/16?img=1"
                          alt=""
                          className="w-full h-full  rounded-full border border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bar 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-5 h-20 rounded-t-sm bg-gray-200 relative">
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
                      <div className="relative w-4 h-4">
                        <img
                          src="https://i.pravatar.cc/16?img=2"
                          alt=""
                          className="w-full h-full rounded-full border border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bar 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-5 h-10 bg-gray-200 rounded-t-sm relative">
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
                      <div className="relative w-4 h-4">
                        <img
                          src="https://i.pravatar.cc/16?img=3"
                          alt=""
                          className="w-full h-full rounded-full border border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[9px] text-muted-foreground text-center mt-4">
                Sep
              </span>
            </div>

            {/* October - 3 bars */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-end gap-1 justify-center">
                {/* Bar 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-5 h-16 rounded-t-sm bg-gray-200 relative">
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
                      <div className="relative w-4 h-4">
                        <img
                          src="https://i.pravatar.cc/16?img=4"
                          alt=""
                          className="w-full h-full rounded-full border border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bar 2 - with label */}
                <div className="flex flex-col items-center">
                  <div className="px-1 py-0.5 bg-primary text-primary-foreground text-[8px] font-medium rounded mb-0.5 tabular-nums">
                    $11,035
                  </div>
                  <div
                    className="w-5 h-24 rounded-t-md relative"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, #e5e5e5, #e5e5e5 2px, #d4d4d4 2px, #d4d4d4 4px)",
                    }}
                  >
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
                      <div className="relative w-4 h-4">
                        <img
                          src="https://i.pravatar.cc/16?img=5"
                          alt=""
                          className="w-full h-full rounded-full border border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bar 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-5 h-14 rounded-t-sm bg-gray-200 relative">
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
                      <div className="relative w-4 h-4">
                        <img
                          src="https://i.pravatar.cc/16?img=6"
                          alt=""
                          className="w-full h-full rounded-full border border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[9px] text-muted-foreground text-center mt-4">
                Oct
              </span>
            </div>

            {/* November - 3 bars */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-end gap-1 justify-center">
                {/* Bar 1 - with label */}
                <div className="flex flex-col items-center">
                  <div className="px-1 py-0.5 bg-primary text-primary-foreground text-[8px] font-medium rounded mb-0.5 tabular-nums">
                    $9,288
                  </div>
                  <div
                    className="w-5 h-20 rounded-t-md relative"
                    style={{
                      background:
                        "repeating-linear-gradient(45deg, #e5e5e5, #e5e5e5 2px, #d4d4d4 2px, #d4d4d4 4px)",
                    }}
                  >
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
                      <div className="relative w-4 h-4">
                        <img
                          src="https://i.pravatar.cc/16?img=7"
                          alt=""
                          className="w-full h-full rounded-full border border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bar 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-5 h-14 rounded-t-sm bg-gray-200 relative">
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
                      <div className="relative w-4 h-4">
                        <img
                          src="https://i.pravatar.cc/16?img=8"
                          alt=""
                          className="w-full h-full rounded-full border border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bar 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-5 h-10 rounded-t-sm bg-gray-200 relative">
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
                      <div className="relative w-4 h-4">
                        <img
                          src="https://i.pravatar.cc/16?img=9"
                          alt=""
                          className="w-full h-full rounded-full border border-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <span className="text-[9px] text-muted-foreground text-center mt-4">
                Nov
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
