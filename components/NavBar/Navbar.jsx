"use client"

import { useEffect, useState } from "react"
import { navIcons } from "./(data)/navIcons"
import Link from "next/link"





const Nav = () => {
 
const [handleBtn, setHandleBtn] = useState(1)

const toggleBtnNav = (id)=>{
  setHandleBtn(id)

  
}


return (
    <div className=" bg-white hidden lg:flex max-w-fit justify-end space-x-6 px-[40px] py-7 rounded-xl dark:bg-[#111111]" data-aos="fade-left" data-aos-duration="1300" >
       {navIcons.map((icon) => (
        <Link
        key={icon.id} 
        href={icon.url} 
        className={`bg-slate-200 py-4 rounded-xl hover:bg-bgButtonL hover:text-white 
                   text-[13px] font-medium flex flex-col items-center gap-1 
                   duration-300 transition-all ease-in-out cursor-pointer dark:bg-[#1d1d1d] dark:text-slate-400 dark:hover:text-white 
                   ${handleBtn === icon.id ? "bg-bgButtonL text-white dark:text-white" : ""}`}
       onClick={() => toggleBtnNav(icon.id)}
                
        >
          <span className="px-7">{icon.icon}</span>
       <p>{icon.title}</p>
        </Link>
    ))}
    </div>
  )
}

export default Nav