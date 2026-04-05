import React from "react";
import BannerImg from "../../assets/assets/pngwing 1.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh] my-8 rounded-2xl container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse justify-evenly w-full ">
          <img src={BannerImg} className="max-w-sm rounded-lg bg-gray-100 shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Books to freshen up <br /> your bookshelf
            </h1>
            <button className="btn btn-success mt-4 text-white">
              View The List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
