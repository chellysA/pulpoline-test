import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Category1 from "../../../public/img/Category1.png";
import Category2 from "../../../public/img/Category2.png";
import Category3 from "../../../public/img/Category3.png";
import Category1Mobile from "../../../public/img/Category1Mobile.png";
import Category2Mobile from "../../../public/img/Category2Mobile.png";
import Category3Mobile from "../../../public/img/Category3Mobile.png";

import { Typography } from "../Typography";

const CategoriesCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        <div className="!flex justify-center items-center">
          <div className="relative">
            <img src={Category1} alt="" className="!hidden md:!block" />
            <img src={Category1Mobile} alt="" className="!block md:!hidden" />
            <Typography
              variant="paragraph1"
              className="absolute bottom-2 left-3 text-white"
            >
              Indonesia Food
            </Typography>
          </div>
        </div>
        <div className="!flex justify-center items-center">
          <div className="relative">
            <img src={Category2} alt="" className="!hidden md:!block" />
            <img src={Category2Mobile} alt="" className="!block md:!hidden" />
            <Typography
              variant="paragraph1"
              className="absolute bottom-2 left-3 text-white"
            >
              Japanese Food
            </Typography>
          </div>
        </div>
        <div className="!flex justify-center items-center">
          <div className="relative">
            <img src={Category3} alt="" className="!hidden md:!block" />
            <img src={Category3Mobile} alt="" className="!block md:!hidden" />
            <Typography
              variant="paragraph1"
              className="absolute bottom-2 left-3 text-white"
            >
              Korean Food
            </Typography>
          </div>
        </div>
      </Slider>
    </div>
  );
};
export default CategoriesCarousel;
