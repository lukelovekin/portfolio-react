import React from "react"
import pic from "./images/face.png"
import typed from "typed.js"



export default (): JSX.Element => {
    return (
        <>
            <figure>
                <div className='about container'>
                <div className='container-fluid padding'>
                    <div className='row padding text-center'>
                        <div className=" col-lg-7  ">
                                <h3 > Hi, My Name is Luke</h3>
                                <p >I am currently a "Junior Web Dev" at Coder Academy, Brisbane, Australia, while I finish my bootcamp in programming and Diploma in IT.
            </p>
                                <p>
                                    Before moving into the Tech industry I've spent the past 10 years in the construction industry where I started my first 4 years as a Carpenter, then moving into Site Supervisor roles for the other 6 years where I thoroughly exercised my problem solving, leadership and communication skills. After a lot of thought, I decided I didn't want to advance my career any further in construction so I decided to pursue my interest in Technology. With the love of problem solving and being able to build things I thought programming was the best place to start and so far it is exactly how I had hoped.
            </p>
                                <p>
                                    When I'm not coding I like to keep active and love to try anything I've never done before. I'm quite energetic and I like to keep busy whether its playing AFL, exercising my dog, catching up with friends or playing a video game.
            </p>
            <p>
                                                    
            </p>
                        </div>
                        <div className=" col-lg-5 ">
                            <img src={pic} alt="pic"/>
                        </div>
                    </div>
                </div>
                </div>
            </figure>
        </>
    )
}


    