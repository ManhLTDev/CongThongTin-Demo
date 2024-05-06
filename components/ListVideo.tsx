import { EyeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function ListVideo() {
  const data = [
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
      view: 123,
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
      view: 123,
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
      view: 123,
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
      view: 123,
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
      view: 123,
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
      view: 123,
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
      view: 123,
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
      view: 123,
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
      view: 123,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 3000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {data.map((item, i) => (
        <Link href={"/"} key={i} className="mt-2">
          <Image
            src={item.url}
            alt="img"
            width={130}
            height={100}
            className="mx-auto"
          />
          <div className="text-xs px-2 text-gray-400 flex items-center">
            <EyeIcon className="w-5 h-5" />
            {item.view}
          </div>
          <h4 className="text-sm px-2">{item.title}</h4>
        </Link>
      ))}
    </Slider>
  );
}
