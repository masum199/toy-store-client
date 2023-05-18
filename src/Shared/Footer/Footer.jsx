import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

import image from '../../assets/images/toy12.jpg';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-500 text-white">
      <div className="flex items-center justify-between mb-10">
        <div className="w-1/2">
          <img className="w-32 rounded-3xl" src={image} alt="" />
          <p className="text-lg font-bold mt-4">ACME Car Toys</p>
          <p className="text-sm">Providing the coolest car toys since 1992</p>
          <div className=" flex mt-4 md:mt-0">
          <FaFacebookSquare className="mr-3 text-xl hover:text-blue-500" />
          <FaTwitterSquare className="mr-3 text-xl hover:text-blue-500" />
          <FaInstagramSquare className="mr-3 text-xl hover:text-pink-500" />
          <FaLinkedin className="text-xl hover:text-blue-500" />
        </div>
        </div>
       
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div>
          <h3 className="text-xl font-bold mb-4">Products</h3>
          <p className="">Toy Cars</p>
          <p className="">Remote Control Cars</p>
          <p className="">Car Model Kits</p>
          <p className="">Diecast Cars</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <p className="">About Us</p>
          <p className="">Contact</p>
          <p className="">Careers</p>
          <p className="">Press Kit</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Information</h3>
          <p className="">Shipping &amp; Returns</p>
          <p className="">FAQ</p>
          <p className="">Privacy Policy</p>
          <p className="">Terms &amp; Conditions</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Subscribe</h3>
          <p className="text-white mb-4">Subscribe to our newsletter to receive updates and special offers.</p>
          <form>
            <input
              type="email"
              className="w-full bg-gray-800 text-white rounded-md py-2 px-3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 text-sm pt-8">
        <p className="text-white">&copy; {new Date().getFullYear()} ACME Car Toys. All rights reserved.</p>
        <p className="text-white">Contact information: example@example.com | +123456789</p>
        <p className="text-white">Address: 123 Main Street, City, Country</p>
      </div>
    </footer>
  );
};

export default Footer;