import DeliveredDetail from "../DeliveredDetail";
import FinishedDetail from "../FinishedDetail";
import OrderDetail from "../OrderDetail";

const SeeAllDetails = () => {
  return (
    <div className="overflow-y-scroll max-h-[381px]">
      <div className="mb-2">
        <OrderDetail />
      </div>
      <div className="mb-2">
        <DeliveredDetail />
      </div>
      <FinishedDetail />
    </div>
  );
};

export default SeeAllDetails;
