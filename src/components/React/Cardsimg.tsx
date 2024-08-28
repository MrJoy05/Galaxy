import React from 'react';

// Define el tipo para las propiedades de Card
interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

// Componente Card con tipos explícitos
const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => (
  <div className="relative group overflow-hidden rounded-lg bg-gray-800 shadow-lg">
    <a href="#" className="absolute inset-0 z-10" aria-label={`View ${title}`}>
      <span className="sr-only">View {title}</span>
    </a>
    <img
      src={imageSrc}
      alt={`${title} Image`}
      className="object-cover w-full h-72 md:h-96 rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
      style={{ opacity: 1 }} 
    />
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-opacity flex items-end p-4">
      <div className="text-white">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  </div>
);

// Define el tipo para el array de películas
interface Movie {
  title: string;
  description: string;
  imageSrc: string;
}

// Componente Cardsimages con tipos explícitos
const Cardsimages: React.FC = () => {
  const movies: Movie[] = [
    {
      title: "Interstellar",
      description: "Un viaje más allá de la galaxia.",
      imageSrc: "/images/interestelar.jpg"
    },
    {
      title: "2001: A Space Odyssey",
      description: "Explorando la evolución de la humanidad.",
      imageSrc: "/images/space.jpg"
    },
    {
      title: "Gravity",
      description: "Una lucha por la supervivencia en el espacio.",
      imageSrc: "/images/Gravity.jpg"
    },
    {
      title: "The Martian",
      description: "Un astronauta atrapado en Marte.",
      imageSrc: "/images/martian.jpg"
    }
  ];

  return (
    <section className="relative h-screen bg-zinc-900 text-white">
      {/* Fondo negro */}
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src="/images/space.gif"
          alt="Space Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 md:px-16 lg:px-24">
        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "'Pixelify Sans Variable', system-ui" }}>
          Las Mejores Películas Sobre el Espacio
        </h1>

        {/* Texto Animado */}
        <p className="text-lg text-gray-300 mb-8 animate-text text-center" style={{ fontFamily: "'Pixelify Sans Variable', system-ui" }}>
          Viaja a través de las estrellas y explora mundos desconocidos con estas increíbles películas espaciales.
        </p>

        {/* Grid de Tarjetas */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
          {movies.map((movie, index) => (
            <Card
              key={index}
              title={movie.title}
              description={movie.description}
              imageSrc={movie.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cardsimages;
