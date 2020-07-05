import React from "react"
import Pic from "./images/woody.jpg"


export default (): JSX.Element => {
    return (
        <>
    

            <div className='container-fluid padding'>
                <div className='row padding'>
                    <div className='col-md-4'>
                        <div className='card shadow p-3 mb-5 bg-white rounded'>
                            <img className='card-img-top' src={Pic} alt=""/>
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
                            <img className='card-img-top' src={Pic} alt="" />
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
                            <img className='card-img-top' src={Pic} alt="" />
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
        </>
    )
}