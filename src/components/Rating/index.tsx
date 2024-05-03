import RatingCard from "./RatingCard";

const Rating = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <RatingCard title="Total Visitors" quantity="300K" />
      </div>
      <div>
        <RatingCard title="Total Visitors" quantity="300K" />
      </div>
      <div>
        <RatingCard title="Total Visitors" quantity="300K" />
      </div>
      <div>
        <RatingCard title="Total Visitors" quantity="300K" />
      </div>
    </div>
  );
};
export default Rating;
