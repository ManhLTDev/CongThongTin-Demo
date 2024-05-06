import Image from "next/image";
import { Inter } from "next/font/google";
import Slider from "react-slick";
import banner1 from "../public/banner.jpg";
import banner2 from "../public/banner1.jpg";
import banner3 from "../public/banner4.jpg";
import banner from "../public/banner-n1-cdn.png";
import SliderImage from "@/components/SliderImage";
import { useEffect, useState } from "react";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";
import img4 from "../public/testimg1.jpg";
import SearchInput from "@/components/SearchInput";
import maps from "../public/bando.gif";
import Ads from "@/components/Ads";
import Menu2 from "@/components/Menu2";
import bgBanner from "../public/banner-dvc4.jpg";
import Link from "next/link";
import axios from "axios";
import HeaderBanner from "@/components/HeaderBanner";
import Card from "@/components/Card";
import CardNews from "@/components/CardNews";
import ListImg from "@/components/ListImg";
import ListVideo from "@/components/ListVideo";
import { VideoCameraIcon } from "@heroicons/react/16/solid";
import MenuMobile from "@/components/MenuMobile";
import HeaderMobile from "@/components/HeaderMobile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const menu = [
    "trang chủ",
    "tổng quan",
    "tổ chức bộ máy",
    "tin tức",
    "dịch vụ công",
    "văn bản",
    "du lịch",
    "doanh nghiệp",
  ];

  const banners = [{ url: banner1 }, { url: banner2 }, { url: banner3 }];
  const posts = [
    {
      url: img4,
      title: "Xây nhà vệ sinh trong trường học",
      time: "22/04/2024 10:03:00",
    },
    {
      url: img4,
      title: "Xây nhà vệ sinh trong trường học",
      time: "22/04/2024 10:03:00",
    },
    {
      url: img4,
      title: "Xây nhà vệ sinh trong trường học",
      time: "22/04/2024 10:03:00",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/get_posts");
      setData(response.data);
    };

    fetchData();
  }, []);

  function getDate() {
    const today = new Date();
    const hours = today.getHours();
    const min = today.getMinutes();
    const currentDate = today.getDay();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `Thứ ${
      currentDate === 0 ? "Chủ Nhật" : currentDate + 1
    } ${date}/${month}/${year} ${hours}:${min}`;
  }

  const [dateTime, setDateTime] = useState(getDate());

  return (
    <div>
      {/* HEADER */}
      <div className="relative w-full h-44 hidden xl:block">
        <Image
          src={banner}
          alt="banner"
          height={176}
          width={650}
          className="absolute top-0 z-10"
        />

        <div className="absolute z-20 left-1/3 top-10 uppercase ">
          <h1 className="font-bold text-3xl text-blue-700 mb-2 text-shadow">
            cổng thông tin điện tử
          </h1>
          <h2 className="font-bold text-4xl text-red-600 text-shadow">
            tỉnh quảng ninh
          </h2>
        </div>

        <SliderImage
          className="h-44"
          data={banners}
          autoplay
          fade
          speed={3000}
        />
      </div>
      {/* HEADER */}
      <div className="xl:hidden">
        <HeaderMobile />
        <div className="m-2">
          <SearchInput />
        </div>
        <MenuMobile />
      </div>
      {/* MENU */}
      <div className="w-full bg-blue-600 mt-2 hidden xl:block">
        <ul className="w-3/4 h-9 mx-auto  mt-0.5 uppercase text-white flex">
          {menu.map((item, i) => {
            return (
              <li
                key={i}
                className="px-5 h-9 content-center hover:bg-blue-400 cursor-pointer text-sm"
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      {/* MENU */}

      <div className="h-fit min-h-screen mx-auto bg-white px-3 xl:w-3/4 xl:flex">
        {/* LEFT SIDE */}
        <div className="xl:w-3/4 ">
          <div className="hidden xl:block">
            <div className="flex items-center gap-3 align-middle">
              <div className="text-sm font-semibold my-4 w-1/5">{dateTime}</div>
              <div className="w-4/5">
                <Slider {...settings}>
                  <Link
                    href={
                      "https://thitimhieuphapluat.quangninh.gov.vn/#gsc.tab=0"
                    }
                    className="text-sm font-semibold text-blue-700"
                  >
                    100% cán bộ, chiến sỹ, công chức, viên chức, người lao động
                    tích cực hưởng ứng tham gia Cuộc thi
                  </Link>
                  <Link
                    href={
                      "https://thitimhieuphapluat.quangninh.gov.vn/#gsc.tab=0"
                    }
                    className="text-sm font-semibold text-blue-700"
                  >
                    100% cán bộ, chiến sỹ, công chức, viên chức, người lao động
                    tích cực hưởng ứng tham gia Cuộc thi
                  </Link>
                </Slider>
              </div>
            </div>
          </div>

          <hr className="mb-2" />
          <div className="xl:flex gap-2">
            <div className="block xl:hidden mb-2">
              <HeaderBanner text="tin tức - sự kiện" />
            </div>
            <div className="xl:w-3/5">
              <SliderImage data={data} showText dots autoplay fade={false} />
            </div>
            <div className="hidden xl:w-2/5 xl:block">
              <Menu2 />
            </div>
          </div>

          <div className=" mt-14 flex flex-col gap-2">
            <Image src={img1} alt="img1" />
            <Image src={img2} alt="img2" />
            <Image src={img3} alt="img3" className="w-full" />
            <HeaderBanner text="công khai tiến độ của tỉnh quảng ninh" />
            <div className="relative h-64 bg-black">
              <Image
                src={bgBanner}
                alt="bg-banner"
                fill
                className="object-cover"
              />
              <div className="w-11/12 absolute top-11 xl:grid xl:grid-cols-2 gap-12 left-4 xl:left-9">
                <Card
                  title="Đến tháng 4 Tỉnh Quảng Ninh đã giải quyết"
                  percent="100 %"
                  subTitle="hồ sơ đúng hạn"
                  date="(tự động cập nhật vào lúc 00:00:00 24/04/2024)"
                />
                <div className="hidden xl:block">
                  <Card
                    title="Đến tháng 4 Tỉnh Quảng Ninh đã trao đổi"
                    percent="22.250.716"
                    subTitle="văn bản qua mạng giữa 780 đơn vị"
                    date="(Tự động cập nhật lúc 01:01:06 24/04/2024)"
                  />
                </div>
              </div>
            </div>
            <div className="mb-2 xl:mb-0 xl:flex gap-2">
              <div className="mb-2 xl:mb-0 xl:w-2/4">
                <HeaderBanner text="cổng thông tin điện tử doanh nghiệp" />
                <CardNews />
              </div>
              <div className="xl:w-2/4">
                <HeaderBanner text="cổng thông tin điện tử du lịch" />
                <CardNews />
              </div>
            </div>

            <div className="hidden xl:block">
              <HeaderBanner
                text="Video"
                iconHeader={<VideoCameraIcon className="w-5 h-5" />}
              />
              <ListVideo />
            </div>

            <div className="xl:flex gap-2">
              <div className="mb-2 xl:mb-0 xl:w-2/4">
                <HeaderBanner text="tin địa phương" />
                <CardNews />
              </div>
              <div className="xl:w-2/4">
                <HeaderBanner text="tin sở ban nghành" />
                <CardNews />
              </div>
            </div>

            <div className="hidden xl:block">
              <HeaderBanner text="thư viện ảnh" />
              <ListImg />
            </div>

            <div className="flex flex-col gap-2 xl:grid grid-cols-2">
              <div>
                <HeaderBanner text="ban chỉ đạo" />
                <CardNews hide />
              </div>
              <div className="hidden xl:block">
                <HeaderBanner text="hỏi đáp" />
                <CardNews hide />
              </div>
              <Link href={"/"}>
                <Image
                  src="https://quangninh.gov.vn/Style%20Library/SP.QNP/app/img/chuyenmuc/banner-small1.jpg"
                  alt="đóng góp ý kiến"
                  width={500}
                  height={200}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  src="https://quangninh.gov.vn/Style%20Library/SP.QNP/app/img/chuyenmuc/banner-small.jpg"
                  alt="đóng góp ý kiến"
                  width={500}
                  height={200}
                />
              </Link>
            </div>

            <div className="hidden xl:block">
              <HeaderBanner text="chuyển đổ số tỉnh quảng ninh" />
              <div className="grid grid-cols-2">
                <CardNews hideContent />
                <CardNews hide />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="w-full">
                  <HeaderBanner text="an toàn giao thông" />
                  <CardNews />
                </div>
                <div className="w-full">
                  <HeaderBanner text="đảm bảo mục tiêu tăng trưởng" />
                  <CardNews />
                </div>
                <div className="w-full">
                  <HeaderBanner text="thông tin hỗ trợ pháp lý cho dnnvv" />
                  <CardNews />
                </div>
                <div className="w-full">
                  <HeaderBanner text="đại biểu hđnd với cử tri" />
                  <CardNews />
                </div>
                <div className="w-full">
                  <HeaderBanner text="giám đốc sở, nghành với cử tri" />
                  <CardNews />
                </div>
                <div className="w-full">
                  <HeaderBanner text="mttq với cử tri" />
                  <CardNews />
                </div>
              </div>
            </div>

            <HeaderBanner text="thông tin chuyên đề" />
            <CardNews
              hide
              classNameLi="uppercase"
              classNameUl="xl:grid grid-cols-2 "
            />
          </div>
        </div>
        {/* LEFT SIDE */}

        {/* RIGHT SIDE */}
        <div className="hidden xl:w-1/4 m-4 flex flex-col gap-2 xl:block">
          <SearchInput />
          <hr className="mt-1.5" />
          <div className="border-solid border-2 border-gray-300 ">
            <HeaderBanner text="bản đồ" />
            <Image src={maps} alt="maps" className="w-full" />
          </div>
          <div className="border-solid border-2 border-gray-300">
            <HeaderBanner text="lịch công tác" />
            <div className="pt-2 text-sm">Lịch công tác trống</div>
          </div>

          <Ads />

          <div className="border solid border-gray-300">
            <HeaderBanner text="tin tiêu điểm" />
            <CardNews hideContent size="small" />
            <CardNews hideContent size="small" />
          </div>

          <Ads type="ads2" />

          <HeaderBanner text="thông tin tra cứu" />
          <div>
            <HeaderBanner text="thông tin tổng hợp" />
            <CardNews hide />
          </div>
          <div>
            <HeaderBanner text="thông tin báo chí" />
            <CardNews hide />
          </div>
          <HeaderBanner text="website liên kết" />
          <div>
            <HeaderBanner text="thống kê truy cập" />
            <div className="text-xs px-2 py-4 border solid border-gray-300 flex flex-col gap-3">
              <div>
                Hôm nay: <span className="text-blue-800">22230</span>
              </div>
              <div>
                Đã truy cập: <span className="text-blue-800">63727740</span>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE */}
      </div>
    </div>
  );
}
