import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles (agar pehle add nahi kiye)
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      // navigation  
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoplay={{
        delay: 1000, // 1 second
        disableOnInteraction: false, // user swipe kare tab bhi autoplay chalta rahe
      }}
      loop={true} // infinite loop
      className="w-full h-[650px]"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
            Beds
          </h1>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1582582621959-48d27397dc69"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
            Sofas
          </h1>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1567016432779-094069958ea5"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
            Recliners
          </h1>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
            className="w-full h-full object-cover"
          />
          <h1 className="absolute bottom-6 left-6 text-white text-3xl font-bold">
            Dining
          </h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSlider;
