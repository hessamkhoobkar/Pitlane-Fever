import { navData } from "@/lib/constants/navigation";
import NavigationItem from "./NavigationItem";

export default function LeftSidebar() {
  return (
    <div className="min-h-full grow bg-platform">
      <div id="sidebar-nav" className="hidden flex-col gap-1 pe-4 pt-4 md:flex">
        {navData.map((navitem) => (
          <NavigationItem
            key={navitem.href}
            label={navitem.label}
            href={navitem.href}
            icon={navitem.icon}
          />
        ))}
      </div>
    </div>
  );
}
