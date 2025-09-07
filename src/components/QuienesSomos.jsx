import founderImg from "../assets/fundadora.jpg"; // Cambia la ruta según tu imagen
import teamImg from "../assets/team.jpg";      // Cambia la ruta según tu imagen
import barMovilImg from "../assets/bar_movil.jpg"; // Cambia la ruta según tu imagen

const QuienesSomos = () => {
  return (
    <div id="QuienesSomos"  className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Quiénes Somos
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-5 lg:mt-8 tracking-wide">
          Un bar móvil que{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            transforma tus eventos
          </span>
        </h2>
        {/* Historia */}
        <div className="max-w-3xl mx-auto mt-10 text-lg text-neutral-300">
          <p>
            Bar Sobre Ruedas y Copas nació del sueño de <b>Valentina Sandoval</b>, amante de la coctelería y la organización de eventos. Tras años trabajando en bares y producciones, decidió crear una propuesta que fuera más allá de servir tragos: llevar la experiencia completa de un bar a cualquier lugar, adaptándose a los deseos de cada cliente. Hoy, somos un equipo apasionado por brindar momentos únicos y memorables en matrimonios, celebraciones privadas y eventos corporativos.
          </p>
        </div>
      </div>

      {/* Misión, Visión, Valores */}
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        <div className="bg-neutral-900 rounded-xl shadow-lg p-8 w-full sm:w-[320px]">
          <h3 className="text-orange-500 text-xl font-semibold mb-3">Misión</h3>
          <p className="text-neutral-300">
            Entregar experiencias personalizadas de coctelería móvil, destacando calidad, creatividad y atención cercana en cada evento.
          </p>
        </div>
        <div className="bg-neutral-900 rounded-xl shadow-lg p-8 w-full sm:w-[320px]">
          <h3 className="text-orange-500 text-xl font-semibold mb-3">Visión</h3>
          <p className="text-neutral-300">
            Ser el referente en servicios de bar móvil en Santiago, innovando con propuestas sustentables y ampliando el impacto en celebraciones y empresas.
          </p>
        </div>
        <div className="bg-neutral-900 rounded-xl shadow-lg p-8 w-full sm:w-[320px]">
          <h3 className="text-orange-500 text-xl font-semibold mb-3">Valores</h3>
          <ul className="text-neutral-300 list-disc ml-6">
            <li>Sustentabilidad: uso de insumos eco-friendly y proveedores locales.</li>
            <li>Personalización: cada evento es único y pensado para el cliente.</li>
            <li>Pasión y profesionalismo en cada detalle.</li>
          </ul>
        </div>
      </div>

      {/* Fotos del equipo y bar móvil */}
      <div className="flex flex-wrap justify-center gap-8 mt-20 mb-10">
        <div className="flex flex-col items-center">
          <img
            src={founderImg}
            alt="Fundadora"
            className="rounded-xl h-48 w-48 object-cover border-4 border-orange-600 mb-4"
          />
          <span className="text-neutral-300 font-semibold">Valentina Sandoval <br />Fundadora</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={teamImg}
            alt="Equipo"
            className="rounded-xl h-48 w-48 object-cover border-4 border-orange-600 mb-4"
          />
          <span className="text-neutral-300 font-semibold">Nuestro equipo</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={barMovilImg}
            alt="Bar móvil"
            className="rounded-xl h-48 w-48 object-cover border-4 border-orange-600 mb-4"
          />
          <span className="text-neutral-300 font-semibold">Bar móvil en eventos</span>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;