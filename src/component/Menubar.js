import React from 'react'
import Image1 from '../component/assets/501.png'
import Image2 from '../component/assets/aud1.png'
import { Link } from 'react-router-dom'

export default function Menubar(props) {
    return (
        <>
            <div className="container-fluid menubar flex">
                <div className="right">
                    <Link to="/homescreen"><h4 className='text-white h4-one'><i className="bi bi-house-door"></i></h4></Link>
                </div>
                <div className="left">
                    <ul className="lifeline-ul">
                        <li className="btn-option">
                            <img src={Image1} alt="" srcSet="" />
                        </li>
                        <li className="btn-option">
                            <img src={Image2} alt="" srcSet="" />
                        </li>
                        <li className="btn-option-2 option-manual">
                            <h4 className='text-white h4-one'>x2</h4>
                        </li>
                        <li className="btn-option-2 option-manual">
                            <h4 className='h4-one'><i className="bi bi-headset text-white"></i></h4>
                        </li>
                        <li className="btn-option-2 option-manual">
                            <h4 className='h4-one'><i className="bi bi-gift text-white"></i></h4>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="contaier-fluid menubar-rupee ">
                <h2 className="h4-one" onClick={props.unhidefunction} ><i className="uil uil-rupee-sign money-chart"></i></h2>
            </div>
        </>
    )
}
