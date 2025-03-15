import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import LIN1 from '../assets/LIN1.png';

const LIN = () => {
  return (
    <div className="flex flex-col md:flex-row  mt-20 py-10 px-16 ">
      {/* Left Side - Image with Swiper */}
      <div className="md:w-1/2">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          <SwiperSlide>
            <img
              src={LIN1}
              alt="Leadership Event 1"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
               src={LIN1}
              alt="Leadership Event 2"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={LIN1}
              alt="Leadership Event 3"
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
        </Swiper>


        <div>
        <h1 className="text-[26px] font-bold mt-14">Leadership Initiative Network</h1>
            <p className="text-[16px]">The FALF Leadership Initiative Network(LIN) is a network of exceptional young African leaders who are driven to proffer sustainable solutions and changes in their communities and countries. The leadership initiative network stands as a formidableforce within the realm of africa's development. It beckons us to embrace our roles as architects of change, encouraging us to build a future where african leadership is synonymous with progress, innovation, and sustainable development.</p>
        </div>
        <div className=" mt-4">
      <h2 className="text-2xl font-bold mb-4">Benefits of Leadership Initiative Network</h2>
      <ul className="space-y-3 ">
        <li>
          <strong className="text-gray-800 font-semibold">1. RECOGNITION AND AWARD</strong>
          <p>
            Members of LIN have the opportunity to compete and win the prestigious{" "}
            <strong>Africa Leaders Awards (FALA)</strong>
          </p>
        </li>
        <li>
          <strong className="text-gray-800 font-semibold">2. CAPACITY BUILDING</strong>
          <p>
            Unlimited access to mentorship, training programs, workshops, other
            capacity-building, and conferences.
          </p>
        </li>
        <li>
          <strong className="text-gray-800 font-semibold">3. NETWORKING OPPORTUNITIES</strong>
          <p>
            Access to professionals in diverse fields within the network.
          </p>
        </li>
        <li>
          <strong className="text-gray-800 font-semibold">4. SUPPORT SYSTEM</strong>
          <p>
            Provides a supportive community where you can share challenges and successes
            with peers in the network.
          </p>
        </li>
      </ul>
    </div>
      </div>

      {/* Right Side - Form */}
      <div className="pl-8  w-full ">
      <div className="md:w-full  bg-gray-100 px-12 py-14">
        <h2 className="text-3xl font-bold text-[#706FAB] text-center mb-8">
          Join Leadership Initiative Network Today
        </h2>

        <form className="flex flex-col  text-black space-y-4">
          <div className="flex space-x-2">
            <input type="text" placeholder="First Name" className="input-field" />
            <input type="text" placeholder="Last Name" className="input-field" />
          </div>
          <input type="email" placeholder="Email" className="input-field" />
          <div className="flex space-x-2">
            <input type="text" placeholder="+213" className="w-16 text-center input-field" />
            <input type="text" placeholder="Phone Number" className="flex-1 input-field" />
          </div>
          <input type="text" placeholder="Country" className="input-field" />
          <input type="text" placeholder="City" className="input-field" />
          <input type="date" placeholder="Date of Birth" className="input-field" />
          <input type="text" placeholder="Gender" className="input-field" />
          <input type="text" placeholder="Profession" className="input-field" />
          <input type="text" placeholder="Qualifications" className="input-field" />
          <textarea placeholder="Your Profile" className="input-field h-24"></textarea>

          <div className="flex justify-center items-center w-full">
  <button className="bg-[#706FAB] text-white w-1/3 py-2 rounded-md text-lg hover:bg-green-500 transition">
    Sign Up
  </button>
</div>

        </form>
      </div>
      </div>
    </div>
  );
};

// Tailwind Custom Styling for Inputs


export default LIN;