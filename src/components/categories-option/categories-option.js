import React from "react";

const CategoryOption = ({ categoriesList }) => {
    return categoriesList.map((item, i) => {
        return (
            <option key={i} value={item}>
                {item}
            </option>
        );
    });
};
export default CategoryOption;
