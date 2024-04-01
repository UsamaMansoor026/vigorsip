import React from "react";
import { galleryImages } from "./Product";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 place-items-center px-8 gap-4">
      {galleryImages.map((galleryImg) => (
        <article className="cursor-pointer overflow-hidden" key={galleryImg.id}>
          <img
            className="w-full object-cover hover:scale-125 duration-300"
            src={galleryImg.img}
            alt=""
          />
        </article>
      ))}
    </div>
  );
};

export default Gallery;
