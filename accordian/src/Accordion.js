import React from 'react'
import "./Accordion.css"
import { useState } from 'react'

export default function Accordion(props) {
    const [show, setshow] = useState(false)
    return (
        <>
            <div className='header'>
                <button onClick={() => setshow(true ? show === false : false)}>click to {show ? "close" : "open"}</button>
            </div>
            {show ?
                <div className="section">
                    <p>{props.user.para}</p>
                </div> : null
            }

        </>
    )
}

