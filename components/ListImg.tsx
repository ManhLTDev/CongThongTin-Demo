import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function ListImg() {
  const data = [
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
    },
    {
      title: "Mãn nhãn với “giai điệu tự hào” ngày kỷ niệm",
      url: "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/ThuVienAnh/Carnaval%20H%E1%BA%A1%20Long%202023/17.jpg?RenditionID=7",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
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
          <h4 className="text-sm text-center px-2">{item.title}</h4>
        </Link>
      ))}
    </Slider>
  );
}
