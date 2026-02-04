import Header from './Header';
import Footer from './Footer';
import ItConsultingImg from '../assets/ITConsulting.webp';
import HomeImg from '../assets/Homeimg.avif';
import ReactLogo from '../assets/react.svg';
import { useState } from 'react';

const galleryImages = [
  {
    src: ItConsultingImg,
    alt: 'Team collaboration with graphs',
  },
  {
    src: HomeImg,
    alt: 'Incrosys office/home image',
  },
  {
    src: ReactLogo,
    alt: 'React Logo',
  },
];

function Gallery() {
  const [previewIdx, setPreviewIdx] = useState(null);
  const closePreview = () => setPreviewIdx(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">Company Gallery</h1>
        <p className="text-lg mb-6">Take a look at highlights from our projects, team moments, and company events!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 animate-fade-in">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow hover:shadow-2xl transition-shadow duration-300 overflow-hidden group relative cursor-pointer"
              style={{ aspectRatio: '4/3' }}
              onClick={() => setPreviewIdx(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300 group-hover:brightness-90"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-800/70 to-transparent p-2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">{img.alt}</div>
            </div>
          ))}
        </div>

        {/* Image Preview Modal */}
        {previewIdx !== null && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" onClick={closePreview}>
            <div className="relative max-w-3xl w-full sm:w-auto mx-4" onClick={e => e.stopPropagation()}>
              <button
                className="absolute -top-5 -right-5 bg-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg hover:bg-blue-100 text-blue-600 text-2xl z-10 border-2 border-blue-500"
                onClick={closePreview}
                aria-label="Close preview"
              >&times;</button>
              <img src={galleryImages[previewIdx].src} alt={galleryImages[previewIdx].alt} className="w-full h-auto max-h-[70vh] rounded-lg shadow-xl" />
              <div className="mt-2 text-center text-white text-lg drop-shadow font-semibold">
                {galleryImages[previewIdx].alt}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Gallery;
