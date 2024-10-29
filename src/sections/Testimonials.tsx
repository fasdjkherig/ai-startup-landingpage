"use client";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="flex py-20 md:py-24 flex-col gap-2.5 ">
      <div className="container">
        <h2 className="text-white text-center text-5xl md:text-6xl font-medium tracking-tighter">
          Beyond Expectations.
        </h2>
        <p className="pt-5 text-white/70 text-center text-lg md:text-xl tracking-tight max-w-sm mx-auto ">
          Our revolutionary AI SEO tools have transformed our clients'
          strategies.
        </p>
        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ translateX: "-50%" }}
            animate={{ translateX: "0" }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-5 flex-none pr-5 -translate-x-1/2"
          >
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(243deg,rgba(140,69,255,0.30)_0%,#000_100%)] max-w-xs md:max-w-md flex-none"
              >
                <p className="text-white text-lg md:text-2xl tracking-tight ">
                  {testimonial.text}
                </p>
                <div className="flex items-center pt-5 gap-3">
                  <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light">
                    <Image
                      src={testimonial.avatarImg}
                      alt="avatar image"
                      className="h-11 w-11 rounded-lg grayscale"
                    />
                  </div>
                  <div className="">
                    <div className="text-base text-white tracking-tight">
                      {testimonial.name}
                    </div>
                    <div className="text-white/50 text-sm tracking-tight">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
