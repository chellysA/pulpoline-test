import ButtonBase from "../../ButtonBase";
import { Typography } from "../../Typography";

interface IOrdersHistorialCardProps {
  img: string;
  description: string;
}

const OrdersHistorialCard = ({
  img,
  description,
}: IOrdersHistorialCardProps) => {
  return (
    <div className="bg-white rounded-2xl flex p-4">
      <img
        src={img}
        className="rounded-xl h-full lg:min-w-[91px] min-w-[108px] lg:max-h-[91px] max-h-[108px]"
        alt=""
      />
      <div className="w-full ml-2 md:ml-5 flex flex-col justify-between">
        <Typography
          variant="custom"
          className="text-md xl:text-xl font-semibold"
        >
          {description}
        </Typography>
        <div className="md:flex justify-between items-center">
          <Typography
            variant="custom"
            className="text-md xl:text-xl text-grey font-medium"
          >
            7 Dec, 16:10
          </Typography>
          <ButtonBase
            onClick={() => {}}
            className="bg-primary px-11 md:px-7 py-3 my-1 md:mt-0 rounded-full text-xs md:text-base text-white font-poppinns"
          >
            Order Again
          </ButtonBase>
        </div>
      </div>
    </div>
  );
};
export default OrdersHistorialCard;
