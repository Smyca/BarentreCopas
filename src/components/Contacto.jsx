import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const formRef = useRef(null);
  const [enviado, setEnviado] = useState(false);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCargando(true);
    setError("");
    if (!formRef.current) return;
    emailjs
      .sendForm(
        "service_ydey9ik",    // <--- Cambia por tu Service ID de EmailJS
        "template_pieh4jd",   // <--- Cambia por tu Template ID de EmailJS
        formRef.current,
        "puZPL5deziUBzLWxi"     // <--- Cambia por tu Public Key de EmailJS
      )
      .then(
        () => {
          setEnviado(true);
          setCargando(false);
          formRef.current.reset();
        },
        () => {
          setError("Hubo un error al enviar el mensaje. Intenta nuevamente.");
          setCargando(false);
        }
      );
  };

  return (
    <div id="contacto" className="w-full py-16 flex flex-col items-center bg-gradient-to-tr from-neutral-900 via-orange-900 to-orange-400">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mb-10 font-bold text-white">
        Reserva tu Evento
      </h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-neutral-950 bg-opacity-90 rounded-xl shadow-xl p-8 w-full max-w-xl flex flex-col gap-6"
      >
        <div>
          <label htmlFor="nombre" className="text-orange-400 font-semibold block mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full p-3 rounded-md bg-neutral-900 text-white border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="correo" className="text-orange-400 font-semibold block mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            required
            className="w-full p-3 rounded-md bg-neutral-900 text-white border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
            placeholder="ejemplo@correo.com"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="text-orange-400 font-semibold block mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            className="w-full p-3 rounded-md bg-neutral-900 text-white border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
            placeholder="+56 9 1234 5678"
          />
        </div>
        <div>
          <label htmlFor="tipoEvento" className="text-orange-400 font-semibold block mb-2">
            Tipo de evento
          </label>
          <select
            id="tipoEvento"
            name="tipoEvento"
            required
            className="w-full p-3 rounded-md bg-neutral-900 text-white border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            <option value="">Selecciona una opción</option>
            <option value="Cumpleaños">Cumpleaños</option>
            <option value="Matrimonio">Matrimonio</option>
            <option value="Empresa">Empresa</option>
            <option value="Celebración">Despedida / Celebración</option>
            <option value="Eco-Friendly">Eco-Friendly</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div>
          <label htmlFor="fecha" className="text-orange-400 font-semibold block mb-2">
            Fecha del evento
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            required
            className="w-full p-3 rounded-md bg-neutral-900 text-white border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
          />
        </div>
        <div>
          <label htmlFor="mensaje" className="text-orange-400 font-semibold block mb-2">
            Detalles y mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            className="w-full p-3 rounded-md bg-neutral-900 text-white border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
            placeholder="Cuéntanos detalles especiales, cantidad de invitados, requerimientos..."
          />
        </div>
        <button
          type="submit"
          disabled={cargando}
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-6 rounded-md text-white font-bold mt-4 hover:scale-105 transition"
        >
          {cargando ? "Enviando..." : "Enviar reserva"}
        </button>
        {enviado && (
          <p className="text-green-400 font-semibold mt-2 text-center">
            ¡Gracias por tu reserva! Te contactaremos pronto.
          </p>
        )}
        {error && (
          <p className="text-red-500 font-semibold mt-2 text-center">{error}</p>
        )}
      </form>
    </div>
  );
};

export default Contacto;