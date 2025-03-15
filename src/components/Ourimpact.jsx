import { motion } from "framer-motion";
import Ourimpact1 from '../assets/Ourimpact1.png';
import Ourimpact2 from '../assets/Ourimpact2.png';
import { Check } from "lucide-react";
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';
import zelda1 from '../assets/zelda1.png';
import zelda2 from '../assets/zelda2.png';
import { Facebook, Twitter, Instagram } from "lucide-react";


function Ourimpact() {
  const authors = [
    {
      name: "Jenny Kia",
      role: "Fashion Designer, Blogger, Activist",
      image: [zelda2], // Replace with actual image path
    },
    {
      name: "Andress Rasel",
      role: "Blogger, Activist, Content Creator, Part-Time Designer",
      website: "gethugothemes.com",
      image: [zelda1], // Replace with actual image path
    },
    {
      name: "Jenny Kia",
      role: "Fashion Designer, Blogger, Activist",
      image: [zelda2], // Replace with actual image path
    },
  ];


  const posts = [
    {
      title: "HEALTH AND WELLNESS INITIATIVE GABON",
      image: "/images/post1.png",
      author: "Jessica Koli",
      date: "02 December 2022",
      readTime: "3 Min. To Read",
      category: "Travel",
      description: "Did you come here for something in particular or just general Riker-bashing",
    },
    {
      title: "QUALITY EDUCATION – CONGO BRAZZAVILLE",
      image: "/images/post2.png",
      author: "Jessica Koli",
      date: "02 December 2022",
      readTime: "3 Min. To Read",
      category: "Travel",
      description: "Did you come here for something in particular or just general Riker-bashing",
    },
  ];
    const post = [
      {
        title: "QUALITY EDUCATION – CONGO BRAZZAVILLE",
        image: "/images/post2.png",
        author: "Jessica Koli",
        date: "02 December 2022",
        readTime: "3 Min. To Read",
        category: "Travel",
        description: "Did you come here for something in particular or just general Riker-bashing",
      },
      {
        title: "HEALTH AND WELLNESS INITIATIVE GABON",
        image: "/images/post1.png",
        author: "Jessica Koli",
        date: "02 December 2022",
        readTime: "3 Min. To Read",
        category: "Travel",
        description: "Did you come here for something in particular or just general Riker-bashing",

  
      },
    // Add more posts as needed
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
      <div className="relative z-10 flex flex-col items-center justify-center mt-36 mb-16 text-white text-center px-16">
      <img 
          src={Arrow1}
          alt="Curved underline" 
          className="absolute right-1/2 md:right-[150px] -top-14 -translate-x-12 w-[80px] md:w-[90px]" 
        />
    <h1 className="text-4xl z-10 md:text-6xl lg:text-7xl font-kanit mb-8 px-8  leading-tight">
   CENTRAL AFRICA REGION <br/> IMPACT REPORTS
    </h1>
    <img 
          src={Orange}
          alt="Curved underline" 
          className="absolute left-1/2 md:left-[440px] bottom-[160px] -translate-x-1/2 w-[180px] md:w-[370px]" 
        />

    <p className="mt-6 sm:px-11 px-2 text-sm font-montserrat sm:text-base  md:text-sm lg:text-sm max-w-4xl">
    Rev.Chris Oyakhilome
  
    </p>
    <p className='  hover:text-green-500 font-montserrat md:text-sm lg:text-sm cursor-pointer '>  DSc, DSc, DD</p>
  </div>
  </motion.div>



  <div className="flex flex-col lg:flex-row px-6 py-4  bg-white gap-6">
      {/* Left Side - Blog Posts */}
      <div className="w-full lg:w-2/3 px-6">
        <h2 className="text-xl font-semibold pb-4 pt-6 ">
          <span className="bg-[#706FAB] text-white px-2 py-1 ">Recently</span> Posted
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-7 mt-4 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white  rounded-lg overflow-hidden">
              <img src={Ourimpact2} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="bg-[#DFF1F0] text-[#666666] px-2 py-1 text-xs rounded">{post.category}</span>
                <h3 className="font-semibold text-lg mt-2">{post.title}</h3>
                <p className="text-gray-500 text-sm">
                  {post.author} | {post.date} | {post.readTime}
                </p>
                <p className="text-gray-700 mt-2 text-sm">{post.description}</p>
              </div>
            </div> ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-7 gap-6">
          {post.map((post, index) => (
            <div key={index} className="bg-white  rounded-lg overflow-hidden">
              <img src={Ourimpact1} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="bg-[#DFF1F0] text-[#666666] px-2 py-1 text-xs rounded">{post.category}</span>
                <h3 className="font-semibold text-lg mt-2">{post.title}</h3>
                <p className="text-gray-500 text-sm">
                  {post.author} | {post.date} | {post.readTime}
                </p>
                <p className="text-gray-700 mt-2 text-sm">{post.description}</p>
              </div>
            </div> ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-7 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white  rounded-lg overflow-hidden">
              <img src={Ourimpact2} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="bg-[#DFF1F0] text-[#666666] px-2 py-1 text-xs rounded">{post.category}</span>
                <h3 className="font-semibold text-lg mt-2">{post.title}</h3>
                <p className="text-gray-500 text-sm">
                  {post.author} | {post.date} | {post.readTime}
                </p>
                <p className="text-gray-700 mt-2 text-sm">{post.description}</p>
              </div>
            </div> ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white  rounded-lg overflow-hidden">
              <img src={Ourimpact1} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="bg-[#DFF1F0] text-[#666666] px-2 py-1 text-xs rounded">{post.category}</span>
                <h3 className="font-semibold text-lg mt-2">{post.title}</h3>
                <p className="text-gray-500 text-sm">
                  {post.author} | {post.date} | {post.readTime}
                </p>
                <p className="text-gray-700 mt-2 text-sm">{post.description}</p>
              </div>
            </div> ))}
        </div>




      </div>

      {/* Right Side - Sidebar */}
      <div className="w-full lg:w-1/3 px-4">
        {/* Top Authors */}
        <div className="bg-white p-6  rounded-lg">
      {/* Header */}
      <h3 className="text-xl font-semibold text-gray-800 border-b pb-4">
        <span className="bg-[#706FAB] text-white px-2 py-1 rounded">Top</span> Authors
      </h3>

      {/* Author List */}
      <div className="mt-6 space-y-6">
        {authors.map((author, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Profile Image */}
            <img
              src={author.image}
              alt={author.name}
              className="w-14 h-14 rounded-full bg-gray-300"
            />

            {/* Info */}
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{author.name}</p>
              <p className="text-sm text-gray-500">
                {author.role}{" "}
                {author.website && (
                  <a href={`https://${author.website}`} className="text-blue-500 underline">
                    {author.website}
                  </a>
                )}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-2">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
        {/* Advertisement */}
        <div className="bg-[#706FAB] text-white px-4  text-left mb-6">
<h1 className="justify-end text-end pt-1"> Ad</h1>
          <h4 className="font-semibold mt-5 mb-3 text-xl">Want To Travel Sikkim <br/> By Car?</h4>
          <p className="text-sm mt-1 mb-4 pr-11">Did you come here for something in particular or just general Riker-bashing?</p>
          <button className="mt-2 mb-9 bg-white text-green-600  hover:bg-green-500 hover:text-gray-100 transition  px-4 py-1 rounded-md">Visit Us</button>
        </div>

        {/* Categories */}
        <div className="bg-white py-4  rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-gray-800 pb-2">
        <span className="bg-[#706FAB] text-white px-2 py-1 ">Categories</span> </h3>
          <ul className="text-sm text-gray-900 mt-3  space-y-4  ">
            <li className="flex border-b justify-between"><span>Lifestyle</span><span className="pr-6">09</span></li>
            <li className="flex border-b justify-between"><span>Travel</span><span className="pr-6">05</span></li>
            <li className="flex border-b justify-between"><span>Food</span><span className="pr-6">09</span></li>
            <li className="flex border-b justify-between"><span>Healthcare</span ><span className="pr-6">10</span></li>
            <li className="flex  justify-between"><span>Technology</span><span className="pr-6">03</span></li>
          </ul>
        </div>

        {/* Today’s Update */}
        <div className="bg-white py-4  rounded-lg ">
          <h3 className="text-lg font-semibold text-gray-800  pb-2">
          <span className="bg-[#706FAB] text-white px-2 py-1 ">Today's</span> Update</h3>
          <div className="grid grid-cols-2  gap-6 mt-6 mb-6 text-center">
            <div className="bg-[#dee8f5] transition-transform duration-300 hover:scale-105 rounded-md">
              <p className="text-xl mt-4 text-[#706FAB] font-semibold">14</p>
              <p className="text-sm mb-4 text-gray-500">New Posts</p>
            </div>
            <div className="bg-[#dae8f5] transition-transform duration-300 hover:scale-105 rounded-md">
              <p className="text-xl text-[#706FAB] mt-4 font-semibold">480</p>
              <p className="text-sm mb-4 text-gray-500">Total Visitors</p>
            </div>
            <div className="bg-[#dae8f5] transition-transform duration-300 hover:scale-105 rounded-md">
              <p className="text-xl text-[#706FAB] mt-4 font-semibold">29</p>
              <p className="text-sm mb-4 text-gray-500">New Subscribers</p>
            </div>
            <div className="bg-[#dae8f5] transition-transform duration-300 hover:scale-105 rounded-md">
              <p className="text-xl text-[#706FAB] mt-4 font-semibold">138</p>
              <p className="text-sm mb-4 text-gray-500">Blog Read</p>
            </div>
          </div>
        </div>

        {/* Search with Tags */}
        <div className="bg-white py-4  rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          <span className="bg-[#706FAB] text-white px-2 py-1 ">Search</span> With Tags
        </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 ">
            {["Travel", "Lifestyle", "Fashion", "Technology", "Business", "Design", "Health", "Food", "Art"].map((tag, index) => (
              <span key={index} className="border-2 text-gray-800 transition-transform duration-300 hover:scale-105 hover:bg-[purple-300] text-xs   px-6  space-x-8 py-1 rounded-md">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>







</div>


)
  };
  
  export default Ourimpact;