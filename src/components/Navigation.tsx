import React from "react";


export default (): JSX.Element => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light  sticky-top ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">L.L</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><a className="nav-link" href="#">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Skills</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Resume</a></li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
};
