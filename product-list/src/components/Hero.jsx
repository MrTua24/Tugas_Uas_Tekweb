import React from 'react';
import Background from './Background';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import Photo1 from "../asset/food11.jpg";
import Photo2 from "../asset/food22.jpg";
import Photo3 from "../asset/food33.jpg";
import BackgroundImage from "../asset/Bg.jpg";
import Logo from "../asset/Logo.png";

export const Hero = () => {
  return (
    <div className="text-[#C1BAA1]">
      <div className="relative">
        <Background />
      </div>

      {/* Slider with content */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="relative z-10 w-full h-auto md:h-[500px] mt-20"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center max-w-[1240px] mx-auto w-full">
              <div className="flex-1">
                <img src={Photo1} alt="Orchestra" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mt-4">Health Food</h1>
                <p className="text-lg md:text-2xl mt-4 text-[#E38E49]">Lets to Health</p>
                <p className="text-base md:text-xl mt-2">konsep web ini untuk produk kesehatan</p>
                <button className="mt-6 px-6 py-3 bg-[#E38E49] text-white font-bold uppercase rounded">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center max-w-[1240px] mx-auto w-full">
              <div className="flex-1">
                <img src={Photo2} alt="Concert" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mt-4">Health food</h1>
                <p className="text-lg md:text-2xl mt-4 text-[#E38E49]">Explore the health food</p>
                <button className="mt-6 px-6 py-3 bg-[#E38E49] text-white font-bold uppercase rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center max-w-[1240px] mx-auto w-full">
              <div className="flex-1">
                <img src={Photo3} alt="Performance" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mt-4">health food</h1>
                <p className="text-lg md:text-2xl mt-4 text-[#E38E49]">Get to health</p>
                <button className="mt-6 px-6 py-3 bg-[#E38E49] text-white font-bold uppercase rounded">
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Background Image Section */}
      <div
        className="relative py-10 md:py-20 text-center text-white px-6 md:px-16"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold">Join us in an unforgettable eat health food journey</h2>
        <p className="text-lg md:text-xl mt-4 max-w-4xl mx-auto">
          "peduli kesehatan karena dengan kesehatan kita bisa melakukan semua aktivitas sehari-hari dengan memakan produk health"
        </p>
      </div>
      {/* Card Section Below Background */}
      <div className="py-24 mt-10">
        <h2 className="text-3xl font-bold text-center text-[#F0BB78] mb-10">
          this is health food
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={20} // Jarak antar card
          slidesPerView={1} // Default jumlah card per slide
          breakpoints={{
            640: { slidesPerView: 1 }, // 1 card untuk layar kecil
            768: { slidesPerView: 2 }, // 2 card untuk tablet
            1024: { slidesPerView: 3 }, // 3 card untuk desktop
            1060: { slidesPerView: 4 }, // 4 card untuk desktop lebar
          }}
          className="container mx-auto"
        >
          {/* Card Items */}
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden justify-center items-center">
              <img
                src="https://res-3.cloudinary.com/upserve/image/upload/c_thumb,g_center,w_150,h_140,f_auto,q_auto:best,dpr_3.0/v1593533662/eckaxnjr1omkt0vlr2d7.jpg"
                alt="Musician 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Salad Sayur</h3>
                <p className="text-gray-600 mt-2 text-center">Salad Sayur sederhana</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://th.bing.com/th/id/OIP.GCwGyWuAQaSK9UP1GwecRAHaJs?rs=1&pid=ImgDetMain"
                alt="Musician 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Greek Salad</h3>
                <p className="text-gray-600 mt-2 text-center">Mediteranian Greek Salad</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://easybudgetrecipes.com/wp-content/uploads/2020/11/Healthy-Waldorf-Salad-recipe.jpg"
                alt="Musician 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Waldorf Salad</h3>
                <p className="text-gray-600 mt-2 text-center">salad for a healthy meal</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://littlespicejar.com/wp-content/uploads/2021/05/Zesty-Italian-Pasta-Salad-12-scaled.jpg"
                alt="Musician 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Pasta Salad</h3>
                <p className="text-gray-600 mt-2 text-center">Salad Italian Pasta</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="relative bg-gradient-to-r from-[#0f2c1b] to-[#91de92] p-8 rounded-lg max-w-5xl mx-auto shadow-lg">
          {/* Gambar */}
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={Logo} 
              alt="Ticket Benefits"
              className="h-[550px] w-full mx-[150px] md:w-1/3 rounded-lg object-cover mb-6 md:mb-0 md:mr-6"
            />
            {/* Konten */}
            <div className="text-white md:w-2/3 mx-11">
              <h3 className="text-2xl font-bold mb-4">Ayoo beli produk Health food</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Akses lebih mudah</li>
                <li>pesan lebih gampang</li>
                <li>berbagai macam salad</li>
                <li>mulai salad biasa hingga salad yang unik</li>
                <li>ayoo beli produk health food</li>
              </ul>
              <button className="mt-6 px-6 py-3 bg-white text-[#E38E49] font-bold uppercase rounded">
                Buy Produk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
