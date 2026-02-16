import { BookOpen, Lightbulb, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: <GraduationCap />, title: 'GPA 3.8/4.0', description: 'Logika Matematika & Komputasi' },
    { icon: <BookOpen />, title: '20+ Proyek', description: 'Web, Simulasi Sains, & Tools' },
    { icon: <Lightbulb />, title: 'Problem Solver', description: 'Pendekatan Fisika & IT' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background Image with Parallax & Dark Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="/foto_latarbelakang.jpeg" className="w-full h-full object-cover grayscale-[50%]" alt="bg" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative group mx-auto lg:mx-0">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/40 transition duration-1000"></div>
            <div className="relative border-2 border-white/10 rounded-3xl p-3 backdrop-blur-md bg-white/5 shadow-2xl overflow-hidden aspect-square w-full max-w-[450px]">
              <img src="/foto_profil.jpeg" className="rounded-2xl w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" alt="Amar Fiqih" />
            </div>
          </div>

          <div className="text-white space-y-8">
            <h2 className="text-4xl font-extrabold tracking-tight">Bridging <span className="text-blue-400">Science</span> & Technology</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Mahasiswa Teknik Informatika yang menggabungkan <span className="text-blue-400 font-semibold italic">Matematika & Fisika</span> ke dalam pengembangan software berkualitas tinggi.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {highlights.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                  <div className="text-blue-400 mb-3 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-tight">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};