import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';
import tv from '../assets/tv1.png';
import tv2 from '../assets/tv2.png';
import tv3 from '../assets/tv3.png';
import tv4 from '../assets/tv4.png';
import tv5 from '../assets/tv5.png';
import tv6 from '../assets/tv6.png';
import tv7 from '../assets/tv7.png';
import tv8 from '../assets/tv8.png';
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Play } from "lucide-react"; 

function TV() {




    const image = [tv5, tv6, tv7, tv8];
    const images = [tv2, tv3, tv4];
    // Two separate comment sections
  const [commentsFirst, setCommentsFirst] = useState([
    { name: "Sandra Elu", text: "No sound" },
    {
      name: "Ife C this",
      text: "It’s amazing to see what the Lord is doing with Rhapsody of Realities in the lives of the physically impaired. No one is truly left behind. The Lord be praised forever more. Amen",
    },
    { name: "Daniel Wealth Toowfe", text: "Hallelujah" },
  ]);

  const [commentsSecond, setCommentsSecond] = useState([
    { name: "User1", text: "This is another comment section!" },
    { name: "User2", text: "Looks good to me!" },
  ]);

  const [newComment, setNewComment] = useState(""); // Track input field
  const [active, setActive] = useState("first"); // Default active section

  // Handle Comment Submission
  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;

    const newCommentObj = { name: "User", text: newComment };

    if (active === "first") {
      setCommentsFirst([...commentsFirst, newCommentObj]);
    } else {
      setCommentsSecond([...commentsSecond, newCommentObj]);
    }

    setNewComment(""); // Clear input field
  };






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
  MY TV
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



  <div className="flex  bg-white w-full gap-6 py-6 items-center justify-center  mx-auto">
      {/* Image Section (1/3 Width) */}
      <div className="relative w-[822px] h-[500px] mb-11">
        <img
          src={tv}
          alt="Thumbnail"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-black bg-opacity-60 w-16 h-16 flex items-center justify-center rounded-full text-white hover:bg-opacity-80 transition">
            <Play className="text-3xl" />
          </button>
        </div>
      </div>

  
      <div className="w-1/3 flex flex-col justify-between">
      {/* Tabs for Switching Comments */}
      <div className="flex justify-between border-b px-14">
        <h2
          className={`text-xl font-semibold cursor-pointer ${
            active === "first" ? "text-blue-600" : "text-gray-800"
          }`}
          onClick={() => setActive("first")}
        >
          Comments
        </h2>
        <h2
          className={`text-xl font-semibold cursor-pointer ${
            active === "second" ? "text-blue-600" : "text-gray-800"
          }`}
          onClick={() => setActive("second")}
        >
          Comments
        </h2>
      </div>

      {/* Comments List */}
      <div className="flex-grow mt-4 space-y-4 transition-opacity duration-500">
        {(active === "first" ? commentsFirst : commentsSecond).map(
          (comment, index) => (
            <div key={index} className="bg-blue-100 p-3 rounded-lg shadow">
              <p className="font-bold text-blue-700">{comment.name}</p>
              <p className="text-gray-700">{comment.text}</p>
            </div>
          )
        )}
      </div>

      {/* Comment Input */}
      <div className="mt-4 mb-10">
        <textarea
          className="w-full p-2 border rounded-lg shadow-md"
          rows="2"
          placeholder="Type your comment here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="mt-2 w-full bg-[#1B1C77] text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={handleCommentSubmit}
        >
          Submit Comment
        </button>
      </div>
    </div>






    </div>




 <div className="w-full px-6 bg-white ">
      <h2 className="text-2xl pl-16 font-semibold mb-4 ">Be Distribution Ready!</h2>
      <div className="flex justify-center px-4 gap-4">
        {images.map((img, index) => (
          <div key={index} className="w-1/3">
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full  transition-transform duration-300 hover:scale-105  mb-10"
            />
          </div>
        ))}
      </div>
    </div>





    <div className="w-full px-6  bg-white">
      <h2 className="text-2xl pl-16 font-semibold mb-4">Featured Categories</h2>
      <div className="grid grid-cols-4 gap-3 px-4">
        {image.map((img, index) => (
          <div key={index} className="w-full">
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full   transition-transform duration-300 hover:scale-105 mb-16"
            />
          </div>
        ))}
      </div>
    </div>




  </div>
    )
};

export default TV;