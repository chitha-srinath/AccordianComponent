import React from 'react'
import "./Accordion.css"
import { useState } from 'react'

export default function Accordion() {
    const [show, setshow] = useState(false)
    return (
        <>
            <div className='header'>
                <h3>Accordion - 1</h3>
                <button onClick={()=>setshow(true?show ===false:false)}>click to {show?"close":"open"}</button>
            </div>
            {show ?
                <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam harum et dignissimos a voluptatibus quos quia ipsam. Amet facere doloribus in temporibus, totam commodi animi quibusdam. Illum, repellendus enim!</p>
                </div> : null
            }
        </>
    )
}
