import React, { useState } from "react";
import "./start-page.scss";

import { Link } from "react-router-dom";

const StartPage = (props) => {
    const [start, setStart] = useState(false);
    const getStart = () => {
        setStart(() => true);
    };

    return !start ? (
        <div className="page__wrapper">
            <div className="start__page">
                <button className="start__page_button" onClick={getStart}>
                    <Link to="/product">
                        <span>Перейти в&nbsp;приложение</span>
                    </Link>
                </button>{" "}
            </div>
        </div>
    ) : null;
};

export default StartPage;
