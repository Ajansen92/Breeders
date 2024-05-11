import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Snakes",
      imageUrl: "/animalImages/snake.jpeg",
    },
    {
      id: 2,
      title: "Amphibians",
      imageUrl: "/animalImages/amphibian.jpeg",
    },
    {
      id: 3,
      title: "Turtles",
      imageUrl: "/animalImages/turtle.jpeg",
    },
    {
      id: 4,
      title: " Monitor Lizards",
      imageUrl: "/animalImages/monitor2.jpeg",
    },
    {
      id: 5,
      title: "Lizards",
      imageUrl: "/animalImages/lizard2.jpeg",
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
