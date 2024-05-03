import { useState } from "react";
import ButtonBase from "../ButtonBase";
import { Typography } from "../Typography";
import OrderDetail from "./OrderDetail";
import FinishedDetail from "./FinishedDetail";
import DeliveredDetail from "./DeliveredDetail";
import SeeAllDetails from "./SeeAllDetails";

const OrdersHistorial = () => {
  const [orderIsOpen, setOrderIsOpen] = useState(true);
  const [deliveredIsOpen, setDeliveredIsOpen] = useState(false);
  const [finishedIsOpen, setFinishedIsOpen] = useState(false);
  const [seeAllIsOpen, setSeeAllIsOpen] = useState(false);

  const handleOrders = () => {
    setOrderIsOpen(true);
    setDeliveredIsOpen(false);
    setFinishedIsOpen(false);
    setSeeAllIsOpen(false);
  };

  const handleDelivered = () => {
    setDeliveredIsOpen(true);
    setOrderIsOpen(false);
    setFinishedIsOpen(false);
    setSeeAllIsOpen(false);
  };

  const handleFinished = () => {
    setFinishedIsOpen(true);
    setOrderIsOpen(false);
    setDeliveredIsOpen(false);
    setSeeAllIsOpen(false);
  };

  const handleSeeAll = () => {
    setSeeAllIsOpen(true);
    setFinishedIsOpen(false);
    setDeliveredIsOpen(false);
    setOrderIsOpen(false);
  };

  return (
    <section
      className="mx-7 md:mx-0"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="700"
    >
      <div className="md:flex md:justify-between mt-10 mb-6">
        <ul className="grid grid-cols-3 gap-4">
          <li
            className={`${
              orderIsOpen && "text-black border-b-2 border-black"
            } mx-2 md:w-[75%] place-self-start text-center text-grey hover:text-black hover:border-b-2 hover:border-black`}
            onClick={handleOrders}
          >
            <Typography variant="custom" className="text-xl font-medium">
              Order
            </Typography>
          </li>
          <li
            className={`${
              deliveredIsOpen && "text-black border-b-2 border-black"
            } mx-2 md:w-full place-self-center text-center text-grey hover:text-black hover:border-b-2 hover:border-black`}
            onClick={handleDelivered}
          >
            <Typography variant="custom" className="text-xl font-medium">
              Delivered
            </Typography>
          </li>
          <li
            className={`${
              finishedIsOpen && "text-black border-b-2 border-black"
            } mx-2 md:w-[100%] place-self-end md:place-self-start  text-center text-grey hover:text-black hover:border-b-2 hover:border-black`}
            onClick={handleFinished}
          >
            <Typography variant="custom" className="text-xl font-medium">
              Finished
            </Typography>
          </li>
        </ul>
        <ButtonBase
          onClick={handleSeeAll}
          children="See all"
          className="hidden md:block text-primary text-base font-medium font-poppinns"
        />
      </div>
      {orderIsOpen && <OrderDetail />}
      {deliveredIsOpen && <DeliveredDetail />}
      {finishedIsOpen && <FinishedDetail />}
      {seeAllIsOpen && <SeeAllDetails />}
    </section>
  );
};

export default OrdersHistorial;
