import { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ItConsultingImg from '../assets/ITConsulting.webp';
import HomeImg from '../assets/Homeimg.avif';
import ReactLogo from '../assets/react.svg';

const galleryImages = [
  {
    src: ItConsultingImg,
    alt: 'Team collaboration with graphs',
    category: 'Team Collaboration',
  },
  {
    src: HomeImg,
    alt: 'Incrosys office/home image',
    category: 'Office Space',
  },
  {
    src: ReactLogo,
    alt: 'React Logo',
    category: 'Technology',
  },
];

function FadeInSection({ children, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Gallery() {
  const [previewIdx, setPreviewIdx] = useState(null);
  const closePreview = () => setPreviewIdx(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 mx-auto max-w-6xl px-4 sm:px-6 py-10 sm:py-14">
        <FadeInSection>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-blue-600 mb-2">
              Visual Showcase
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Company Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Take a look at highlights from our projects, team moments, company events, and the innovative work we do at Incrosys.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group relative cursor-pointer transform hover:-translate-y-2"
                style={{ aspectRatio: '4/3' }}
                onClick={() => setPreviewIdx(idx)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-semibold text-blue-200 uppercase tracking-wide mb-1">{img.category}</p>
                  <p className="text-sm font-medium text-white">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Image Preview Modal */}
        {previewIdx !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in p-4"
            onClick={closePreview}
          >
            <div
              className="relative max-w-4xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 sm:-top-5 sm:-right-5 bg-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-xl hover:bg-blue-100 text-blue-600 text-2xl sm:text-3xl z-10 border-2 border-blue-500 transition-transform hover:scale-110"
                onClick={closePreview}
                aria-label="Close preview"
              >
                &times;
              </button>
              <img
                src={galleryImages[previewIdx].src}
                alt={galleryImages[previewIdx].alt}
                className="w-full h-auto max-h-[80vh] rounded-xl sm:rounded-2xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-xs font-semibold text-blue-300 uppercase tracking-wide mb-1">
                  {galleryImages[previewIdx].category}
                </p>
                <p className="text-white text-lg sm:text-xl font-semibold drop-shadow-lg">
                  {galleryImages[previewIdx].alt}
                </p>
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
