import { Typography } from "../../Typography";

interface IRatingProps {
  title: string;
  quantity: string;
}
const RatingCard = ({ title, quantity }: IRatingProps) => {
  return (
    <div className="bg-white rounded-lg min-w-[182px] md:min-w-[176px] min-h-[82px] md:min-h-[99px] flex flex-col justify-center items-center">
      <Typography variant="paragraph2" className="text-grey font-medium">
        {title}
      </Typography>
      <Typography variant="custom" className="text-2xl font-semibold">
        {quantity}
      </Typography>
    </div>
  );
};
export default RatingCard;
