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
      description: 'Aplikasi Web, Simulasi Sains, & Tools',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'Analisis masalah dengan pendekatan Fisika & IT',
    },
  ];

  return (
    <section 
      id="about" 
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      /* GANTI URL DI BAWAH DENGAN GAMBAR BACKGROUND PILIHANMU */
      style={{ backgroundImage: "url('sensitive.jpeg')" }}
    >
      
      {/* OVERLAY: Lapisan ini sangat penting agar teks tetap terbaca jelas */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section (Foto Profil Kamu) */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-white rounded-2xl overflow-hidden aspect-square border-4 border-white shadow-2xl">
              <img 
                src="/foto_profil.jpeg" 
                alt="Profil Mahasiswa Teknik Informatika"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-extrabold text-gray-900 mb-3">
                Bridging Science & Technology
              </h3>
              <p className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-bold rounded-lg shadow-md">
                Informatics Engineering Student
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Saya adalah mahasiswa Teknik Informatika yang menggabungkan kekuatan logika 
                <span className="font-bold text-blue-700"> Matematika dan prinsip Fisika </span> 
                ke dalam pengembangan perangkat lunak.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                Dengan pengalaman membangun lebih dari 20 proyek, saya fokus pada pembuatan solusi 
                digital yang presisi dan berperforma tinggi.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-5 bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:border-blue-400 hover:shadow-xl transition-all duration-300 group/card"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4 group-hover/card:bg-blue-600 group-hover/card:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-tight font-medium">{item.description}</p>
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