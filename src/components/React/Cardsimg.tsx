import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function Cardsimages() {
  const movies = [
    {
      title: "Interstellar",
      description: "Un viaje más allá de la galaxia.",
      imageUrl: "/images/interestelar.jpg"
    },
    {
      title: "2001: A Space Odyssey",
      description: "Explorando la evolución de la humanidad.",
      imageUrl: "/images/space.jpg"
    },
    {
      title: "Gravity",
      description: "Una lucha por la supervivencia en el espacio.",
      imageUrl: "/images/Gravity.jpg"
    },
    {
      title: "The Martian",
      description: "Un astronauta atrapado en Marte.",
      imageUrl: "/images/martian.jpg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 px-8">
      {movies.map((movie, index) => (
        <Card key={index} className="py-4 bg-gray-700 text-gray-300">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{movie.title}</h4>
            <small className="text-default-500">{movie.description}</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex justify-center">
            <Image
              alt={movie.title}
              className="object-cover rounded-xl"
              src={movie.imageUrl}
              width={270}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Cardsimages;
