import React from "react";

import Navbar from "../Components/Navbar";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Navbar screen="Home" />
      <div className="bg-logo-bg h-screen flex flex-col items-center justify-center text-white">
        <motion.div
          animate={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center"
        >
          <h1
            style={{ fontFamily: "Mulish" }}
            className="text-7xl font-extrabold text-logo-blue"
          >
            MARS
          </h1>
          <h1 className="mt-3 text-logo-blue font-extralight text-3xl">
            -- TECHNOSOFT --
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
