const experience= () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-black mb-16 uppercase italic">Arsenal & Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Card */}
          <div className="md:col-span-2 md:row-span-2 bg-slate-100 p-8 border-4 border-black shadow-[8px_8px_0px_#000] hover:bg-blue-600 hover:text-white transition-colors">
            <h3 className="text-3xl font-black mb-4">S1 TEKNIK INFORMATIKA</h3>
            <p className="font-mono">UPI YPTK Padang | 2023 - 2027</p>
            <div className="mt-12 text-6xl font-black italic opacity-20">GPA 3.8</div>
          </div>

          {/* IBM Card */}
          <div className="md:col-span-2 bg-yellow-400 p-8 border-4 border-black shadow-[8px_8px_0px_#000] group relative overflow-hidden">
            <h3 className="text-2xl font-black uppercase">IBM Data Analyst</h3>
            <p className="mt-2 font-bold">SkillsBuild x Hacktiv8</p>
            <div className="absolute right-[-20px] bottom-[-20px] text-8xl opacity-10 group-hover:rotate-12 transition-transform">📊</div>
          </div>

          {/* Skill Card */}
          <div className="bg-black text-white p-8 border-4 border-black hover:bg-white hover:text-black transition-all">
            <h4 className="font-black italic underline text-xl">REACT.JS</h4>
            <p className="text-sm mt-4 font-mono">Expertise: 90%</p>
          </div>

          {/* Contact Card */}
          <div className="bg-blue-500 text-white p-8 border-4 border-black shadow-[8px_8px_0px_#000] flex items-center justify-center cursor-pointer hover:bg-black transition-all">
            <span className="font-black text-2xl uppercase tracking-tighter">Let's Talk! ↗</span>
          </div>
        </div>
      </div>
    </section>
  );
};