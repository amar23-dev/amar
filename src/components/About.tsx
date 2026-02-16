import { BookOpen, Lightbulb, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'GPA 3.8/4.0',
      description: 'Fokus pada Logika Matematika & Komputasi',
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: '20+ Proyek',
      description: 'Aplikasi Web & Simulasi Sains',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'Analisis dengan pendekatan Fisika & IT',
    },
  ];

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-slate-900"
    >
      {/* Background Image dengan Overlay yang Pas */}
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: "url('foto_latarbelakang.jpeg')" }}
      ></div>
      
      {/* Gradient Overlay agar teks menonjol */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight uppercase">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Sisi Kiri: Foto Profil dengan Gaya Clean */}
          <div className="flex justify-center">
            <div className="relative group max-w-md w-full">
              {/* Dekorasi Bingkai di Belakang */}
              <div className="absolute -inset-2 bg-blue-500 rounded-2xl blur-lg opacity-20 transition duration-1000"></div>
              
              <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="/foto_profil.jpeg" 
                  alt="Amar Fiqih" 
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Konten Teks */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold leading-tight">
                Bridging Science & <span className="text-blue-400">Technology</span>
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed font-medium">
                Saya adalah mahasiswa Teknik Informatika yang menggabungkan logika 
                <span className="font-bold text-blue-400"> Matematika dan prinsip Fisika </span> 
                ke dalam pengembangan solusi digital yang presisi.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Berfokus pada pembuatan sistem yang efisien dan berperforma tinggi melalui 
                pengalaman membangun lebih dari 20 proyek selama masa perkuliahan.
              </p>
            </div>

            {/* Highlights Grid - Kartu Kecil */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <div className="text-blue-400 mb-3 transform group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-snug">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;