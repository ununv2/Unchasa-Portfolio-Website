"use client";
import Image from "next/image";
import pfp from "@public/profilepic.jpg";
import { useState } from "react";
import Profile from "../components/profile";
import Experience from "../components/experience";
import Education from "../components/education";
import bg from "@public/reversemain.png";

export default function About() {
  const [openProfile, setOpenProfile] = useState<boolean>(true);
  const [openExperience, setOpenExperience] = useState<boolean>(false);
  const [openEducation, setOpenEducation] = useState<boolean>(false);

  const toggleProfile = () => {
    setOpenProfile(!openProfile);
    setOpenExperience(false);
    setOpenEducation(false);
  };

  const toggleExperience = () => {
    setOpenExperience(!openExperience);
    setOpenProfile(false);
    setOpenEducation(false);
  };

  const toggleEducation = () => {
    setOpenEducation(!openEducation);
    setOpenProfile(false);
    setOpenExperience(false);
  };

  return (
    <div
      id="about"
      className="w-screen h-screen"
      style={{ backgroundImage: "url(reversemain.png)" }}
    >
      {/* Whole Screen Make Center */}
      <div className="flex w-full h-full justify-center items-center">
        {/* GLASS Screen */}
        <div
          data-aos="zoom-out-up"
          className="flex justify-start items-start w-[70%] h-[85%] rounded-[3em] bg-gradient-to-r from-cyan-400/10 bg-opacity-20 backdrop-blur-md backdrop-filter shadow-[-8px_-10px_14px_-15px_rgba(0,255,255,1)] "
        >
          {/* 2 COLUMNS */}
          <div
            className="grid grid-cols-2 w-full h-full"
            style={{ gridTemplateColumns: "2fr 5fr" }}
          >
            {/* LEFT COLUMN */}
            <div className="bg-white/5 shadow-2xl rounded-[3em] ">
              {/* 3 ROWS in Left Column */}
              <div
                className="grid grid-rows-3 w-full h-full"
                style={{ gridTemplateRows: "4fr 3fr 1.9fr" }}
              >
                {/* 1st ROW PFP,NAME,DESCRIPTION */}
                <div className="flex flex-col gap-4 justify-center items-center w-full">
                  <Image
                    className="rounded-full w-[10vw]"
                    src={pfp}
                    alt="pfp"
                  ></Image>
                  <div className="text-center text-white">
                    <h2>Unchasa Chen</h2>
                    <h3 className="text-[0.7em]">
                      Computer Engineering Student
                    </h3>
                  </div>
                </div>
                {/* 2nd ROW BUTTONS */}
                <div className="flex flex-col items-center w-full justify-around text-white text-[1.2em]">
                  <div
                    onClick={toggleProfile}
                    className={`border border-white/50 flex items-center justify-center h-14 w-[80%] bg-gradient-to-br from-transparent from-30% via-cyan-500 to-blue-500 bg-size-200 bg-pos-0 ${
                      openProfile ? "bg-pos-100" : "hover:bg-pos-100"
                    } transition-all duration-500 shadow-xl rounded-full cursor-pointer`}
                  >
                    Profiles
                  </div>

                  <div
                    onClick={toggleExperience}
                    className={`border border-white/50 flex items-center justify-center h-14 w-[80%] bg-gradient-to-br from-transparent from-30% via-cyan-500 to-blue-500 bg-size-200 bg-pos-0 ${
                      openExperience ? "bg-pos-100" : "hover:bg-pos-100"
                    } transition-all duration-500 shadow-xl rounded-full cursor-pointer`}
                  >
                    Experience
                  </div>
                  <div
                    onClick={toggleEducation}
                    className={`border border-white/50 flex items-center justify-center h-14 w-[80%] bg-gradient-to-br from-transparent from-30% via-cyan-500 to-blue-500 bg-size-200 bg-pos-0 ${
                      openEducation ? "bg-pos-100" : "hover:bg-pos-100"
                    } transition-all duration-500 shadow-xl rounded-full cursor-pointer`}
                  >
                    Education
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            {/* RIGHT COLUMN */}
            <div className="">
              {openProfile && <Profile />}
              {openExperience && <Experience />}
              {openEducation && <Education />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
