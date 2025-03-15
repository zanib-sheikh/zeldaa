import { motion } from "framer-motion";
import Blog1 from '../assets/Blog1.png';
import blog2 from '../assets/blog2.png';
import zelda1 from '../assets/zelda1.png';
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';



import React from "react";

const articles = [
  {
    id: 1,
    author: "Jake Will.",
    authorImage: [zelda1], // Replace with author's image
    title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
    content:
      "This article was written by Jake Willhoite from Healthlisted.com. Strength in basketball isn't all about a massive body mass or ripped muscles.",
    date: "04 June 2023",
    image: [Blog1], // Replace with actual image URL
  },
  {
    id: 2,
    author: "Fred Jaxson",
    title: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
    content:
      "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
    date: "03 June 2023",
    image: [blog2], // Replace with actual image URL
  },
  {
    id: 3,
    author: "Jake Will.",
    title: "5 Exercises Basketball Players Should Be Using To Develop Strength",
    content:
      "This article was written by Jake Willhoite from Healthlisted.com. Strength in basketball isn't all about a massive body mass or ripped muscles.",
    date: "04 June 2023",
    image: [blog2], // Replace with actual image URL
  },
  {
    id: 4,
    author: "Fred Jaxson",
    title: "Golden Knights out to fulfill owner's quest to win Stanley Cup in 6th year",
    content:
      "The Vegas Golden Knights will play the Florida Panthers in the Stanley Cup Final beginning Saturday.",
    date: "03 June 2023",
    image: [blog2], // Replace with actual image URL
  },
];



const Blog = () => {
    return ( 
        <div className="relative w-full  pt-8 bg-gradient-to-bl  from-[#706FAB] to-[#8887c4] min-h-screen">

<motion.div
  initial={{ rotateY: 90, opacity: 0 }}
  animate={{ rotateY: 2, opacity: 1 }}
  transition={{ duration: 0.5, ease: "easeOut" }} // Slightly longer duration
  className="bg-transparent text-white text-center"
>

      {/* Page Content */}
      <div className="relative z-10 flex font-kanit flex-col items-center justify-center mt-36 mb-16 text-white text-center px-16">
      <img 
          src={Arrow1}
          alt="Curved underline" 
          className="absolute right-1/2 md:right-[480px] -top-14 -translate-x-12 w-[80px] md:w-[90px]" 
        />
    <h1 className="text-4xl md:text-6xl z-20 lg:text-7xl font-kanit mb-8 px-8  leading-tight">
  BLOG 
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



  
<div className="bg-white w-full ">
  <div className=" mx-auto  px-4 py-8">
      <nav className="flex px-36 justify-between border-b-2 mb-16 border-b-gray-400 pb-2  text-gray-500">
        <a href="#" className="text-black font-semibold border-b-4  pb-1">All Stories</a>
        <a href="#" className="hover:text-black">Change Makers</a>
        <a href="#" className="hover:text-black">From The Field</a>
        <a href="#" className="hover:text-black">Prayers</a>
        <a href="#" className="hover:text-black">Special Features</a>
        <a href="#" className="hover:text-black">Voices</a>
      </nav>
      <div className="space-y-8 px-16 mt-8">
        {articles.map((article) => (
          <div key={article.id} className="flex space-x-6 border-b-2 border-b-gray-500 pb-4">
            <img src={article.image} alt={article.title} className="w-[370px] h-[240px] object-cover" />
            <div>
              
              <p className="text-sm text-gray-500">{article.author}</p>
              <h2 className="text-[32px] font-semibold text-gray-800">{article.title}</h2>
              <p className="text-gray-600 text-[20px] mt-4 ">{article.content}</p>
              <p className="text-xs text-gray-400 text-[14px] mt-4">{article.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>




  </div>
  )
  };
  
  export default Blog;