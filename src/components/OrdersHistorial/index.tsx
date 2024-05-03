import { useState } from "react";
import ButtonBase from "../ButtonBase";
import Historial from "./Historial";
import orderHistorial from "../../constants/orderHistorial";
import deliveredHistorial from "../../constants/deliveredHistorial";
import finishedHistorial from "../../constants/finishedHistorial";
import Tab from "../Tab";
import { IProduct } from "../../types/product";

const tabs = [
  { label: "Order", data: orderHistorial },
  { label: "Delivered", data: deliveredHistorial },
  { label: "Finished", data: finishedHistorial },
];

const OrdersHistorial = () => {
  const [data, setData] = useState(orderHistorial);
  const [indexActive, setIndexActive] = useState(0);

  const handleSeeAll = () => {
    setData([...orderHistorial, ...deliveredHistorial, ...finishedHistorial]);
    setIndexActive(4);
  };
  const onClickTab = (indexTab: number, newData: IProduct[]) => {
    setData(newData);
    setIndexActive(indexTab);
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
          {tabs.map(({ label, data }, index) => (
            <Tab
              key={index + label}
              label={label}
              onClick={() => onClickTab(index, data)}
              isActive={index === indexActive}
            />
          ))}
        </ul>
        <ButtonBase
          onClick={handleSeeAll}
          children="See all"
          className="hidden md:block text-primary text-base font-medium font-poppinns"
        />
      </div>

      <Historial products={data} />
    </section>
  );
};

export default OrdersHistorial;
