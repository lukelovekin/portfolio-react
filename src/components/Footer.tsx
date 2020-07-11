import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default (): JSX.Element => {
    return (
        <>
        <footer>
 
                                <div className='col-12 social padding text-center' style={{ margin: "0", paddingBottom: "0" }}>
                                    <a href="https://www.linkedin.com/in/lukelovekin">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <FontAwesomeIcon icon={['fab', 'linkedin']} color='#c6c6c6' />
                                    </a>
                                    <a href="https://twitter.com/LovekinLuke">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <FontAwesomeIcon icon={['fab', 'twitter']} color='#c6c6c6' />
                                    </a>
                                    <a href="https://github.com/lukelovekin">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <FontAwesomeIcon icon={['fab', 'github']} color='#c6c6c6' />
                                    </a>
                                </div>

                <div className='col-12 text-center' style={{paddingBottom: "15px"}}>
                    <hr className='light2'/>
                    <h5>&copy; Luke Lovekin</h5>
                </div>
        </footer>
        </>
    )
}
// old footer
{/* <footer>
    <div className='container-fluid padding'>
        <div className='row text-center'>
            <div className='col-md-4'>
                <p>LUKE LOGO</p>
                <hr className='light' />
                <p>asdfsd</p>
                <p>4234234-2-34234</p>
                <p>23423-23423 dfsa</p>
            </div>
            <div className='col-md-4'>
                <hr className='light' />
                <p>OUR HOURS</p>
                <hr className='light' />
                <p>asdfsd</p>
                <p>4234234-2-34234</p>

            </div>
            <div className='col-md-4'>
                <p>Service Area</p>
                <hr className='light' />
                <p>asdfsd</p>
                <p>4234234-2-34234</p>
                <p>23423-23423 dfsa</p>
            </div>
            <div className='col-12'>
                <hr className='light2' />
                <h5>&copy; Luke Lovekin</h5>
            </div>
        </div>
    </div>
</footer> */}