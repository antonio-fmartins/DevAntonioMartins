"use client"
import { useTheme } from "next-themes"
import "../globals.css"
import Footer from "@/components/Footer/Footer"
import { useEffect, useState } from "react"
import { dataBoxContact } from "./(data)/dataBoxContact"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {


  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página até o topo quando a página é carregada
  }, [])

  const{theme} = useTheme()
  const [nameIsActive, setNameIsActive] = useState("")
  const [emailIsActive, setEmailIsActive] = useState("")
  const [messageIsActive, setMessageIsActive] = useState("")

  const ref = useRef()

  const handleSubmit =(e)=>{
      e.preventDefault()

      emailjs.sendForm('service_mpl0197', 'template_hh75igq', ref.current, 'IBqgZ502de4P1jqRk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setNameIsActive("")
      setEmailIsActive("")
      setMessageIsActive("")

      if(theme == "light"){
        toast.success('Thank you for getting in touch! Have a great day!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          });   
      }else{
        toast.success('Thank you for getting in touch! Have a great day!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
          }); 
      }
  }

  return (
    <div className="absolute top-[63px] lg:static w-full bg-white mb-4 rounded-b-xl lg:rounded-xl dark:bg-[#111111]">
      <div className=" p-4 lg:p-10" data-aos="fade" data-aos-duration="1200">
        <h2 className="after-effect after:left-44">Contact</h2>
        <div className="my-8 grid lg:grid-cols-2 gap-12" data-aos="fade-up" data-aos-duration='1000'>
          {dataBoxContact.map(item => (
            <div key={item.id} style={{backgroundColor: theme === "light" ? item.bgColor : "#212425"}} className="rounded-xl flex flex-col p-9">
              <span className="flex items-center font-medium space-x-4">
                {item.icon}
                <h3 className="text-xl">{item.title}</h3>
              </span>
              <p className="pl-8 mt-3 text-slate-600 text-[17px] dark:text-gray-400 break-all">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#F7FAFC] p-6 lg:p-14  rounded-xl text-slate-600 dark:text-gray-400 dark:bg-transparent dark:border-[2px] dark:border-[#1d1d1d]" data-aos="fade-up" data-aos-duration='2000'>
          <h2 className="mb-6 text-2xl w-[70%]">I am always open to discuss <span className="text-black font-medium dark:text-white">new opportunities and talk about new things.</span></h2>
          <form ref={ref} onSubmit={handleSubmit}>
              <div className="relative z-0 mt-5 mb-9">
                <input type="text" autoComplete="off"
                       name="name" value={nameIsActive}
                       className="w-full block bg-transparent border-b-2 border-slate-300 outline-none py-2.5 px-0 text-[14px] focus:border-[#FF6464] peer" 
                       required
                       onChange={(e)=> setNameIsActive(e.target.value)}
                       />
                <label for="name" 
                       className={`${nameIsActive ? "absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#FF6464]  peer-focus:-translate-y-8 peer-focus:font-medium" : "absolute top-3 -z-10 text-sm peer-focus:-translate-y-8 peer-focus:font-medium peer-focus:text-[#FF6464] peer-focus:scale-75 transition duration 300 ease-in-out origin-[0]"}`}>
                  Name*
                </label>
              </div>
              <div className="relative z-0 mt-5 mb-9">
                <input type="text" autoComplete="off"
                       name="email" value={emailIsActive}
                       className="w-full block bg-transparent border-b-2 border-slate-300 outline-none py-2.5 px-0 text-[14px] focus:border-[#5185D4] peer" 
                       required
                       onChange={(e)=> setEmailIsActive(e.target.value)}
                       />
                <label for="name" 
                       className={`${emailIsActive ? "absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#5185D4]  peer-focus:-translate-y-8 peer-focus:font-medium" : "absolute top-3 -z-10 text-sm peer-focus:-translate-y-8 peer-focus:font-medium peer-focus:text-[#5185D4] peer-focus:scale-75 transition duration 300 ease-in-out origin-[0]"}`}>
                  Email*
                </label>
              </div>
              <div className="relative z-0 mt-5 mb-9">
                <textarea 
                       type="text" 
                       name="message" value={messageIsActive}
                       className="w-full block bg-transparent border-b-2 border-slate-300 outline-none py-2.5 px-0 text-[14px] focus:border-[#CA56F2] peer" 
                       required
                       onChange={(e)=> setMessageIsActive(e.target.value)}
                       />
                <label for="name" 
                       className={`${messageIsActive ? "absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-[#CA56F2]  peer-focus:-translate-y-8 peer-focus:font-medium" : "absolute top-3 -z-10 text-sm peer-focus:-translate-y-8 peer-focus:font-medium peer-focus:text-[#CA56F2] peer-focus:scale-75 transition duration 300 ease-in-out origin-[0]"}`}>
                  Message*
                </label>
              </div>
              <button className="bg-transparent inline-block px-6 py-2 border-2  rounded-xl border-gray-400 dark:border-gray-300 text-black dark:text-white hover:text-white cursor-pointer hover:bg-bgButtonL hover:border-transparent dark:hover:border-transparent transition-all duration-300 ease-in-out">
                <input className="font-medium" type="submit" value="Submit" />
              </button>
          </form>
        </div>
        <ToastContainer/>
      </div>
      <Footer/>
    </div>
  )
}
{/*Thank you for getting in touch! I will get back in touch with you soon!Have a great day!*/}
export default Contact