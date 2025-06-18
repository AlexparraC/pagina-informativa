import { BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router";

function Footer() {
    return (
        <> 
            <footer
                class="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
                <div class="container px-6 pt-6">
                    <div class="mb-6 flex justify-center space-x-2">
                        <Link
                            to="#!"
                            target="_blank"
                            type="button"
                            class="rounded-full bg-[#0D0D0D] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="[&>svg]:h-5 [&>svg]:w-5">
                                <GrGithub/>
                            </span>
                        </Link>

                        <Link
                            to="#!"
                            target="_blank"
                            type="button"
                            class="rounded-full bg-[#1DB954] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                <BsWhatsapp/>
                            </span>
                        </Link>

                        <Link
                            to="#!"
                            target="_blank"
                            type="button"
                            class="rounded-full bg-[#E63720] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                <GoMail/>
                            </span>
                        </Link>

                        <Link
                            to="#!"
                            target="_blank"
                            type="button"
                            class="rounded-full bg-[#0D0D0D] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                <GrGithub/>
                            </span>
                        </Link>

                        <Link
                            to="#!"
                            target="_blank"
                            type="button"
                            class="rounded-full bg-[#1DB954] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                <BsWhatsapp/>
                            </span>
                        </Link>

                        <Link
                            to="#!"
                            target="_blank"
                            type="button"
                            class="rounded-full bg-[#E63720] p-3 uppercase leading-normal text-white shadow-dark-3 shadow-black/30 transition duration-150 ease-in-out hover:shadow-dark-1 focus:shadow-dark-1 focus:outline-none focus:ring-0 active:shadow-1 dark:text-white"
                            data-twe-ripple-init
                            data-twe-ripple-color="light">
                            <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
                                <GoMail/>
                            </span>
                        </Link>
                    </div>
                </div>


                <div class="w-full bg-black/5 p-4 text-center">
                    © 2023 Copyright:
                    <a href="https://tw-elements.com/">TW Elements</a>
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