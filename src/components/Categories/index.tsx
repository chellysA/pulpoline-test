import CategoriesCarousel from "../CategoriesCarousel";
import { Typography } from "../Typography";

const Categories = () => {
  return (
    <div>
      <Typography variant="subheading1" className="mb-4">
        Categories
      </Typography>
      <CategoriesCarousel />
    </div>
  );
};
export default Categories;
