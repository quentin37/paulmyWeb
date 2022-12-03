import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import chateau from "../assets/chateau.png";
import lac from "../assets/lac.png";
import mairie from "../assets/mairie.png";
import image1 from "../assets/img1.png";

export default function Slider() {
  return (
    <Carousel
      className="carousel"
      autoPlay
      interval={5000}
      infiniteLoop
      showThumbs={false}
    >
      <div>
        <img alt="" src={image1} />
      </div>
      <div>
        <img alt="" src={lac} />
      </div>
      <div>
        <img alt="" src={chateau} />
      </div>
      <div>
        <img alt="" src={mairie} />
      </div>
    </Carousel>
  );
}
