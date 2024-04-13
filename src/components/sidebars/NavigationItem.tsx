import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function NavigationItem({
  label,
  icon,
  href,
}: {
  label: string;
  icon: ReactNode;
  href: string;
}) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        [
          isActive ? "text-white" : "text-asphalt-500",
          isActive || !isActive
            ? "flex flex-row-reverse items-center gap-3 px-4 py-2 text-sm transition-colors duration-200 ease-in-out hover:text-white"
            : "",
        ].join(" ")
      }
    >
      <span className="text-2xl">{icon}</span>
      <span>{label}</span>
    </NavLink>
  );
}
