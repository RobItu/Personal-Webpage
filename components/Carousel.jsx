import { Carousel } from "react-responsive-carousel";
import React from "react";
import Image from "next/image";

const CarouselComponent = () => {
  const images = ["/images/bob.svg", "/next.svg", "/vercel.svg"];

  return (
    <div className="carousel">
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={180}
              height={90}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
