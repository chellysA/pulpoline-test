import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Typography } from "../../Typography";
import { categories } from "../../../constants/categories";

const CategoriesCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          autoplay: true,
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 2,
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
