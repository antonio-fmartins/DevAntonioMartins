"use client"
import "./globals.css";
import { aboutBox } from "./(data)/aboutBox";
import Footer from "@/components/Footer/Footer";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {

   const {theme} = useTheme()

   useEffect(() => {
    window.scrollTo(0, 0); // Rola a página até o topo quando a página é carregada
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div className="w-full bg-white rounded-xl dark:bg-[#111111]" >
      <div className=" p-4 lg:p-10" data-aos="fade" data-aos-duration="1000">
        <h2 className="after-effect after:left-52">About Me</h2>
        <div className="my-8">
          <p className="text-slate-600 text-[15px] text-justify dark:text-gray-400">
            I made an exciting career transition to become a Web Developer. My
            passion for technology motivated me to acquire new skills
            in programming, interface design and web development. I completed
            courses and hands-on projects to master languages such as HTML, CSS
            and JavaScript, as well as familiarize myself with popular
            frameworks.
            <br />
            <br />
            Now, I am excited to apply my creativity and technical knowledge to
            create interactive and functional websites, while continuing to seek
            opportunities to enhance my skills and contribute to exciting
            projects in the world of web development.
          </p>
        </div>
        <section className="mt-[50px]">
          <h3 className="font-['Roboto_Slab'] text-4xl ">Why Hire Me?</h3>
            <div className=" grid lg:grid-cols-2 gap-8 mt-7">
                {aboutBox.map(item =>(
                    <div data-aos="fade-up" data-aos-duration='1200' key={item.id} style={{backgroundColor: theme === "light" ? item.color : "transparent"}} className={"flex justify-between p-4 rounded-xl space-x-2 dark:bg-transparent dark:border-[2px] dark:border-[#1d1d1d]"}>
                        <span className="">
                          {item.icon}
                        </span>
                        <div className="">
                          <h4 className="font-medium text-[16px] mb-2">{item.title}</h4>
                          <p className="text-xs text-justify text-slate-500 leading-normal">
                            {item.desc}
                          </p>
                        </div>
                    </div>
                ))}
            </div>{/* main-box-container*/}
        </section>
      </div>
        <Footer/>
    </div>
    
  );
}
