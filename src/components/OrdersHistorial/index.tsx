import ButtonBase from "../ButtonBase";
import { Typography } from "../Typography";
import OrderDetail from "./OrderDetail";
import Order1 from "../../../public/img/Order1.png";
import Order2 from "../../../public/img/Order2.png";
import Order3 from "../../../public/img/Order3.png";

const OrdersHistorial = () => {
  return (
    <div>
      <div className="md:flex md:justify-between mb-6">
        <ul className="grid grid-cols-3 gap-4">
          <li className="mx-2 md:w-[75%] place-self-start text-center text-grey hover:text-black hover:border-b-2 hover:border-black">
            <Typography variant="subheading1" className="font-medium">
              Order
            </Typography>
          </li>
          <li className="mx-2 md:w-full place-self-center text-center text-grey hover:text-black hover:border-b-2 hover:border-black">
            <Typography variant="subheading1" className="font-medium">
              Delivered
            </Typography>
          </li>
          <li className="mx-2 md:w-[100%] place-self-end md:place-self-start  text-center text-grey hover:text-black hover:border-b-2 hover:border-black">
            <Typography variant="subheading1" className="font-medium">
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
    </div>
  );
};

export default OrdersHistorial;
