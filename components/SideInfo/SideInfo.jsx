"use client"

import Image from "next/image";
import { dataInfos } from "./(data)/dataInfos";
import { dataIconSocial } from "./(data)/dataIconSocial";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import "./../../app/globals.css";



const SideInfo = () => {

  const {isComponentVisible,setComponentVisible} = useContext(AppContext)
  return (
    

    <div className={`relative text-center pb-8  ${isComponentVisible ? "" : "hiddenSideInfo"}`}>
      <Image
        src="/photoProfile.png"
        alt=""
        width={220}
        height={200}
        className="absolute left-[50%] transform -translate-x-[50%] mt-[-160px] rounded-[20px] bg-gradient-to-tl from-[#517299] to-[#7db9e8] drop-shadow-xl  "
      />
      <div className="pt-[100px] pb-4 ">
        <h1 className="text-[26px] font-bold mb-2 ">António Martins</h1>
        <h4 className="text-slate-500 mb-4 inline-block px-4 py-1 rounded-xl dark:bg-[#1D1D1D]">
          Front-end Developer
        </h4>
      </div>

      <div className="flex justify-center space-x-3">
        {dataIconSocial.map((item) => (
          <a key={item.id} href={item.url}>
            <span className="flex items-center justify-center bg-slate-100 w-10 h-10 rounded-lg text-[#1773EA] dark:bg-[#1D1D1D]">
              {item.icon}
            </span>
          </a>
        ))}
      </div>

      <div className="bg-slate-100 m-8 px-5 py-7 rounded-2xl dark:bg-[#1D1D1D]">
        {dataInfos.map((dataInfo) => (
          <div key={dataInfo.id} className="flex items-center space-x-3 py-2 border-b border-slate-300">
            <span className="flex shrink-0 items-center justify-center bg-white w-10 h-10 rounded-lg dark:bg-[#111111]">
              {dataInfo.icon}
            </span>
            <div className="flex flex-col items-start break-all">
              <span className="text-xs">{dataInfo.title}</span>
              <span className="">{dataInfo.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <a href="/CV_Dev_Antonio Martins.pdf" className="inline-flex justify-center items-center space-x-3 px-9 py-3 rounded-[30px] bg-bgButtonR hover:bg-bgButtonL duration-200 transition ease-in-out">
          <span className="flex justify-center items-center  ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="1em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
          </span>
          <span className="flex justify-start items-center">
              <h3 className="text-xl text-white">Download CV</h3>
          </span>
      </a>
    </div>
  );
};

export default SideInfo;
