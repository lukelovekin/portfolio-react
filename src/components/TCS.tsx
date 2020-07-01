import React from "react"
import pic from "./images/desk.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default (): JSX.Element => {
    return (
        <>
            <div className='container-fluid padding'>
                <div className='row text-center padding'>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <FontAwesomeIcon icon={['fab','html5']} />
                        <h3>HTML 5</h3>
                        <p>Mobilicorpus avada finite jinx. Engorgio locomotor..</p>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <FontAwesomeIcon icon={['fab', 'js']} />
                        <h3>JAVASCRIPT</h3>
                        <p>Mobilicorpus avada finite jinx. Engorgio locomotor..</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <FontAwesomeIcon icon={['fab', 'react']} />
                        <h3>REACT</h3>
                        <p>Mobilicorpus avada finite jinx. Engorgio locomotor.</p>
                    </div>
                </div>
                <hr className='my-4'/>
            </div>

            <div className="container-fluid padding">
                <div className="row padding">
                    <div className="col-lg-6">
                        <h2>If you build it...</h2>
                        <p>Mobilicorpus mobilicorpus leviosa mobilicorpus tergeo locomotor patronum impedimenta. Rictusempra engorgio totalus ennervate deletrius mortis unction aparecium cruciatus. Immobilus reducio expecto anapneo mobilicorpus petrificus finite evanesco.</p>
                        <p>Mobilicorpus mobilicorpus leviosa mobilicorpus tergeo locomotor patronum impedimenta. Rictusempra engorgio totalus ennervate deletrius mortis unction aparecium cruciatus. Immobilus reducio expecto anapneo mobilicorpus petrificus finite evanesco.
                        </p>
                        <br/>
                        <a href="#" className="btn btn-primary">YO CLICK</a>
                    </div>
                    <div className="col-lg-6">
                        <img src={pic} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
            <hr className="my-4"/>

        </>
    )
}
