import React from "react";
import "../styles/components/splashscreen/splashscreen.scss";
import ScaleLoader from "react-spinners/ClockLoader";
const SplashScreen = () => {
  return (
    <div className="splash-screen">
      <div className="splash-screen-content">
        <ScaleLoader color="white" size={110} />
      </div>
    </div>
  );
};

export default SplashScreen;
