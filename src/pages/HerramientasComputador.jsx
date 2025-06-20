function HerramientasComputador() {
    return (
        <>
            <h1 className=" text-[#03658C] font-extrabold text-4xl text-center">Herramientas para manteninento del computador</h1>
            <div
                className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                style="padding-top: 56.25%">
                <iframe
                    className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                    src="https://www.youtube.com/watch?v=BCnQGgctQ_Y"
                    allowfullscreen=""
                    data-gtm-yt-inspected-2340190_699="true"
                    id="240632615"></iframe>
            </div>
            <div>
                <div>
                    <h2>Destornilladores</h2>
                    <p>Son útiles cuando se abre el gabinete o se retira cualquier parte del mismo. Preferiblemente deben ser de tamaño pequeño y mediano, y si es posible tener una plana y una cruz</p>
                </div>
                <div>
                    <h2>Una pinza puntiaguda</h2>
                    <p>Lo mejor es utilizar abrazaderas de plástico, que se utilizan para desconectar los componentes internos de la PC.</p>
                </div>
                <div>
                    <h2>Pequeños contenedores</h2>
                    <p>Estos son necesarios para colocar allí las pequeñas piezas que estamos retirando en el momento del desmontaje. Normalmente son sólo tornillos, pero es importante separarlos y si es posible marcar el contenedor con el nombre del lugar al que corresponde, para que en el montaje no perdamos tiempo en averiguar qué tornillos pertenecen a cada lugar.</p>
                </div>
                <div>
                    <h2>Una pulsera antiestática</h2>
                    <p>Esta se utiliza para evitar descargas eléctricas de nuestro cuerpo al ordenador ya que podría dañar algún componente del ordenador. Esto se coloca en la muñeca.</p>
                </div>
                <div>
                    <h2>Un cepillo de 3cm</h2>
                    <p>Se utiliza para eliminar el polvo y la suciedad de algunos elementos</p>
                </div>
                <div>
                    <h2>Un borrador</h2>
                    <p>Esto se utiliza para limpiar las tarjetas. Es importante que sea suave para que no dañe la tarjeta.</p>
                </div>
                <div>
                    <h2>Hisopos</h2>
                    <p>Se utilizan para limpiar componentes muy sensibles, como por ejemplo, unidades de almacenamiento.</p>
                </div>
                <div>
                    <h2>Paños de algodón</h2>
                    <p>Se utilizan para eliminar el polvo o aplicar productos químicos de limpieza.</p>
                </div>
                <div>
                    <h2>Soplador</h2>
                    <p>Es un ventilador utilizado para eliminar el polvo de los componentes del PC sin dañarlos. O puede usar una aspiradora pequeña.</p>
                </div>
                <div>
                    <h2>Bolsas antiestáticas</h2>
                    <p>Se utilizan para insertar las tarjetas en ellas después y antes de limpiarlas para evitar que alguien o algo descargue energía en ellas y las dañe.</p>
                </div>
                <Link to="https://mantenimiento.win/herramientas-para-el-mantenimiento-correctivo-y-preventivo/" target="_blank" className="text-blue-500 hover:underline">
                    <h2>Más información sobre las herramientas para mantenimiento del computador</h2>
                </Link>
            </div>

        </>
    )
}

export default HerramientasComputador;