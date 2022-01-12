import React from 'react'
import "./Accordion.css"
import { useState } from 'react'

export default function Accordion() {
    const [showDown, setshowDown] = useState(false)
    const [showUp, setshowUp] = useState(false)
    const [showLeft, setshowLeft] = useState(false)
    const [showRight, setshowRight] = useState(false)
    return (
        <>
            {showUp ?
                <div className="section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam harum et dignissimos a voluptatibus quos quia ipsam. Amet facere doloribus in temporibus, totam commodi animi quibusdam. Illum, repellendus enim!</p>
                </div> : null
            }

            <div className='header'>
                {showLeft ?
                    <div className="sectionLeft">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam harum et dignissimos a voluptatibus quos quia ipsam. Amet facere doloribus in temporibus, totam commodi animi quibusdam. Illum, repellendus enim!</p>
                    </div> : null
                }
                <div><button onClick={() => setshowLeft(true ? showLeft === false : false)}>click to {showLeft ? "close left" : "open left"}</button></div>
                <div><button onClick={() => setshowRight(true ? showRight === false : false)}>click to {showRight ? "close right" : "open right"}</button></div>
                <div><button onClick={() => setshowDown(true ? showDown === false : false)}>click to {showDown ? "close down" : "open down"}</button></div>
                <div><button onClick={() => setshowUp(true ? showUp === false : false)}>click to {showUp ? "close up" : "open up"}</button></div>

                {showRight ?
                    <div className="sectionRight">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam harum et dignissimos a voluptatibus quos quia ipsam. Amet facere doloribus in temporibus, totam commodi animi quibusdam. Illum, repellendus enim!</p>
                    </div> : null
                }
            </div>
            {showDown ?
                <div className="section">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio numquam harum et dignissimos a voluptatibus quos quia ipsam. Amet facere doloribus in temporibus, totam commodi animi quibusdam. Illum, repellendus enim!</p>
                </div> : null
            }
        </>
    )
}
