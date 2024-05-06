import React from "react";

export default function Card(props: any) {
  const { title, percent, subTitle, date, className } = props;
  return (
    <div
      className={`text-center w-full border border-black p-6 rounded-lg bg-white flex flex-col gap-3 ${className}`}
    >
      <h1 className="text-sm font-semibold">{title}</h1>
      <div className="text-red-800 font-bold text-4xl">{percent}</div>
      <div className="text-xs text-blue-800 font-bold">{subTitle}</div>
      <div className="text-xs text-blue-800 font-bold italic">{date}</div>
    </div>
  );
}
