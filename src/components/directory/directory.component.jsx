import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "Snakes",
    imageUrl: "/animalImages/ball-python.jpeg",
    route: "shop/snakes",
  },
  {
    id: 2,
    title: "Amphibians",
    imageUrl: "/animalImages/frog.jpeg",
    route: "shop/amphibians",
  },
  {
    id: 3,
    title: "Turtles",
    imageUrl: "/animalImages/turtlepreview.jpeg",
    route: "shop/turtles",
  },
  {
    id: 4,
    title: " Monitor Lizards",
    imageUrl: "/animalImages/monitorpreview.jpeg",
    route: "shop/monitor lizards",
  },
  {
    id: 5,
    title: "Lizards",
    imageUrl: "/animalImages/lizardpreview.jpeg",
    route: "shop/lizards",
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
