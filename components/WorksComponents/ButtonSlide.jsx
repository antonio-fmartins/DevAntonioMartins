import { useSwiper } from "swiper/react"

const NavSlide = () => {

    const swiper = useSwiper()

  return (
    <div className="flex justify-evenly">
        <button className="" onClick={()=>swiper.slidePrev()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F1F5F9" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class=" transition duration-500 ease-in-out w-6 h-6 hover:fill-[#F35D6F] hover:text-white hover:scale-125 hover:stroke-white dark:fill-[#1d1d1d]"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </button>
        <button className="" onClick={()=>swiper.slideNext()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F1F5F9" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="transition duration-500 ease-in-out w-6 h-6 hover:fill-[#F35D6F] hover:text-white hover:scale-125 hover:stroke-white dark:fill-[#1d1d1d]"><path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </button>
    </div>
  )
}

export default NavSlide