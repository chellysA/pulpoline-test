import BannerImg from "../../../public/img/BannerImg.png";
import BannerMobile from "../../../public/img/BannerMobile.png";

import { Typography } from "../Typography";

const Banner = () => {
  return (
    <div className="w-full md:min-w-[813px] h-full min-h-[297px] md:min-h-[202px] bg-secondary flex justify-between md:rounded-2xl">
      <div className="flex flex-col max-w-[65%] pl-8 md:p-8 justify-center md:justify-start items-start">
        <Typography
          variant="custom"
          className="text-[40px] font-semibold text-white hidden md:block leading-none"
        >
          Discount
        </Typography>
        <Typography
          variant="custom"
          className="text-[40px] font-semibold text-white"
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
      <img src={BannerImg} alt="" className="hidden md:block" />
      <img
        src={BannerMobile}
        alt=""
        className="block md:hidden absolute right-0"
      />
    </div>
  );
};
export default Banner;
