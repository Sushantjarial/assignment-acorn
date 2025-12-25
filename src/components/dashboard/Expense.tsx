// RevenueSplit.tsx
export default function Expense() {
  const items = [
    {
      name: "Alex",
      amount: "$209,633",
      percent: "39.63%",
      avatar: "https://i.pravatar.cc/40?img=1",
      width: "flex-1",
    },
    {
      name: "John",
      amount: "$156,841",
      percent: "29.65%",
      avatar: "https://i.pravatar.cc/40?img=2",
      width: "flex-[0.75]",
    },
    {
      name: "Sarah",
      amount: "$117,115",
      percent: "22.14%",
      avatar: "https://i.pravatar.cc/40?img=3",
      width: "flex-[0.55]",
    },
    {
      name: "Corp",
      amount: "$45,386",
      percent: "8.58%",
      avatar: null,
      fallback: "C",
      width: "flex-[0.35]",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-full bg-muted/30 p-1 w-full">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-center gap-2 sm:gap-4 md:gap-12 rounded-full justify-between ${
            item.avatar ? "bg-white shadow-sm" : "bg-transparent shadow-none"
          } pr-2 p-1 py-2 ${item.width} min-w-fit`}
        >
          <div className="flex items-center gap-1 sm:gap-2">
            {item.avatar ? (
              <img
                src={item.avatar}
                alt={item.name}
                className="h-5 w-5 sm:h-6 sm:w-6 rounded-full"
              />
            ) : (
              <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-black flex items-center justify-center text-white text-xs sm:text-sm font-semibold">
                {item.fallback}
              </div>
            )}
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              {item.amount}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-muted-foreground hidden xs:inline">
            {item.percent}
          </span>
        </div>
      ))}

      <button className="ml-auto rounded-full bg-black py-1.5 sm:py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium text-white hover:bg-black/90 transition-colors whitespace-nowrap">
        Details
      </button>
    </div>
  );
}
