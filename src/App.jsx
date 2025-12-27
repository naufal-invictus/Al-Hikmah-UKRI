import { useState } from 'react';
import { Info } from 'lucide-react';
import { Navbar } from './components/layout/Navbar';
import { LandingPage } from './pages/LandingPage';
import { ChapterList } from './pages/ChapterList';
import { ChapterReader } from './components/features/ChapterReader';
import { FadeContent } from './components/ui/FadeContent';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedChapter, setSelectedChapter] = useState(null);

  const renderContent = () => {
    // Jika ada bab dipilih, tampilkan Reader
    if (selectedChapter) {
        return <ChapterReader chapter={selectedChapter} onBack={() => setSelectedChapter(null)} />;
    }

    // Router sederhana berdasarkan Tab
    switch (activeTab) {
      case 'home': return <LandingPage onStart={() => setActiveTab('chapters')} />;
      case 'chapters': return <ChapterList onSelectChapter={setSelectedChapter} />;
      case 'about': return (
        <div className="min-h-screen flex items-center justify-center px-6 text-center">
            <FadeContent>
                <Info size={48} className="mx-auto text-[#D4AF37] mb-4" />
                <h2 className="font-serif text-3xl mb-4">Tentang Al-Hikmah</h2>
                <p className="text-[#6B6B6B] max-w-md mx-auto font-sans-modern">
                    Platform ini didedikasikan untuk menghidupkan kembali sejarah Islam melalui teknologi web modern yang nyaman dan mudah diakses.
                </p>
            </FadeContent>
        </div>
      );
      default: return <LandingPage onStart={() => setActiveTab('chapters')} />;
    }
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#333]">
      {renderContent()}
      {!selectedChapter && <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />}
    </div>
  );
}

export default App;
