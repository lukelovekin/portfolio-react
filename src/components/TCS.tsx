import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (): JSX.Element => {
    return (
        <>
            <div className='container-fluid padding'>
                <div className='row text-center padding'>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <FontAwesomeIcon icon={['fab','html5']} />
                        <h3>HTML 5</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, quas.</p>
                    </div>
                </div>
                <hr className='my-4'/>
            </div>
        </>
    )
}
