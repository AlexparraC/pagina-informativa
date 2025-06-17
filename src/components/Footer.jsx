import { BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GrGithub } from "react-icons/gr";

function Footer() {
    return (
        <> 
            <footer
                class="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
                <div class="container px-6 pt-6">
                    <div class="mb-6 flex justify-center space-x-2">
                        <a
                            href="#!"
                            type="button"
                            class="rounded-full bg-[#3b5998] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="[&>svg]:h-5 [&>svg]:w-5">
                                <GrGithub/>
                            </span>
                        </a>

                        <a
                            href="#!"
                            type="button"
                            class="rounded-full bg-[#55acee] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                <GrGithub/>
                            </span>
                        </a>

                        <a
                            href="#!"
                            type="button"
                            class="rounded-full bg-[#dd4b39] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                <BsWhatsapp/>
                            </span>
                        </a>

                        <a
                            href="#!"
                            type="button"
                            class="rounded-full bg-[#ac2bac] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                <BsWhatsapp/>
                            </span>
                        </a>

                        <a
                            href="#!"
                            type="button"
                            class="rounded-full bg-[#0082ca] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                <GoMail/>
                            </span>
                        </a>

                        <a
                            href="#!"
                            type="button"
                            class="rounded-full bg-[#333333] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                <GoMail/>
                            </span>
                        </a>
                    </div>
                </div>

                
                <div class="w-full bg-black/5 p-4 text-center">
                    © 2023 Copyright:
                    <a href="https://tw-elements.com/">TW Elements</a>
                </div>
            </footer>
        </>
    )
}

export default Footer;