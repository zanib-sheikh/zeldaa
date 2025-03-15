import React from "react";
import { motion } from "framer-motion";
import Arrow1 from '../assets/Arrow1.png';
import Orange from '../assets/Orange.png';
import booknow from '../assets/booknow.png';
const GiveNow = () => {
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
SPONSOR A <br/> PROJECT IN AFRICA
    </h1>
    <img 
          src={Orange}
          alt="Curved underline" 
          className="absolute left-1/2 md:left-[480px] bottom-44 -translate-x-1/2 w-[180px] md:w-[280px]" 
        />
    <p className="mt-6 sm:px-11 px-2 text-sm font-montserrat sm:text-base  md:text-sm lg:text-sm max-w-4xl">
    Rev.Chris Oyakhilome
  
    </p>
    <p className='  hover:text-green-500 font-montserrat md:text-sm lg:text-sm cursor-pointer '>  DSc, DSc, DD</p>
  </div>
  </motion.div>


  <div className="bg-white text-black p-8 text-[16px]   w-full mx-auto my-10">
      {/* Bank Details */}
      <div className="grid px-16 grid-cols-2 gap-x-8 gap-y-3">
        {/* Naira Account */}
        <div>
          <h2 className="font-semibold mb-2 text-gray-700">Naira Account</h2>
          <p className="font-bold">Bank: PARALLEX BANK</p>
          <p className="font-bold">Account Name: FUTURE AFRICA LEADERS FOUNDATION</p>
          <p className="font-bold mb-6">Account Number: 1000054704</p>
        </div>

        {/* Dollars Account */}
        <div>
          <h2 className="font-semibold mb-2 text-gray-700">POUNDS Account</h2>
          <p className="font-bold">Bank: STERLING BANK</p>
          <p className="font-bold">Account Name: FUTURE AFRICA LEADERS FORUM</p>
          <p className="font-bold mb-6">Account Number: 0073056516</p>
        </div>

        {/* Pounds Account */}
        <div>
          <h2 className="font-semibold mb-2 text-gray-600">DOLLARS Account</h2>
          <p className="font-bold">Bank: STERLING BANK</p>
          <p className="font-bold">Account Name: FUTURE AFRICA LEADERS FORUM</p>
          <p className="font-bold mb-2">Account Number: 0073056671</p>
          <div className="bg-blue-500 flex items-center w-36 h-16 p-1 rounded-xl overflow-hidden">
  <img src={booknow} alt="Card Image" className="w-12  overflow-hidden" />
  <span className="text-white text-xs font-semibold ml-4">Pay With <br/> KingsPay</span>
</div>
</div>

        {/* Euro Account */}
        <div>
          <h2 className="font-semibold mb-2 text-gray-600">EURO Account</h2>
          <p className="font-bold">Bank: STERLING BANK</p>
          <p className="font-bold">Account Name: FUTURE AFRICA LEADERS FORUM</p>
          <p className="font-bold">Account Number: 0073056994</p>
        </div>
      </div>
<div className="flex justify-between items-center px-16 mb-20 text-[16px] space-x-12">
      {/* Sponsorship Information */}
      <div className="mt-8 w-1/2">
        <h2 className=" font-bold">POLITICAL PROJECT SPONSORSHIP</h2>
        <p>
          The political project sponsorship is a new focus for the foundation, aimed at raising the youths of Africa to take up political roles and offices across Africa.
          The sponsorship of this project will entail strategic training sessions, United Nation Meetings & Trainings, Press Conferences, and publicity of political aspirants.
        </p>
      </div>

      <div className="mt-4 w-1/2">
        <h2 className=" font-bold">HUMANITARIAN PROJECT SPONSORSHIP</h2>
        <p>
          The humanitarian project sponsorship consists of acts of service geared toward community building in Africa. These projects include back-to-school projects, slum revamps, medical outreaches, and sanitation projects.
        </p>
      </div>
      </div>
      <div className="mt-4 px-16 text-[16px]">
        <h2 className="font-bold">PROJECT AFRICA TV SERIES</h2>
        <p>
        Project Africa is an initiative of the Future Africa Leaders Foundation birthed to showcase the impact of our Future Africa Leaders. Project Africa is a 30-minute
TV documentary series that showcases the different projects embarked upon by the FALA Ambassadors in solving the problems and challenges in their
communities across Africa. The purpose of this program is to encourage and increase youth participation in Nation building around Africa.  </p>
      </div>

      <div className="mt-16 px-16">
        <h2 className="text-[16px] font-bold">FUTURE AFRICA LEADERS FOUNDATION YOUTH CENTER</h2>
        <p className="text-[16px]">
        This project is proposed with the aim of having an Onsite Future Africa Leaders Foundation Academy, where we can directly impact Africa by training Youth for
Leadership, Skills and Acquisitions that can benefit the Nation at Large and in turn reduce the rate of unemployment by providing young men and women with
tools they need to build their Future </p>
      </div>

      {/* Sponsorship Table */}
      <div className="mt-16 px-16">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">S/N</th>
              <th className="border border-gray-300 px-4 py-2">CATEGORY</th>
              <th className="border border-gray-300 px-4 py-2">AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1, category: "Humanitarian Project Sponsorship", amount: "$2,000 – $10,000" },
              { id: 2, category: "Political Project Sponsorship", amount: "$2,000 – $10,000" },
              { id: 3, category: "Future Africa Leaders Foundation Youth Center", amount: "$2,000 – $10,000" },
              { id: 4, category: "Project Africa TV Series", amount: "$2,000 – $10,000" },
            ].map((item) => (
              <tr key={item.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">{item.category}</td>
                <td className="border border-gray-300 px-4 py-2">{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>






</div>




  );
};

export default GiveNow;
