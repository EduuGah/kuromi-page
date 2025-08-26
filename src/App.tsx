import { useState } from "react";
import kuromi from "./assets/kuromi-page.png";
import kuromi1 from "./assets/kuromi-page1.png";
import kuromi2 from "./assets/kuromi-page2.png";
import kuromi3 from "./assets/kuromi-page3.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar fixa */}
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#1C1C1C] px-6 py-4 text-[#FDFDFD] z-50">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src={kuromi}
            alt="kuromi-page"
            className="w-12 h-12 object-contain"
          />
          <div className="text-2xl font-bold text-[#FF4FA1]">Kuromi</div>
        </div>

        {/* Links desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#personagem" className="hover:text-[#FF4FA1]">
              Personagem
            </a>
          </li>
          <li>
            <a href="#historia" className="hover:text-[#FF4FA1]">
              História
            </a>
          </li>
          <li>
            <a href="#curiosidade" className="hover:text-[#FF4FA1]">
              Curiosidades
            </a>
          </li>
        </ul>
        {/* Botão hamburguer mobile */}
        <button
          className="md:hidden ml-4 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu mobile */}
        {isOpen && (
          <ul className="flex flex-col absolute top-20 left-1/2 transform -translate-x-1/2 bg-[#1C1C1C] p-6 rounded-lg space-y-4 md:hidden shadow-lg items-center text-center w-64">
            <li className="flex flex-col items-center gap-2">
              <a href="#personagem" className="hover:text-[#FF4FA1]">
                Personagem
              </a>
            </li>
            <li>
              <a href="#historia" className="hover:text-[#FF4FA1]">
                História
              </a>
            </li>
            <li>
              <a href="#curiosidade" className="hover:text-[#FF4FA1]">
                Curiosidades
              </a>
            </li>
            <li>
              <button className="w-full rounded-lg bg-[#FF4FA1] px-4 py-2 text-[#1C1C1C] hover:bg-[#B399D4]">
                Entrar
              </button>
            </li>
          </ul>
        )}
      </nav>

      {/* Conteúdo da página com padding-top para navbar */}
      <main className="text-[#FDFDFD] scroll-smooth">
        {/* Personagem */}
        <section
          id="personagem"
          className="py-32 px-6 bg-[#FF4FA1] flex flex-col md:flex-row items-center md:items-start pl-20 pr-60 gap-12"
        >
          {/* Imagem com glow */}
          <div className="flex-1 flex justify-center md:justify-start md:pl-8 relative">
            <div className="absolute w-80 h-80 bg-[#FF4FA1] rounded-full filter blur-4xl opacity-70 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            <img
              src={kuromi1}
              alt="kuromi-page"
              className="w-3/5 max-w-xs md:max-w-sm h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.75)]"
            />
          </div>

          {/* Texto */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#1C1C1C]">
              Kuromi
            </h1>
            <p className="text-lg sm:text-xl text-[#1C1C1C] max-w-3xl">
              Kuromi é uma personagem da franquia Sanrio, conhecida por seu
              estilo punk e travesso. Ela usa um gorro preto com uma caveirinha
              na testa e tem uma personalidade atrevida, esperta e levemente
              sarcástica, mas também é carinhosa com seus amigos próximos.
              Apesar de seu visual rebelde, Kuromi tem um lado doce e sensível,
              o que a torna única e adorável aos fãs.
            </p>
          </div>
        </section>

        {/* História */}
        <section
          id="historia"
          className="py-32 px-6 bg-[#2E2E2E] flex flex-col md:flex-row items-center md:items-start pl-60 pr-20 gap-12"
        >
          {/* Texto */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#FF4FA1]">
              História da Kuromi
            </h1>
            <p className="text-lg sm:text-xl text-[#FDFDFD] max-w-3xl">
              Kuromi é uma jovem punk e travessa que adora causar pequenas
              confusões, mas tem um lado doce e sensível. Ela aparece
              principalmente no universo de My Melody, como a “rivalzinha” da
              personagem principal. Kuromi veste um gorro preto com uma
              caveirinha na testa e adora escrever em seu diário e praticar
              truques travessos. Apesar de sua aparência rebelde, ela é leal e
              carinhosa com seus amigos mais próximos.
            </p>
          </div>
          {/* Imagem com glow */}
          <div className="flex-1 flex justify-center md:justify-start md:pl-8 relative">
            <div className="absolute w-80 h-80 bg-[#FF4FA1] rounded-full filter blur-4xl opacity-50 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src={kuromi2}
              alt="kuromi-page2"
              className="w-3/4 max-w-xs md:max-w-sm h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.75)]"
            />
          </div>
        </section>

        {/* Curiosidades */}
        <section
          id="curiosidade"
          className="py-32 px-6 bg-[#B399D4] flex flex-col md:flex-row items-center md:items-start pl-20 pr-60 gap-12"
        >
          {/* Imagem com glow */}
          <div className="flex-1 flex justify-center md:justify-start md:pl-8 relative">
            <div className="absolute w-80 h-80 bg-[#FF4FA1] rounded-full filter blur-4xl opacity-50 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <img
              src={kuromi3}
              alt="kuromi-page3"
              className="w-3/4 max-w-xs md:max-w-sm h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.75)]"
            />
          </div>

          {/* Texto */}
          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#1C1C1C]">
              Curiosidades sobre Kuromi
            </h1>
            <p className="text-lg sm:text-xl text-[#1C1C1C] max-w-3xl">
              Kuromi adora brincar de travessuras e é conhecida por seu espírito
              travesso e divertido. Ela coleciona diários, planeja pequenos
              truques e é muito criativa em suas confusões. Apesar disso, Kuromi
              é leal e carinhosa com seus amigos mais próximos, mostrando seu
              lado doce por trás da aparência rebelde.
              <br />
              <br />
              Ela se tornou uma personagem querida do universo Sanrio justamente
              por combinar ousadia, charme e um toque de humor sarcástico,
              conquistando fãs de todas as idades.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
