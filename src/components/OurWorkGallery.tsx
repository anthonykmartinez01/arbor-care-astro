import { useState } from "react";

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export default function OurWorkGallery({ images }: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setLightbox(idx)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90" onClick={() => setLightbox(null)}>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white hover:text-white/80 z-10"
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}