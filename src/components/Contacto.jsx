

export const Contacto = () => {
    return (
        <div className="min-h-full">


            

            <main>
                <div className="container ml-auto mr-auto flex flex-wrap items-start mt-8">

                    <div className="w-full pl-2 pr-2 mb-4 mt-4">
                        <h1 className="text-3xl font-extrabold text-center"> Contactanos </h1>
                    </div>

                </div>

                <div className="container ml-auto mr-auto flex items-center justify-center">
                    <div className="w-full md:w-1/2">


                        <form clasNames="bg-white px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                                    <div className="sm:col-span-4 justify-center">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" for="nya"> Nombres y Apellidos </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nya" type="text" placeholder="ingresa tu nombre completo" required />
                                    </div>
                                    <div className="sm:col-span-4 justify-center">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="ejemplo@mail.com" required />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="asunto"> Asunto </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="asunto" type="text" placeholder="Indica tu asunto" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="asunto"> Telefono </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="telefono" type="text" placeholder="Tu número" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" for="mensaje"> Mensaje </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mensaje" rows="5" placeholder="Mensaje/Solicitud" required></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Aceptar </button>
                            </div>
                        </form>

                    </div>

                </div>

            </main>

        </div>


    )
}
