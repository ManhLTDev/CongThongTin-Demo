import React from "react";
import {
  CursorArrowRaysIcon,
  GlobeAsiaAustraliaIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/16/solid";
import Link from "next/link";
export default function MenuMobile() {
  const menu = [
    {
      title: "Tổng quan",
      icon: <CursorArrowRaysIcon className="w-5 h-5 text-white" />,
      color: "bg-green-500",
    },
    {
      title: "Bộ máy",
      icon: <CursorArrowRaysIcon className="w-5 h-5 text-white" />,
      color: "bg-red-500",
    },
    {
      title: "Chuyên trang Du lịch",
      icon: <GlobeAsiaAustraliaIcon className="w-5 h-5 text-white" />,
      color: "bg-orange-500",
    },
    {
      title: "Chuyên trang Doanh Nghiệp",
      icon: <BuildingOffice2Icon className="w-5 h-5 text-white" />,
      color: "bg-blue-500",
    },
    {
      title: "Dịch vụ công",
      icon: <CursorArrowRaysIcon className="w-5 h-5 text-white" />,
      color: "bg-pink-500",
    },
    {
      title: "Văn bản",
      icon: <CursorArrowRaysIcon className="w-5 h-5 text-white" />,
      color: "bg-purple-500",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-2 m-2">
      {menu.map((item, i) => (
        <div key={i} className={`${item.color} text-white py-3 pl-3`}>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm h-7 font-semibold"
          >
            {item.icon} {item.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
