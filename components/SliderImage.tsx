import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

export default function SliderImage(props: any) {
  const { data, dots, fade, autoplay, className, showText, speed } = props;
  const settings = {
    dots: dots ? true : false,
    fade: fade ? true : false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay ? true : false,
    speed: speed ? speed : 5000,
    autoplaySpeed: speed ? speed : 5000,
    appendDots: (dots: any) => <ul>{dots}</ul>,
  };
  return (
    <div>
      <Slider {...settings}>
        {data.map((item: any, i: number) => {
          return (
            <div key={item._id} className={className}>
              <Image
                src={item.url}
                width={500}
                height={500}
                // className="object-cover"
                alt={`banner`}
                className="w-full"
              />
              {showText ? (
                <div className="flex flex-col gap-2 mt-2">
                  <Link className="text-cyan-600" href={"/"}>
                    {item.title}
                  </Link>
                  <div className="text-xs italic text-gray-500">
                    {item.time}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
