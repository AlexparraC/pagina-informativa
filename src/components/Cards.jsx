import ImagenComputador from "../assets/imagenComputador.png";
import MantenimientoComputador from "../assets/MantenimientoComputador.jpg"
import HerramientasComputador from "../assets/HerramientasComputador.jpeg"

function Cards() {

    return (
        <div class="flex flex-wrap justify-center gap-6 p-6">
            
            <div
                class="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        class="rounded-t-lg"
                        src={ImagenComputador}
                        alt="" />
                </div>
                <div class="p-6">
                    <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                    <p class="text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
                <div class="flex flex-wrap justify-center p-6">
                    <a
                        type="button"
                        class="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-[#153ABF] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                        Card Link
                    </a>
                </div>
            </div>

            <div
                class="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        class="rounded-t-lg"
                        src={MantenimientoComputador}
                        alt="" />
                </div>
                <div class="p-6">
                    <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                    <p class="text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
                <div class="flex flex-wrap justify-center p-6">
                    <a
                        type="button"
                        class="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-[#153ABF] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                        Card Link
                    </a>
                </div>
            </div>

            <div
                class="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div class="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        class="rounded-t-lg"
                        src={HerramientasComputador}
                        alt="" />
                </div>
                <div class="p-6">
                    <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                    <p class="text-base">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
                <div class="flex flex-wrap justify-center p-6">
                    <a
                        type="button"
                        class="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-[#153ABF] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                        Card Link
                    </a>
                </div>
            </div>

        </div>

    )
}
export default Cards;