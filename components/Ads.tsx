import React from "react";
import img1 from "../public/homthu.jpg";
import img2 from "../public/ketnoi.jpg";
import img3 from "../public/Co-so-du-lieu-quoc-gia.png";
import img4 from "../public/mod_thudientu (1).gif";
import img5 from "../public/Thu-tuc-hanh-chinh-cong.png";
import img6 from "../public/cosobannghanh.jpg";
import img7 from "../public/chuyendoiso.jpg";
import img8 from "../public/HOCVALAM.jpg";
import Link from "next/link";
import Image from "next/image";

export default function Ads(props: any) {
  const { type } = props;

  const listImg = [
    { url: "/", urlImg: img1 },
    { url: "/", urlImg: img2 },
    { url: "/", urlImg: img3 },
    { url: "/", urlImg: img4 },
    { url: "/", urlImg: img5 },
    { url: "/", urlImg: img6 },
    { url: "/", urlImg: img7 },
    { url: "/", urlImg: img8 },
  ];

  const listImg2 = [
    {
      url: "/",
      urlImg:
        "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/HinhAnhBaiViet/afe7c7f24f9fb6c1ef8e.jpg",
    },
    {
      url: "/",
      urlImg:
        "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/HinhAnhBaiViet/A%20Diep/Nam2021/T7/AQI.jpg",
    },
    {
      url: "/",
      urlImg:
        "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/HinhAnhBaiViet/IPV6.jpg",
    },
    {
      url: "/",
      urlImg:
        "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/HinhAnhBaiViet/Untitled-1.jpg",
    },
    {
      url: "/",
      urlImg:
        "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/BannerQuangCao/BannerPhai/IPA%20Quang%20Ninh.jpg",
    },
    {
      url: "/",
      urlImg:
        "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/HinhAnhBaiViet/Huu%20Duy/phapluat.jpg",
    },
    {
      url: "/",
      urlImg:
        "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/BannerQuangCao/BannerPhai/Thong%20tin%20tiep%20can%20dat%20dai.jpg",
    },
    {
      url: "/",
      urlImg:
        "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/HinhAnhBaiViet/tn-01.jpg",
    },
    {
      url: "/",
      urlImg:
        "https://media.quangninh.gov.vn/618ca5c4-79b3-478a-8adb-4184369067f7/Libraries/HinhAnhBaiViet/BANNER%20CDS_29032023.png",
    },
  ];

  const renderAds = (data: any) => {
    return data.map((item: any, i: number) => {
      return (
        <Link key={i} href={item.url}>
          <Image
            src={item.urlImg}
            alt="banner"
            className="w-full mb-1"
            width={500}
            height={200}
          />
        </Link>
      );
    });
  };

  return (
    <div className="mx-2">
      {type === "ads2" ? renderAds(listImg2) : renderAds(listImg)}
    </div>
  );
}
