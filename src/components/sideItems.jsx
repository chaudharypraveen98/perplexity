import React from "react";
import {
  FolderIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export const defaultNavItems = [
  {
    label: "Home",
    href: "/",
    icon: <MagnifyingGlassIcon className="w-5 h-5" />,
    active: false,
  },
  {
    label: "Discover",
    href: "/",
    icon: <UserGroupIcon className="w-5 h-5" />,
    active: false,
  },
  {
    label: "Library",
    href: "/library",
    icon: <FolderIcon className="w-5 h-5" />,
    active: true,
  },
];
