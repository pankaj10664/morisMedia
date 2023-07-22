import React, { useEffect } from "react";
import {BiRefresh 
} from 'react-icons/bi';
import { SlBasket } from "react-icons/sl";
import useLocalStorage from "use-local-storage";

import "./index.css";
import SideNav from "./sideNav";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

   console.log("theme", theme)
   const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  
  const [currentColor, setCurrentColor] = useLocalStorage("color" ? "blue" : "red");


 const switchColor = (color) => {
  if(theme==="light"){
   setCurrentColor(color);
  }
 };

  return (
    <div className="app" data-theme={theme}>
      <div className="login flex space-justify" data-theme={theme} data-color={currentColor}>
        <SideNav />
        <div class=" container rounded-[30px] md:rounded-[35px/50px_0px_0px_0px] min-w-0 min-h-screen max-w-full md:max-w-none bg-slate-100 flex-1 pb-10 px-4 md:px-6 relative md:ml-4 dark:bg-darkmode-700 before:content-[''] before:w-full before:h-px before:block after:content-[''] after:z-[-1] after:rounded-[40px_0px_0px_0px] after:w-full after:inset-y-0 after:absolute after:left-0 after:bg-white/10 after:mt-8 after:-ml-4 after:dark:bg-darkmode-400/50">
          <div class="relative z-[51] flex h-[67px] items-center border-b border-slate-200">
            <nav class="flex -intro-x mr-auto hidden sm:flex">
              <ol class="flex items-center text-primary dark:text-slate-300">
                <li to="/" class="">
                  <a href="/" aria-current="page">
                    Application
                  </a>
                </li>{" "}
                <li
                  to="/"
                  active="true"
                  class="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-bredcrumb-chevron-dark before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-bredcrumb-chevron-darkmode text-slate-800 cursor-text dark:text-slate-400"
                >
                  <a href="/" aria-current="page">
                    Dashboard
                  </a>
                </li>
              </ol>
            </nav>
            <div class="search intro-x relative mr-3 sm:mr-6">
              <div class="relative hidden sm:block">
                <input
                  type="text"
                  class="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&amp;[readonly]]:bg-slate-100 [&amp;[readonly]]:cursor-not-allowed [&amp;[readonly]]:dark:bg-darkmode-800/50 [&amp;[readonly]]:dark:border-transparent text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 ease-in-out focus:w-72 focus:border-transparent dark:bg-darkmode-400/70"
                  placeholder="Search..."
                />
              </div>
            </div>
          

          <div class="relative intro-x mr-auto sm:mr-6">
            <div
              class="cursor-pointer relative block text-slate-600 outline-none before:absolute before:top-[-2px] before:right-0 before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"
              as="div"
              role="presentation"
            >
           
            </div>
          </div>
          <div class="relative">
            <div
              class="cursor-pointer image-fit zoom-in intro-x block h-8 w-8 overflow-hidden rounded-full shadow-lg"
              as="div"
              role="presentation"
            >
              <img
                alt="Midone Tailwind HTML Admin Template"
                src="https://tinker-svelte.vercel.app/assets/profile-6-a9037862.jpg"
              />
            </div>{" "}

            </div>
          </div>


          <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 2xl:col-span-9">
          <div class="grid grid-cols-12 gap-6">
              <div class="col-span-12 mt-8">
              <div class="flex items-center h-10 intro-y">
                  <h2 class="mr-5 text-lg font-medium truncate">General Report</h2> 
                  <a href="#top" class="flex items-center ml-auto text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-refresh-ccw stroke-[1.3] w-4 h-4 mr-3"><path d="M3 2v6h6"></path> <path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path> <path d="M21 22v-6h-6"></path> <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path> </svg>
                     Reload Data</a>
                     </div> 
                     <div class="grid grid-cols-12 gap-6 mt-5">
                      <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y shadow-2xl">
                      <div class="relative zoom-in before:content-[''] before:w-[90%] before:shadow-[0px_3px_5px_#0000000b] before:bg-white/60 before:h-full before:mt-2.5 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
                      <div class="p-5 box">
                      <div class="flex">
                       <SlBasket/>  <div class="ml-auto">
                        <div >33%</div>
                        </div>
                        </div>
                      <div class="mt-6 text-3xl font-medium leading-8">4.710</div> 
                       <div class="mt-1 text-base text-slate-500">Item Sales</div>
                       
                        </div>

                        </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y shadow-2xl">
                      <div class="relative zoom-in before:content-[''] before:w-[90%] before:shadow-[0px_3px_5px_#0000000b] before:bg-white/60 before:h-full before:mt-2.5 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
                      <div class="p-5 box">
                      <div class="flex">
                       <SlBasket/>  <div class="ml-auto">
                        <div >33%</div>
                        </div>
                        </div>
                      <div class="mt-6 text-3xl font-medium leading-8">4.710</div> 
                       <div class="mt-1 text-base text-slate-500">Item Dispatched</div>
                       
                        </div>

                        </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y shadow-2xl">
                      <div class="relative zoom-in before:content-[''] before:w-[90%] before:shadow-[0px_3px_5px_#0000000b] before:bg-white/60 before:h-full before:mt-2.5 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
                      <div class="p-5 box">
                      <div class="flex">
                       <SlBasket/>  <div class="ml-auto">
                        <div >33%</div>
                        </div>
                        </div>
                      <div class="mt-6 text-3xl font-medium leading-8">4.710</div> 
                       <div class="mt-1 text-base text-slate-500">Order Sales</div>
                       
                        </div>

                        </div>
                        </div>
                        <div class="col-span-12 sm:col-span-6 xl:col-span-3 intro-y shadow-2xl">
                      <div class="relative zoom-in before:content-[''] before:w-[90%] before:shadow-[0px_3px_5px_#0000000b] before:bg-white/60 before:h-full before:mt-2.5 before:absolute before:rounded-md before:mx-auto before:inset-x-0 before:dark:bg-darkmode-400/70">
                      <div class="p-5 box">
                      <div class="flex">
                       <SlBasket/>  <div class="ml-auto">
                        <div >56%</div>
                        </div>
                        </div>
                      <div class="mt-6 text-3xl font-medium leading-8">67.70</div> 
                       <div class="mt-1 text-base text-slate-500">New  Purchase</div>
                       
                        </div>

                        </div>
                        </div>

                </div>
                </div>
                
            
            </div>
          </div>
        </div>

      
       



        {/* <div className='container'>
        
        
          <div className='top'>
            <i class='fab fa-google'></i>
            <i class='fab fa-facebook-square'></i>
            <i class='fab fa-linkedin'></i>
            <i class='fab fa-twitter-square'></i>
            <i class='fab fa-apple'></i>
          </div>
          <p className='divider'><span>Or</span></p>
          <form>
            <label>E-mail</label>
            <input type='email' placeholder='Enter your email' />
            <label>Password</label>
            <input type='password' placeholder='Enter your password' />
            <div className='remember'>
              <input type='checkbox' checked='checked' />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password?</p>
            <a href='/'>Reset Password</a>
          </div>
          <p className='create'>Create Account</p>
        </div> */}
      </div>
      {/* <div className="theme-toggle">
        <h2>Light Theme</h2>
        <i onClick={switchTheme} class="fas fa-toggle-on"></i>
      </div> */}
      <div class="-mx-3 bg-black/[0.15] py-5 px-3 dark:bg-transparent sm:-mx-8 sm:px-8 md:py-0">
        <a
          class="fixed bottom-0 right-0 z-50 flex items-center justify-center w-40 h-12 mb-10 mr-10 border rounded-full shadow-md cursor-pointer box"
          href="#top"
        >
          <div class="mr-4 text-zinc-950 dark:text-slate-200">Dark Mode</div>{" "}
        
            <div
              class={theme === "light"?"border w-[38px] h-[24px] p-px outline-none rounded-full relative cursor-pointer before:content-[''] before:w-[22px] before:h-[22px] before:transition-all before:duration-200 before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:absolute before:inset-y-0 before:my-auto before:rounded-full":"border w-[38px] h-[24px] p-px outline-none rounded-full relative cursor-pointer before:content-[''] before:w-[22px] before:h-[22px] before:transition-all before:duration-200 before:shadow-[1px_1px_3px_rgba(0,0,0,0.25)] before:absolute before:inset-y-0 before:my-auto before:rounded-full bg-primary border-primary before:ml-[13px] before:bg-white"}
              onClick={switchTheme}
            ></div>
          
        </a>

        <div class="fixed bottom-0 right-0 z-50 flex items-center justify-center h-12 px-5 mb-10 border rounded-full shadow-md box mr-52">
          <div class="hidden mr-4 sm:block text-slate-600 dark:text-slate-200">
            Color Scheme
          </div>{" "}
          <a
            class="block w-8 h-8 cursor-pointer bg-blue-800 rounded-full border-4 mr-1 hover:border-slate-200 border-slate-300 dark:border-darkmode-800/80"
            onClick={()=>{switchColor("blue")}}
          ></a>{" "}
          <a
            class="block w-8 h-8 cursor-pointer bg-emerald-900 rounded-full border-4 mr-1 hover:border-slate-200 border-white dark:border-darkmode-600"
            onClick={()=>{switchColor("green")}}
          ></a>{" "}
          <a
            class="block w-8 h-8 cursor-pointer bg-blue-900 rounded-full border-4 mr-1 hover:border-slate-200 border-white dark:border-darkmode-600"
            onClick={()=>{switchColor("dark-blue")}}
          ></a>{" "}
          <a
            class="block w-8 h-8 cursor-pointer bg-cyan-900 rounded-full border-4 mr-1 hover:border-slate-200 border-white dark:border-darkmode-600"
            onClick={()=>{switchColor("light-green")}}
          ></a>{" "}
          <a
            class="block w-8 h-8 cursor-pointer bg-indigo-900 rounded-full border-4 hover:border-slate-200 border-white dark:border-darkmode-600"
            onClick={()=>{switchColor("red")}}
          ></a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
