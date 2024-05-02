import ButtonBase from "../../ButtonBase";
import { Typography } from "../../Typography";

interface IOrderDetailProps {
  img: string;
  description: string;
}

const OrderDetail = ({ img, description }: IOrderDetailProps) => {
  return (
    <div className="bg-white rounded-2xl flex p-4">
      <div>
        <img
          src={img}
          className="rounded-xl h-full min-w-[108px] md:min-w-[91px]"
          alt=""
        />
      </div>
      <div className="w-full ml-2 md:ml-5 flex flex-col justify-between">
        <Typography
          variant="custom"
          className="text-sm md:text-xl font-semibold"
        >
          {description}
        </Typography>
        <div className="md:flex justify-between items-center">
          <Typography
            variant="custom"
            className="text-xs md:text-xl text-grey font-medium"
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
export default OrderDetail;
