import { useState } from 'react';

function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: "/images/Creations Pilars.jpg", alt: "Space Image" },
    { src: "/images/Gargantua.webp", alt: "Planet Image" },
    { src: "/images/quasar.jpg", alt: "Stars Image" },
    { src: "/images/Stars.jpg", alt: "Spacecraft Image" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-12 px-4">
        <div className="relative flex justify-center items-center rounded-lg overflow-hidden h-[calc(100vh-150px)]">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div className="min-w-full h-full flex justify-center items-center" key={index}>
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-3 hover:bg-opacity-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent text-white p-3 hover:bg-opacity-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            &#10095;
          </button>
        </div>
        <div className="flex flex-col justify-center text-blue-200">
          <h1 className="text-4xl font-bold mb-4">Explora las maravillas del espacio</h1>
          <p className="text-lg mb-8">
          Descubra el cautivador mundo de la exploración espacial, la astronomía y los misterios del universo. 
          Sumérgete en las últimas noticias, tecnologías e imágenes impresionantes del cosmos.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-blue-500 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-300"
            >
              Explora
            </a>
            <a
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-blue-400 bg-black px-6 text-sm font-medium text-blue-400 shadow-sm transition-colors hover:bg-blue-400 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-300"
            >
              Mas Informacion
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
