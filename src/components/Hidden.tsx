import React from "react"
import Poo from "./images/woody.jpg"


export default (): JSX.Element => {
    return (
        <>
            <button className="fun" data-toggle='collapse'data-target='#emoji'>Click here
            </button>
            <div>
                <div id='emoji' className='collapse'>
                    <div className='container-fluid padding'>
                        <div className='row text-center'>
                            <div className='col-sm-6 com-md-3 col-lg-3'>
                                <img className='gif' src={Poo} alt=""/>
                            </div>
                            <div className='col-sm-6 com-md-3 col-lg-3'>
                                <img className='gif' src={Poo} alt="" />
                            </div>
                            <div className='col-sm-6 com-md-3 col-lg-3'>
                                <img className='gif' src={Poo} alt="" />
                            </div>
                            <div className='col-sm-6 com-md-3 col-lg-3'>
                                <img className='gif' src={Poo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}