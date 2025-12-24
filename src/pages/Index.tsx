import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header, SubHeader } from "@/components/dashboard/Header";
import { RevenueCard } from "@/components/dashboard/RevenueCard";
import { PlatformBreakdown } from "@/components/dashboard/PlatformBreakdown";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { PlatformChart } from "@/components/dashboard/PlatformChart";
import { ChevronDown } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1   flex flex-col overflow-hidden">
        <Header />

        <div className="bg-sidebar ">

        <SubHeader />
    </div>
        {/* Page Title */}
        <div className="px-5 pb-3 flex justify-between ">
          <h1 className="text-2xl font-medium text-muted-foreground">
            New report
          </h1>
 {/* Timeframe Toggle */}
        <div className="flex items-center gap-2 bg-secondary/70 rounded-lg px-2.5 py-1.5 ">
          <div className="w-7 h-3.5 rounded-full bg-foreground relative flex items-center justify-end pr-0.5">
            <div className="w-2.5 h-2.5 rounded-full bg-card" />
          </div>
          <span className="text-xs font-medium text-foreground">Timeframe</span>
          <span className="text-xs text-muted-foreground">Sep 1 - Nov 30, 2023</span>
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
        </div>
        </div>



        {/* Dashboard Grid */}
        <main className="flex-1  px-5 pb-5">
          <div className="grid grid-cols-[1fr_320px] gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <RevenueCard />

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
      </div>  */}
              <PlatformBreakdown />
              <PlatformChart />
            </div>

            {/* Right Column - Fixed width */}
            <div>
              {/* <Leaderboard /> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
