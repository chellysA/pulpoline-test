import NotificationsGrey from "../../assets/icons/NotificationsGrey";
import { Typography } from "../Typography";
import ShoppingCard from "./ShoppingCard";
import Shopping1 from "../../../public/img/Shopping1.png";
import Shopping2 from "../../../public/img/Shopping2.png";
import Shopping3 from "../../../public/img/Shopping3.png";
import Shopping4 from "../../../public/img/Shopping4.png";

const MyCart = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <div>
          <Typography variant="custom" className="text-2xl font-semibold">
            My Cart
          </Typography>
          <Typography variant="paragraph1" className="font-normal mt-1">
            Shopping is happy
          </Typography>
        </div>
        <NotificationsGrey />
      </div>
      <div className="grid grid-flow-row auto-rows-max gap-y-4">
        <ShoppingCard
          img={Shopping1}
          description="Boiled Dumplings"
          rating="4.8/5"
          review="(1K+ reviews)"
          price="320$"
          quantity={1}
        />
        <ShoppingCard
          img={Shopping2}
          description="Ayam Geprek Popular"
          rating="4.8/5"
          review="(1K+ reviews)"
          price="320$"
          quantity={1}
        />
        <ShoppingCard
          img={Shopping3}
          description="Berry Blast Smoothie"
          rating="4.8/5"
          review="(1K+ reviews)"
          price="320$"
          quantity={1}
        />
        <ShoppingCard
          img={Shopping4}
          description="Watermelon Smoothie"
          rating="4.8/5"
          review="(1K+ reviews)"
          price="320$"
          quantity={1}
        />
      </div>
    </div>
  );
};
export default MyCart;
