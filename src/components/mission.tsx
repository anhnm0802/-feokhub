// import { useState } from "react";

const Mission = () => {
  //   const [state, setState] = useState(0);
  //   const handleScrollup = () => {
  //     setState(state + 1);
  //   };
  //   const handleScro

  return (
    <div className="grid grid-cols-12 gap-10 w-full hidden md:grid px-10 ">
      <div className="col-span-12 md:col-span-2  bg-red-500">a</div>
      <div className="col-span-12 md:col-span-4  ">
        <div className="flex flex-col">
          <div>
            <div className="h-30 w-30 bg-contain bg-no-repeat bg-[url('/images/components/battaysvg.svg')]"></div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6  bg-red-500">c</div>
    </div>
  );
};
export default Mission;
