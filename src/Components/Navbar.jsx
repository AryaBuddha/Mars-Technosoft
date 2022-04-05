import React from "react";

const Navbar = ({ screen }) => {
  const nonCurrent =
    "hover:text-white mb-[-15px] underline-offset-[8px] hover:underline";
  const current =
    "text-white mb-[-15px] underline-offset-[8px] hover:underline";

  return (
    <div className="flex w-full justify-center text-slate-400 px-5 py-4 absolute">
      <div className="flex w-72 justify-between">
        <h1 className={screen == "Home" ? current : nonCurrent}>Home</h1>
        <h1 className={screen == "Careers" ? current : nonCurrent}>Careers</h1>
        <h1 className={screen == "About" ? current : nonCurrent}>About</h1>
      </div>
    </div>
  );
};

export default Navbar;
