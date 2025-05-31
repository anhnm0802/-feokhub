// import { useState } from "react";
import styles from "./mission.module.scss";
const Mission = () => {
  //   const [state, setState] = useState(0);
  //   const handleScrollup = () => {
  //     setState(state + 1);
  //   };
  //   const handleScro
  const CpnCBCNV = () => {
    return (
      <div className="flex flex-col">
        <div className="h-10 w-10 bg-contain bg-no-repeat bg-[url('/images/components/battaysvg.svg')]"></div>
        <div className={`uppercase text-lg font-semibold ${styles.colorText} `}>
          với cán bộ nhân viên
        </div>
        <div className="text-sm">
          Cảm thấy gắn kết, được trân trọng, được tạo cơ hội để khai phá, phát
          triển, khẳng định giá trị bản thân
        </div>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-12 gap-10 w-full  p-10  ">
      <div className="col-span-12 md:col-span-2 ">
        <div className=" bg-red-500">alo</div>
      </div>
      <div className="col-span-12 md:col-span-4 flex flex-col  ">
        <div className="flex flex-col gap-20 min-h-full  ">
          <CpnCBCNV />
          <CpnCBCNV />
          <CpnCBCNV />
          <CpnCBCNV />
        </div>
      </div>
      <div className="col-span-12 md:col-span-6  ">
        <div className="h-50 w-90 bg-cover bg-no-repeat  bg-[url('/images/components/om.svg')] rounded "></div>
      </div>
    </div>
  );
};
export default Mission;
