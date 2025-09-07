import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";




import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


import cumpleImg from "../assets/pack_cumple.jpg";
import matrimonioImg from "../assets/pack_matrimonio.jpg";
import empresaImg from "../assets/pack_empresa.jpg";
import celebracionImg from "../assets/pack_celebracion.jpg";
import ecoImg from "../assets/pack_eco.jpg";

export const packs = [
  {
    nombre: "Pack Cumpleaños",
    img: cumpleImg,
    incluye: [
      "5 cócteles a elección por invitado",
      "Bartender profesional",
      "Ambientación temática y decoración",
      "Vasos y cristalería premium",
      "Música ambiente",
    ],
    precio: "Desde $250.000",
    descripcion: "Ideal para cumpleaños y celebraciones privadas. Personaliza tu barra y disfruta de una experiencia memorable.",
  },
  {
    nombre: "Pack Matrimonios",
    img: matrimonioImg,
    incluye: [
      "Carta de cócteles personalizada",
      "Cristalería fina",
      "Decoración temática especial",
      "2 bartenders uniformados",
      "Montaje elegante y personalizado",
    ],
    precio: "Desde $400.000",
    descripcion: "Perfecto para matrimonios: barra móvil exclusiva, atención premium y ambientación única para tu gran día.",
  },
  {
    nombre: "Pack Empresas",
    img: empresaImg,
    incluye: [
      "Barra móvil y branding corporativo",
      "Servicio express para eventos empresariales",
      "Cocteles clásicos y de autor",
      "Uniformes personalizados",
      "Facturación electrónica",
    ],
    precio: "Cotiza tu evento",
    descripcion: "Lleva la experiencia Bar Sobre Ruedas a tu empresa. Adaptamos el servicio a tu evento corporativo.",
  },
  {
    nombre: "Pack Despedidas / Celebraciones",
    img: celebracionImg,
    incluye: [
      "Cócteles de autor y clásicos",
      "Música y animación",
      "Dinámicas y juegos",
      "Decoración especial",
      "Bartender y asistente",
    ],
    precio: "Desde $300.000",
    descripcion: "Para despedidas, aniversarios y fiestas especiales. ¡Haz de tu celebración una experiencia inolvidable!",
  },
  {
    nombre: "Pack Eco-Friendly",
    img: ecoImg,
    incluye: [
      "Insumos y decoración sustentable",
      "Vasos biodegradables y reutilizables",
      "Coctelería con ingredientes locales",
      "Ambientación eco",
      "Reciclaje y reducción de residuos",
    ],
    precio: "Desde $250.000",
    descripcion: "Elige una celebración responsable con el medio ambiente, sin perder calidad ni estilo.",
  },
];

export const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Quiénes Somos", href: "#QuienesSomos" },
  { label: "Servicios", href: "#Servicios" },
  { label: "Preguntas Frecuentes", href: "#Preguntas" },
  { label: "Contacto / Reserva", href: "#contacto" },
];

export const faqs = [
  {
    pregunta: "¿Qué incluye el servicio?",
    respuesta:
      "Incluye barra móvil, bartender profesional, cócteles personalizados, cristalería premium, ambientación temática y atención dedicada. Cada pack puede tener extras según el tipo de evento.",
  },
  {
    pregunta: "¿Hasta dónde llegan?",
    respuesta:
      "Operamos principalmente en Santiago y alrededores. Consultar por eventos fuera de la región metropolitana; ¡nos adaptamos a tu necesidad!",
  },
  {
    pregunta: "¿Se puede personalizar la carta?",
    respuesta:
      "Sí, personalizamos la carta de cócteles según tu preferencia, temática del evento y necesidades especiales (sin alcohol, veganos, etc.).",
  },
  {
    pregunta: "¿Cómo se realiza el pago?",
    respuesta:
      "Aceptamos transferencias bancarias, tarjetas y pagos en línea. Se solicita un abono para reservar la fecha y el saldo previo al evento.",
  },
  {
    pregunta: "¿Con cuánta anticipación reservar?",
    respuesta:
      "Recomendamos reservar con al menos 2 semanas de anticipación, especialmente en temporada alta (septiembre, diciembre, marzo).",
  },
  {
    pregunta: "¿Qué pasa si llueve?",
    respuesta:
      "El bar móvil es adaptable: podemos montar en espacios techados, terrazas o interiores. Si el clima es adverso, buscamos la mejor solución para asegurar tu evento.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
