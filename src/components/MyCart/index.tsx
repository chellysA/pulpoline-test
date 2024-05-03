import NotificationsGrey from "../../assets/icons/NotificationsGrey";
import { Typography } from "../Typography";
import ShoppingCard from "./ShoppingCard";
import Shopping1 from "/img/Shopping1.png";
import Shopping2 from "/img/Shopping2.png";
import Shopping3 from "/img/Shopping3.png";
import Shopping4 from "/img/Shopping4.png";
//  TODO COLOCar en constanet y hacer map
const MyCart = () => {
  return (
    <section
      className="flex flex-col flex-1 mx-7 md:mx-0 mt-2 md:mt-0"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="700"
    >
      <div className="flex justify-between mb-5">
        <div>
          <Typography variant="custom" className="text-2xl font-semibold">
            My Cart
          </Typography>
          <Typography variant="paragraph1" className="font-normal mt-2">
            Shopping is happy
          </Typography>
        </div>
        <div className="animate-pulse">
          <NotificationsGrey />
        </div>
      </div>
      <div className="flex flex-col justify-between h-full flex-1 gap-2 lg:gap-0 mt-2">
        <ShoppingCard
          img={Shopping1}
          description="Boiled Dumplings"
          rating="4.8/5"
          review="(1K+ reviews)"
          price="320$"
        />
        <ShoppingCard
          img={Shopping2}
          description="Ayam Geprek Popular"
          rating="4.8/5"
          review="(1K+ reviews)"
          price="320$"
        />
        <ShoppingCard
          img={Shopping3}
          description="Berry Blast Smoothie"
          rating="4.8/5"
          review="(1K+ reviews)"
          price="320$"
        />
        <ShoppingCard
          img={Shopping4}
          description="Watermelon Smoothie"
          rating="4.8/5"
          review="(1K+ reviews)"
          price="320$"
        />
      </div>
    </section>
  );
};
export default MyCart;
