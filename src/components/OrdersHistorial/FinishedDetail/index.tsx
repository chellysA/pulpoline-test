import OrdersHistorialCard from "../Card";

const FinishedDetail = () => {
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
    </div>
  );
};
export default FinishedDetail;
