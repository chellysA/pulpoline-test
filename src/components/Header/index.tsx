import Dashboard from "../../assets/icons/Dashboard";
import Button from "../ButtonBase";
import SearchBar from "../Search";
import { Typography } from "../Typography";

const Header = () => {
  return (
    <header className="flex justify-between md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 p-6 md:p-0">
      <div className="flex flex-col items-start">
        <div className="flex md:mb-2">
          <Typography variant="h5" className="text-yellow">
            Food
          </Typography>
          <Typography variant="h5" className="text-primary">
            Health
          </Typography>
        </div>
        <Typography variant="subheading2">
          What do you want to eat today?
        </Typography>
      </div>
      <div className="lg:col-span-2 place-content-center hidden md:block">
        <SearchBar />
      </div>
      <Button
        onClick={() => {}}
        className="block md:hidden place-self-end self-center"
        children={<Dashboard />}
      />
    </header>
  );
};
export default Header;
