import Directory from "./components/directory/directory.component";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Snakes",
      image: "/animalImages/snake.jpeg",
    },
    {
      id: 2,
      title: "Amphibians",
      image: "/animalImages/amphibian.jpeg",
    },
    {
      id: 3,
      title: "Turtles",
      image: "/animalImages/turtle.jpeg",
    },
    {
      id: 4,
      title: "Monitor Lizards",
      image: "/animalImages/monitor2.jpeg",
    },
    {
      id: 5,
      title: "Lizards",
      image: "/animalImages/lizard2.jpeg",
    },
  ];

  return <Directory categories={categories} />;
};

export default App;
