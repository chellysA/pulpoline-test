import { useState } from "react";
import Add from "../../../assets/icons/Add";
import Star from "../../../assets/icons/Star";
import Substract from "../../../assets/icons/Substract";
import ButtonBase from "../../ButtonBase";
import { Typography } from "../../Typography";

interface IShoppingCardProps {
  img: string;
  description: string;
  rating: string;
  review: string;
  price: string;
}
const ShoppingCard = ({
  img,
  description,
  rating,
  price,
  review,
}: IShoppingCardProps) => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="bg-white rounded-2xl flex p-4 md:mt-2">
      <div>
        <img src={img} className="rounded-xl h-full min-w-[120px]" alt="" />
      </div>
      <div className="w-full ml-4 flex flex-col justify-between">
        <div>
          <Typography variant="custom" className="text-base font-medium">
            {description}
          </Typography>
          <div className="flex mt-1 items-center">
            <Star />
            <Typography
              variant="paragraph3"
              className="text-base !font-semibold mr-1 ml-2"
            >
              {rating}
            </Typography>
            <Typography variant="paragraph3" className="text-base text-grey">
              {review}
            </Typography>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Typography variant="paragraph1" className="!font-bold">
            {price}
          </Typography>
          <div className="flex">
            <ButtonBase onClick={() => counter > 1 && setCounter(counter - 1)}>
              <Substract />
            </ButtonBase>
            <Typography variant="custom" className="text-2xl font-bold mx-4">
              {counter}
            </Typography>
            <ButtonBase
              onClick={() => {
                counter >= 1 && setCounter(counter + 1);
              }}
            >
              <Add />
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
