import { useState } from "react";
import Dashboard from "../../assets/icons/Dashboard";
import Button from "../ButtonBase";
import SearchBar from "../Search";
import { Typography } from "../Typography";
import Frame from "../../assets/icons/Frame";
import ListAlt from "../../assets/icons/ListAlt";
import BarChart from "../../assets/icons/BarChart";
import GridView from "../../assets/icons/GridView";
import Notifications from "../../assets/icons/Notifications";
import Settings from "../../assets/icons/Settings";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header
        data-aos="fade-down"
        className="flex justify-between md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 p-6 md:p-0"
      >
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
        <div
          className="lg:col-span-2 place-content-center hidden md:block"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <SearchBar />
        </div>
        <Button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="block md:hidden place-self-end self-center"
          children={<Dashboard />}
        />
      </header>
      {toggle && (
        <nav
          className={`${
            toggle && "block lg:hidden"
          } bg-gradient-to-b from-primary to-orange absolute top-18 z-20 w-full rounded-b-3xl p-4`}
        >
          <div className="w-1/2 flex justify-start mb-2">
            <SearchBar />
          </div>
          <ul className="grid grid-cols-2">
            <li className="mb-8 flex justify-start items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
              <Frame />{" "}
              <Typography variant="paragraph1" className="text-white">
                Banner
              </Typography>
            </li>
            <li className="mb-8 flex justify-start items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
              <ListAlt />{" "}
              <Typography variant="paragraph1" className="text-white">
                Categories
              </Typography>
            </li>
            <li className="mb-8 flex justify-start items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
              <BarChart />{" "}
              <Typography variant="paragraph1" className="text-white">
                Orders Historial
              </Typography>
            </li>
            <li className="mb-8 flex justify-start items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
              <GridView />{" "}
              <Typography variant="paragraph1" className="text-white">
                Stadistics
              </Typography>
            </li>
            <li className="mb-8 flex justify-start items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
              <Notifications />{" "}
              <Typography variant="paragraph1" className="text-white">
                Notifications
              </Typography>
            </li>
            <li className="mb-8 flex justify-start items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
              <Settings />{" "}
              <Typography variant="paragraph1" className="text-white">
                Settings
              </Typography>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
export default Header;
