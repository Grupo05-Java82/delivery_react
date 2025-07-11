
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion"; // 👈 animação


const banner =[ "https://cms-cdn.saipos.com/assets/2022/09/14/Promoo-delivery-SAIPOS-sistema-para-restaurantes-1_uid_6322204a65860.jpg", "https://ik.imagekit.io/gqta2uhtht/1b46ac68-2f58-4e92-ba65-a83312a36d51.jpg", "https://ik.imagekit.io/gqta2uhtht/abf2c6d8-855c-45f3-b92d-ac64c2a32d4d.jpg", "https://ik.imagekit.io/gqta2uhtht/011nov1_5.jpg"]

export default function CarrosselMedio() {
  return (
    <motion.div
      className="w-full max-w-6xl mx-auto px-4 pl-25"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        className="rounded-xl"
      >
        {banner.map((imagem, i) => (
          <SwiperSlide key={i} className=" flex items-center justify-center p-10">
            <img
              src={imagem}
              alt={`Destaque ${i}`}
              className="w-[900px] h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
