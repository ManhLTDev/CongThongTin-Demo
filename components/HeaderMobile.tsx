import { Bars3Icon, ComputerDesktopIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

export default function HeaderMobile() {
  return (
    <div className="h-12 bg-blue-800 py-1 px-2 flex justify-between">
      <div className="flex gap-2">
        <Image
          src={"https://cdn.quangninh.gov.vn/Resources/app/img/quochuy.png"}
          alt="logo"
          height={35}
          width={35}
        />
        <div className="uppercase text-white">
          <h1 className="text-xs font-semibold">cổng thông tin điện tử</h1>
          <h2 className="text-base font-bold">tỉnh quảng ninh</h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <ComputerDesktopIcon className="w-5 h-5 text-white" />
        <Bars3Icon className="w-5 h-5 text-white" />
      </div>
    </div>
  );
}
