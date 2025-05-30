import Header from "@/components/header";
import styles from "./page.module.scss";
import Mission from "@/components/mission";
const Page = () => {
  return (
    <>
      <div className="w-full min-h-screen overflow-hidden relative ">
        <Header />
        <div className="bg-cover bg-center h-screen w-full bg-[url('/images/homeimg1.svg')]"></div>
        <div className="bg-cover bg-center h-screen w-full bg-[url('/images/homeimg2.svg')]"></div>
        <div className="bg-cover bg-center h-[80vh] w-full bg-[url('/images/homeimg3.svg')] flex justify-center items-center">
          <div className="text-[2.5rem] font-bold not-italic leading-[129%] tracking-[-0.025rem]">
            Ami&M xây dựng{" "}
            <span className={styles.textSpan}> hệ sinh thái đa ngành</span>
            <span className={styles.textSpan}>
              phát triển nhanh và bền vững
            </span>{" "}
            trên hành trình kiến tạo sự thịnh vượng đích thực
          </div>
        </div>
        <div className=" h-[80vh] w-full">
          <div className="text-[2.5rem] font-bold not-italic leading-[129%] tracking-[-0.025rem]">
            <span className={styles.textSpan}>
              Mang lại cuộc sống tốt đẹp hơn
            </span>{" "}
            <span className={styles.textSpan}>cho những Người đồng hành</span>{" "}
          </div>
          {/* moe */}
          <div>
            <Mission />
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
