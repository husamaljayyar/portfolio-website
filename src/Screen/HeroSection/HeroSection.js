
import { FaFacebookF } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { RiArrowDownLine } from "react-icons/ri";
import "animate.css";

const HeroSection = () => {
  return (
    <div className="flex flex-row items-center justify-center w-screen HeroSection  h-[500px] " >

      <div className="flex flex-col justify-between absolute  left-2 top-32 h-36 w-14  ">
        <a href="https://www.facebook.com/">
          <FaFacebookF className=" text-gray-200 text-2xl" />
        </a>

        <a href="https://github.com/hussam-ALJayyar">
          <GrGithub className=" text-gray-200 text-2xl" />
        </a>

        <a href="https://www.linkedin.com/in/hussamaljayyar/">
          <FaLinkedinIn className=" text-gray-200 text-2xl" />
        </a>

        <a href="https://wa.me/+970595882793">
          <RiWhatsappFill className=" text-gray-200 text-2xl" />
        </a>
      </div>

      <div
        className=" max-w-[1400px]
         mb-5 w-2/3  h-auto 
         md:flex  md:flex-row-reverse items-center justify-between 
         flex flex-col 
         "
      >
        <div className="flex flex-col md:items-end md:w-1/2 w-full items-center py-8">
          <div className="round-image bg-indigo-500 w-60 h-60"></div>
        </div>

        <div
          className="flex flex-col items-center md:items-start justify-end 
          text-xl h-auto  md:w-1/2 w-full animate__animated animate__zoomInDown "
        >
          <h1
            className="w-auto font-mono h-auto font-semibold	text-indigo-500 text-3xl 
              text-center md:text-left "
          >
            Hussam ALJayyar
          </h1>
          <h1
            className="w-[90vw] sm:w-auto h-auto font-light text-2xl leading-10  text-center
              text-white font-mono py-1
             "
          >
            Front End Developer
          </h1>
         <p
            className="sm:block  hidden w-auto	h-auto text-xl leading-8
             mt-2  text-white  
            font-light text-center md:text-left"
          >
            A creative front-end developer at your service with solid experience
            in react library....
          </p>
          <a href="#section2">
            <RiArrowDownLine
              className="text-indigo-500 text-4xl text-center w-450 mt-10 hidden  md:block
            	animate-bounce"
            />
          </a>
        </div>
      </div>

    </div>
  );
};
export default HeroSection;
