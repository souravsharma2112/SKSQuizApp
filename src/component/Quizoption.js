import React from 'react'

export default function Quizoption(props) {
    // const [option1className, setoption1ClassName] = useState("hexagon__option")
    // const [option2className, setoption2ClassName] = useState("hexagon__option")
    // const [option3className, setoption3ClassName] = useState("hexagon__option")
    // const [option4className, setoption4ClassName] = useState("hexagon__option")

    // const handleCheck = (a,b,c) =>{
    //     c("hexagon__option active");
    //     setTimeout(() => {
    //         if (a===b) {
    //             c("hexagon__option correct")
    //             console.log(a);
    //         }
    //         if (a!==b) {
    //             c("hexagon__option wrong")
    //         }
    //     }, 3000);
    // }
    return (
        <>
            <div className="option__container">
                <div className="option__screen">
                    <div className={props.option1className} onClick={props.handleCheckoption1}>
                        <div className='optionNumber'>A.</div>
                        <div className="option__box  ">{props.option1}</div>
                    </div>
                    <div className="option__pipe"></div>
                </div>
                <div className="option__screen">
                    <div className={props.option2className} onClick={props.handleCheckoption2}>
                        <div className='optionNumber'>B.</div>
                        <div className="option__box ">{props.option2}</div>
                    </div>
                    <div className="option__pipe"></div>
                </div>
            </div>
            <div className="option__container">
                <div className="option__screen">
                    <div className={props.option3className} onClick={props.handleCheckoption3}>
                        <div className='optionNumber'>C.</div>
                        <div className="option__box  ">{props.option3}</div>
                    </div>
                    <div className="option__pipe"></div>
                </div>
                <div className="option__screen">
                    <div className={props.option4className} onClick={props.handleCheckoption4}>
                        <div className='optionNumber'>D.</div>
                        <div className="option__box ">{props.option4}</div>
                    </div>
                    <div className="option__pipe"></div>
                </div>
            </div>
        </>
    )
}
