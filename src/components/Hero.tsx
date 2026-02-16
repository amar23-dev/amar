const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-[#0f172a] relative overflow-hidden text-white">
      {/* Dekorasi Cahaya di Background (Sederhana) */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Sisi Kiri: Teks */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Hi, I'm <br />
            <span className="text-blue-500">Amar Fiqih</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg">
            Mahasiswa Teknik Informatika yang fokus pada solusi digital yang simpel dan efektif.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button 
              onClick={scrollToProjects}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all shadow-lg"
            >
              Lihat Projek
            </button>
            <button className="px-8 py-3 border-2 border-white/20 hover:bg-white/10 rounded-full font-bold transition-all">
              Kontak Saya
            </button>
          </div>
        </div>

        {/* Sisi Kanan: Foto Profil (Bentuk Kotak Rapi) */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-64 h-64 md:w-80 md:h-80 relative">
            {/* Frame Variasi */}
            <div className="absolute -inset-4 border-2 border-blue-500/30 rounded-2xl rotate-6"></div>
            <div className="relative w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="/foto_profil.jpeg" 
                alt="Amar Fiqih"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;