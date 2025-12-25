import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header, SubHeader } from "@/components/dashboard/Header";
import { RevenueCard } from "@/components/dashboard/RevenueCard";
import { PlatformBreakdown } from "@/components/dashboard/PlatformBreakdown";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { PlatformChart } from "@/components/dashboard/PlatformChart";
import { Sales } from "@/components/dashboard/Sales";
import { ChevronDown } from "lucide-react";
import Expense from "@/components/dashboard/Expense";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-sidebar ">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={toggleSidebar} />

        <div className="bg-sidebar ">
          <SubHeader />
        </div>
        {/* Page Title */}
        <div className="px-3 sm:px-5 bg-background pb-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
          <h1 className="text-2xl sm:text-4xl font-medium text-muted-foreground">
            New report
          </h1>
          {/* Timeframe Toggle */}
          <div className="flex items-center gap-2 pl-0 sm:pl-2.5 py-1.5 flex-wrap">
            <div className="w-7 h-3.5 rounded-full bg-foreground relative flex items-center justify-end pr-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-card" />
            </div>
            <span className="text-xs font-medium text-foreground">
              Timeframe
            </span>
            <div className="flex items-center justify-center bg-secondary/70 rounded-lg px-2.5 py-1.5">
              {" "}
              <span className="text-xs text-muted-foreground">
                Sep 1 - Nov 30, 2023
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <main className="flex-1 bg-background rounded-b-3xl px-3 sm:px-5 pb-5 overflow-x-hidden">
          <div className="grid rounded-3xl gap-4">
            {/* Left Column */}
            <div className="space-y-4">
              <RevenueCard />
              <Expense />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div className="flex flex-col gap-2">
                  <PlatformBreakdown />
                  <PlatformChart />
                </div>

                <Sales />
              </div>
            </div>

            {/* Right Column - Fixed width */}
            <div></div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
