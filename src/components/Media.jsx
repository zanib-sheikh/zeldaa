import { motion } from "framer-motion";
import Media1 from '../assets/Media1.png';
import M1 from '../assets/M1.png';
import M2 from '../assets/M2.png';
import M3 from '../assets/M3.png';
import M4 from '../assets/M4.png';
import M5 from '../assets/M5.png';
import M6 from '../assets/M6.png';
import M7 from '../assets/M7.png';
import M8 from '../assets/M8.png';
import M10 from '../assets/M10.png';
import M9 from '../assets/M9.png';
import M11 from '../assets/M11.png';
import M12 from '../assets/M12.png';
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';
import Girl from '../assets/Girl.png';
import Union from '../assets/Union.png';
import Girl2 from '../assets/Girl2.png';
import Image1 from '../assets/Image1.png';
import image3 from '../assets/image3.png';
import Image4 from '../assets/Image4.png';
import {Play ,} from  'lucide-react';
import line from '../assets/line.png';
function Media() {

    const winners = [
        {
          image: M1,
          year: "2024",
          color: "bg-[#BC99C3]",
        },
        {
          image: M2,
          year: "2023",
          color: "bg-[#706FAB]",
        },
        {
          image: M3,
          year: "2022",
          color: "bg-[#ED6031]",
        },
        {
          image: M4,
          year: "2021",
          color: "bg-[#BC99C3]",
        },
        
      ];

      const winnners = [
        {
          image: M5,
          year: "2020",
          color: "bg-[#706FAB]",
        },
        {
          image: M6,
          year: "2019",
          color: "bg-[#76B99A]",
        },
        {
          image: M7,
          year: "2018",
          color: "bg-[#000000]",
        },
        {
          image: M8,
          year: "2017",
          color: "bg-[#76B99A]",
        },
        
      ];
      const winnnerss = [
        {
          image: M9,
          year: "2016",
          color: "bg-[#656BC4]",
        },
        {
          image: M10,
          year: "2015",
          color: "bg-[#98DEE8]",
        },
        {
          image: M11,
          year: "2014",
          color: "bg-[#656BC4]",
        },
        {
          image: M12,
          year: "2013",
          color: "bg-[#76B99A]",
        },
        
      ];


    return ( 
        <div className="relative w-full  pt-8 bg-gradient-to-bl  from-[#706FAB] to-[#8887c4] min-h-screen">

<motion.div
  initial={{ rotateY: 90, opacity: 0 }}
  whileInView={{ rotateY: 2, opacity: 1 }}
  transition={{ duration: 0.9 }}
  className="bg-transparent text-white text-center"
>
      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center font-kanit justify-center mt-36 mb-16 text-white text-center px-16">
      <img 
          src={Arrow1}
          alt="Curved underline" 
          className="absolute right-1/2 md:right-[300px] -top-14 -translate-x-12 w-[80px] md:w-[90px]" 
        />
    <h1 className="text-4xl z-10 md:text-6xl lg:text-7xl font-kanit mb-8 px-8  leading-tight">
  OUR MEDIA 
    </h1>
    <img 
          src={Orange}
          alt="Curved underline" 
          className="absolute left-1/2 md:left-[480px] bottom-24 -translate-x-1/2 w-[180px] md:w-[280px]" 
        />
    <p className="mt-6 sm:px-11 px-2 text-sm font-montserrat sm:text-base  md:text-sm lg:text-sm max-w-4xl">
    Rev.Chris Oyakhilome
  
    </p>
    <p className='  hover:text-green-500 font-montserrat md:text-sm lg:text-sm cursor-pointer '>  DSc, DSc, DD</p>
  </div>
  </motion.div>


  
  <motion.div
  initial={{ x: -250, rotate: 0, opacity: 0 }}
  whileInView={{ x: 0, rotate: 0, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  className="bg-white text-white text-center w-full "
>
  <div className="w-full text-black mt-2 flex flex-col items-center justify-center">
  
  <h1 className="text-center text-3xl font-semibold justify-center mt-14 mb-4 font-montserrat">FUTURE AFRICA LEADERS FOUNDATION STAR WINNERS</h1>
  

    {/* Grid Layout for Responsive Columns */}
    <div className="flex flex-col md:flex-row gap-4 px-16 w-full max-w-full">
      
      {/* Left Column (Larger Image) */}
      <div className="relative transition-transform duration-300 hover:scale-105 w-full md:w-1/3 h-[320px] md:h-[495px]">
        <img src={Girl} alt="Sarah Eve" className="w-full h-full object-cover " />
  
  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white flex justify-between items-center">
  <div>
    <h2 className="font-bold text-lg text-left">Sarah Eve</h2>
    <p>How To Kickstart Your Freelancing Career?</p>
  </div>
  <button className="w-10 h-10 flex items-center justify-center bg-purple-500  transition-all duration-300 hover:bg-purple-600 hover:scale-105">
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <Play className="text-red-500 w-4 h-4" />
  </div>
</button></div>

      </div>

      {/* Right Column (2 Rows of Smaller Images) */}
      <div className="flex flex-col gap-4 w-full md:w-2/3">
        
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="transition-transform duration-300 hover:scale-105 relative w-full md:w-3/4 h-[240px]">
            <img src={Girl2} alt="Marry" className="w-full h-full object-cover " />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white flex justify-between items-center">
  <div>
    <h2 className="font-bold text-lg text-left">Marry</h2>
    <p>How To Kickstart Your Freelancing Career?</p>
  </div>
  <button className="w-10 h-10 flex items-center justify-center bg-purple-500  transition-all duration-300 hover:bg-purple-600 hover:scale-105">
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <Play className="text-red-500 w-4 h-4" />
  </div>
</button></div>
          </div>

          <div className="relative w-full md:w-1/2 h-[240px] transition-transform  duration-300 hover:scale-105">
            <img src={image3} alt="Eva Floris" className="w-full h-full object-cover " />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm px-4 py-4 text-white flex justify-between items-center">
  {/* Left Side - Text */}
  <div className="flex flex-col items-start">
    <h2 className="font-bold text-lg text-left">Eva Floris</h2>
    <p className="text-left">How To Kickstart Your Freelancing Career?</p>
  </div>

  {/* Right Side - Button */}
  <button className="w-10 h-10 flex items-center justify-center bg-purple-500  transition-all duration-300 hover:bg-purple-600 hover:scale-105">
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <Play className="text-red-500 w-4 h-4" />
  </div>
</button>
</div>

          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-1/2 h-[240px] transition-transform duration-300 hover:scale-105">
            <img src={Image4} alt="Anna Sornio" className="w-full h-full object-cover " />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white flex justify-between items-center">
            <div className='justufy-start items-start'>
    <h2 className="font-bold text-lg text-left">Anna Sornio</h2>
    <p className='text-left'>How To Kickstart Your Freelancing Career?</p>
  </div>
  <button className="w-10 h-10 flex items-center justify-center bg-purple-500  transition-all duration-300 hover:bg-purple-600 hover:scale-105">
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <Play className="text-red-500 w-4 h-4" />
  </div>
</button>

  </div>
          </div>

          <div className="relative w-full md:w-3/4 h-[240px] transition-transform duration-300 hover:scale-105">
            <img src={Image1} alt="Alex James" className="w-full h-full object-cover " />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm p-4 text-white flex justify-between items-center">
  <div>
    <h2 className="font-bold text-lg text-left">Alex James</h2>
    <p>How To Kickstart Your Freelancing Career?</p>
  </div>
  <button className="w-10 h-10 flex items-center justify-center bg-purple-500  transition-all duration-300 hover:bg-purple-600 hover:scale-105">
  <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
    <Play className="text-red-500 w-4 h-4" />
  </div>
</button></div>
          </div>
        </div>

      </div>

    </div>
  </div>
</motion.div>





<div className="bg-white px-2 py-4">
      <div className="flex  justify-center gap-0 px-10 mt-8 py-2">
      {winners.map((winner, index) => (
        <div key={index} className={` overflow-hidden tansition-transform duration-300 hover:scale-105 shadow-lg ${winner.color} text-white w-full`}>
          <img src={winner.image} alt={`FALA Star Winner ${winner.year}`} className="w-full  pt-4 pb-8 px-4 h-52 object-cover" />
          <div className="text-center pb-4 font-bold">
            {winner.year} FALA STAR <br/> WINNER
          </div>
        </div>
      ))}
    </div>


    <div className="flex justify-center gap-0 px-10 py-4">
      {winnners.map((winner, index) => (
        <div key={index} className={` overflow-hidden shadow-lg ${winner.color} text-white tansition-transform duration-300 hover:scale-105 w-full`}>
          <img src={winner.image} alt={`FALA Star Winner ${winner.year}`} className="w-full  pt-4 pb-8 px-4 h-52 object-cover" />
          <div className="text-center pb-4 font-bold">
            {winner.year} FALA STAR <br/> WINNER
          </div>
        </div>
      ))}
    </div>



    <div className="flex justify-center gap-0 mb-16 px-10 py-2">
      {winnnerss.map((winner, index) => (
        <div key={index} className={` overflow-hidden shadow-lg ${winner.color} text-white tansition-transform duration-300 hover:scale-105 w-full`}>
          <img src={winner.image} alt={`FALA Star Winner ${winner.year}`} className="w-full  pt-4 pb-8 px-4 h-52 object-cover" />
          <div className="text-center pb-4 font-bold">
            {winner.year} FALA STAR <br/> WINNER
          </div>
        </div>
      ))}
    </div>


    

</div>







  </div> 
  )
    };
  
  export default Media;