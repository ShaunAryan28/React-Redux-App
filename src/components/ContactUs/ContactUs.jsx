import { IoIosCall } from "react-icons/io";

import { MdOutlineEmail } from "react-icons/md";
 
 
 
import { FaLocationDot } from "react-icons/fa6";
import "./ContactUs.css";
 
//const hed = `url(${head})`;
 

const ContactUs = () => {
  return (
    <div
       
    >
      <div className="flex    justify-center items-center text-{E17343} self-center text-5xl md:pt-20  font-bold font-inter gap-4">
        <h1 className="text-white mt-20">Contact </h1>
        <h1 className="text-orange mt-20"> Us</h1>
      </div>
      <div className="text-dark-grey items-center flex justify-center">
        <h3>Home / Contact Us</h3>
      </div>
      <div className="flex justify-center items-center  pt-1 ">
        <div
          className="flex flex-col bg-blue-400   md:flex-row  space-y-6 md:space-y-0   md:space-x-6   shadow-lg text-white    pb-9  md:gap-x-26 md:p-10 md:pr-0 items-center mt-10 md:mt-20 md:mb-52 mb-20"

           
           
        >
          <div className="flex flex-col  space-y-4 justify-between md:px-3 shadow-xl rounded-xl md:w-3/4 ml-5 mr-3  ">
            {/*  */}
            <h1 className="text-white flex flex-col float-start font-jost font-semibold md:text-5xl text-4xl md:pb-0 md:mb-0 mt-8 mb-0 px-5">
              Get in touch
            </h1>
            <div className=" rounded-xl  text-gray-200 md:mt-0 md:pt-0 ">
              <form action="" className="flex flex-col space-y-4 p-5 md:w-96 ">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="ring-1   mt-2 w-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400  rounded-md  bg-black bg-opacity-80 "
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="ring-1   mt-2 w-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400  rounded-md  bg-black bg-opacity-80 "
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Message"
                    className="ring-1   mt-2 w-full px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400  rounded-md  bg-black bg-opacity-80 "
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="link-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="link-checkbox"
                    className="ms-2 text-sm  font-light text-white dark:text-gray-300"
                  >
                    I would like to recieve the Newsletter{" "}
                    
                    
                  </label>
                </div>

                <button className="inline-block text-xl self-start bg-gradient-to-r from bg-orange from-50% to-white to-50% text-black font-bold rounded-3xl px-4 py-1">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="bg-grey p-10  md:pl-16 md:pt-10  md:pr-0 space-y-4 w-10/12    items-center justify-center  md:h-96">
            <h1 className="font-bold text-4xl tracking-wide text-black  mb-12 md:mb-16">
              Info
            </h1>

            <div className="flex flex-col space-y-2 text-black">
              <div className="inline-flex space-x-2 items-center">
                <IoIosCall />
                {/* <ion-icon name="call" className="text-xl text-black"></ion-icon> */}
                <span>+91 3313133334</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <FaLocationDot />

                <span>Varanasi, Uttar Pradesh, India</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <MdOutlineEmail />
                <span>cvmfbm@gmail.com</span>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      <script src="./node_modules/flowbite/dist/flowbite.min.js"></script>
       
    </div>
  );
};

export default ContactUs;
