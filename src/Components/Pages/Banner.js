import React from "react";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        class="hero  h-[40rem] "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div class="hero-overlay bg-opacity-70"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">
              Eat Healthy Food, Live Healthy Life
            </h1>
            <p class="mb-5">
              A recipe has no soul. You, as the cook, must bring soul to the
              recipe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
