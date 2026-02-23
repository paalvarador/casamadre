import React from 'react';

type TypeBenefit = {
  title: String
  desc: String
}

const LandingCasaMadre = () => {
  const WHATSAPP_LINK = "https://wa.me/593996165091?text=Hola%20Casa%20Madre!%20Quiero%20pedir%20pan%20de%20verdad";

  const panes = [
    { nombre: 'Pan de Ajo', desc: 'Ajos rostizados a fuego lento que se funden en una miga aireada y fragante.', img: '/ajo.png' },
    { nombre: 'Pan de Aceitunas', desc: 'Una selección premium de aceitunas sobre una base de masa madre con 48h de maduración.', img: '/aceitunas.png' },
    { nombre: 'Pan de Queso', desc: 'Corteza caramelizada con queso artesanal que aporta un contraste salino y crujiente.', img: '/queso.png' },
    { nombre: 'Pan Natural', desc: 'La máxima expresión del arte panadero: agua, harina seleccionada y sal de mar.', img: '/natural.png' },
    { nombre: 'Pan de Semillas', desc: 'Mix ancestral de semillas tostadas que aportan textura y un perfil nutricional superior.', img: '/semillas.png' },
    { nombre: 'Pan de Almendras', desc: 'Delicadas láminas de almendra tostada para un sabor sutilmente dulce y sofisticado.', img: '/almendras.png' },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#0a2e1f] selection:bg-[#f3e5ab] selection:text-[#0a2e1f]">
      
      {/* NAVIGATION SIMPLIFICADA */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a2e1f]/95 backdrop-blur-sm py-4 px-8 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <img src="/logo-casa-madre.jpg" alt="Logo" className="w-10 h-10 rounded-full border border-[#f3e5ab]" />
          <span className="text-[#f3e5ab] font-serif font-bold tracking-widest uppercase text-sm">Casa Madre</span>
        </div>
        <a href={WHATSAPP_LINK} className="text-xs bg-[#f3e5ab] text-[#0a2e1f] px-4 py-2 rounded-full font-bold uppercase tracking-tighter hover:bg-white transition-colors">
          Pedir Ahora
        </a>
      </nav>

      {/* HERO SECTION - PROFESIONAL */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a2e1f]">
        <div className="absolute inset-0 opacity-40">
           {/* Imagen de fondo sutil si deseas */}
           <img src="/Pan Natural.jpg" className="w-full h-full object-cover grayscale" alt="Background" />
        </div>
        <div className="relative z-10 text-center px-6">
          <img src="/logo-casa-madre.jpg" alt="Casa Madre" className="w-32 md:w-44 mx-auto rounded-full mb-10 border-2 border-[#f3e5ab] shadow-2xl" />
          <h1 className="text-5xl md:text-8xl font-serif text-[#f3e5ab] leading-tight mb-6">Pan de Verdad.</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-xl mx-auto font-light tracking-wide leading-relaxed">
            Honramos el tiempo y el origen. Fermentación natural de 24 horas para un sabor que no se puede apresurar.
          </p>
          <div className="mt-12">
            <a href="#catalogo" className="border border-[#f3e5ab] text-[#f3e5ab] px-10 py-4 rounded-full hover:bg-[#f3e5ab] hover:text-[#0a2e1f] transition-all duration-500 font-medium">
              Explorar Colección
            </a>
          </div>
        </div>
      </header>

      {/* SECCIÓN FILOSOFÍA / BENEFICIOS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-stone-400 font-bold">Nuestra Promesa</span>
          <h2 className="text-3xl md:text-5xl font-serif mt-4">¿Por qué elegir Casa Madre?</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-12">
          <BenefitItem title="Masa Madre Real" desc="Cultivada por años, aporta probióticos y encimas naturales." />
          <BenefitItem title="Digestión Ligera" desc="El proceso de 24h degrada el gluten de forma natural." />
          <BenefitItem title="Ingredientes Locales" desc="Harinas sin blanquear y aditivos cero." />
          <BenefitItem title="Horneado Diario" desc="Producción limitada para garantizar frescura absoluta." />
        </div>
      </section>

      {/* CATÁLOGO PREMIUM ZIG-ZAG */}
      <section id="catalogo" className="bg-white">
        {panes.map((pan, index) => (
          <div key={pan.nombre} className={`flex flex-col md:flex-row min-h-[70vh] items-stretch ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2 overflow-hidden">
              <img 
                src={pan.img} 
                alt={pan.nombre} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-12 md:p-24 bg-[#FAF9F6]">
              <span className="text-[#0a2e1f]/40 font-mono mb-4">0{index + 1}</span>
              <h3 className="text-4xl md:text-6xl font-serif mb-6">{pan.nombre}</h3>
              <div className="w-20 h-1 bg-[#f3e5ab] mb-8"></div>
              <p className="text-xl text-stone-500 font-light leading-relaxed mb-10">
                {pan.desc}
              </p>
              <a href={WHATSAPP_LINK} className="group flex items-center gap-4 font-bold tracking-widest uppercase text-sm">
                <span>Solicitar Pedido</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* CTA FINAL - MINIMALISTA */}
      <section className="py-32 bg-[#0a2e1f] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-serif text-[#f3e5ab] mb-8 leading-tight">Lleva la tradición a tu hogar.</h2>
          <p className="text-white/60 text-lg mb-12 font-light">
            Horneamos bajo pedido para asegurar la máxima calidad. Haz tu reserva hoy mismo.
          </p>
          <a 
            href={WHATSAPP_LINK} 
            className="inline-block bg-[#f3e5ab] text-[#0a2e1f] px-14 py-5 rounded-full font-bold text-lg hover:bg-white transition-all shadow-xl shadow-black/20"
          >
            CONTACTAR POR WHATSAPP
          </a>
          <p className="text-[#f3e5ab]/40 mt-10 text-sm tracking-widest uppercase">Loja • Pan de Verdad</p>
        </div>
      </section>

      <footer className="py-8 text-center text-[10px] uppercase tracking-widest text-stone-400 bg-[#FAF9F6]">
        &copy; 2026 Casa Madre - Todos los derechos reservados.
      </footer>
    </div>
  );
};

const BenefitItem = ({ title, desc }: TypeBenefit) => (
  <div className="group">
    <div className="h-[1px] w-full bg-stone-200 mb-6 group-hover:bg-[#0a2e1f] transition-colors duration-500"></div>
    <h4 className="text-xl font-serif mb-3 italic">{title}</h4>
    <p className="text-stone-500 text-sm leading-relaxed font-light">{desc}</p>
  </div>
);

export default LandingCasaMadre;