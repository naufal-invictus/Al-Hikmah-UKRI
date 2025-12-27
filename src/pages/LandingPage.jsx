import { Star, ChevronRight, Compass, Zap, ShieldCheck, BookOpen } from 'lucide-react';
import { FadeContent } from '../components/ui/FadeContent';
import { MagnetButton } from '../components/ui/MagnetButton';

export const LandingPage = ({ onStart }) => (
  <div className="min-h-screen flex flex-col items-center text-center px-6 relative overflow-x-hidden bg-[#FAF9F6]">

    {/* Background Pattern Halus */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
      style={{
        backgroundImage: `radial-gradient(circle, #333 1px, transparent 1px)`,
        backgroundSize: '30px 30px'
      }}>
    </div>

    {/* Dekorasi Animasi */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#D4AF37]/10 rounded-full animate-[spin_60s_linear_infinite]" />

    {/* --- SECTION 1: HERO (INSTANT KNOWLEDGE) --- */}
    <div className="pt-24 pb-16 max-w-4xl mx-auto relative z-10 min-h-[90vh] flex flex-col justify-center">
        <FadeContent>
            {/* Basmalah */}
            <div className="mb-8 text-[#D4AF37] font-serif text-2xl md:text-3xl pointer-events-none selection:bg-none opacity-80">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </div>

            {/* Tagline Gen-Z */}
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold tracking-widest uppercase font-sans-modern border border-[#D4AF37]/20">
                <Zap size={14} fill="currentColor" />
                <span>Belajar Sat-Set • Tanpa Basa-Basi</span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-5xl md:text-8xl text-[#333] mb-8 leading-[1] tracking-tight">
                Paham Islam <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#B59328] italic">
                Dalam 5 Menit
                </span>
            </h1>

            {/* Description (Tanpa Markdown) */}
            <p className="text-[#6B6B6B] max-w-xl mx-auto mb-10 text-lg md:text-xl font-sans-modern leading-relaxed">
                Platform edukasi khusus untuk Generasi Z yang ingin hasil instan namun berkualitas.
                Kami merangkum ribuan halaman kitab sejarah, adab, dan sains menjadi materi ringkas
                yang padat isi, mudah dicerna, dan langsung ke inti permasalahan.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col md:flex-row justify-center gap-4">
                <MagnetButton onClick={onStart} className="px-8 py-4 text-lg shadow-xl shadow-[#D4AF37]/20">
                Mulai Akses Ilmu <ChevronRight size={20} />
                </MagnetButton>
            </div>
        </FadeContent>
    </div>

    {/* --- SECTION 2: VERIFIED & TRUSTED (Flow Layout - No Grid) --- */}
    <div className="w-full max-w-3xl mx-auto pb-32 relative z-10 text-left">
        <FadeContent delay={0.2}>

            <div className="border-t border-[#E5E5E5] pt-16 mb-12 text-center">
                <h2 className="font-serif text-3xl text-[#333] mb-4">Ilmu Instan, Kualitas Terjamin</h2>
                <p className="text-[#8A8A8A] font-sans-modern">Kenapa Al-Hikmah aman untuk dipelajari?</p>
            </div>

            {/* List Mengalir (Bukan Grid) */}
            <div className="space-y-12">

                {/* Point 1 */}
                <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-500">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#333] mb-2 font-serif">Terverifikasi & Valid</h3>
                        <p className="text-[#6B6B6B] leading-relaxed">
                            Materi tidak diambil sembarangan dari internet. Semua konten disarikan dari kitab-kitab mu'tabar (terpercaya) dan referensi akademis yang jelas sanad ilmunya. Anti hoax, anti debat kusir.
                        </p>
                    </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-500">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#333] mb-2 font-serif">Daging Semua, Tanpa Tulang</h3>
                        <p className="text-[#6B6B6B] leading-relaxed">
                            Kami tahu waktu kamu berharga. Tidak ada paragraf pembuka yang membosankan. Langsung ke fakta sejarah, poin adab, dan hikmah yang bisa langsung kamu terapkan (actionable) hari ini juga.
                        </p>
                    </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-500">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#333] mb-2 font-serif">Bahasa Manusia, Bukan Robot</h3>
                        <p className="text-[#6B6B6B] leading-relaxed">
                            Disampaikan dengan bahasa yang santai, sopan, dan mudah dimengerti. Menggunakan analogi modern (seperti Silicon Valley, Coding, dll) agar relevan dengan kehidupan Gen-Z sehari-hari.
                        </p>
                    </div>
                </div>

            </div>

            {/* Penutup Kecil */}
            <div className="mt-16 text-center">
                <p className="text-sm text-[#D4AF37] font-bold uppercase tracking-widest font-sans-modern cursor-pointer hover:underline" onClick={onStart}>
                    Scroll ke atas untuk mulai
                </p>
            </div>

        </FadeContent>
    </div>

  </div>
);
