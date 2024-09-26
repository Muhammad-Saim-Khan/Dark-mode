import React from "react";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div>
      <div className="shadow-md text-white dark:bg-[#FFDDA9] dark:text-black">
        <div className="bg-[black] dark:bg-[#FFDDA9] py-2">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                Dark Mode
              </a>
            </div>
            <div className="flex items-center gap-4">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto min-h-[93vh] dark:bg-black bg-[#FFDDA9]">
        <h1 className="text-center pt-16 text-4xl sm:text-5xl font-bold dark:text-white">
          My Name Is Muhammad Saim Khan
        </h1>
        <div className="flex flex-wrap justify-center gap-4 pt-16 px-4">
          <div className="w-[200px] h-[200px] dark:bg-white dark:text-black bg-black text-white text-xl font-bold flex justify-center items-center rounded-lg">
            <h1>Box 1</h1>
          </div>
          <div className="w-[200px] h-[200px] dark:bg-[#0077ff] dark:text-[#ff0303] bg-[#0b007f] text-[#e1ff00] text-xl font-bold flex justify-center items-center rounded-lg">
            <h1>Box 2</h1>
          </div>
          <div className="w-[200px] h-[200px] dark:bg-[red] dark:text-[blue] bg-[green] text-[darkblue] text-xl font-bold flex justify-center items-center rounded-lg">
            <h1>Box 3</h1>
          </div>
          <div className="w-[200px] h-[200px] dark:bg-[#d000ff] dark:text-[#000000] bg-[#00ffaa] text-[red] text-xl font-bold flex justify-center items-center rounded-lg">
            <h1>Box 4</h1>
          </div>
        </div>
        <h2 className="text-black text-center pt-10 text-[30px] font-bold dark:text-white">
          ANAS
        </h2>
        <h2 className="text-[red] text-center pt-10 text-[30px] font-bold dark:text-[blue]">
          ANAS
        </h2>
      </div>
    </div>
  );
};

export default Navbar;
