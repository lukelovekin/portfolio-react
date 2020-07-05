import React from "react"
import thing from "./images/back.jpg"


export default (): JSX.Element => {
    return (
        <>                
            <div className='projects container-fluid padding'>
                <div className='row padding'>
                    <div className="box col-xs-12 ">
                        <div className='imgBx'>
                            <img src={thing} alt="pic"/>
                        </div>
                        <div className="contentBx">
                            <div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet, natus blanditiis praesentium, dolorem soluta nihil assumenda consequuntur voluptatum autem porro ullam repellat magni ipsum voluptate excepturi illum. Cupiditate, at?</p>
                            </div>
                        </div>
                    </div>
                    <div className="box col-xs-12 ">
                        <div className='imgBx'>
                            <img src={thing} alt="pic" />
                        </div>
                        <div className="contentBx">
                            <div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet, natus blanditiis praesentium, dolorem soluta nihil assumenda consequuntur voluptatum autem porro ullam repellat magni ipsum voluptate excepturi illum. Cupiditate, at?</p>
                            </div>
                        </div>
                    </div>
                    <div className="box col-xs-12 ">
                        <div className='imgBx'>
                            <img src={thing} alt="pic" />
                        </div>
                        <div className="contentBx">
                            <div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum eveniet, natus blanditiis praesentium, dolorem soluta nihil assumendaconsequuntur voluptatum autem porro ullam repellat magni ipsum voluptate excepturi illum. Cupiditate, at?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}
