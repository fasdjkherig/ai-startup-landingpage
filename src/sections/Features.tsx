"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="flex py-20 md:py-24 flex-col gap-2.5 items-start">
      <div className="container">
        <h2 className="text-white text-center text-5xl md:text-6xl font-medium tracking-tighter">
          Elevate your SEO efforts.
        </h2>
        <p className="pt-5 text-white/70 text-center text-lg md:text-xl max-w-2xl mx-auto font-normal tracking-tight">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 pt-10">
          {tabs.map((tab) => (
            <div
              key={tab.title}
              className="flex lg:flex-1 p-2.5 items-center gap-2.5 border border-white/20 rounded-xl"
            >
              <div className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-lg">
                <DotLottiePlayer src={tab.icon} autoplay className="h-5 w-5" />
              </div>
              <div>{tab.title}</div>
              {tab.isNew && (
                <div className=" text-center text-xs py-0.5 px-2 text rounded-full font-semibold text-black bg-[#8C44FF] ">
                  new
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border border-white/20 rounded-xl mt-3 p-2.5">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${productImage.src})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};
