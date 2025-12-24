import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Star,
  Clock,
  List,
  Target,
  Plus,
  Settings,
  Users,
  MessageSquare,
  Pencil,
  FolderOpen,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: number;
  isNew?: boolean;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { id: "starred", label: "Starred", icon: <Star className="w-3.5 h-3.5" /> },
  { id: "recent", label: "Recent", icon: <Clock className="w-3.5 h-3.5" /> },
  { id: "sales-list", label: "Sales list", icon: <List className="w-3.5 h-3.5" /> },
  { id: "goals", label: "Goals", icon: <Target className="w-3.5 h-3.5" /> },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: <Plus className="w-3.5 h-3.5" />,
    children: [
      { id: "codename", label: "Codename" },
      {
        id: "shared-with-me",
        label: "Shared with me",
        children: [
          { id: "cargo2go", label: "Cargo2go" },
          { id: "cloudz3r", label: "Cloudz3r", badge: 2 },
          { id: "idioma", label: "Idioma" },
          { id: "syllables", label: "Syllables" },
          { id: "x-0b", label: "x-0b" },
        ],
      },
    ],
  },
];

const reportsItems: MenuItem[] = [
  {
    id: "share-with-me",
    label: "Share with me",
    children: [
      { id: "deals-by-user", label: "Deals by user" },
      { id: "deal-duration", label: "Deal duration" },
    ],
  },
  {
    id: "my-reports",
    label: "My reports",
    children: [
      { id: "emails-received", label: "Emails received" },
      { id: "deal-duration-2", label: "Deal duration" },
      { id: "new-report", label: "New report", isNew: true },
    ],
  },
  { id: "analytics", label: "Analytics", badge: 7 },
];

const SidebarItem = ({
  item,
  depth = 0,
  expandedItems,
  toggleItem,
}: {
  item: MenuItem;
  depth?: number;
  expandedItems: Set<string>;
  toggleItem: (id: string) => void;
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const isExpanded = expandedItems.has(item.id);

  return (
    <div>
      <button
        onClick={() => hasChildren && toggleItem(item.id)}
        className={cn(
          "w-full flex items-center gap-1.5 px-2 py-1 text-[11px] rounded-md transition-colors",
          "hover:bg-sidebar-accent/50 text-sidebar-foreground",
          depth > 0 && "pl-5",
          depth > 1 && "pl-8",
          item.isNew && "text-primary font-medium"
        )}
      >
        {hasChildren ? (
          isExpanded ? (
            <ChevronDown className="w-3 h-3 text-muted-foreground flex-shrink-0" />
          ) : (
            <ChevronRight className="w-3 h-3 text-muted-foreground flex-shrink-0" />
          )
        ) : (
          <span className="w-3 flex-shrink-0" />
        )}
        <span className="flex-1 text-left truncate">{item.label}</span>
        {item.badge && (
          <span className="px-1.5 py-0.5 text-[9px] font-medium rounded-full bg-primary text-primary-foreground">
            {item.badge}
          </span>
        )}
      </button>
      {hasChildren && isExpanded && (
        <div className="mt-0.5">
          {item.children?.map((child) => (
            <SidebarItem
              key={child.id}
              item={child}
              depth={depth + 1}
              expandedItems={expandedItems}
              toggleItem={toggleItem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(
    new Set(["dashboard", "shared-with-me", "share-with-me", "my-reports"])
  );

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <aside className="w-56 h-screen bg-sidebar   flex flex-shrink-0">
      {/* Icon Rail */}
      <div className="w-12 flex flex-col items-center py-3 border-r border-sidebar-border/60">
        {/* Logo */}
        <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center mb-4">
          <span className="text-card font-semibold text-sm">C</span>
        </div>

        {/* Nav Icons */}
        <div className="flex flex-col gap-1">
          <button className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-sidebar-accent/50 transition-colors">
            <Users className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shadow-sm">
            <LayoutDashboard className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-sidebar-accent/50 transition-colors">
            <MessageSquare className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-sidebar-accent/50 transition-colors">
            <Pencil className="w-4 h-4" />
          </button>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom Icons */}
        <div className="flex flex-col gap-1">
          <button className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-sidebar-accent/50 transition-colors relative">
            <div className="w-1.5 h-1.5 bg-primary rounded-full absolute top-2 right-2" />
            <MessageSquare className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:bg-sidebar-accent/50 transition-colors">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Menu Panel */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-3 py-3 flex items-center gap-1.5">
          <span className="font-medium text-foreground text-xs">Codename.com</span>
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground ml-auto" />
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto px-1.5 py-1">
          <div className="space-y-0.5">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
                expandedItems={expandedItems}
                toggleItem={toggleItem}
              />
            ))}
          </div>

          {/* Reports Section */}
          <div className="mt-3">
            <div className="flex items-center justify-between px-2 py-1.5">
              <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-wider">
                Reports
              </span>
              <Plus className="w-3.5 h-3.5 text-muted-foreground" />
            </div>
            <div className="space-y-0.5">
              {reportsItems.map((item) => (
                <SidebarItem
                  key={item.id}
                  item={item}
                  expandedItems={expandedItems}
                  toggleItem={toggleItem}
                />
              ))}
            </div>
          </div>

          {/* Manage Folders */}
          <button className="flex items-center gap-1.5 px-2 py-1.5 mt-3 text-[11px] text-muted-foreground hover:text-foreground transition-colors">
            <FolderOpen className="w-3.5 h-3.5" />
            Manage folders
          </button>
        </div>
      </div>
    </aside>
  );
};
