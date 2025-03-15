import React, { useState } from "react";
import { motion } from "framer-motion";
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';
import M1 from '../assets/M1.png';
import M2 from '../assets/M2.png';
import M3 from '../assets/M3.png';
import M4 from '../assets/M4.png';
import M5 from '../assets/M5.png';
import M6 from '../assets/M6.png';
import M7 from '../assets/M7.png';
import M8 from '../assets/M8.png';

const winners = [
    {
      year: 2024,
      name: "JULIENNE ARIORI",
      image: M1,

          color: "bg-[#BC99C3]",
      country: "BENIN REPUBLIC",
      title: "STAR PRIZE WINNER 2024",
      description: [
        "Julienne Ariori, a 23-year-old visionary young leader from Benin Republic, is committed to creating a sustainable and self-sufficient future for Africa.",
        "Julienne launched the “GMOs, Pesticides, STOP!” program, she locally sourced for materials and manufactured bio-pesticides thus reducing harmful chemical use by 30%. She distributed over 200 containers of the bio-pesticides to 500 market gardeners. She also organized the seminar “GMOs, Let’s Talk About Them” at the Faculty of Agronomic Sciences, reaching 500 students and promoting organic farming. She also sourced for organic materials and produced toothpaste. Her MoringaFresh toothpaste provided a fluoride-free option and raised over $9,500 to produce and distribute samples.",
        "Her belief in education is evident through her involvement in the “My Seed, My Life campaign. She also organized the agricultural holiday program in Adjarra, training 1,000 youths in sustainable farming. As CEO of African Green Initiative Centers (AGIC), she led the transformation of waste into bio-gas and eco-friendly coal, winning the FIC 2023 Best Initiative Award."
      ],
    
    },
    {
      year: 2023,
      name: "Winner 2023",
      country: "Country Name",
      title: "FALA STAR WINNER",
      description:[
      "Her initiatives focus on environmental conservation, healthy living, and youth empowerment through education and innovation.",
      "Julienne launched the 'GMOs, Pesticides, STOP!' program, promoting eco-friendly alternatives for sustainable farming.",
      "This winner made an impact through various sustainable development projects, empowering young leaders and fostering positive change in their community."
    ], image: M2,
      color: "bg-[#706FAB]",
    },
    {
      year: 2022,
      name: "Winner 2022",
      country: "Country Name",
      title: "FALA STAR WINNER",
      description:[
        "Her initiatives focus on environmental conservation, healthy living, and youth empowerment through education and innovation.",
        "Julienne launched the 'GMOs, Pesticides, STOP!' program, promoting eco-friendly alternatives for sustainable farming.",
        "This winner made an impact through various sustainable development projects, empowering young leaders and fostering positive change in their community."
      ],  image: M3,
      color: "bg-[#ED6031]",
    },
    {
      year: 2021,
      name: "Winner 2021",
      country: "Country Name",
      title: "FALA STAR WINNER",
      description:[
        "Her initiatives focus on environmental conservation, healthy living, and youth empowerment through education and innovation.",
        "Julienne launched the 'GMOs, Pesticides, STOP!' program, promoting eco-friendly alternatives for sustainable farming.",
        "This winner made an impact through various sustainable development projects, empowering young leaders and fostering positive change in their community."
      ], image: M4,
      color: "bg-[#BC99C3]",
    },
    {
      year: 2020,
      name: "Winner 2020",
      country: "Country Name",
      description:[
        "Her initiatives focus on environmental conservation, healthy living, and youth empowerment through education and innovation.",
        "Julienne launched the 'GMOs, Pesticides, STOP!' program, promoting eco-friendly alternatives for sustainable farming.",
        "This winner made an impact through various sustainable development projects, empowering young leaders and fostering positive change in their community."
      ], 
      title: "FALA STAR WINNER",
  image: M5,
      color: "bg-[#706FAB]",
    },
    {
      year: 2019,
      name: "Winner 2019",
      country: "Country Name",
      title: "FALA STAR WINNER",
      description:[
        "Her initiatives focus on environmental conservation, healthy living, and youth empowerment through education and innovation.",
        "Julienne launched the 'GMOs, Pesticides, STOP!' program, promoting eco-friendly alternatives for sustainable farming.",
        "This winner made an impact through various sustainable development projects, empowering young leaders and fostering positive change in their community."
      ],   image: M6,
      color: "bg-[#76B99A]",
    },
    {
      year: 2018,
      name: "Winner 2018",
      country: "Country Name",
      title: "FALA STAR WINNER",
      description:[
        "Her initiatives focus on environmental conservation, healthy living, and youth empowerment through education and innovation.",
        "Julienne launched the 'GMOs, Pesticides, STOP!' program, promoting eco-friendly alternatives for sustainable farming.",
        "This winner made an impact through various sustainable development projects, empowering young leaders and fostering positive change in their community."
      ],    image: M7,
      color: "bg-black",
    },
    {
      year: 2017,
      name: "Winner 2017",
      country: "Country Name",
      title: "FALA STAR WINNER",
      description:[
        "Her initiatives focus on environmental conservation, healthy living, and youth empowerment through education and innovation.",
        "Julienne launched the 'GMOs, Pesticides, STOP!' program, promoting eco-friendly alternatives for sustainable farming.",
        "This winner made an impact through various sustainable development projects, empowering young leaders and fostering positive change in their community."
      ],   image: M8,
      color: "bg-[#76B99A]",
    },
  ];
const Resources = () => {
    const [selectedWinner, setSelectedWinner] = useState(winners[0]);

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
       FUTURE AFRICA <br/> LEADERS
        </h1>
        <img 
              src={Orange}
              alt="Curved underline" 
              className="absolute left-1/2 md:left-[440px] bottom-[210px] -translate-x-1/2 w-[180px] md:w-[370px]" 
            />
        <p className="mt-6 sm:px-11 px-2 text-sm font-montserrat sm:text-base  md:text-sm lg:text-sm max-w-4xl">
        Rev.Chris Oyakhilome
      
        </p>
        <p className='  hover:text-green-500 font-montserrat md:text-sm lg:text-sm cursor-pointer '>  DSc, DSc, DD</p>
      </div>
      </motion.div>
    

      <div className="w-full bg-white px-8 mx-auto  py-8">
      {/* Selected Winner Display */}
      <div className="bg-white flex p-6 shadow-lg ">
        <div className="w-2/3 ">
        <img
          src={selectedWinner.image}
          alt={selectedWinner.name}
          className="w-full h-80 object-cover "
        /></div>
        <div className=" pl-6 w-4/5">
        <h2 className="text-xl font-bold mt-4">
          {selectedWinner.name} FROM {selectedWinner.country}
        </h2>
        <h3 className="font-bold text-lg text-gray-700">
          ({selectedWinner.title})
        </h3>
       {/* Render Description */}
       <div className="text-gray-700 text-sm space-y-3 mt-4">
        {selectedWinner.description.map((para, index) => (
          <p key={index} className="leading-relaxed">{para}</p>
        ))}
      </div></div>
      </div>

      {/* Winners Grid */}
      <div className="grid grid-cols-4 gap-4 mt-8">
        {winners.map((winner) => (
          <div
            key={winner.year}
            className={`p-4 ${winner.color} text-white  cursor-pointer transition-transform transform hover:scale-105`}
            onClick={() => setSelectedWinner(winner)}
          >
            <img
              src={winner.image}
              alt={winner.name}
              className="w-full h-40 object-cover "
            />
            <p className="text-center font-bold mt-2">{winner.year} FALA STAR WINNER</p>
          </div>
        ))}
      </div>
    </div>



</div>    
  );
};

export default Resources;
