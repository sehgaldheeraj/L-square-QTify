/* eslint-disable import/no-anonymous-default-export */
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../Card";
import "./carousel.css";
export default ({ data, navid }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={8}
        spaceBetween={40}
        navigation={{
          nextEl: `.arrow-left-${navid}`,
          prevEl: `.arrow-right-${navid}`,
        }}
        virtual
      >
        {data.map((card) => (
          <SwiperSlide key={card.id}>
            <Card
              imageSrc={card.image}
              followCount={card.follows}
              label={card.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`arrow-left-${navid} arrow-left arrow`}>
        <img src="/LeftIcon.png" alt="leftIcon" />
      </div>
      <div className={`arrow-right-${navid} arrow-right arrow`}>
        <img src="/RightIcon.png" alt="RightIcon" />
      </div>
    </div>
  );
};
