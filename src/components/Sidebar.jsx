import React, { useState } from "react";
import { GiCoffin, GiCardPickup } from "react-icons/gi";
import avatar1 from "../assets/avatar1.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <GiCoffin
          onClick={() => setIsOpen(true)}
          className="cursor-pointer top-10 right-10 fixed text-3xl"
        />
      ) : (
        <GiCardPickup
          onClick={() => setIsOpen(false)}
          className="top-10 right-10 fixed cursor-pointer text-3xl z-10"
        />
      )}

      <div
        className={`ease-in duration-300 top-0 right-0 fixed bg-pink-300 w-[35vw] h-full p-10 ${
          isOpen ? `translate-x-0` : `translate-x-full`
        }`}
      >
        <h2 className="text-2xl">This is the sidebar</h2>
        <img src={avatar1} className="rounded-full mt-12" />
      </div>
    </>
  );
};

export default Sidebar;
