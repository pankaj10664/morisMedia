
import { BiHomeAlt,BiBook,BiCartAlt
 } from 'react-icons/bi';


export default function SideNav() {
  return (
    <>
      <div className="navbar side-nav z-10 hidden overflow-x-hidden px-5 pb-16 md:block md:w-[105px] xl:w-[250px]">
        <a class="flex items-center pt-4 pl-5 mt-3 intro-x" href="#top">
          <img
            class="w-8"
            src="https://www.morismedia.in/mainsite/assets/images/header-assets/logo-white.svg"
            alt="logo"
          />{" "}
          <span class="hidden ml-3 text-lg text-white xl:block"></span>
        </a>
        <div class="my-6 side-nav__divider"></div>
        <ul>
          <li>
            <a class="cursor-pointer side-menu side-menu--active">
               <BiHomeAlt/>
              <div class="side-menu__title flex">Dashboard </div>
            </a>
          </li>
          <li>
            <a class="cursor-pointer side-menu animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-10">
              <BiBook/>
              <div class="side-menu__title flex">Menu Layout </div>
            </a>
          </li>
          <li>
            <a class="cursor-pointer side-menu animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-10">
              <BiCartAlt/>
              <div class="side-menu__title flex">E-Commerce </div>
            </a>
          </li>
          <li>
            <a class="cursor-pointer side-menu animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-10">
              <div class="side-menu__title flex">Inbox </div>
            </a>
          </li>
          <li>
            <a class="cursor-pointer side-menu animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-10">
              <div class="side-menu__title flex">Point on Sale</div>
            </a>
          </li>
          <li>
            <a class="cursor-pointer side-menu animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-10">
              <div class="side-menu__title flex">Chat</div>
            </a>
          </li>
          <li>
            <a class="cursor-pointer side-menu animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-10">
              <div class="side-menu__title flex">File Manager</div>
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}
