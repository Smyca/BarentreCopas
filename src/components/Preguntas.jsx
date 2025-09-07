import { faqs } from "../constants";

const Preguntas = () => {
  return (
    <div id="Preguntas" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Preguntas Frecuentes
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gradient-to-tr from-orange-900 via-orange-600 to-orange-400 rounded-xl p-6 mb-8 shadow-lg border border-orange-600"
          >
            <h5 className="text-lg font-bold text-white mb-2 drop-shadow">
              {faq.pregunta}
            </h5>
            <p className="text-white text-md">{faq.respuesta}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preguntas;