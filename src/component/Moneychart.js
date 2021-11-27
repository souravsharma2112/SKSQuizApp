import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react';
export default function Moneychart(props) {
    // const [classToggle, setClassToggle] = useState()
    // // const [questionNumber]=useState(5);
    // setClassToggle(`${props.unhideClass}`)


    return (
        <>
            <div className={`${props.unhideClass} kl`}>
                <div className="left-side-money">
                    <div className="balanceDisplay"  >You Win : {props.yourAmount}</div>
                    <div className="logohome">
                        <div className="logohome-1">
                            <div className="logoname">
                                <h1>S K S</h1>
                                <h1><i className="uil uil-rupee-sign"></i></h1>
                                <h2>Quiz Game</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side-money">
                    <ul className="moneychart-ul">
                        <li className='moneychart-li center'>Prize Table</li>
                        {props.moneyPyramid.map((m) => (
                            <li className={props.questionNumber + 1 === m.id ? "moneychart-li active" : "moneychart-li"} id={m.id}>
                                <div className="moneynumber">{m.id}</div>
                                <div className="moneyamount"><i className="uil uil-rupee-sign">{Number(m.amount).toLocaleString()}</i></div>
                            </li>
                        )).reverse()}
                    </ul>
                </div>
            </div>
        </>
    )
}
