import Link from '../assets/Linkkk.png';
import { Facebook, Linkedin, Mail, MailPlus, MapPin, PhoneCall, Pin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex bg-[#706FAB] font-montserrat text-white py-16 flex-col md:flex-row justify-between items-start w-full px-6 md:px-20 space-y-10 md:space-y-0">
      
      {/* Left Section: Logo & Description */}
      <div className="w-full md:w-1/4 flex flex-col items-start text-left">
        <img src={Link} alt="COFI" className="w-[80px] md:w-[99px] h-auto mb-4" />
        <p className="text-xs">
          Chris Oyakhilome Foundation International (COFI) is a global faith-based organization guided by the leadership and teachings of its visionary...
          <span className="text-white hover:text-green-400 cursor-pointer"> Click to Read More</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          <a href="#" className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200">
            <Facebook size={20} className="text-black" />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200">
            <Linkedin size={20} className="text-black" />
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-200">
            <Twitter size={20} className="text-black" />
          </a>
        </div>
      </div>

      {/* Middle Section: Contact Info */}
      <div className="w-full md:w-1/3 text-xs space-y-4 text-left md:pl-12">
        <h3 className="text-lg mb-4">Contact Info</h3>
        <p className="flex items-center gap-2"><MapPin className="w-5"/> 21/23 Ize Iyamu Street,<br className="hidden md:block"/> Off Billings Way, Oregun</p>
        <p className="flex items-center gap-2"><Pin className="w-5"/> Ikeja, Lagos, Nigeria</p>
        <p className="flex items-center gap-2"><Mail className="w-5"/> contact@futureafricaleadersfoundation.org</p>
        <p className="flex items-center gap-2"><PhoneCall className="w-5"/> +234 703 936 3940</p>
      </div>

      {/* Right Section: Other Links */}
      <div className="w-full md:w-1/3 text-xs space-y-6 text-left md:pl-12">
        <h3 className="text-lg">Other Links</h3>
        <p><a href="#" className="text-white hover:text-green-300">Click to Register for Leadership Initiative Network</a></p>
        <p><a href="#" className="text-white hover:text-green-300">Click to watch Project Africa Videos</a></p>

        {/* Partner Button */}
        <div className="flex">
          <button className="bg-[#FFE161] text-black px-4 py-2 mt-4 hover:text-white hover:bg-green-400 rounded-lg flex items-center gap-2">
            PARTNER <MailPlus className="text-gray-600 w-5" />
          </button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
