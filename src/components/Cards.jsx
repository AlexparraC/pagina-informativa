import ImagenComputador from "../assets/imagenComputador.png";
import MantenimientoComputador from "../assets/MantenimientoComputador.jpg"
import HerramientasComputador from "../assets/HerramientasComputador.jpeg"
import { Link } from "react-router";

function Cards() {

    return (
        <div className="flex flex-wrap justify-center gap-6 p-6">

            <div
                className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src={ImagenComputador}
                        alt="" />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">Partes del computador</h5>
                    <p className="text-base">
                        En este apartado se encuentran las partes de un computador, donde se
                        explican las partes que lo componen, su funcionamiento y su importancia.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center p-6">
                    <Link
                        to="/PartesComputador"
                        type="button"
                        className="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-[#153ABF] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                        Saver mas 
                    </Link>
                </div>
            </div>

            <div
                className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src={MantenimientoComputador}
                        alt="" />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">Tipos de mantenimiento del computador</h5>
                    <p className="text-base">
                        En este apartado se encuentran los tipos de mantenimiento que se
                        pueden realizar a un computador, donde se explican los diferentes tipos
                        de mantenimiento y su importancia.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center p-6">
                    <Link
                        to="/TiposMantenimientoComputador"
                        type="button"
                        className="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-[#153ABF] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                        Saver mas 
                    </Link>
                </div>
            </div>

            <div
                className="block max-w-[18rem] rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                        className="rounded-t-lg"
                        src={HerramientasComputador}
                        alt="" />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 text-xl font-medium leading-tight">Herramientas</h5>
                    <p className="text-base">
                        En este apartado se encuentran las herramientas que se pueden utilizar
                        para el mantenimiento de un computador, donde se explican las diferentes
                        herramientas y su importancia.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center p-6">
                    <Link
                        to="/HerramientasComputador"
                        type="button"
                        className="pointer-events-auto me-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-[#153ABF] transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400">
                        Saver mas 
                    </Link>
                </div>
            </div>

        </div>

    )
}
export default Cards;