import React, { useState, useEffect } from "react";
import CustomButton from "../mui/button";
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
 
  const [isMoonVisible, setIsMoonVisible] = useState(false);
  
  useEffect(() => {
    document.body.classList.toggle("dark", isMoonVisible);
    document.body.classList.toggle("light", !isMoonVisible);
  }, [isMoonVisible]);



  const handleNavigate = (route: string) => {
    navigate(route);
  };

  const toggleIcons = () => {
    setIsMoonVisible((prev) => !prev);
  };

  const selectedIcon = isMoonVisible ? (
    <IoSunnyOutline
      className="text-xl cursor-pointer text-yellow-400 size-6"
      onClick={toggleIcons}
    />
  ) : (
    <FaRegMoon
      className="text-xl cursor-pointer text-gray-400 size-6"
      onClick={toggleIcons}
    />
  );

  return (
    <header className="flex justify-between items-center px-6 border-b-2">
      <ul className="flex gap-20">
        <li
          className="py-3 border-b-4 border-transparent hover:border-blue-500 cursor-pointer dark:text-blue-600"
          onClick={() => handleNavigate("/")}
        >
          Bosh Sahifa
        </li>
        <li
          className="py-3 border-b-4 border-transparent hover:border-blue-500 cursor-pointer dark:text-blue-600"
          onClick={() => handleNavigate("/writers")}
        >
          Adiblar
        </li>
        <li
          className="py-3 border-b-4 border-transparent hover:border-blue-500 cursor-pointer dark:text-blue-600"
          onClick={() => handleNavigate("/categories")}
        >
          Turkumlar
        </li>
      </ul>
      <div className="flex items-center gap-20">
        {selectedIcon}
        <CustomButton
          text="Ro'yxatdan o'tish"
          onClick={() => handleNavigate("/sign-up")}
        />
        <CustomButton
          text="Tizimga kirish"
          onClick={() => handleNavigate("/sign-in")}
        />
      </div>
    </header>
  );
}
