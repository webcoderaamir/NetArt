import React from 'react'
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import image3 from '../assets/images/3.png';

const About = () => {
  return (
    <div className='about'>
        <div className="text3">
            <ul>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</ul>
        </div>
        <div className="img4">
            <img src={image3} alt="" />
            <ul>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</ul>
        </div>
        <div className="text4">
            <ul>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</ul>
            <ul>CHEMICALS & PROCESS POWER WATER & WASTE WATER OILS & GAS PHARMA SUGARS & DISTILLERIES PAPER & PULP MARINE & DEFENCE METAL & MINING FOOD & BEVERAGE PETROCHEMICAL & REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE & RESIDENTIAL</ul>
        </div>
        <div className="socials">
            <div className="links">
                <IoMdCall />
                <h3>Toll free 1800 200 1234</h3>
            </div>
            <div className="links">
                <FaFacebookF />
                <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
            </div>
            <div className="links">
                <TfiWorld />
                <a href="www.crigroups.com">www.crigroups.com</a>
            </div>
        </div>
    </div>
  )
}

export default About