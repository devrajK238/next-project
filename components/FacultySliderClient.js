"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import "swiper/css/pagination";
import "@/styles/FacultySlider.css";
import "@/styles/About.css";

export default function FacultySliderClient({ faculty }) {
  console.log("📌 Faculty received in client:", faculty); // debug in browser console

  if (!faculty || faculty.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "#ff5722" }}>
        No faculty data available.
      </p>
    );
  }

  return (
    <section>
      <div className="container">
        <div className="facultySliderWrapper">
          <h2 className="facultyHeading">Our Faculty</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {faculty.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="facultyCard">
                  <div className="facultyImageWrapper">
                    {/* <img src={member.image} alt={member.name} /> */}

                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                    ></Image>
                  </div>
                  <h3>{member.name}</h3>
                  <p className="facultyPosition">{member.position}</p>
                  <p className="facultyEmail">{member.email}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
