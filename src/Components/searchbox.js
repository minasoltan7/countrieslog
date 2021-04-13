import React from 'react';
import "./searchbox.css";

const Searchbox = (props) => {
    const { searchChange } = props;
    return (
        <div>
            <input type="Search" placeholder="Search Country" onChange={searchChange} class="searchbox" />
        </div>

    )
}

export default Searchbox;






