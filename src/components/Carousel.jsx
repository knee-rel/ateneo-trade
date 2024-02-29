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
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <div>
        <img src={imageOne} alt="Slide 1" />
      </div>
      <div>
        <img src={imageTwo} alt="Slide 2" />
      </div>
      <div>
        <img src={imageOne} alt="Slide 3" />
      </div>
      <div>
        <img src={imageTwo} alt="Slide 4" />
      </div>
      <div>
        <img src={imageOne} alt="Slide 5" />
      </div>
      <div>
        <img src={imageTwo} alt="Slide 6" />
      </div>
    </Carousel>
  );
};

export default CarouselElement;
