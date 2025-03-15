import React from "react";
import { motion } from "framer-motion";
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';
import flag from '../assets/flag.png';
import nm1 from '../assets/nm1.png';
import nm2 from '../assets/nm2.png';
import nm4 from '../assets/nm4.png';
import nm3 from '../assets/nm3.png';
const Nominees = () => {



    const nominees = [
        {
          name: "Akran Sebai",
          age: 21,
          country: "Kenya",
          flag: [flag],
          image: [nm1], // Replace with actual image URL
        },
        {
          name: "Jane Doe",
          age: 25,
          country: "Ghana",
          flag: [flag],
          image: [nm4], 
         },
        {
          name: "John Smith",
          age: 28,
          country: "Nigeria",
          flag: [flag],
          image: [nm2],   },
        {
          name: "Alice Brown",
          age: 24,
          country: "South Africa",
          flag: [flag],
          image: [nm3],    },
      ];
      


  return (
    <div className="relative w-full  pt-12 bg-gradient-to-bl  from-[#706FAB] to-[#8887c4] min-h-screen">

    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      whileInView={{ rotateY: 2, opacity: 1 }}
      transition={{ duration: 0.9 }}
      className="bg-transparent text-white text-center"
    >
          {/* Page Content */}
          <div className="relative z-10 flex flex-col items-center justify-center mt-36 mb-36 text-white text-center px-6">
          <img 
              src={Arrow1}
              alt="Curved underline" 
              className="absolute right-1/2 md:right-[180px] -top-14 -translate-x-12 w-[80px] md:w-[90px]" 
            />
        <h1 className="text-4xl z-10 md:text-6xl lg:text-6xl font-kanit mb-8  leading-tight">
        FUTURE AFRICA LEADERS <br/> FOUNDATION 2024 NOMINEES 
        </h1>
        <img 
              src={Orange}
              alt="Curved underline" 
              className="absolute left-1/2 md:left-[800px] bottom-[100px] -translate-x-1/2 w-[180px] md:w-[370px]" 
            />
        <p className="mt-6 sm:px-11 px-2 text-sm font-montserrat sm:text-base  md:text-sm lg:text-sm max-w-4xl">
        Rev.Chris Oyakhilome
      
        </p>
        <p className='  hover:text-green-500 font-montserrat md:text-sm lg:text-sm cursor-pointer '>  DSc, DSc, DD</p>
      </div>
      </motion.div>
    

      <div className="px-16 w-full  bg-white mx-auto ">
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-3 pt-8 gap-6">
        {nominees.map((nominee, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-4 flex flex-col items-center text-center shadow-md"
          >
            <img
              src={nominee.image}
              alt={nominee.name}
              className="w-32 h-32 rounded-full  object-cover"
            />
            <img
              src={nominee.flag}
              alt={`${nominee.country} flag`}
              className="w-8 h-6 mt-2"
            />
           <p className="text-lg mt-2">
  <span className="font-bold">{nominee.name}</span> ({nominee.age} years old)
</p>
          </div>
        ))}
      </div>
   

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-3 gap-6">
        {nominees.map((nominee, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-4 flex flex-col items-center text-center shadow-md"
          >
            <img
              src={nominee.image}
              alt={nominee.name}
              className="w-32 h-32 rounded-full  object-cover"
            />
            <img
              src={nominee.flag}
              alt={`${nominee.country} flag`}
              className="w-8 h-6 mt-2"
            />
           <p className="text-lg mt-2">
  <span className="font-bold">{nominee.name}</span> ({nominee.age} years old)
</p>
          </div>
        ))}
      </div>
   

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-3 gap-6">
        {nominees.map((nominee, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-4 flex flex-col items-center text-center shadow-md"
          >
            <img
              src={nominee.image}
              alt={nominee.name}
              className="w-32 h-32 rounded-full  object-cover"
            />
            <img
              src={nominee.flag}
              alt={`${nominee.country} flag`}
              className="w-8 h-6 mt-2"
            />
           <p className="text-lg mt-2">
  <span className="font-bold">{nominee.name}</span> ({nominee.age} years old)
</p>
          </div>
        ))}
      </div>
   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-3 pb-8 gap-6">
        {nominees.map((nominee, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg p-4 flex flex-col items-center text-center shadow-md"
          >
            <img
              src={nominee.image}
              alt={nominee.name}
              className="w-32 h-32 rounded-full  object-cover"
            />
            <img
              src={nominee.flag}
              alt={`${nominee.country} flag`}
              className="w-8 h-6 mt-2"
            />
           <p className="text-lg mt-2">
  <span className="font-bold">{nominee.name}</span> ({nominee.age} years old)
</p>
          </div>
        ))}
      </div>
      </div>



</div>    
  );
};

export default Nominees;
