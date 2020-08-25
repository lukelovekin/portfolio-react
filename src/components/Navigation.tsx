import React from "react";
import pic from "./images/logo.png"


export default (): JSX.Element => {
  return (
    <>
   
      <nav className="navbar navbar-expand-md navbar-light sticky-top">
        <div className="container ">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#"><img src={pic} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon" style={{color: "white"}}></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Projects</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Resume</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Stack</a></li>
              </ul>
            </div>
          </div>
        </div>
        </nav>

        

    </>
  );
};
