import React, { useState  } from 'react'
import { Link } from 'react-router-dom'
// import home from '../component/sounds/startPoem.mpeg'
import sksTheme from '../component/sounds/sounds_KBC_Theme.wav'
import Startgame from './Startgame';
import useSound from 'use-sound';
import CheckWin from './CheckWin';

export default function Homescreeen() {
    const [userName, setuserName] = useState(" ");
    const [checkhideUnhide] = useState("hidden");
    const [checkhideUnhide2] = useState(" ");
    const [startgamehideUnhide] = useState("hidden");
    // const [homeSound] =useSound(home)
    const [SKSTheme] = useSound(sksTheme)
    const [toggleCheckHide2] = useState("hidden")
    const playsound = () =>{
        setTimeout(() => {
            SKSTheme()
        }, 1000);
    }

    return (
        <>
            <header className="header flex">
                <div className="right">
                    <Link to="/"><h4 className='text-white h4-one'><i className="bi bi-house-door"></i></h4></Link>
                </div>
            </header>
            <main className="main">
                <div className="logohome">
                    <div className="logohome-1">
                        <div className="logoname">
                            <h1>S K S</h1>
                            <h1><i className="uil uil-rupee-sign"></i></h1>
                            <h2>Quiz Game</h2>
                        </div>
                    </div>
                </div>
                <div className="userinput">
                    <div className="username-input">
                        <input type="text" className="form-control" id="userName" onChange={event => setuserName(event.target.value)} placeholder='Enter Your Name' />
                    </div>
                    <div className="startbutton">
                        <div className="d-grid gap-2">
                            <button onClick={playsound} className={`btn btn-clr btn-lg ${userName.length === 0 ?"disabled" : ""}`}><Link  className="btn-clr " to="/startgame" tabindex="-1" role="button" aria-disabled="false">START</Link></button>
                        </div>
                    </div>
                </div>
            </main>
            <Startgame checkhideUnhide={checkhideUnhide} startgamehideUnhide ={startgamehideUnhide} checkhideUnhide2= {checkhideUnhide2} userName={userName}/>
            <CheckWin toggleCheckHide2={toggleCheckHide2} userName={userName}/>
            <footer className="footer">
                All Copyright &copy; Reserved by SKS Company
            </footer>
        </>
    )
}
