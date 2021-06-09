import React, { useEffect, useState } from "react";
import "./category-sort.scss";

import { connect } from "react-redux";
import { withRouter } from "react-router";

import { onSetActiveCategories } from "../../actions";
import CategoryOption from "../categories-option";
import { getActiveCategories, getCategoriesList } from "../../selectors/main-selector";

const CategoriesSort = (props) => {
    const [activeCategory, setActiveCategory] = useState(props.activeCategories);
    const onChangeCategory = (e) => {
        if (e.target.value === "all") {
            props.onSetActiveCategories();
        } else {
            props.onSetActiveCategories(e.target.value);
            setActiveCategory(e.target.value);
        }
    };

    useEffect(() => {
        if (props.match.params.category !== props.activeCategories) {
            setActiveCategory(props.activeCategories);
        }
    }, [props.activeCategories]);

    useEffect(() => {
        if (props.match.params.category) {
            props.onSetActiveCategories(props.match.params.category);
            setActiveCategory(props.match.params.category);
        }
    }, [props.match.params.category]);

    return (
        <div className="categories">
            <div className="categories__wrapper">
                <label className="categories__label"> Выбрать категорию : </label>
                <div className="categories__block">
                    <select
                        className="categories__select"
                        value={activeCategory.length > 0 ? activeCategory : "all"}
                        onChange={(e) => onChangeCategory(e)}
                    >
                        <option value="all"> Все</option>
                        <CategoryOption categoriesList={props.categoriesList} />
                    </select>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        categoriesList: getCategoriesList(state),
        activeCategories: getActiveCategories(state),
    };
};

const mapDispatchToProps = {
    onSetActiveCategories,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoriesSort));
