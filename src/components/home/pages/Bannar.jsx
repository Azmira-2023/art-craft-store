import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation styles
import bg from "../../../assets/images/bg.png";
import b2 from "../../../assets/images/b2.jpg";
import bg1 from "../../../assets/images/bg1.png";

const Bannar = () => {
  return (
    <div className="mt-0 border border-white text-white">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-96 md:h-[36rem] object-cover"
              src={bg}
              alt="art image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-96 md:h-[36rem] object-cover"
              src={b2}
              alt="art image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-96 md:h-[36rem] object-cover"
              src={bg1}
              alt="art image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Bannar;
