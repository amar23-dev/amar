import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      /* 1. BAGIAN: GAMBAR LATAR BELAKANG */
      style={{ backgroundImage: "url('/foto_latarbelakang.jpeg')" }}
    >
      {/* 2. BAGIAN: OVERLAY (Agar teks terbaca jelas di atas gambar latar) */}
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* KOLOM TEKS (Kiri) */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-block px-4 py-1 mb-6 border border-cyan-400/30 bg-cyan-400/10 rounded-full text-cyan-300 text-sm font-medium tracking-widest uppercase">
              Informatics Engineering & Science
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-white">
              Hi, Saya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Amar Fiqih</span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-8 font-light">
              Bridging Logic with <span className="font-semibold text-white">Mathematics & Physics</span>
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-wrap gap-5 justify-center lg:justify-start mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 shadow-lg">
                Download CV
              </button>
              <button
                onClick={scrollToAbout}
                className="px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>

            {/* Social Media */}
            <div className="flex gap-8 justify-center lg:justify-start">
              {[<Github />, <Linkedin />, <Mail />].map((icon, index) => (
                <a key={index} href="#" className="text-blue-200 hover:text-cyan-300 transition-all transform hover:scale-125">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* 3. BAGIAN: FOTO PROFIL (Kanan) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px]">
              {/* Efek Cahaya di Belakang Foto Profil */}
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              
              {/* Wadah Foto Profil */}
              <div className="relative w-full h-full rounded-2xl border-4 border-white/20 overflow-hidden shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                <img 
                  src="/foto_profil.jpeg" 
                  alt="Amar Fiqih"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Indikator Scroll */}
      <button onClick={scrollToAbout} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </button>
    </section>
  );
};

export default Hero;