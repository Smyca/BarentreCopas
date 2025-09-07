
import { packs } from "../constants/index.jsx";

const Servicios = () => {
  return (
    <div className="mt-20" id="Servicios">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Packs y Servicios{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          para tus eventos
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-12 mt-14">
        {packs.map((pack, idx) => (
          <div key={idx} className="bg-neutral-900 rounded-xl shadow-lg max-w-sm w-full p-6 flex flex-col items-center">
            <img
              src={pack.img}
              alt={pack.nombre}
              className="rounded-lg mb-6 h-48 w-full object-cover"
            />
            <h3 className="text-2xl text-orange-500 font-bold mb-2 text-center">{pack.nombre}</h3>
            <p className="text-neutral-300 text-center mb-4">{pack.descripcion}</p>
            <ul className="text-neutral-400 text-sm mb-4 list-disc ml-4 self-start">
              {pack.incluye.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <span className="text-lg text-orange-400 font-semibold mb-4">{pack.precio}</span>
            <a
              href="#contacto"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white font-semibold mt-auto"
            >
              Solicitar cotización
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;