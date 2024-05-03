import BannerImg from "/img/BannerImg.png";
import BannerMobile from "/img/BannerMobile.png";

import { Typography } from "../Typography";

const Banner = () => {
  return (
    <section className="w-full min-w-[200px] min-h-[297px] md:min-h-[202px] bg-secondary flex justify-between md:rounded-2xl">
      <div className="flex flex-col max-w-[60%] pl-8 md:p-8 justify-center xl:justify-start items-start">
        <Typography
          variant="custom"
          className="text-[40px] font-semibold text-white hidden xl:block leading-none"
        >
          Discount
        </Typography>
        <Typography
          variant="custom"
          className="text-[40px] font-semibold text-white my-1 md:my-0 leading-10"
        >
          New Menu!
        </Typography>
        <Typography
          variant="paragraph1"
          className="!font-normal text-white max-w-[344px] mt-1"
        >
          Get Free Shipping Every $30 With No Minimum Purchase
        </Typography>
      </div>
      <img
        src={BannerImg}
        alt=""
        className="hidden md:block w-[40%] object-cover md:object-fill"
      />
      <img
        src={BannerMobile}
        alt=""
        className="block md:hidden w-[40%] max-h-[297px] object-cover"
      />
    </section>
  );
};
export default Banner;
