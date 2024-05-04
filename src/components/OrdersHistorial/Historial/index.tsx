import { IProduct } from "../../../types/product";
import OrdersHistorialCard from "../Card";

interface IProps {
  products: IProduct[];
}

const Historial: React.FC<IProps> = ({ products }) => {
  return (
    <>
      <div className="grid grid-flow-row auto-rows-max gap-y-2 overflow-auto h-full xl:max-h-[385px]">
        {products.map((product, index) => (
          <OrdersHistorialCard
            key={index + product.id}
            img={product.img}
            description={product.description}
          />
        ))}
      </div>
    </>
  );
};
export default Historial;
