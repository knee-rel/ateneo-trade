import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//img imports
import imageOne from "../assets/images/image-1.png";
import imageTwo from "../assets/images/image-2.png";

const CarouselElement = () => {
  const onChange = (index) => {
    console.log(`Carousel changed to slide ${index}`);
  };

  const onClickItem = (index) => {
    console.log(`Item clicked: ${index}`);
  };

  const onClickThumb = (index) => {
    console.log(`Thumbnail clicked: ${index}`);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Carousel
        showArrows={true}
        onChange={onChange}
        onClickItem={onClickItem}
        onClickThumb={onClickThumb}
      >
        <div className="max-h-96">
          <img src={imageOne} alt="Slide 1" className="object-contain h-full w-full" />
        </div>
        <div className="max-h-96">
          <img src={imageTwo} alt="Slide 2" className="object-contain h-full w-full" />
        </div>
        <div className="max-h-96">
          <img src={imageOne} alt="Slide 3" className="object-contain h-full w-full" />
        </div>
        <div className="max-h-96">
          <img src={imageTwo} alt="Slide 4" className="object-contain h-full w-full" />
        </div>
        <div className="max-h-96">
          <img src={imageOne} alt="Slide 5" className="object-contain h-full w-full" />
        </div>
        <div className="max-h-96">
          <img src={imageTwo} alt="Slide 6" className="object-contain h-full w-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselElement;