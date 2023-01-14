import React, { useState } from "react";
import "../styles/Collapse.css";


function Collapse({title, description}) {

    const [open, setOpen] = useState(false);

    return(
        <div className="collapse" id={`collapse-${title}`}>
            <div className="header-collapse" /* onClick={() => setOpen(!open)} */>
                <div className="title-collapse">{title}</div>
                <a className={`arrow-collapse ${open}`} href={`#collapse-${title}`} onClick={() => setOpen(!open)}>
                    <img src={arrow} alt="Open list"/>
                </a>
            </div>
            {
                open && <div className="description-collapse">{description}</div>
            }
        </div>
    );
}

export default Collapse;