import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";

const categories = [
  {
    id: 1,
    title: "Snakes",
    imageUrl: "/animalImages/snake.jpeg",
    route: "shop/snakes",
  },
  {
    id: 2,
    title: "Amphibians",
    imageUrl: "/animalImages/amphibian.jpeg",
    route: "shop/amphibians",
  },
  {
    id: 3,
    title: "Turtles",
    imageUrl: "/animalImages/turtle.jpeg",
    route: "shop/turtles",
  },
  {
    id: 4,
    title: " Monitor Lizards",
    imageUrl: "/animalImages/monitor2.jpeg",
    route: "shop/monitor lizards",
  },
  {
    id: 5,
    title: "Lizards",
    imageUrl: "/animalImages/lizard2.jpeg",
    route: "shop/lizards",
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
