import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// not using this file as i moved it into the footer

export default (): JSX.Element => {
    return (
        <>
            <div className="container-fluid padding">
                <div className='row text-center padding'>
                    <div className='col-12'>
                        <h2>Connect</h2>
                    </div>
                    <div className='col-12 social padding' style={{margin: "0", padding: "0"}}>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={['fab', 'facebook']} color='#3b5998' />
                                </a>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={['fab', 'twitter']} color='#c6c6c6' />
                                </a>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={['fab', 'google-plus-g']} color='#c6c6c6' />
                                </a>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={['fab', 'instagram']} color='#c6c6c6' />
                                </a>
                                <a href="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={['fab', 'youtube']} color='#c6c6c6' />
                                </a>
                    </div>
                </div>
            </div>
        </>
    )
}

{/* <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} color='#3b5998' /></a>
    <a href=""><FontAwesomeIcon icon={['fab', 'twitter']} color='#00aced' /></a>
    <a href="#"><FontAwesomeIcon icon={['fab', 'google-plus-g']} color='#dd4b39' /></a>
    <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} color='#517fa4' /></a>
    <a href="#"><FontAwesomeIcon icon={['fab', 'youtube']} color='#bb0000' /></a> */}