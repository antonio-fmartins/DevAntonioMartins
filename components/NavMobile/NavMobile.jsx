"use client"
import { useContext, useState } from "react"
import Link from "next/link"
import { navIcons } from "../NavBar/(data)/navIcons"
import { AppContext } from "@/context/AppContext"




const NavMobile = () => {
    
    const[isOpen, setIsOpen] = useState(false)
    const {setComponentVisible} = useContext(AppContext)
    const [buttonIsActive, setButtonIsActive] = useState(1)
   
    const showHiddenMenu = (id)=>{
        setIsOpen(!isOpen)
        setButtonIsActive(id)

        if(id === 1){
            setComponentVisible(true)
        }else{
            setComponentVisible(false)
        }
    }

  return (
    <div>
      <button className="rounded-[50%] bg-bgButtonL "
          onClick={()=>setIsOpen(!isOpen)}
      >
          <span className={"p-2 flex rounded-[50%] items-center text-white cursor-pointer lg:hidden"}>
            {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                      } 
          </span>
      </button>
     {isOpen && (
        <div className="absolute left-0 top-[63px] bg-white w-full p-1 rounded-b-xl z-10 dark:bg-[#1d1d1d]">
            {navIcons.map(item =>(
                <Link key={item.id}
                    href={item.url}
                    className= {`bg-white hover:bg-bgButtonL text-black dark:bg-[#1d1d1d] dark:text-gray-400 dark:hover:text-white hover:text-white px-2 py-3 flex space-x-2 items-center text-sm rounded-lg transition ease-in-out duration-300
                                    ${buttonIsActive === item.id ? "bg-bgButtonL text-white dark:text-white" :""}
                                `}
                    onClick={()=>showHiddenMenu(item.id)}
                >
                    <span className="">
                        {item.icon}
                    </span>
                    <p>{item.title}</p>
                </Link>
            ))}
        </div>
     )}
    </div>

  )
}

export default NavMobile