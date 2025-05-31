import styles from "./Timeline.module.scss";

const Timeline = () => {
  const TextTimeline = () => {
    return (
      <>
        <div className="flex-col">
          <ul className="list-disc pl-5">
            <li className={`${styles.colorText} text-2xl font-semibold`}>
              Từng bước phát triển
            </li>
          </ul>
          <div className={`text-[5.5rem] ${styles.colorTextHeader} `}>
            Dấu ấn Ami&M
          </div>
          <p className="text-[1rem] lg:text-[1.2rem] xl:text-[1.3rem] 2xl:text-[1.5rem]">
            Phía sau những con số là hành trình nỗ lực không ngừng của đội ngũ
            những Người đồng hành cùng chung giá trị, sát cánh bên nhau, tin
            tưởng lẫn nhau, và từng ngày phấn đấu cho mục tiêu chung.
          </p>
        </div>
      </>
    );
  };
  const Componenttest = () => {
    return (
      <>
        <div className="grid grid-cols-12 gap-10 w-full border-l border-b border-gray-300 p-10">
          <div className="col-span-4 flex justify-center items-center ">
            <div className="h-20 w-20 bg-contain bg-no-repeat bg-[url('/images/components/tts.svg')]"></div>
          </div>
          <div className="col-span-8">
            <p
              className="
                text-[#2A2B6B] 
                font-inter 
                text-[4.25rem] 
                font-extrabold 
                leading-[131%] 
                tracking-[-0.0425rem]
                "
            >
              686 tỷ
            </p>
            <p
              className="
                text-[#646464]
                font-inter
                text-[1.25rem]
                font-semibold
                leading-[140%]
                tracking-[-0.0125rem]
                "
            >
              Tổng tài sản và vốn chủ sở hữu
            </p>
          </div>
        </div>
      </>
    );
  };
  const Componenttest2 = () => {
    return (
      <>
        <div className="grid grid-cols-12 gap-10 w-full border-l border-b border-gray-300 p-10">
          <div className="col-span-4 flex justify-center items-center ">
            <div className="h-20 w-20 bg-contain bg-no-repeat bg-[url('/images/components/dtt.svg')]"></div>
          </div>
          <div className="col-span-8">
            <p
              className="
                text-[#2A2B6B] 
                font-inter 
                text-[4.25rem] 
                font-extrabold 
                leading-[131%] 
                tracking-[-0.0425rem]
                "
            >
              93,9 tỷ
            </p>
            <p
              className="
                text-[#646464]
                font-inter
                text-[1.25rem]
                font-semibold
                leading-[140%]
                tracking-[-0.0125rem]
                "
            >
              Doanh thu thuần
            </p>
          </div>
        </div>
      </>
    );
  };
  const Componenttest3 = () => {
    return (
      <>
        <div className="grid grid-cols-12 gap-10 w-full border-l border-b border-gray-300 p-10">
          <div className="col-span-4 flex justify-center items-center ">
            <div className="h-20 w-20 bg-contain bg-no-repeat bg-[url('/images/components/lng.svg')]"></div>
          </div>
          <div className="col-span-8">
            <p
              className="
                text-[#2A2B6B] 
                font-inter 
                text-[4.25rem] 
                font-extrabold 
                leading-[131%] 
                tracking-[-0.0425rem]
                "
            >
              24,6 tỷ
            </p>
            <p
              className="
                text-[#646464]
                font-inter
                text-[1.25rem]
                font-semibold
                leading-[140%]
                tracking-[-0.0125rem]
                "
            >
              Lợi nhuận gộp
            </p>
          </div>
        </div>
      </>
    );
  };
  const Componenttest4 = () => {
    return (
      <>
        <div className="grid grid-cols-12 gap-10 w-full border-l border-b border-gray-300 p-10">
          <div className="col-span-4 flex justify-center items-center ">
            <div className="h-20 w-20 bg-contain bg-no-repeat bg-[url('/images/components/datd.svg')]"></div>
          </div>
          <div className="col-span-8">
            <p
              className="
                text-[#2A2B6B] 
                font-inter 
                text-[4.25rem] 
                font-extrabold 
                leading-[131%] 
                tracking-[-0.0425rem]
                "
            >
              20+
            </p>
            <p
              className="
                text-[#646464]
                font-inter
                text-[1.25rem]
                font-semibold
                leading-[140%]
                tracking-[-0.0125rem]
                "
            >
              Dự án trọng điểm
            </p>
          </div>
        </div>
      </>
    );
  };
  const Componenttest5 = () => {
    return (
      <>
        <div className="grid grid-cols-12 gap-10 w-full border-l border-b border-gray-300 p-10">
          <div className="col-span-4 flex justify-center items-center ">
            <div className="h-20 w-20 bg-contain bg-no-repeat bg-[url('/images/components/vp.svg')]"></div>
          </div>
          <div className="col-span-8">
            <p
              className="
                text-[#2A2B6B] 
                font-inter 
                text-[4.25rem] 
                font-extrabold 
                leading-[131%] 
                tracking-[-0.0425rem]
                "
            >
              03 văn phòng
            </p>
            <p
              className="
                text-[#646464]
                font-inter
                text-[1.25rem]
                font-semibold
                leading-[140%]
                tracking-[-0.0125rem]
                "
            >
              Trên các tỉnh thành
            </p>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="grid grid-cols-12 gap-10 w-full p-10">
        <div className="col-span-12 md:col-span-6 relative">
          <TextTimeline />
        </div>
        <div className="col-span-12 md:col-span-6">
          <Componenttest />
          <Componenttest2 />
          <Componenttest3 />
          <Componenttest4 />
          <Componenttest5 />
        </div>
      </div>
    </>
  );
};
export default Timeline;
