import backgroundPng from "@static/back.png";
import backgroundMobilePng from "@static/background-mobile.png";
// import backgroundPngblack from "@static/black.png";
import React from "react";

const Background = React.memo(function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 h-full w-full">
      <img
        src={backgroundPng}
        alt=""
        className="fixed hidden h-full w-full object-cover object-center xs:block"
      />
      <img
        src={backgroundMobilePng}
        alt=""
        className="fixed block h-full w-full object-cover object-bottom xs:hidden"
      />
    </div>
  );
});

export default Background
