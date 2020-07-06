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
                        <div className='row padding'>
                            <div className='col-md-4'>
                                <div className='card shadow p-3 mb-5 bg-white rounded'>
                                
                                    <div className='card-body'>
                                        <h4 className='card-title'>Luke Love
                                </h4>
                                        <p>Leviosa densaugeo protego immobilus petrificus. Tarantallegra imperio unctuous crucio. Stupefy tarantallegra expecto incarcerous portus.
                                </p>
                                        <a href="#" className='btn btn-outline-secondary'>Check it</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow p-3 mb-5 bg-white rounded'>
                           
                                    <div className='card-body'>
                                        <h4 className='card-title'>Luke Love
                                </h4>
                                        <p>Leviosa densaugeo protego immobilus petrificus. Tarantallegra imperio unctuous crucio. Stupefy tarantallegra expecto incarcerous portus.
                                </p>
                                        <a href="#" className='btn btn-outline-secondary'>Check it</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow p-3 mb-5 bg-white rounded'>

                                    <div className='card-body'>
                                        <h4 className='card-title'>Luke Love
                                </h4>
                                        <p>Leviosa densaugeo protego immobilus petrificus. Tarantallegra imperio unctuous crucio. Stupefy tarantallegra expecto incarcerous portus.
                                </p>
                                        <a href="#" className='btn btn-outline-secondary'>Check it</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}