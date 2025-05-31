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
        className={`fixed  top-0 left-0 w-full bg-transparent transition-colors transition-transform duration-300 z-50 flex ${
          showstate ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-30 py-5 w-full flex justify-between">
          <div className="w-50 h-20 bg-contain bg-no-repeat bg-[url('/images/Logo.svg')]"></div>
          <div className="flex gap-10">
            <div className=" bg-black/30 backdrop-blur-md border-3 border-gray-300 rounded-full flex h-fit ">
              <Button
                className={`w-10 h-10 rounded-full ${
                  choice ? styles.backgao : " bg-transparent "
                } text-white flex items-center justify-center`}
                onClick={handleClickVIE}
              >
                VIE
              </Button>
              <Button
                className={`w-10 h-10 rounded-full ${
                  choice ? " bg-transparent " : styles.backgao
                } text-white flex items-center justify-center`}
                onClick={handleClickENG}
              >
                ENG
              </Button>
            </div>
            <div>
              <Button className="w-30 h-10   bg-black/30 hover:bg-black/50 text-white cursor-pointer active:scale-95 transition duration-150">
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
