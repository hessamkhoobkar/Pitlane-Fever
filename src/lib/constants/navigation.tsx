import { Icon } from "@iconify/react";

export const navData = [
  {
    href: "/",
    label: "Home",
    icon: <Icon icon="solar:home-smile-broken" />,
  },
  {
    href: "/clubs",
    label: "Clubs",
    icon: <Icon icon="solar:crown-line-broken" />,
  },
  {
    href: "/users",
    label: "Users",
    icon: <Icon icon="solar:users-group-two-rounded-line-duotone" />,
  },
  {
    href: "/standings/drivers",
    label: "Standings",
    icon: <Icon icon="solar:ranking-broken" />,
  },
  {
    href: "/users/:username/bookmarks",
    label: "Bookmarks",
    icon: <Icon icon="solar:bookmark-square-broken" />,
  },
  {
    href: "/topics",
    label: "Topics",
    icon: <Icon icon="solar:hashtag-square-broken" />,
  },
  {
    href: "/profile",
    label: "Profile",
    icon: <Icon icon="solar:user-circle-broken" />,
  },
];
