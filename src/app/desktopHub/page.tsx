"use client";

import Header from "@/components/header";
import styles from "./page.module.scss";
import Mission from "@/components/mission/mission";
import Timeline from "@/components/timeline/Timeline";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Investment from "@/components/investment/Investment";
import Hug from "@/components/Hug/Hug";
// import Footer from "@/components/footer";
const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const header = document.getElementById("header");
    if (!header) return;
    ScrollTrigger.create({
      trigger: document.querySelector("#img"),
      start: "bottom top",
      onEnter: () => {
        header.classList.add("bg-black-300");
        console.log("Entered");
      },
      onLeaveBack: () => header.classList.remove("bg-black-300"),
    });
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <>
      <div className="w-full ">
        <Header />
        <div
          id="img"
          className=" md:flex bg-cover bg-center min-h-screen w-full bg-[url('/images/homeimg1.svg')] flex flex-col justify-end p-10"
        >
          <div className="uppercase sm:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[6rem] text-white">
            đồng hành <br /> khởi thịnh vượng
          </div>
        </div>
        <div className="grid grid-cols-12 gap-10 bg-cover bg-center h-screen w-full bg-[url('/images/homeimg2.svg')] px-4">
          <div className="col-span-1"></div>
          <div className="col-span-12 md:col-span-6 flex flex-col gap-10 justify-center">
            <div>
              <ul className="list-disc pl-5">
                <li
                  className={`${styles.colorText} sm:text-[2rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] font-semibold   text-white 
                    font-semibold 
                    text-base 
                    leading-[1.5rem] 
                    tracking-[-0.01rem] 
                    [text-shadow:0px_4px_16.1px_rgba(47,46,121,0.19)]
                    font-inter`}
                >
                  Từng bước phát triển
                </li>
              </ul>
            </div>
            <p
              className=" 
                [text-shadow:0px_4px_16.1px_rgba(47,46,121,0.19)]
              text-[4rem] lg:text-[5rem] xl:text-[5.5rem] 2xl:text-[6rem]
                font-bold
                leading-[120%]
                tracking-[-0.16175rem]
                text-white 
                uppercase"
            >
              Khởi nguồn từ Tình bằng hữu
            </p>
            <p
              className="text-white
                [text-shadow:0px_4px_16.1px_rgba(47,46,121,0.19)]
                font-inter
                text-[1.1rem] lg:text-[1.25rem] xl:text-[1.5rem] 2xl:text-[1.8rem]
                font-medium
                leading-[1.6875rem] 2xl: leading-[1.8875rem]
                tracking-[-0.0225rem]"
            >
              Bắt đầu từ năm 2005 – thời điểm những người bạn cùng chung chí
              hướng chia sẻ những ý tưởng đầu tiên về AMITICAS, cùng nhau nỗ lực
              không ngừng nghỉ để đến 9.9.2019, Ami&M chính thức đi vào hoạt
              động.
            </p>
            <p
              className="
            text-white
            [text-shadow:0px_4px_16.1px_rgba(47,46,121,0.19)]
            font-inter
            text-[1.1rem] lg:text-[1.25rem] xl:text-[1.5rem] 2xl:text-[1.8rem]
            font-medium
            leading-[1.6875rem] 2xl: leading-[1.8875rem]
            tracking-[-0.0225rem]
            "
            >
              Tại Ami&M, chúng tôi được sống và làm việc hết mình! Được gắn bó
              và kết nối cũng những người bằng hữu mà chúng tôi gọi là ANH EM -
              AM, được bứt phá các giới hạn bản thân để phát triển, thoả sức thử
              thách và gắn bó nhiệt thành để cùng nhau kiến tạo các giá trị mà
              mình tin tưởng.
            </p>
          </div>
        </div>
        <div className="bg-cover bg-center h-[80vh] w-full bg-[url('/images/homeimg3.svg')] flex justify-center items-center">
          <div className="w-[62%] pt-10 flex flex-col items-center gap-3">
            <div
              className={`text-[2.5rem] font-bold not-italic leading-[129%] tracking-[-0.025rem] ${styles.textDot}`}
            >
              <span className="text-[2rem] leading-none"> • </span>
              TẦM NHÌN
              <span className="text-[2rem] leading-none"> • </span>
            </div>
            <div className="text-[2.5rem] font-bold not-italic leading-[129%] tracking-[-0.025rem] ">
              Ami&M xây dựng{" "}
              <span className={styles.textSpan}> hệ sinh thái đa ngành </span>
              <span className={styles.textSpan}>
                phát triển nhanh và bền vững
              </span>{" "}
              trên hành trình kiến tạo sự thịnh vượng đích thực
            </div>
          </div>
        </div>
        <div className=" w-full flex flex-col items-center">
          <div
            className={`text-[1.5rem] uppercase font-bold not-italic leading-[129%] tracking-[-0.025rem] ${styles.textDot}`}
          >
            <span className="text-[2rem] leading-none"> • </span>
            Sứ mệnh
            <span className="text-[2rem] leading-none"> • </span>
          </div>
          <div className="text-[2.5rem] font-bold not-italic leading-[129%] tracking-[-0.025rem] w-[70%] flex flex-col items-center ">
            <span className={styles.textSpan}>
              Mang lại cuộc sống tốt đẹp hơn
            </span>{" "}
            <span className={styles.textSpan}>cho những Người đồng hành</span>{" "}
          </div>
          {/* moe */}
          <div>
            <Mission />
          </div>
          <div>
            <Investment />
          </div>
          <div>
            <Timeline />
          </div>
          <div>
            <Hug />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};
export default Page;
