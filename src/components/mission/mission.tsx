// import { useState } from "react";
// import { useEffect } from "react";
import styles from "./mission.module.scss";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const Mission = () => {
  //   const [state, setState] = useState(0);
  //   const handleScrollup = () => {
  //     setState(state + 1);
  //   };
  //   const handleScro
  const CpnCBCNV = () => {
    return (
      <div className="flex flex-col w-[70%]">
        <div className="h-10 w-10 bg-contain bg-no-repeat bg-[url('/images/components/cnv.svg')]"></div>
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
  const CpnKH = () => {
    return (
      <div className="flex flex-col w-[70%]">
        <div className="h-10 w-10 bg-contain bg-no-repeat bg-[url('/images/components/cpnkh.svg')]"></div>
        <div className={`uppercase text-lg font-semibold ${styles.colorText} `}>
          với khách hàng
        </div>
        <div className="text-sm">
          Cung cấp các sản phẩm - dịch vụ theo tiêu chuẩn quốc tế, mang đến cho
          khách hàng những trải nghiệm tốt nhất
        </div>
      </div>
    );
  };
  const CpnDT = () => {
    return (
      <div className="flex flex-col w-[70%] ">
        <div className="h-10 w-10 bg-contain bg-no-repeat bg-[url('/images/components/battaysvg.svg')]"></div>
        <div className={`uppercase text-lg font-semibold ${styles.colorText} `}>
          với đối tác
        </div>
        <div className="text-sm ">
          Tin tưởng và muốn hợp tác dài lâu trên nền tảng của sự phát triển bền
          vững và hướng tới những giá trị tốt đẹp
        </div>
      </div>
    );
  };
  const CpnCD = () => {
    return (
      <div className="flex flex-col w-[70%]">
        <div className="h-10 w-10 bg-contain bg-no-repeat bg-[url('/images/components/cd.svg')]"></div>
        <div className={`uppercase text-lg font-semibold ${styles.colorText} `}>
          với cộng đồng
        </div>
        <div className="text-sm">
          Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, đóng góp tích cực cho
          các hoạt động hướng về cộng đồng
        </div>
      </div>
    );
  };
  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   gsap.to("#checkScl", {
  //     scrollTrigger: {
  //       trigger: "#checkScl",
  //       start: "top 80%",
  //       end: "top 50%",
  //       pin: true,
  //       scrub: true,
  //       markers: true,
  //     },
  //     y: 200,
  //   });
  // }, []);
  return (
    <div className="grid grid-cols-12 gap-5 w-full  p-10 flex justify-center   ">
      <div className="col-span-12 md:col-span-2 ">
        {/* <div id="checkScl" className=" bg-red-500">
          alo
        </div> */}
      </div>
      <div className="col-span-12 md:col-span-5 flex flex-col   ">
        <div className="flex flex-col w-[80%] gap-20 min-h-full sm:w-[100%] mx-auto ">
          <CpnCBCNV />
          <CpnKH />
          <CpnDT />
          <CpnCD />
        </div>
      </div>
      <div className="col-span-12 md:col-span-5  w-[80%]  sm:w-[100%] mx-auto  ">
        <div className="h-50 w-90 bg-cover bg-no-repeat  bg-[url('/images/components/om.svg')] rounded "></div>
      </div>
    </div>
  );
};
export default Mission;
