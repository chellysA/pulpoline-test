import OrdersHistorialCard from "../Card";

const OrderDetail = () => {
  return (
    <div className="grid grid-flow-row auto-rows-max gap-y-2">
      <OrdersHistorialCard
        img="/img/Order1.png"
        description="Sambal Fried Fish with Fresh Vegetables"
      />
      <OrdersHistorialCard
        img="/img/Order2.png"
        description="Archipelago Noodles with Chicken Katsu"
      />
      <OrdersHistorialCard
        img="/img/Order3.png"
        description="Salted Egg Chicken With Mayonnaise"
      />
    </div>
  );
};
export default OrderDetail;
