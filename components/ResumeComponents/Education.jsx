import { useTheme } from "next-themes"

const Education = ({filtered}) => {

  const{theme} = useTheme()


  return (
    <div className="flex flex-col gap-5 mb-8">
            <div className="flex space-x-3 items-center">
              <span className="">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f24f62" height="1.8rem"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>
              </span>
              <h2 className="text-[27px] font-medium">Education</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
                {filtered.map(item =>(
                  <div key={item.id} style={{backgroundColor:theme === "light" ? item.color : ""}} className="bg-green-100 flex flex-col rounded-xl p-4 leading-7 dark:bg-transparent dark:border-[2px] dark:border-[#1d1d1d]" data-aos="fade-up" data-aos-duration='1000'>{/*single-content */}
                      <h4 className="text-sm text-slate-500">{item.date}</h4>
                      <h4 className="text-[15px] font-medium ">{item.course}</h4>
                      <div className="flex justify-between">
                        <p className="text-[14px] font-extralight">{item.location}</p>
                        <a href={item.url} className="flex items-end cursor-pointer">
                          {item.icon}
                        </a>
                      </div>
                  </div>
                ))}
            </div>
          </div>
  )
}

export default Education