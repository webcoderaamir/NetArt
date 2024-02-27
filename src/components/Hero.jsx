import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="box">
        <div className="left">
          <div className="img2">
            <img src="../src/assets/images/1.png" alt="" />
          </div>
        </div>

        <div className="right">
            <div className="text">
                <ul> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</ul>
                <div className="txt">
                <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                </div>
            </div>
            <div className="img3">
                <img src="../src/assets/images/2.png" alt="" />
            </div>
            <div className="text2">
                <ul>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
