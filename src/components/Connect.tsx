import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default (): JSX.Element => {
    return (
        <>
            <div className="container-fluid padding">
                <div className='row text-center padding'>
                    <div className='col-12'>
                        <h2>Connect</h2>
                    </div>
                    <div className='col-12 social padding'>
                        <a href="#"><FontAwesomeIcon icon={['fab', 'facebook']} color='#3b5998' /></a>
                        <a href=""><FontAwesomeIcon icon={['fab', 'twitter']} color='#00aced' /></a>
                        <a href="#"><FontAwesomeIcon icon={['fab', 'google-plus-g']} color='#dd4b39' /></a>
                        <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} color='#517fa4' /></a>
                        <a href="#"><FontAwesomeIcon icon={['fab', 'youtube']} color='#bb0000' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}