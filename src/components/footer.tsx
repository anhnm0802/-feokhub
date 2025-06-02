import { Button } from "./ui/button";

const Footer = () => {
  return (
    <>
      <div className=" bg-[#191868] grid grid-cols-12 gap-10 w-full p-10">
        <div className="col-span-4 ">
          <div>
            <div
              className={`w-[4rem] h-[3rem] bg-contain bg-no-repeat bg-[url('/images/components/logofooter.svg')] `}
            ></div>
            <div>đăng ký nhận thông tin từ Ami&m</div>
            <div className="border-[0.5px] border-gray-300 rounded-full flex">
              <input
                id="name"
                type="text"
                placeholder="Nhập họ tên"
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none  focus:none focus:none outline-none border-none outline-none"
              />
              <Button>Đăng ký</Button>
            </div>
          </div>
        </div>
        <div className="col-span-4 "></div>
        <div className="col-span-4 "></div>
      </div>
    </>
  );
};
export default Footer;
