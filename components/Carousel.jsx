import { Carousel } from "react-responsive-carousel";
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  const images = [
    "/images/smartcon2.jpg",
    "/images/pregame.jpg",
    "/images/group.jpg",
  ];

  return (
    <div className="carousel">
      <Carousel showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={400}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
