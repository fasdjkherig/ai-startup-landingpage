import Button from "@/components/Button";
import startsBg from "@/assets/stars.png";
import gridLines from "@/assets/grid-lines.png";

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: `url(${startsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <div className="relative">
            <h2 className="text-white text-center text-5xl md:text-6xl md:max-w-sm md:mx-auto font-medium tracking-tighter">
              AI-driven SEO for everyone.
            </h2>
            <p className="pt-5 px-4 text-white/70 text-lg md:text-xl md:max-w-xs md:mx-auto text-center tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center pt-5">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
