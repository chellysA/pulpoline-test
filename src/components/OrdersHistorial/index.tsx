import ButtonBase from "../ButtonBase";
import { Typography } from "../Typography";
import OrderDetail from "./OrderDetail";
import Order1 from "/img/Order1.png";
import Order2 from "/img/Order2.png";
import Order3 from "/img/Order3.png";

const OrdersHistorial = () => {
  return (
    <section className="mx-7 md:mx-0">
      <div className="md:flex md:justify-between mt-10 mb-6">
        <ul className="grid grid-cols-3 gap-4">
          <li className="mx-2 md:w-[75%] place-self-start text-center text-grey hover:text-black hover:border-b-2 hover:border-black">
            <Typography variant="custom" className="text-xl font-medium">
              Order
            </Typography>
          </li>
          <li className="mx-2 md:w-full place-self-center text-center text-grey hover:text-black hover:border-b-2 hover:border-black">
            <Typography variant="custom" className="text-xl font-medium">
              Delivered
            </Typography>
          </li>
          <li className="mx-2 md:w-[100%] place-self-end md:place-self-start  text-center text-grey hover:text-black hover:border-b-2 hover:border-black">
            <Typography variant="custom" className="text-xl font-medium">
              Finished
            </Typography>
          </li>
        </ul>
        <ButtonBase
          onClick={() => {}}
          children="See all"
          className="hidden md:block text-primary text-base font-medium font-poppinns"
        />
      </div>
      <div className="grid grid-flow-row auto-rows-max gap-y-2">
        <OrderDetail
          img={Order1}
          description="Sambal Fried Fish with Fresh Vegetables"
        />
        <OrderDetail
          img={Order2}
          description="Archipelago Noodles with Chicken Katsu"
        />
        <OrderDetail
          img={Order3}
          description="Salted Egg Chicken With Mayonnaise"
        />
      </div>
    </section>
  );
};

export default OrdersHistorial;
