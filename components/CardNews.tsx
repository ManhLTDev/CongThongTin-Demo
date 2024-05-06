import Image from "next/image";
import React from "react";
import chevronRight from "../public/chevron-right.svg";
import Link from "next/link";

export default function CardNews(props: any) {
  const { hide, hideContent, classNameLi, size, classNameUl } = props;
  const data = [
    "Quảng Yên: Nâng cao Chỉ số DDCI",
    "TP Cẩm Phả: Tạo chuyển biến môi trường đầu tư, kinh doanh",
    "Nỗ lực vươn lên vị thế dẫn đầu chỉ số SIPAS của tỉnh Quảng Ninh",
    "Vì sự phát triển bền vững của cơ quan, doanh nghiệp",
    "TKV: Tăng tốc sản xuất, tiêu thụ than",
    "Không để hình thành “điểm nóng” về buôn lậu",
    "Nhanh chóng tháo gỡ khó khăn vướng mắc, đẩy nhanh tiến độ triển khai các dự án của ngành Điện trên địa bàn tỉnh",
    "Phòng cháy chữa cháy trong sản xuất than",
    "Cao điểm kiểm soát thị trường",
  ];
  return (
    <div
      className={`${size === "small" ? "" : "border solid border-gray-300"}`}
    >
      {hide ? null : (
        <div className="p-2 grid grid-cols-3">
          <Image
            src="https://media.quangninh.gov.vn/318f7644-d326-49ef-82e2-b612b5bb7dac/Libraries/HinhAnhBaiViet/MINH%20NGUYET/thang%203/Nh%C3%A0%20m%C3%A1y%20Nhi%E1%BB%87t%20%C4%91i%E1%BB%87n%20%C4%90%C3%B4ng%20Tri%E1%BB%81u%20G%E1%BA%AFn%20s%E1%BA%A3n%20xu%E1%BA%A5t%20v%E1%BB%9Bi%20b%E1%BA%A3o%20v%E1%BB%87%20m%C3%B4i%20tr%C6%B0%E1%BB%9Dng.jpg?renditionID=6"
            width={size === "small" ? 80 : 130}
            height={size === "small" ? 20 : 65}
            alt="thumbnail"
          />
          <div
            className={`flex flex-col pl-4 col-span-2 ${
              size === "small" ? "gap-1" : "gap-3"
            }`}
          >
            <h3
              className={`text-sm  ${
                size === "small" ? "text-xs" : "font-bold"
              }`}
            >
              Nhà máy Nhiệt điện Đông Triều: Gắn sản xuất với bảo vệ môi trường
            </h3>
            <span className="text-xs text-gray-500">23/04/2024 11:18:46</span>
          </div>
        </div>
      )}
      {hideContent ? null : (
        <ul
          className={`list-disc list-inside text-xs overflow-y-auto ${
            hideContent ? "h-full" : "h-40"
          } ${classNameUl}`}
        >
          {data.map((item, i) => (
            <Link href={"/"} key={i}>
              <li
                className={`border-t solid border-gray-200 px-2 py-2 hover:text-blue-500 ${classNameLi}`}
              >
                {item}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
