import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import profile from "../../assets/VirenKhatri-1.webp";

const Home = () => {
  return (
    <section className="section relative min-h-screen" id="home">
      <div className="container grid gap-y-24">
        <div className="grid grid-cols-[116px_1fr_1fr] items-center gap-x-8 gap-y-0 pt-24 max-[992px]:grid-cols-[100px_1fr_1fr] max-[992px]:gap-x-5 max-md:grid-cols-1 max-md:justify-items-center max-md:gap-y-6 max-md:pt-16">
          <Social />
          <div
            className="animate-profile relative size-[320px] justify-self-center overflow-hidden border border-white/30 shadow-(--surface-shadow-strong) max-[992px]:size-[260px] max-[992px]:shadow-(--surface-shadow) max-md:size-[210px] max-md:shadow-(--surface-shadow) max-[350px]:size-[180px]"
            role="img"
            aria-label="Viren Khatri, full-stack engineer based in Pune, India"
          >
            <img
              src={profile}
              alt=""
              width={320}
              height={320}
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 z-0 size-full object-cover object-center"
            />
            {/* Inset frame must sit above the photo; with bg-image it layered correctly — img would hide it otherwise. */}
            <span
              className="pointer-events-none absolute inset-0 z-1 rounded-[inherit] shadow-[inset_0_0_0_9px_rgb(255_255_255/0.28)] max-[992px]:shadow-[inset_0_0_0_8px_rgb(255_255_255/0.26)] max-md:shadow-[inset_0_0_0_6px_rgb(255_255_255/0.24)]"
              aria-hidden
            />
          </div>
          <div className="max-md:w-full max-md:text-center">
            <Data />
          </div>
        </div>
        <div className="mx-auto max-md:hidden">
          <ScrollDown />
        </div>
      </div>
    </section>
  );
};

export default Home;
