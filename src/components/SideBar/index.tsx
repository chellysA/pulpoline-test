import BarChart from "../../assets/icons/BarChart";
import Cutlery from "../../assets/icons/Cutlery";
import Frame from "../../assets/icons/Frame";
import GridView from "../../assets/icons/GridView";
import ListAlt from "../../assets/icons/ListAlt";
import LogOut from "../../assets/icons/LogOut";
import Notifications from "../../assets/icons/Notifications";
import Settings from "../../assets/icons/Settings";
import Button from "../ButtonBase";

const SideBar = () => {
  return (
    <nav
      className="w-[106px] hidden md:grid pt-8 h-[calc(100vh-64px)] sticky top-8 bg-gradient-to-b from-primary to-orange rounded-3xl grid-rows-7 justify-items-center"
      data-aos="fade-right"
    >
      <div className="place-content-start">
        <Cutlery />
      </div>
      <ul className="row-span-4">
        <li className="mb-8 flex justify-center items-center lg:mb-6 backdrop-opacity-10 bg-white/50 rounded-md">
          <Frame />
        </li>
        <li className="mb-8 flex justify-center items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
          <ListAlt />
        </li>
        <li className="mb-8 flex justify-center items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
          <BarChart />
        </li>
        <li className="mb-8 flex justify-center items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
          <GridView />
        </li>
        <li className="mb-8 flex justify-center items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
          <Notifications />
        </li>
        <li className="mb-8 flex justify-center items-center lg:mb-6 hover:backdrop-opacity-10 hover:bg-white/50 hover:rounded-md">
          <Settings />
        </li>
      </ul>

      <div></div>
      <Button onClick={() => {}}>
        <LogOut />
      </Button>
    </nav>
  );
};
export default SideBar;
