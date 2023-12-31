import React from "react";

const BannerItem = ({ slide }) => {
  const { image, prev, next, id } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full rounded-lg">
      <div className="carosel-img w-full rounded-lg">
        <img src={image} className="w-full rounded-lg" alt="" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/3">
        <h1 className="text-6xl text-white font-bold">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-2/4">
        <p className="text-white w-[500px] text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-3/4">
        <button className="btn btn-warning border-0 text-white  bg-[#FF3811] mr-5">
          Discover More
        </button>
        <button className="btn btn-outline btn-warning">Latest Project</button>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle mr-5 bg-slate-900 border-0 text-white  hover:bg-orange-700 "
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-orange-600 hover:bg-orange-700 border-0 text-white"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
