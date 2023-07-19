// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="bg-transparent py-6">
//       <div className="container mx-auto">
//         <div className="flex flex-wrap justify-center">
//           <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 sm:mb-0">
//             <h3 className="text-xl font-bold mb-4">Services</h3>
//             <ul className="text-gray-500">
//               <li className="mb-2">Dental Implants</li>
//               <li className="mb-2">Teeth Whitening</li>
//               <li className="mb-2">Orthodontics</li>
//               <li className="mb-2">Root Canal Treatment</li>
//             </ul>
//           </div>
//           <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 sm:mb-0">
//             <h3 className="text-xl font-bold mb-4">Oral Health</h3>
//             <ul className="text-gray-500">
//               <li className="mb-2">Brushing Techniques</li>
//               <li className="mb-2">Flossing Techniques</li>
//               <li className="mb-2">Healthy Diet Tips</li>
//               <li className="mb-2">Common Dental Problems</li>
//             </ul>
//           </div>
//           <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 sm:mb-0">
//             <h3 className="text-xl font-bold mb-4">Our Address</h3>
//             <p className="text-gray-500 mb-2">1234 Main Street</p>
//             <p className="text-gray-500 mb-2">City, State 12345</p>
//             <p className="text-gray-500 mb-2">Phone: (123) 456-7890</p>
//             <p className="text-gray-500 mb-2">Email: info@example.com</p>
//           </div>
//           <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 sm:mb-0">
//             <h3 className="text-xl font-bold mb-4">Follow Us</h3>
//             <div className="flex space-x-4">
//               <Link to="/" href="#" className="text-gray-500 hover:text-gray-700">
//                 <FaFacebook size={24} />
//               </Link>
//               <Link to="/" href="#" className="text-gray-500 hover:text-gray-700">
//                 <FaTwitter size={24} />
//               </Link>
//               <Link to="/" href="#" className="text-gray-500 hover:text-gray-700">
//                 <FaInstagram size={24} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import footerBackground from "../../../images/footer-bg.png";
const Footer = () => {
    return (
        <footer className="bg-transparent bg-opacity-10 py-6">
            <div className="container mx-auto" style={{ backgroundImage: `url(${footerBackground})`, backgroundSize: 'cover' }}>
                <div className="flex flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 sm:mb-0 flex justify-center items-center">
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4 text-accent">Services</h3>
                            <ul className="text-gray-500">
                                <li className="mb-2">Dental Implants</li>
                                <li className="mb-2">Teeth Whitening</li>
                                <li className="mb-2">Orthodontics</li>
                                <li className="mb-2">Root Canal Treatment</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 sm:mb-0 flex justify-center items-center">
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4 text-accent">Oral Health</h3>
                            <ul className="text-gray-500">
                                <li className="mb-2">Brushing Techniques</li>
                                <li className="mb-2">Flossing Techniques</li>
                                <li className="mb-2">Healthy Diet Tips</li>
                                <li className="mb-2">Common Dental Problems</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 sm:mb-0 flex justify-center items-center">
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4 text-accent">Our Address</h3>
                            <p className="text-gray-500 mb-2">1234 Main Street</p>
                            <p className="text-gray-500 mb-2">City, State 12345</p>
                            <p className="text-gray-500 mb-2">Phone: (123) 456-7890</p>
                            <p className="text-gray-500 mb-2">Email: info@example.com</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-6 sm:mb-0 flex justify-center items-center">
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4 text-accent">Follow Us</h3>
                            <div className="flex space-x-4">
                                <Link to="/" href="#" className="text-gray-500 hover:text-gray-700">
                                    <FaFacebook size={24} />
                                </Link>
                                <Link to="/" href="#" className="text-gray-500 hover:text-gray-700">
                                    <FaTwitter size={24} />
                                </Link>
                                <Link to="/" href="#" className="text-gray-500 hover:text-gray-700">
                                    <FaInstagram size={24} />
                                </Link>
                            </div>
                            <h3 className="text-xl font-bold mb-4 mt-8 text-gray-500">Call Now</h3>
                            <div className="flex space-x-4">
                                <button className="btn btn-accent text-white font-bold btn-sm">+999345235</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
