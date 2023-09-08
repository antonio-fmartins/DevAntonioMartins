"use client"

import "../globals.css";
import Footer from "@/components/Footer/Footer";
import { dataEducation } from "./(data)/dataEducation";
import { useEffect, useState } from "react";
import Education from "@/components/ResumeComponents/Education";
import Experience from "@/components/ResumeComponents/Experience";
import MySkills from "@/components/ResumeComponents/MySkills";



const Resume = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página até o topo quando a página é carregada
  }, [])
  
  const [isActive, setIsActive] = useState("All")
  const [ filtered, setFiltered] = useState(dataEducation)

   const handleCategory = (category) =>{

    setIsActive(category)

    if(category === "All"){
     setFiltered(dataEducation)
    }else{
     const filteredItems = dataEducation.filter(item => item.category === category)
     setFiltered(filteredItems)
    }
   }

   const getTextColor = (cat) => {
    return isActive === cat ? '#FA5252' : '#878585'}


 
  return (
    <div className="absolute top-[63px] lg:static w-full bg-white mb-4 rounded-b-xl lg:rounded-xl dark:bg-[#111111]">
      <div className=" p-4 lg:px-10 pt-10 pb-5" data-aos="fade" data-aos-duration="1200">
        <h2 className="after-effect after:left-44">Resume</h2>
        <ul  className="flex justify-end gap-3 lg:gap-7 my-10" >
          <li className="filterbtn" style={{color: getTextColor('All')}} onClick={() => handleCategory("All")}>All</li>
          <li className="filterbtn" style={{color: getTextColor('Programming')}} onClick={() => handleCategory("Programming")}>Programming</li>
          <li className="filterbtn" style={{color: getTextColor('Management')}} onClick={() => handleCategory("Management")}>Management</li>
          <li className="filterbtn" style={{color: getTextColor('Optical')}} onClick={() => handleCategory("Optical")}>Optical</li>
        </ul>
        <div className="my-8 flex flex-col gap-x-5">{/*main-content */}
          <Education filtered={filtered}/>
          <Experience/>
        </div>
      </div>
      <MySkills/>
      <Footer />
    </div>
  );
};

export default Resume;
