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
                            <h2> To be continued after I finish my MERN stack project... brb!!!</h2>
                            <h3>Hey, I'm Luke</h3>

                            <p> I'm an Enthusiastic, Curious and Proactive Junior Full-Stack Developer, forever learning and always open to new skills and challenges.
                            </p>
                            <p>
                                Interests are progressing my Tech skills and trying toget amongst the Tech community. When I'm not working onmy Tech skills I frequent Tech Meetups and Hackathons,well at least as many as I have been able to sincecoming into tech.
                            </p>
                            <p>
                                I have a background in Construction where I spent the first     several years as an apprentice and the latter 5+ years as Site  Supervision involving constant Management (time and people),     Leadership, Communication, Problem Solving and a Proactic   Attitude on projects from multimillion-dollar houses to 3 story   apartment blocks all around Brisbane.
                            </p>
                            <p>
                                Other than that, exercising, gaming, AFL, socialising,  renovating and is always working towards something new and   challenging
                            </p>
                            <p>
                                - Javascript/ Typescript, Ruby.
                                - Html, Scss
                                - Rails, PostgreSQL, AWS S3, Heroku
                                - MongoDb, Express, React, NodeJs (MERN)
                                Dabbled in:
                                - Vue, Bootstrap
                                To Learn List:
                                - Python, Java, PHP, SQL and more
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


    