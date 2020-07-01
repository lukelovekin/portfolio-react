import React from "react"
import pic2 from "./images/bootstrap2.png"

export default (): JSX.Element => {
    return (
        <>
            <div className="container-fluid padding">
                <div className="row padding">
                    <div className="col-lg-6">
                        <h2>Our Philosophy</h2>
                        <p>Mobilicorpus mobilicorpus leviosa mobilicorpus tergeo locomotor patronum impedimenta. Rictusempra engorgio totalus ennervate deletrius mortis unction aparecium cruciatus. Immobilus reducio expecto anapneo mobilicorpus petrificus finite evanesco.</p>
                        <p>Mobilicorpus mobilicorpus leviosa mobilicorpus tergeo locomotor patronum impedimenta. Rictusempra engorgio totalus ennervate deletrius mortis unction aparecium cruciatus. Immobilus reducio expecto anapneo mobilicorpus petrificus finite evanesco.
                        </p>
                        <br />
                    </div>
                    <div className="col-lg-6">
                        <img src={pic2} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
