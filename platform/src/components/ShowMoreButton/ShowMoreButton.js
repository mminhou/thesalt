import React from "react";
import "./ShowMoreButton.css";

const ShowMoreButton = () => {
    return (
        <button onClick={() => window.location.replace("/home")}>
            <span className="cta">
                <span style={{color: 'ghostwhite'}}>show more</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </span>
        </button>

    )
};


export default ShowMoreButton;
