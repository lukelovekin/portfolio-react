import React from "react";
import bg1 from "./images/background.png"
import bg2 from "./images/background2.png";
import bg3 from "./images/background3.png";



export default (): JSX.Element => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption">
              <h1 className="display-2">First slide label</h1>
              <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
              <button type="button" className=" btn btn-outline-light btn-med"> CLICKIDY CLICK</button>
              <span> </span>
              <button type="button" className=" btn btn-primary btn-med"> CLICKIDY CLICK</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bg2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bg3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
        </div>
      </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
</div>
    </>
  )
}