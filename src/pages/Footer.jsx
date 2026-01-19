import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import Logo from "./Logo";
const Footer = () => {
  return (
    <footer className="bg-white px-5 md:px-20 py-12 text-gray-700 text-sm">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">

        <div>
          <h4 className="font-semibold tracking-wider mb-4">OUR COMPANY</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Career</li>
            <li>Media</li>
            <li>Blog</li>
            <li>Our Stores</li>
            <li>Customer Stories</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold tracking-wider mb-4">USEFUL LINKS</h4>
          <ul className="space-y-2">
            <li>Custom Furniture</li>
            <li>Hotel Furniture</li>
            <li>Delivery Location</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold tracking-wider mb-4">SHOP BY ROOM</h4>
          <ul className="space-y-2">
            <li>Living Room</li>
            <li>Bedroom</li>
            <li>Dining Room</li>
            <li>Kids Room</li>
            <li>Modular Kitchen Designs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold tracking-wider mb-4">PARTNERS</h4>
          <ul className="space-y-2">
            <li>Become a Franchise</li>
            <li>Sell on WoodKart</li>
          </ul>

          <h4 className="font-semibold tracking-wider mt-6 mb-2">TRUSTED BY</h4>
          <p>QRO Certified</p>
          <p>Ukcert Certified</p>
        </div>

        <div>
          <h4 className="font-semibold tracking-wider mb-4">NEED HELP</h4>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Track your order</li>
            <li>Ask an Expert</li>
          </ul>

          <div className="flex gap-2 mt-4">
            
<FaInstagram size={28} />
<FaFacebook size={28}/>
<FaSquareXTwitter size={28}/>
<TfiYoutube size={28}/>
<FaLinkedin size={28}/>
 {[].map((icon) => (
              <span
                key={icon}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="my-8 border-gray-200" />

      {/* MIDDLE SECTION */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <p className="max-w-3xl">
          Delivery Across India : Ahmedabad, Bangalore, Bhopal, Chandigarh, Chennai,
          Indore, Multai, Pune, Goa, Gurgaon, Hyderabad, Nagpur, Jaipur and
          <span className="text-orange-500 cursor-pointer"> More Cities</span>
        </p>

        <div className="flex flex-wrap gap-2">
          {[
        
<FaCcVisa size={50} className="text-blue-700" />,
<FaCcMastercard size={50} className="text-red-600" />,
<SiAmericanexpress size={45} className="text-sky-500" /> ]

            .map((pay) => (
            <span key={pay}> {pay}
            </span> ))}</div>

        <div className="flex gap-3">
          <button className="bg-black text-white px-4 py-2 text-xs">
            <img
  src="GooglePlay.png" alt="Google Play" className="w-24 h-16"/>

          </button>
          <button className="bg-black text-white px-4 py-2 text-xs">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
  alt="Download on the App Store" className="h-10 w-24"/>

          </button>
        </div>

      </div>

      {/* DIVIDER */}
      <hr className="my-8 border-gray-200" />

{/* BOTTOM SECTION */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs">

  {/* LEFT – LOGO */}
  <div className="flex-shrink-0">
    <Logo />
  </div>

  {/* CENTER – LINKS & COPYRIGHT */}
  <div className="flex flex-col gap-1 text-center md:text-left max-w-xl">
    <p>
      Terms of Use | Security | Return & Refund | Payment Policy | Grievance Cell
    </p>
    <p>© 2015–2026 Woodenstreet.com. All rights reserved.</p>
    <p>The Woodenstreet Furnitures Private Limited</p>
  </div>

  {/* RIGHT – REGISTERED OFFICE */}
  <div className="text-left">
    <p className="font-semibold mb-1">Registered Office</p>
    <p>
      The WoodKart Furniture's Pvt. Ltd.-15–31, Rajiv Nagar,<br />
      Mig-80, Bhopal – 302001.<br />
      <span className="font-semibold">
        Corporate Identity Number:
      </span>{" "}
      U36100RJ2015PTC0 47992
    </p>
  </div>

</div>

    </footer>
  );
};

export default Footer;
