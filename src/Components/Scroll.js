import React from "react";
import "./Scroll.css";

const Scroll = (props) => {
    return (
        <div class="scrollstyle">
            {props.children}
        </div>

    )
}

export default Scroll