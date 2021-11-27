import React, { useEffect, useState } from 'react'
import Quizscreen from './Quizscreen';
import Quizoption from './Quizoption';
import Menubar from './Menubar';
import Moneychart from './Moneychart';
import CheckWin from './CheckWin';
import useSound from 'use-sound';
// import home from '../component/sounds/startPoem.mpeg'
import correctAns from '../component/sounds/sounds_CorrectAns.wav'
import wrongAns from '../component/sounds/sounds_WrongAns.wav'
import ThanksWay from '../component/sounds/sounds_Thanks.wav'


export default function Startgame(props) {
    const [questionNumber, setQuestionNumber] = useState(0)
    const [correctSound] =useSound(correctAns)
    const [WrongSound] =useSound(wrongAns)
    const [ThanksSound] =useSound(ThanksWay)
    
    // eslint-disable-next-line
    const questionData = [
        {
            id: 1,
            question: "To prepare which of these popular street foods do you primarily require 'murmure'?",
            option1: "Ghugni Chaat",
            option2: "Jhal Muri",
            option3: "Poha",
            option4: "Misal Pav",
            correct: "Jhal Muri"
        },
        {
            id: 2,
            question: "What can you primarily do with the Zoom application?",
            option1: "Order food",
            option2: "Listen to music",
            option3: "Watch a web series",
            option4: "Attend a webinar",
            correct: "Attend a webinar"
        },
        {
            id: 3,
            question: "Which organisation has the authority to declare global health emergencies as pandemics?",
            option1: "WTO",
            option2: "WGO",
            option3: "WHO",
            option4: "WIPO",
            correct: "WHO"
        },
        {
            id: 4,
            question: "What reason did Naomi Osaka cite to pull out of the 2021 French Open?",
            option1: "Protest against racism",
            option2: "Marriage",
            option3: "Hamstring injury",
            option4: "Mental health",
            correct: "Mental health"
        },
        {
            id: 5,
            question: "Which of these is not a country?",
            option1: "North Macedonia",
            option2: "East Timor (Timor-Leste)",
            option3: "West Indies",
            option4: "South Sudan",
            correct: "West Indies"
        },
        {
            id: 6,
            question: "Who is the only leader to serve as deputy prime minister of India twice during the tenure of two different prime ministers?",
            option1: "Chaudhary Devi Lal",
            option2: "Morarji Desai",
            option3: "Yashwantrao Balwantrao Chavan",
            option4: "Chaudhary Charan Singh",
            correct: "Chaudhary Charan Singh"
        },
        {
            id: 7,
            question: "Travis Dowlin is the only international wicket of which former Indian captain?",
            option1: "MS Dhoni",
            option2: "Mohd Azharuddin",
            option3: "Sunil Gavaskar",
            option4: "Rahul Dravid",
            correct: "MS Dhoni"
        },
        {
            id: 8,
            question: " Azad Hind Radio was a radio service first started under the leadership of Netaji Subhas Chandra Bose in 1942 in which country?",
            option1: "Japan",
            option2: "Germany",
            option3: "Singapore",
            option4: "Burma",
            correct: "Germany"
        },
        {
            id: 9,
            question: "Who scored highest number of runs in the ICC World Cup 2011?",
            option1: "Tillakaratne Dilshan",
            option2: "Gautam Gambhir",
            option3: "AB de Villiers",
            option4: "Sachin Tendulkar",
            correct: "Tillakaratne Dilshan"
        },
        {
            id: 10,
            question: "Hephaestus was known as the god of which of the following in greek mythology?",
            option1: "God of War",
            option2: "God of Fire",
            option3: "God of Wine",
            option4: "God of Love",
            correct: "God of Fire"
        },
        {
            id: 11,
            question: "Which was the first country to invent ice cream?",
            option1: "India",
            option2: "Bangladesh",
            option3: "Pakistan",
            option4: "China",
            correct: "China"
        },
        {
            id: 12,
            question: "Who has been the only prime minister who has never won a Lok Sabha election?",
            option1: "H D Devegowda",
            option2: "Manmohan Singh",
            option3: "Inder Kumar Gujral",
            option4: "V P Singh",
            correct: "Manmohan Singh"
        },
        {
            id: 12,
            question: "Which color cap is awarded to the player for scoring the most runs in the IPL?",
            option1: "Purple",
            option2: "Green",
            option3: "Orange",
            option4: "Blue",
            correct: "Orange"
        },
        {
            id: 13,
            question: "Complete this Hindi idiom: Sau baat ki___",
            option1: "Pauni baat",
            option2: "Ek baat",
            option3: "Dedh baat",
            option4: "Aalo baat",
            correct: "Ek baat"
        },
        {
            id: 14,
            question: "In which song this film feature? (Song: Ye Mausam ki barish, ye barish ka pani…)",
            option1: "Half Girlfriend",
            option2: "Baaghi",
            option3: "Ki & Ka",
            option4: "OK Jaanu",
            correct: "Half Girlfriend"
        },
        {
            id: 15,
            question: "In which year was the Hatia (or Dhurva) Dam built?",
            option1: "1962-63",
            option2: "1952-53",
            option3: "1970-72",
            option4: "1945-47",
            correct: "1962-63"
        },
        {
            id: 16,
            question: "In February 2017, ISRO created a world record by launching how many satellites through a single rocket?",
            option1: "34",
            option2: "96",
            option3: "154",
            option4: "104",
            correct: "104"
        }
    ]

    const moneyPyramid = [
        { id: 1, amount: 1000 },
        { id: 2, amount: 5000 },
        { id: 3, amount: 10000 },
        { id: 4, amount: 21000 },
        { id: 5, amount: 51000 },
        { id: 6, amount: 100000 },
        { id: 7, amount: 100000 },
        { id: 8, amount: 500000 },
        { id: 9, amount: 850000 },
        { id: 10, amount: 1000000 },
        { id: 11, amount: 2100000 },
        { id: 12, amount: 5100000 },
        { id: 13, amount: 7210000 },
        { id: 14, amount: 10000000 },
        { id: 15, amount: 20000000 },
        { id: 16, amount: 70000000 },
        { id: 17, amount: 120000000 }
    ]
    console.log(questionData.length);
    const [question, setQuestion] = useState(null)
    const [option1, setOption1] = useState(null)
    const [option2, setOption2] = useState(null)
    const [option3, setOption3] = useState(null)
    const [option4, setOption4] = useState(null)
    const [correct, setCorrect] = useState(null)

    useEffect(() => {
        setQuestion(questionData[questionNumber].question);
        setOption1(questionData[questionNumber].option1);
        setOption2(questionData[questionNumber].option2);
        setOption3(questionData[questionNumber].option3);
        setOption4(questionData[questionNumber].option4);
        setCorrect(questionData[questionNumber].correct);

    }, [questionData, questionNumber]);
    
    const [toggleCheckHide] = useState("hidden")
    const [toggleCheckHide2, setToggleCheckHide2] = useState(toggleCheckHide)
    console.log(toggleCheckHide);
    const [option1className, setoption1ClassName] = useState("hexagon__option")
    const [option2className, setoption2ClassName] = useState("hexagon__option")
    const [option3className, setoption3ClassName] = useState("hexagon__option")
    const [option4className, setoption4ClassName] = useState("hexagon__option")
    const [yourAmount, setYourAmount] = useState(Number(0))
    const [resultLight, setResultLight] = useState(null)
    
    const handleCheckoption1 = () => {
        setoption1ClassName("hexagon__option active");
        setTimeout(() => {
            if (option1 === correct) {
                setoption1ClassName("hexagon__option correct")
                setResultLight("correct");
                correctSound()
                console.log("hello");
                setTimeout(() => {
                    if (questionNumber === questionData.length - 1) {
                        // setQuestionNumber(0)
                        console.log("yeah i am here");
                        setResultLight(" ")
                        
                    }
                    else {
                        setQuestionNumber(questionNumber + 1)
                        console.log(questionNumber);
                        setResultLight(" ")
                        setYourAmount(moneyPyramid[questionNumber].amount)
                    }
                    
                    setoption1ClassName("hexagon__option")
                    setoption2ClassName("hexagon__option")
                    setoption3ClassName("hexagon__option")
                    setoption4ClassName("hexagon__option")
                        
                }, 3000);
                setYourAmount(moneyPyramid[questionNumber].amount)
            }
            if (option1 !== correct) {
                setoption1ClassName("hexagon__option wrong")
                setResultLight("wrong")
                WrongSound()
                setTimeout(() => {
                    setToggleCheckHide2(" ")
                    ThanksSound()
                }, 4000);
            }
        }, 3000);
    }
    const handleCheckoption2 = () => {
        setoption2ClassName("hexagon__option active");
        setTimeout(() => {
            if (option2 === correct) {
                setoption2ClassName("hexagon__option correct")
                setResultLight("correct")
                correctSound()
                setTimeout(() => {
                    if (questionNumber === questionData.length - 1) {
                        // setQuestionNumber(0)
                        console.log("yeah i am here");
                        setResultLight(" ")
                        
                    }
                    else {
                        setQuestionNumber(questionNumber + 1)
                        console.log(questionNumber);
                        setResultLight(" ")
                        setYourAmount(moneyPyramid[questionNumber].amount)
                    }
                    setoption1ClassName("hexagon__option")
                    setoption2ClassName("hexagon__option")
                    setoption3ClassName("hexagon__option")
                    setoption4ClassName("hexagon__option")
                    
                }, 3000);
                setYourAmount(moneyPyramid[questionNumber].amount)
            }
            if (option2 !== correct) {
                setoption2ClassName("hexagon__option wrong")
                setResultLight("wrong")
                WrongSound()
                setTimeout(() => {
                    ThanksSound()
                    setToggleCheckHide2(" ")
                }, 4000);
            }
        }, 3000);
    }
    const handleCheckoption3 = () => {
        setoption3ClassName("hexagon__option active");
        setTimeout(() => {
            if (option3 === correct) {
                setoption3ClassName("hexagon__option correct")
                setResultLight("correct")
                correctSound()
                setTimeout(() => {
                    if (questionNumber === questionData.length - 1) {
                        // setQuestionNumber(0)
                        console.log("yeah i am here");
                        setResultLight(" ")
                        
                    }
                    else {
                        setQuestionNumber(questionNumber + 1)
                        console.log(questionNumber);
                        setResultLight(" ")
                        setYourAmount(moneyPyramid[questionNumber].amount)
                    }
                    setoption1ClassName("hexagon__option")
                    setoption2ClassName("hexagon__option")
                    setoption3ClassName("hexagon__option")
                    setoption4ClassName("hexagon__option")
                    
                }, 3000);
                setYourAmount(moneyPyramid[questionNumber].amount)
            }
            if (option3 !== correct) {
                setoption3ClassName("hexagon__option wrong")
                setResultLight("wrong")
                WrongSound()
                setTimeout(() => {
                    ThanksSound()
                    setToggleCheckHide2(" ")
                }, 4000);
            }
        }, 3000);
    }

    const handleCheckoption4 = () => {
        setoption4ClassName("hexagon__option active");
        setTimeout(() => {
            if (option4 === correct) {
                setoption4ClassName("hexagon__option correct")
                // setQuestionNumber(questionNumber + 1);
                setResultLight("correct")
                correctSound()
                console.log(questionNumber);
                console.log(questionNumber);
                console.log(questionData.length-1);
                setTimeout(() => {
                    if (questionNumber === questionData.length - 1) {
                        setQuestionNumber(questionData.length-1)
                        console.log("yeah i am here");
                        setResultLight(" ")
                        ThanksSound()
                        setToggleCheckHide2(" ")                        
                    }
                    else {
                        setQuestionNumber(questionNumber + 1)
                        console.log(questionNumber);
                        setResultLight(" ")
                        setYourAmount(moneyPyramid[questionNumber].amount)
                    }
                    setoption1ClassName("hexagon__option")
                    setoption2ClassName("hexagon__option")
                    setoption3ClassName("hexagon__option")
                    setoption4ClassName("hexagon__option")
                    
                }, 3000);
                setYourAmount(moneyPyramid[questionNumber].amount)
            }
            if (option4 !== correct) {
                setoption4ClassName("hexagon__option wrong")
                setResultLight("wrong")
                WrongSound()
                setTimeout(() => {
                    ThanksSound()
                    setToggleCheckHide2(" ")
                }, 4000);
            }
        }, 3000);
    }

    const [unhideClass, setUnhideClass] = useState("money-container hidden")
    const [toggleClass, setToggleClass] = useState(false)

    const unhidefunction = () => {
        toggleClass ? setToggleClass(false) : setToggleClass(true);
        if (toggleClass === false) {
            setUnhideClass(`money-container`)
            console.log(unhideClass);
        }
        if (toggleClass === true) {
            setUnhideClass("money-container hidden")
            console.log(unhideClass);
        }
    }

    return (
        <>
            <div className={`quizScreenMainBox ${props.startgamehideUnhide}`}>
                <Menubar unhidefunction={unhidefunction} />
                <Moneychart questionNumber={questionNumber} unhideClass={unhideClass} moneyPyramid={moneyPyramid} yourAmount={yourAmount} />
                <Quizscreen question={question} resultLight={resultLight} />
                <Quizoption option1={option1} option2={option2} option3={option3} option4={option4} handleCheckoption1={handleCheckoption1} option1className={option1className} handleCheckoption2={handleCheckoption2} option2className={option2className} handleCheckoption3={handleCheckoption3} option3className={option3className} handleCheckoption4={handleCheckoption4} option4className={option4className} />
                <CheckWin  toggleCheckHide2={toggleCheckHide2} yourAmount={yourAmount}/>
                <footer className="footer">
                    All Copyright &copy; Reserved by SKS Company
                </footer>
            </div>
        </>
    )
}
