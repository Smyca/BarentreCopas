import barImage from "../assets/bar.jpg"; // Cambia la ruta si tu imagen está en otro lugar

const Home = () => {
  return (
    <div 
      className="relative flex flex-col items-center justify-start min-h-screen mt-0"
      style={{
        backgroundImage: `url(${barImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay gradiente negro desvanecido */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/90" />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center px-4 pt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Bar Entre Copas y Ruedas
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            experiencias de coctelería móvil
          </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-200 max-w-4xl">
          Transformamos tus eventos en momentos únicos. Llevamos la barra móvil, cocteles de autor, ambientación y atención personalizada directamente a tus celebraciones, matrimonios y empresas en Santiago.
        </p>
        <div className="flex justify-center my-10">
          <a
            href="#contacto"
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:from-orange-600 hover:to-orange-900 hover:scale-105 transition-all duration-300"
          >
            Reserva tu evento
          </a>
          <a
            href="#Servicios"
            className="py-3 px-4 mx-3 rounded-md border border-neutral-300 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300"
          >
            Ver Packs y Servicios
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;