import { useEffect } from "react";
import {
  Collapse,
  Ripple,
  initTWE,
} from "tw-elements";
import ImagenHeaderNav from "../assets/ImagenHeaderNav.gif";
import { NavLink } from "react-router";




function HeaderNav() {
    useEffect(() => {
        initTWE({ Collapse, Ripple });
    }, [])
    return (
        <header>

            <nav
                className="relative flex w-full items-center justify-between bg-white py-2 shadow-dark-mild dark:bg-body-dark lg:flex-wrap lg:justify-start lg:py-4"
                data-twe-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    <div className="flex items-center">

                        <button
                            className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                            type="button"
                            data-twe-collapse-init
                            data-twe-target="#navbarSupportedContentX"
                            aria-controls="navbarSupportedContentX"
                            aria-expanded="false"
                            aria-label="Toggle navigation">

                            <span
                                className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </span>
                        </button>
                    </div>


                    <div
                        className="!visible hidden grow basis-[100%] items-center text-center lg:!flex lg:basis-auto lg:text-left"
                        id="navbarSupportedContentX"
                        data-twe-collapse-item>
                        <ul
                            className="me-auto flex flex-col lg:flex-row"
                            data-twe-navbar-nav-ref>
                            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <NavLink
                                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    to="/"
                                    data-twe-nav-link-ref
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                >Inicio</NavLink>
                            </li>
                            <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                                <NavLink
                                    className="block text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    to="/contact"
                                    data-twe-nav-link-ref
                                    data-twe-ripple-init
                                    data-twe-ripple-color="light"
                                >Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div
                class="relative h-[350px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
                      <img className="h-full w-full overflow-hidden bg-cover bg-[100%]" src={ImagenHeaderNav} alt="" srcset="" />
            </div>
        </header>
    )
}

export default HeaderNav;