import NavBar from "@/components/NavBar/Navbar";
import SideInfo from "@/components/SideInfo/SideInfo";
import "./globals.css";
import Providers from "./providers";
import ThemeSwitcher from "./ThemeSwitcher";
import NavMobile from "@/components/NavMobile/NavMobile";
import { AppContextProvider } from "@/context/AppContext";
import { Analytics } from '@vercel/analytics/react';


export const metadata = {
  title: "Portfolio - Antonio Martins",
  description: "Web developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <Providers>
          <AppContextProvider>
            <section className="bg-bgHome bg-cover lg:bg-top bg-no-repeat bg-fixed flex flex-col dark:bg-bgHometwo">
              <div className="w-full bg-[#F3F6F6] dark:bg-[#000000] lg:dark:bg-transparent lg:bg-transparent mx-auto">
                <div className="flex justify-end lg:mx-[150px] px-[20px] lg:my-10 my-3 space-x-3">
                    <ThemeSwitcher/>
                    <NavMobile/>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between  lg:mt-[250px] lg:px-[5%] gap-[40px]">
                <div className="min-w-[300px] xl:min-w-[400px] h-[100%] mt-[200px] lg:mt-0 xl:mb-5 bg-white rounded-2xl lg:sticky top-48 dark:bg-[#111111]" data-aos="fade-up" data-aos-duration="900">
                  <SideInfo />
                </div>
                <div className="w-full flex flex-col items-end gap-8 mb-8  overflow-hidden">
                  <NavBar />
                  {children}
                  <Analytics />
                </div>
              </div>
            </section>
          </AppContextProvider>
        </Providers>
      </body>
    </html>
  );
}
