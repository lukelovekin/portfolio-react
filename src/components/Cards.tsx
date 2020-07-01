import React from "react"
import Pic from "./images/team1.png"


export default (): JSX.Element => {
    return (
        <>
            <div className="container-fluid padding">
                <div className="row welcome text-center">
                    <div className='col-12'>
                        <h1 className='display-4'>Meet the team</h1>
                    </div>
                    <hr className='my-4'/>
                </div>
            </div>

            <div className='container-fluid padding'>
                <div className='row paddomg'>
                    <div className='col-md-4'>
                        <div className='card'>
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
                        <div className='card'>
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
                        <div className='card'>
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