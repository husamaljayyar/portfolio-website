import { useState } from "react";
import dataSlider from "./dataSlider";
import { MdOpenInNew } from "react-icons/md";

export default function MyProject() {
  const [page, setPage] = useState(6);

  let project = dataSlider.slice(0, page);

  return (
    <section className="flex flex-col items-center w-full bg-slate-100 ">
      <div
        className="sm:w-2/3 w-11/12 max-w-[1400px] flex flex-col items-center  m-10 flex-wrap  bg-gradient-to-r   
     "
      >
        <h5 className="w-auto  text-2xl border-Purple border-b-4 uppercase  mb-5 font-sans ">
          My Project
        </h5>

        <div className="flex lg:flex-row flex-col justify-center items-center flex-wrap  ">
          {project.map((item) => (
            <div
              key={item.id}
              className=" h-auto  overflow-hidden shadow-lg m-1 bg-white text-black w-[32.5%] min-w-[300px]"
            >
              <img
                className="w-full h-56"
                src={item.image}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4 flex flex-row justify-between">
                <a
                  href={item.link}
                  className="w-full flex flex-row justify-between "
                >
                  <p className="font-bold text-lg mb-2 font-mono ">
                    {item.title}
                  </p>

                  <MdOpenInNew
                    style={{ fontSize: "23px" }}
                    className="cursor-pointer mt-1"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
        <button
          className="text-white bg-Purple  rounded-full mt-7 text-xl font-light font-mono w-52 h-16 "
          onClick={() => {
            setPage(dataSlider.length);
          }}
        >
          Load more...
        </button>
      </div>
    </section>
  );
}
