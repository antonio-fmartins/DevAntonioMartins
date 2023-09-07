"use client"

import { dataSkills } from "../../app/resume/(data)/dataSkills";


const  MySkills = () => {
 
  return (
    <div className="bg-[#F7FAFC] grid lg:grid-cols-2 px-[50px] py-10 gap-10 dark:bg-[#0D0D0D]">
      <div data-aos="fade-right" data-aos-duration='1000'>
         <h2 className="text-2xl font-medium mb-8">Working Skills</h2>
        {dataSkills.workingSkills.map((item, index) =>(
            <div key={index} className="flex flex-col mb-6">
                <div className="flex justify-between pr-5 text-gray-600 text-[15px] font-semibold dark:text-gray-400">
                    <h2>{item.title}</h2>
                    <h2>{item.per}</h2>
                </div>
                <div className="w-full h-[3px] bg-slate-300 rounded-xl flex items-center">
                    <div className={`h-[3px] rounded-xl`} style={{width:item.per, backgroundColor:item.colorbar}}></div>
                </div>
            </div>
        ))}
      </div>
      <div data-aos="fade-left" data-aos-duration='1000'>
        <h2 className="text-2xl font-medium mb-8">Knowledges</h2>
        {dataSkills.knowledges.map(item =>(
            <div key={item.id} className="bg-slate-200 inline-flex px-3 py-2 rounded-lg m-2 dark:bg-[#1d1d1d]">
                <h4 className="text-[14px] text-gray-600 dark:text-gray-400">{item.title}</h4>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
