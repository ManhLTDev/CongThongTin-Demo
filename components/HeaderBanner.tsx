import Image from "next/image";
import React from "react";
import icon from "../public/bieutuong_w.svg";
import logo from "../public/tab-1.png";

export default function HeaderBanner(props: any) {
  const { text, iconHeader } = props;
  return (
    <div className="bg-blue-800 py-1.5 flex gap-2 relative">
      <Image src={icon} alt="maps" className="pb-1" />
      <div className="text-white uppercase content-center font-semibold flex items-center gap-1">
        {iconHeader}
        {text}
      </div>
      <Image src={logo} alt="maps" className="absolute right-0 top-0" />
    </div>
  );
}
