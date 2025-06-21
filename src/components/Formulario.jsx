import { useState } from "react"


export const Formulario = () => {
    const [formData, setFormData] = useState({
        nya: '',
        email: '',
        asunto: '',
        telefono: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        console.log('Formulario enviado');
        e.preventDefault();


        try {
            console.log('Datos enviados:', formData);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
        }

    };
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


                        <form onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <div className="grid grid-flow-row sm:grid-flow-col gap-3">
                                    <div className="sm:col-span-4 justify-center">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nya"> Nombres y Apellidos </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="nya" id="nya" type="text" placeholder="ingresa tu nombre completo" required onChange={handleChange} value={formData.nya}/>
                                    </div>
                                    <div className="sm:col-span-4 justify-center">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> Email </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" id="email" type="email" placeholder="ejemplo@mail.com" required onChange={handleChange} value={formData.email}/>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asunto"> Asunto </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="asunto" id="asunto" type="text" placeholder="Indica tu asunto" required onChange={handleChange} value={formData.asunto}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asunto"> Telefono </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="telefono" id="telefono" type="text" placeholder="Tu número" required onChange={handleChange} value={formData.telefono}/>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje"> Mensaje </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="mensaje" id="mensaje" rows="5" placeholder="Mensaje/Solicitud" required onChange={handleChange} value={formData.mensaje}></textarea>
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit"> Aceptar </button>
                            </div>
                        </form>

                    </div>

                </div>

            </main>

        </div>


    )
}
