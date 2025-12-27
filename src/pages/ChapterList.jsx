import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, PlayCircle, Tag, Filter } from 'lucide-react';
import { FadeContent } from '../components/ui/FadeContent';
import { LEARNING_DATA } from '../data/chapters';

// Ambil list unik kategori dari data
const CATEGORIES = ["Semua", ...new Set(LEARNING_DATA.map(item => item.metadata.category || "Umum"))];

export const ChapterList = ({ onSelectChapter }) => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  // Filter logika
  const filteredData = selectedCategory === "Semua"
    ? LEARNING_DATA
    : LEARNING_DATA.filter(item => item.metadata.category === selectedCategory);

  return (
    <div className="pt-28 pb-32 px-6 max-w-6xl mx-auto min-h-screen">
      <FadeContent>
        <div className="text-center mb-12">
          <span className="text-[#D4AF37] font-sans-modern text-sm font-bold tracking-[0.2em] uppercase">Khazanah Islam</span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#333] mt-3 mb-6">Pustaka Ilmu</h2>

          {/* FILTER CATEGORY BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 font-sans-modern border ${
                  selectedCategory === cat
                    ? "bg-[#D4AF37] text-white border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20"
                    : "bg-white text-[#8A8A8A] border-[#E5E5E5] hover:border-[#D4AF37] hover:text-[#D4AF37]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </FadeContent>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredData.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-[#E5E5E5] group flex flex-col h-full"
            >
              {/* Thumbnail Image */}
              <div className="h-48 overflow-hidden relative cursor-pointer" onClick={() => onSelectChapter(chapter)}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                  <img
                      src={chapter.metadata.thumbnail}
                      alt={chapter.metadata.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#D4AF37] shadow-sm uppercase tracking-wider flex items-center gap-1">
                      <Tag size={12} /> {chapter.metadata.category || "Umum"}
                  </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex gap-2 mb-4 flex-wrap">
                    {chapter.metadata.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-[#8A8A8A] bg-[#FAF9F6] px-2 py-1 rounded border border-[#EAE0D5]">
                           # {tag}
                        </span>
                    ))}
                </div>

                <h3
                  className="font-serif text-2xl text-[#333] mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors cursor-pointer"
                  onClick={() => onSelectChapter(chapter)}
                >
                    {chapter.metadata.title}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed font-sans-modern mb-6 flex-grow">
                    {chapter.metadata.description}
                </p>

                <div className="mt-auto pt-4 border-t border-[#FAF9F6]">
                    <button
                      onClick={() => onSelectChapter(chapter)}
                      className="w-full py-3 rounded-xl bg-[#FAF9F6] text-[#333] font-bold text-sm hover:bg-[#D4AF37] hover:text-white transition-all flex items-center justify-center gap-2 group-btn"
                    >
                      Buka Materi <PlayCircle size={16} />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredData.length === 0 && (
         <div className="text-center py-20 text-[#8A8A8A]">
            <Filter size={48} className="mx-auto mb-4 opacity-20"/>
            <p>Belum ada materi untuk kategori ini.</p>
         </div>
      )}
    </div>
  );
};
