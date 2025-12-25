import { Search, Menu, Plus, Download, Settings2, Share } from "lucide-react";

const avatars = [
  { id: 1, name: "Armin A.", image: "https://i.pravatar.cc/32?img=1" },
  { id: 2, name: "Eren Y.", image: "https://i.pravatar.cc/32?img=3" },
  { id: 3, name: "Mikasa A.", image: "https://i.pravatar.cc/32?img=5" },

];

export const Header = () => {
  return (
    <header className="h-14 bg-sidebar flex items-center justify-between gap-4">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder='Try searching "insights"'
          className="w-full h-9 pl-9 pr-3 rounded-lg bg-card border border-border/60 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring/50"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center bg-background gap-2 rounded-full p-1"> <Menu className="w-4 h-4 text-muted-foreground" />
        <div className="w-7 h-7 rounded-full overflow-hidden">
          <img
            src="/anirudh.webp"
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        </div></div>
       
        <button className="w-9 h-9 rounded-full bg-pink-600 flex items-center justify-center text-primary-foreground shadow-sm hover:shadow transition-shadow">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export const SubHeader = () => {
  return (
    <div className="px-5 py-3 rounded-tl-3xl bg-background flex items-center justify-between">
      {/* Team Avatars */}
      <div className="flex items-center gap-1.5">
        <button className="w-7 h-7 rounded-full border border-dashed border-border flex items-center justify-center text-muted-foreground hover:border-muted-foreground transition-colors">
          <Plus className="w-3.5 h-3.5" />
        </button>
        {avatars.map((avatar) => (
          <button
            key={avatar.id}
            className="px-1.5 py-1 rounded-full border border-border/60 bg-card flex items-center gap-1.5 hover:bg-muted/50 transition-colors"
          >
              <img
                src={avatar.image}
                alt={avatar.name}
                className="w-5 h-5 rounded-full object-cover"
              />
            
            <span className="text-xs text-foreground">{avatar.name}</span>
          </button>
          
        ))}
          <div className="w-7 h-7 rounded-full bg-background  border text-card text-[10px] font-medium flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-foreground text-card text-[10px] font-medium flex items-center justify-center">
                C
              </div>
              </div>

      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <button className="w-7 h-7 border rounded-lg flex items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors">
          <Settings2 className="w-3.5 h-3.5" />
        </button>
        <button className="w-7 h-7 border rounded-lg flex items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors">
          <Download className="w-3.5 h-3.5" />
        </button>
        <button className="w-7 h-7 border rounded-lg flex items-center justify-center text-muted-foreground hover:bg-muted/50 transition-colors">
          <Share className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
