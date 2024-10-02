import Button from "@/components/Button";
import StarsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px] md:h-[800px] flex items-center  overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${StarsBg.src})`,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
      <div className="absolute w-64 h-64 md:h-96 md:w-96 rounded-full bg-purple-500 border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(53.18%_53.18%_at_21.68%_17.19%,_#FFF_0%,_#B894FF_37.7%,_#180042_100%)] shadow-[-20px_-20px_80px_0px_rgba(255,_255,_255,_0.10),_-20px_-20px_50px_0px_rgba(255,_255,_255,_0.50),_0px_0px_50px_0px_#8C45FF]"></div>

      <div className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border rounded-full opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2  bg-white rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2  bg-white rounded-full left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 border border-white rounded-full left-full top-1/2 -translate-x-1/2 -translate-y-1/2  inline-flex items-center justify-center">
          <div className="h-2 w-2  bg-white rounded-full"></div>
        </div>
      </div>

      <div className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] border border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"></div>

      <div className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] border border-white opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute h-2 w-2  bg-white rounded-full left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2  bg-white rounded-full left-full top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container relative pt-16">
        <h1 className="text-center text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter  bg-[radial-gradient(131.17%_151.72%_at_0%_0%,_#FFF_0%,_#FFF_50%,_rgba(74,_32,_138,_0.50)_100%)] text-transparent bg-clip-text">
          AI SEO
        </h1>
        <p className="text-center text-lg md:text-xl font-normal tracking-tighter text-white/70 mt-5 max-w-xl mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>join waitlist</Button>
        </div>
      </div>
    </section>
  );
};
