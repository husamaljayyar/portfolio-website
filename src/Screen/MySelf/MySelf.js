import About from "../About/About";
import Skiles from "../Skiles/Skiles";

export default function MySelf() {
  return (
    <div
      id="section2"
      className="flex flex-col items-center justify-center my-4 flex-wrap w-full"
    >
      <div className="sm:w-2/3 w-11/12 max-w-[1400px] flex flex-col xl:flex-row justify-between  ">
        <About />
        <Skiles />
      </div>
    </div>
  );
}
