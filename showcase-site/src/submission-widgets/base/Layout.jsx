import { Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate, useLocation } from 'react-router-dom';
import {motion} from "framer-motion";
import React from "react";

const Layout = () => {

  return (
      <div className="w-[300px] h-[300px] p-6 mx-auto bg-gray-800 rounded-xl shadow-lg flex flex-col justify-start">
          {/* Header (stays up top) */}
          <div className="text-center mb-4">
              <motion.div initial={{y: 10, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 0.5}}>
                  <img src="src/assets/momentum.png" alt="Momentum Logo" style={{height: '80px'}}/>
              </motion.div>
          </div>

          {/* Dynamic content area */}
          <div className="flex-1 flex flex-col items-center justify-center">
              <Outlet/>
          </div>
      </div>
  );
};

export default Layout;