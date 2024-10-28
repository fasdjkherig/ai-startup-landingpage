"use client";

import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import productImage from "@/assets/product-image.png";
import { useRef, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  ValueAnimationTransition,
} from "framer-motion";
import { useEffect } from "react";

interface Tab {
  icon: string;
  title: string;
  isNew: boolean;
  backgroundPositionX: number;
  backgroundPositionY: number;
  backgroundSizeX: number;
  onClick?: (index: number) => void; // Make onClick optional
  selected?: boolean; // Make selected optional
  index?: number; // Make index optional
}

const tabs: Tab[] = [
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

const FeatureTab = ({
  icon,
  title,
  isNew,
  backgroundPositionX,
  backgroundPositionY,
  backgroundSizeX,
  onClick,
  selected,
  index,
}: Tab) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const tabRef = useRef<HTMLDivElement>(null);

  const xPercentage = useMotionValue(100);
  const yPercentage = useMotionValue(50);

  useEffect(() => {
    if (!tabRef.current || !selected) return;

    xPercentage.set(0);
    yPercentage.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();

    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options);

    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, [selected]);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;

    dotLottieRef.current.seek(0);

    dotLottieRef.current.play();
  };
  return (
    <div
      ref={tabRef}
      key={title}
      onMouseEnter={handleTabHover}
      className="flex lg:flex-1 p-2.5 items-center gap-2.5 border border-white/20 rounded-xl relative cursor-pointer"
      onClick={onClick ? () => onClick(index!) : undefined}
    >
      {selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"
        ></motion.div>
      )}

      <div className="inline-flex justify-center items-center w-12 h-12 border border-white/20 rounded-lg">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={icon}
          autoplay
          className="h-5 w-5"
        />
      </div>
      <div>{title}</div>
      {isNew && (
        <div className=" text-center text-xs py-0.5 px-2 text rounded-full font-semibold text-black bg-[#8C44FF] ">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectedTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions
    );
  };
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
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              key={tab.title}
              selected={selectedTab === tabIndex}
              onClick={() => handleSelectedTab(tabIndex)}
            />
          ))}
        </div>

        <div className="border border-white/20 rounded-xl mt-3 p-2.5">
          <motion.div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage.src})`,
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};
