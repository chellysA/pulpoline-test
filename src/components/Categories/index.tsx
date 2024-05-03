import CategoriesCarousel from "./CategoriesCarousel";
import { Typography } from "../Typography";

const Categories = () => {
  return (
    <section
      className="mb-4 md:mb-0 ml-7 md:ml-0"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="700"
    >
      <Typography variant="subheading1" className="mb-4 mt-2">
        Categories
      </Typography>
      <CategoriesCarousel />
    </section>
  );
};
export default Categories;
