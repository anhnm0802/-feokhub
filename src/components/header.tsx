"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import styles from "./header.module.scss";
const Header = () => {
  const [showstate, setShowstate] = useState(true);
  const lastScroll = useRef(0);
  const [choice, setChoice] = useState(true);
  const handleClickVIE = () => {
    setChoice(true);
  };
  const handleClickENG = () => {
    setChoice(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current) {
        setShowstate(false);
      } else {
        setShowstate(true);
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        id="header"
        className={`fixed top-0 left-0 w-full bg-transparent transition-colors transition-transform duration-300 z-50 flex items-center ${
          showstate ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-20 py-5 w-full flex justify-between items-center">
          <div className="sm:w-20 sm:h-20 lg:w-[120px] lg:h-[120px] xl:w-[160px] xl:h-[160px] 2xl:w-[200px] 2xl:h-[200px] bg-contain bg-no-repeat bg-[url('/images/Logo.svg')]"></div>
          <div className="flex gap-10">
            <div className=" bg-black/30 backdrop-blur-md border-3 border-gray-300 rounded-full flex h-fit ">
              <Button
                className={`sm:w-10 sm:h-10 lg:w-[60px] lg:h-[60px]  rounded-full ${
                  choice ? styles.backgao : " bg-transparent "
                } text-white flex items-center justify-center   hover:bg-black/50 text-white cursor-pointer active:scale-95 transition duration-150`}
                onClick={handleClickVIE}
              >
                VIE
              </Button>
              <Button
                className={`sm:w-10 sm:h-10 lg:w-[60px] lg:h-[60px]  rounded-full ${
                  choice ? " bg-transparent " : styles.backgao
                } text-white flex items-center justify-center   hover:bg-black/50 text-white cursor-pointer active:scale-95 transition duration-150`}
                onClick={handleClickENG}
              >
                ENG
              </Button>
            </div>
            <div>
              <Button className="sm:w-30 sm:h-10 lg:w-[180px] lg:h-[60px]   bg-black/30 hover:bg-black/50 text-white cursor-pointer active:scale-95 transition duration-150">
                Menu
                <Menu />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
