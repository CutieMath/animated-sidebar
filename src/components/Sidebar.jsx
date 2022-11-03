import React, { useState } from "react";
import { GiCoffin } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <GiCoffin className="cursor-pointer top-10 right-10 fixed text-3xl" />
      ) : (
        <div className="top-0 right-0 fixed bg-pink-300 w-[35vw] h-full p-10">
          <h2 className="text-2xl">This is the sidebar</h2>
        </div>
      )}
    </>
  );
};

export default Sidebar;
