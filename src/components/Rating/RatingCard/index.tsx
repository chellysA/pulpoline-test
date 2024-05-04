import { Typography } from "../../Typography";

interface IRatingProps {
  title: string;
  quantity: string;
}
const RatingCard = ({ title, quantity }: IRatingProps) => {
  return (
    <div
      className="bg-white rounded-lg min-w-[182px] md:min-w-[297px] flex flex-col justify-center items-center"
      data-aos="flip-left"
      data-aos-delay="600"
    >
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
