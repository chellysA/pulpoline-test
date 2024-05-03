import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Category1 from "/img/Category1.png";
import Category2 from "/img/Category2.png";
import Category3 from "/img/Category3.png";
import Category1Mobile from "/img/Category1Mobile.png";
import Category2Mobile from "/img/Category2Mobile.png";
import Category3Mobile from "/img/Category3Mobile.png";

import { Typography } from "../../Typography";

const categories = [
  {
    name: "Indonesia Food",
    image: "/img/Category1.png",
    mobileImg: "/img/Category1Mobile.png",
  },
  {
    name: "Japanese Food",
    image: "/img/Category2.png",
    mobileImg: "/img/Category2Mobile.png",
  },
  {
    name: "Korean Food",
    image: "/img/Category3.png",
    mobileImg: "/img/Category3Mobile.png",
  },
];

const CategoriesCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
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
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.name} className="relative px-1">
            <img
              src={category.image}
              alt={category.name}
              className="!hidden md:!block"
            />
            <img
              src={category.mobileImg}
              alt={category.name}
              className="!block md:!hidden"
            />
            <Typography
              variant="paragraph1"
              className="absolute bottom-2 left-3 text-white"
            >
              {category.name}
            </Typography>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CategoriesCarousel;
