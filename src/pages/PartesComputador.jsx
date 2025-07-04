import { Link } from "react-router";

function PartesComputador() {
    return (
        <>
            <h1 className=" text-[#03658C] font-extrabold text-4xl text-center">Partes del computador</h1>
            <div
                className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                style={{ paddingTop: '56.25%' }}>
                <iframe
                    className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                    src="https://www.youtube.com/embed/GBIRymEy_8A?start=2"
                    title="Partes de una computadora"
                    allowFullScreen=""
                    data-gtm-yt-inspected-2340190_699="true"
                    id="video-partes-computador"></iframe>
            </div>
            
            <div className="flex flex-col gap-4 mt-4  rounded-lg p-4 bg-[#CFD2D3] shadow-md">
                <div>
                    <h2 className="font-bold text-2xl">Placa madre o motherboard</h2>
                    <p>En cierta forma podemos decir que la placa madre es el “alma” de nuestra computadora. Conocida también como placa madre o placa base, este componente es al cual se deben conectar todos los otros componentes de nuestra computadora. En esta placa se encuentran diversos circuitos y sockets en los cuales se conectan los distintos componentes de la PC, como por ejemplo el CPU, los sticks de memoria RAM, la fuente, entre otros.</p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">CPU o Unidad Central de Proceso</h2>
                    <p>El CPU es el segundo componente más importante de nuestra PC. Conocido en español como la unidad central del proceso, esta parte de las computadoras tiene la importante tarea de interpretar las instrucciones que sean dadas por los programas. Existen distintos tipos de CPU, algunos de ellos por ejemplo tienen un solo núcleo y otros tienen múltiples, y de hecho en una misma computadora es posible incluso contar con dos CPUs si disponemos del hardware adecuado.</p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Memoria RAM</h2>
                    <p>La memoria RAM es uno de los tipos de memoria principales de nuestra computadora, siendo la otra la memoria de la unidad de almacenamiento. La memoria básicamente tiene la tarea de guardar datos de forma temporal y despachar los mismos rápidamente cuando sea necesario.</p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Tarjeta de vídeo</h2>
                    <p>La tarjeta de video, también llamada tarjeta gráfica, es el componente de nuestra PC que básicamente crea el enlace entre el resto del hardware interno del equipo y nuestro monitor, es decir, esta pieza es la que tendrá la tarea de mostrarnos lo que vamos a ver en pantalla.</p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Tarjeta de sonido</h2>
                    <p>La tarjeta de sonido es uno de los componentes no esenciales de una computadora, es decir, nuestra computadora puede funcionar incluso si no tenemos una. Por supuesto no contar con tarjeta de sonido hará que no tengamos audio en nuestro equipo, así que en cierta forma se puede decir que es un componente no indispensable pero sí muy recomendado.</p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Teclado</h2>
                    <p>El teclado es el periférico más utilizado en cualquier computadora, ya que es el método principal mediante el cual interactuamos con el sistema, siendo el mouse o ratón el que le sigue.</p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Monitor</h2>
                    <p>Tener un monitor es imprescindible para que podamos usar una computadora, de lo contrario no sabríamos qué estamos haciendo. El monitor es el dispositivo en el cual se puede ver la información que ha procesado la tarjeta gráfica, y que nos está mostrando en un formato fácil de reconocer para el ojo humano.</p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Ratón o Mouse</h2>
                    <p>El querido ratón, llamado a veces mouse, es el segundo periférico de entrada más usado por detrás del teclado. Como bien sabemos el ratón es utilizado para desplazar el puntero de nuestro sistema operativo a través de la pantalla, y sirve para realizar diversas acciones, como por ejemplo seleccionar archivos, abrir programas haciendo doble click, desplegar un menú de opciones con el click derecho, manipular el puntero en un procesador de texto, entre varias funciones más.</p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Altavoces</h2>
                    <p>Los altavoces, también llamados parlantes, son lo que nos permiten tener audio en nuestra computadora. El trabajo de los altavoces en convertir en sonido los datos enviados por la tarjeta de sonido. Gracias a estos dispositivos podemos escuchar música en nuestra PC, escuchar los diálogos en películas, etc.</p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Webcam</h2>
                    <p>La webcam, también llamada cámara web, es un componente de la gran mayoría de las laptops desde hace años, y su utilidad radica en poder grabarnos cuando estamos frente al equipo, aunque también se puede utilizar por ejemplo para realizar reconocimiento facial e iniciar sesión en nuestra computadora.</p>
                </div>
                <Link to="https://tecnomagazine.net/partes-de-una-computadora/" target="_blank" className="text-blue-500 hover:underline">
                    <h2>Más información sobre las partes de una computadora</h2>
                </Link>
            </div>

        </>
    )
}

export default PartesComputador;