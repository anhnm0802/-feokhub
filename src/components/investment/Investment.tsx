import { useState } from "react";
import styles from "./Investment.module.scss";
import { Button } from "../ui/button";
const Investment = () => {
  const [stateChoice, setStateChoice] = useState(0);
  const [statePick0, setStatePick0] = useState(true);
  const [statePick1, setStatePick1] = useState(false);
  const [statePick2, setStatePick2] = useState(false);
  const [statePick3, setStatePick3] = useState(false);
  const [statePick4, setStatePick4] = useState(false);
  console.log(stateChoice);
  const handleClick0 = () => {
    setStateChoice(0);
    setStatePick1(false);
    setStatePick2(false);
    setStatePick3(false);
    setStatePick4(false);
    setStatePick0(true);
  };
  const handleClick1 = () => {
    setStateChoice(1);
    setStatePick0(false);
    setStatePick2(false);
    setStatePick3(false);
    setStatePick4(false);
    setStatePick1(true);
  };
  const handleClick2 = () => {
    setStateChoice(2);
    setStatePick1(false);
    setStatePick0(false);
    setStatePick3(false);
    setStatePick4(false);
    setStatePick2(true);
  };
  const handleClick3 = () => {
    setStateChoice(3);
    setStatePick1(false);
    setStatePick2(false);
    setStatePick0(false);
    setStatePick4(false);
    setStatePick3(true);
  };
  const handleClick4 = () => {
    setStateChoice(4);
    setStatePick1(false);
    setStatePick2(false);
    setStatePick3(false);
    setStatePick0(false);
    setStatePick4(true);
  };
  type ContentProps = {
    data: number;
  };
  const Content = ({ data }: ContentProps) => {
    return (
      <>
        <div>Dự án {data}</div>
        <Button
          className={`w-full h-full cursor-pointer active:scale-95 transition duration-150 transform`}
        >
          Xem thêm
        </Button>
      </>
    );
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-5 w-full  pt-10 pl-10 pb-10    ">
        <div className={`hidden sm:flex sm:col-span-6`}>
          <div className="flex flex-col gap-4">
            <div
              className={`text-[2.5rem] font-bold not-italic leading-[129%] tracking-[-0.025rem] ${styles.textDot}`}
            >
              <span className="text-[2rem] leading-none"> • </span>
              Lĩnh vực đầu tư
              <span className="text-[2rem] leading-none"> • </span>
            </div>
            <p
              className={`font-quicksand text-[2rem] font-bold leading-[120%] tracking-[-0.08rem] ${styles.textMagic} `}
            >
              Ami&M là đối tác tư vấn - đầu tư bền vững, phát triển dịch vụ cao
              cấp và nâng tầm giáo dục trải nghiệm.
            </p>
            <p className="text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem]">
              Với hệ sinh thái tối ưu, Ami&M truyền cảm hứng xây dựng sự thịnh
              vượng đích thực cho những Người đồng hành và tạo lập di sản xứng
              tầm cho thế hệ tương lai.
            </p>
            <div className="relative w-full flex items-center justify-center aspect-[4/3] overflow-hidden pt-10">
              <div className="absolute w-[90%] h-[120%] opacity-30 rounded-full  bg-[linear-gradient(217deg,_#3E4089_-14.24%,_#3E4089_17.01%,_rgba(62,64,137,0)_77.81%)]"></div>
              <div className="relative z-10 w-full h-full bg-cover bg-center bg-[url('/images/homeimg4.svg')] rounded-[1rem]"></div>
            </div>
          </div>
        </div>

        <div
          className={`hidden sm:flex sm:col-span-6 overflow-hidden relative`}
        >
          <div
            className={` aspect-[4/3] bg-contain bg-no-repeat overflow-hidden  rounded-[42%]  bg-[url('/images/components/bongmo.svg')] transform translate-x-35 -translate-y-10`}
          >
            <div className="absolute z-[1] w-full h-full flex-shrink-0 bg-[linear-gradient(180deg,_#2F2E79_0%,_rgba(166,18,32,0.47)_134.75%)] transform "></div>
          </div>
          <div className="absolute text-[4rem] transform translate-x-100 translate-y-50 ">
            <Content data={stateChoice} />
          </div>
          {/* moe */}
          {/* <div className="w-[8.375rem] h-[8.375rem] bg-[linear-gradient(180deg,_#3E4089_0%,_#121458_100%)]"></div> */}
          <Button
            onClick={handleClick0}
            className={`absolute ${
              statePick0 ? "bg-blue-700 text-white" : "bg-white text-blue-700"
            } w-[8.375rem] h-[8.375rem] aspect-[16/9] rounded-full text-white cursor-pointer active:scale-95 transition duration-150 transform translate-x-35 translate-y-10 `}
          >
            <div
              className={`w-full h-full bg-no-repeat bg-center bg-contain ${
                statePick0
                  ? "bg-[url('/images/components/logotoi.svg')]"
                  : "bg-[url('/images/components/logosang.svg')]"
              }`}
            ></div>
          </Button>
          <Button
            onClick={handleClick1}
            className={`absolute ${
              statePick1 ? "bg-blue-700 text-white" : "bg-white text-blue-700"
            } w-[8.375rem] h-[8.375rem] aspect-[16/9] rounded-full text-white cursor-pointer active:scale-95 transition duration-150 transform translate-x-25 translate-y-50 `}
          >
            <div
              className={`w-full h-full bg-no-repeat bg-center bg-contain ${
                statePick1
                  ? "bg-[url('/images/components/logotoi.svg')]"
                  : "bg-[url('/images/components/logosang.svg')]"
              }`}
            ></div>
          </Button>
          <Button
            onClick={handleClick2}
            className={`absolute ${
              statePick2 ? "bg-blue-700 text-white" : "bg-white text-blue-700"
            } w-[8.375rem] h-[8.375rem] aspect-[16/9] rounded-full text-white cursor-pointer active:scale-95 transition duration-150 transform translate-x-20 translate-y-100 `}
          >
            <div
              className={`w-full h-full bg-no-repeat bg-center bg-contain ${
                statePick2
                  ? "bg-[url('/images/components/logotoi.svg')]"
                  : "bg-[url('/images/components/logosang.svg')]"
              }`}
            ></div>
          </Button>
          <Button
            onClick={handleClick3}
            className={`absolute ${
              statePick3 ? "bg-blue-700 text-white" : "bg-white text-blue-700"
            } w-[8.375rem] h-[8.375rem] aspect-[16/9] rounded-full text-white cursor-pointer active:scale-95 transition duration-150 transform translate-x-22 translate-y-150 `}
          >
            <div
              className={`w-full h-full bg-no-repeat bg-center bg-contain ${
                statePick3
                  ? "bg-[url('/images/components/logotoi.svg')]"
                  : "bg-[url('/images/components/logosang.svg')]"
              }`}
            ></div>
          </Button>
          <Button
            onClick={handleClick4}
            className={`absolute ${
              statePick4 ? "bg-blue-700 text-white" : "bg-white text-blue-700"
            } w-[8.375rem] h-[8.375rem] aspect-[16/9] rounded-full text-white cursor-pointer active:scale-95 transition duration-150 transform translate-x-45 translate-y-190 `}
          >
            <div
              className={`w-full h-full bg-no-repeat bg-center bg-contain ${
                statePick4
                  ? "bg-[url('/images/components/logotoi.svg')]"
                  : "bg-[url('/images/components/logosang.svg')]"
              }`}
            ></div>
          </Button>
        </div>
        <div className={`col-span-6 sm:hidden`}></div>
      </div>
    </>
  );
};
export default Investment;
