import Navbar from "./components/Navbar";
import Home from "./components/Home";
import QuienesSomos from "./components/QuienesSomos";
import Servicios from "./components/Servicios";
import Footer from "./components/Footer";
import Preguntas from "./components/Preguntas";
import Contacto from "./components/Contacto";

const App = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Home/>

      </div>


      

      <div className="max-w-7xl mx-auto pt-20 px-6">

        <QuienesSomos />
        <Servicios />
        <Preguntas />
        <Contacto/>
        <Footer />
      </div>
    </>
  );
};

export default App;
