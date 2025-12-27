import { Home, BookOpen, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Navbar = ({ activeTab, setActiveTab }) => (
  <nav className="fixed bottom-0 left-0 w-full bg-[#FAF9F6]/90 backdrop-blur-md border-t border-[#D4AF37]/20 z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b py-3 px-6">
    <div className="max-w-5xl mx-auto flex justify-around md:justify-between items-center">
      <div className="hidden md:block font-serif text-xl text-[#333] tracking-widest font-bold">
        AL-HIKMAH
      </div>
      <div className="flex gap-2 md:gap-8">
        {[
          { id: 'home', icon: Home, label: 'Beranda' },
          { id: 'chapters', icon: BookOpen, label: 'Pustaka' },
          { id: 'about', icon: Info, label: 'Tentang' }
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={cn(
              "flex flex-col md:flex-row items-center gap-1 p-2 rounded-lg transition-all",
              activeTab === item.id ? "text-[#D4AF37]" : "text-[#8A8A8A] hover:text-[#5A5A5A]"
            )}
          >
            <item.icon size={20} strokeWidth={1.5} />
            <span className="text-[10px] md:text-sm uppercase tracking-wider font-sans-modern">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  </nav>
);
