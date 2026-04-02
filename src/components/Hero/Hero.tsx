import heroImage from "../../images/illustration-intro.png";
import wave from "../../images/bg-curvy-desktop.svg";

function Hero() {
  return (
    <>
      <section className="flex items-center justify-center flex-col text-center text-white relative px-6 pb-30 ">
        {/* IMG */}
        <div className="">
          <img src={heroImage} alt="" className="w-full" />
        </div>

        <div className="mt-9 max-w-2xl mx-auto space-y-6">
          <h2 className="font-second text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            All your files in one secure location, accessible anywhere.
          </h2>
          <p className="font-second text-sm md:text-base leading-relaxed opacity-90">
            Fylo stores all your most important files in one location. Access
            them wherever you need, share and collaborate with friends family
            and co-workers.
          </p>
          <button className="cursor-pointer bg-[#339ecc] hover:bg-[#2b8ab3] transition-colors px-14 py-3 rounded-3xl mt-4">
            Get started
          </button>
        </div>

        {/* wave */}
        <img src={wave} alt="" className="absolute bottom-0 -z-1 w-full" />
      </section>
    </>
  );
}

export default Hero;
