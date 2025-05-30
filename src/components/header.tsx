"use client";

import { useEffect, useRef, useState } from "react";
import { Bold, Italic } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const Header = () => {
  const [showstate, setShowstate] = useState(true);
  const lastScroll = useRef(0);
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
        className={`fixed absolute obs top-0 left-0 w-full bg-transparent transition-transform duration-300 z-50 flex ${
          showstate ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="m-16 w-full flex justify-between">
          <div className="w-50 h-50 bg-contain bg-no-repeat  bg-[url('/images/Logo.svg')]"></div>
          <div></div>
          <div>
            <ToggleGroup type="single" size="lg">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
