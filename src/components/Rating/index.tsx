import RatingCard from "./RatingCard";

const Rating = () => {
  return (
    <section className="grid grid-cols-2 gap-2 mx-7 md:mx-0 mt-5 lg:mt-0">
      <RatingCard title="Total Visitors" quantity="300K" />
      <RatingCard title="Total Visitors" quantity="300K" />
      <RatingCard title="Total Visitors" quantity="300K" />
      <RatingCard title="Total Visitors" quantity="300K" />
    </section>
  );
};
export default Rating;
