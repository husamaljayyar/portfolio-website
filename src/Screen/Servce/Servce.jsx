import { ReactComponent as LandingPage } from "../../Image/LandingPage.svg";
import { BsCodeSlash } from "react-icons/bs";
import { MdWeb } from "react-icons/md";

export default function Servce() {
  return (
    <>
      <div
        id="section2"
        className="flex flex-col items-center justify-center m-10 flex-wrap w-full  "
      >
        <p className="text-2xl border-text-white border-indigo-500 border-b-4 uppercase font-sans mb-5 ">
          our services section
        </p>{" "}
        <div className="sm:w-2/3 w-11/12 max-w-[1400px]  flex md:flex-row flex-col flex-wrap items-center 2xl:justify-between justify-center">
          <div className="Boox flex flex-col justify-start items-center text-white  bg-indigo-500 rounded-md">
            <LandingPage
              className="mb-5 text-2xl "
              height="1.8em"
              width="1.8em"
            />
            <h3 className="font-mono font-bold text-lg text-center">
              Build Landing pages
            </h3>
            <p className="pt-5 text-center">
              Static applications are just that static. They don't use api, used
              to displays Static data .
            </p>
          </div>

          <div className="Boox flex flex-col justify-start items-center text-white  bg-indigo-500 rounded-md ">
            <MdWeb className="mb-5 text-5xl" />
            <h3 className="font-mono font-bold text-lg text-center">
              Build websites{" "}
            </h3>
            <p className="pt-5 text-center">
              Dynamic web Applications,Consisting of multiple page and use api
              to get Dynamic data.
            </p>
          </div>

          <div className="Boox flex flex-col justify-start items-center text-white  bg-indigo-500 rounded-md ">
            <BsCodeSlash className="mb-5 text-5xl" />
            <h3 className="font-mono font-bold text-lg text-center">
              develop and coding the applications
            </h3>
            <p className="pt-5 text-center">
              develop and coding the applications with high quality and
              performance
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
