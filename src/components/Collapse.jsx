import React, { useState } from 'react'
import '../styles/components/Collapse.css'
import vector from '../assets/Vector.png'

function Collapse({ title, description }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="collapse" id={`collapse-${title}`}>
            <div className="header-collapse" onClick={() => setOpen(!open)}>
                <div className="title-collapse">{title}</div>
                <a
                    className={`arrow-collapse ${open}`}
                    href={`#collapse-${title}`} /*onClick={() => setOpen(!open)}*/
                >
                    <img src={vector} alt="Open list" />
                </a>
            </div>
            {open && <div className="description-collapse">{description}</div>}
        </div>
    )
}

export default Collapse
