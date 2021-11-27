import React from 'react'

export default function CheckWin(props) {

    return (
        <>
            <div className={`award ${props.toggleCheckHide2}`}>
                <div className="textCongrats"></div>
                <div className="goodwish text-center">
                    <h1>Congratulation! Visit Again</h1>
                </div>

                <div className="checkborder mx-5">
                    <div className="bankName text-center">
                        <h1>Bank of SKS Moon</h1>
                    </div>
                    <div className="checkName">
                        <span>Name : </span> {props.userName} 
                    </div>

                    <div className='checkAmountwords d-flex'>
                        <div className='amount'>Amount : </div>
                        <div className='amountinwords text-center'></div>
                    </div>
                    <div className='black-line d-flex'>&nbsp;</div>
                    <div className='checkAmountno m-3 d-flex justify-content-end'>
                        <div className="amountinno">Rs {props.yourAmount}/-</div>
                    </div>
                    <div className='sign m-3 d-flex justify-content-end'>
                        <div>
                            <h4 className='text-center'>Sumit Sharma</h4>
                            <h3>SKS Company</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
