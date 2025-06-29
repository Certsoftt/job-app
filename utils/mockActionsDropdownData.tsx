"use client";
import { ActionsDropdownItem } from "@/components/ui/ActionsDropdown";
import { usePathname } from "next/navigation";

export const useActionsDropdownItems = (handlers: {
  onView: () => void,
  onEdit: () => void,
  onDelete?: () => void,
  onCancel?: () => void,
}) => {
  const pathname = usePathname();
  if (pathname === "/meetings") {
    return [
      {
        label: "View",
        icon: "/arrow-cursor.svg",
        colorClass: "text-[#5B2EDD]",
        onClick: handlers.onView,
      },
      {
        label: "Edit",
        icon: "/pencil--change-edit.svg",
        colorClass: "text-[#5B2EDD]",
        onClick: handlers.onView,
      },
      {
        label: "Cancel",
        icon: "/cancel.svg",
        colorClass: "text-[#F75555]",
        onClick: handlers.onCancel || (() => {}),
      },
    ] as ActionsDropdownItem[];
  }
  if (pathname === "/clients") {
    return [
      {
        label: "View",
        icon: "/arrow-cursor.svg",
        colorClass: "text-[#5B2EDD]",
        onClick: handlers.onView,
      },
      {
        label: "Edit",
        icon: "/pencil--change-edit.svg",
        colorClass: "text-[#5B2EDD]",
        onClick: handlers.onView,
      },
      {
        label: "Message",
        icon: "/chat-bubble.svg",
        colorClass: "text-[#5B2EDD]",
        onClick: handlers.onView,
      },
      {
        label: "Delete",
        icon: "/recycle-bin.svg",
        colorClass: "text-[#F75555]",
        onClick: handlers.onDelete || (() => {}),
      },
    ] as ActionsDropdownItem[];
  }
  // Default to deliverables
  return [
    {
      label: "View",
      icon: "/arrow-cursor.svg",
      colorClass: "text-[#5B2EDD]",
      onClick: handlers.onView,
    },
    {
      label: "Edit",
      icon: "/pencil--change-edit.svg",
      colorClass: "text-[#5B2EDD]",
      onClick: handlers.onEdit,
    },
    {
      label: "Delete",
      icon: "/recycle-bin.svg",
      colorClass: "text-[#F75555]",
      onClick: handlers.onDelete || (() => {}),
    },
  ] as ActionsDropdownItem[];
};
