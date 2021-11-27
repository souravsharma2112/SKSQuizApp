import React , { useState} from 'react'
export default function Quizscreen(props) {
    const [timer] = useState(30)

    // const [stop, setStop] = useState(30)
    // let timeSec = 1000;
    // setTimeout(() => {
    //     setTimer(timer-1)
    //     if (timer === 0) {
    //         // timeSec = 0    
    //         setTimer(0)    
    //     }
    // }, timeSec);
    
    // setInterval(() => {
    //     setTimer(timer-1)
    // }, 1000);
    return (
        <>
            <div className="question-timer-container">
                <div className="container-fluid circle-time">
                    <div className= {`circle circle-1 ${props.resultLight} `}></div>
                    <div className= {`circle circle-2 ${props.resultLight} `}></div>
                    <div className= {`circle circle-3 ${props.resultLight} `}></div>
                    <div className= {`circle circle-4 ${props.resultLight} `}></div>
                    <div className= {`circle circle-5 ${props.resultLight} `}></div>
                    <div className= {`circle circle-6 ${props.resultLight} `}></div>
                    <div className= {`circle circle-7 ${props.resultLight} `}></div>
                    <h1 className="timer text-center text-white">{timer}</h1>
                    <div className= {`circle circle-7 ${props.resultLight} `}></div>
                    <div className= {`circle circle-6 ${props.resultLight} `}></div>
                    <div className= {`circle circle-5 ${props.resultLight} `}></div>
                    <div className= {`circle circle-4 ${props.resultLight} `}></div>
                    <div className= {`circle circle-3 ${props.resultLight} `}></div>
                    <div className= {`circle circle-2 ${props.resultLight} `}></div>
                    <div className= {`circle circle-1 ${props.resultLight} `}></div>
                </div>
                <div className="question-container">
                    <div className="question__screen">
                        <div className="hexagon">
                            <div className="question">{props.question}</div>
                        </div>
                        <div className="pipe"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
