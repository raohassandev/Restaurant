import { Box } from "components";
import React from "react";
interface Props {
  category: Category;
  onSelect: (category: Category) => void;
}
export const CategoryCard = ({ category, onSelect }: Props) => {
  return (
    <Box className="card" horizontal="center" onClick={() => onSelect(category)}>
      <img className="card-img-top" src={category.imageUrl} alt="category-img" />
      <div className="card-body">
        <h5 className="card-title text-center text-primary">{category.name}</h5>
        <p className="card-text"></p>
      </div>
    </Box>
  );
};
