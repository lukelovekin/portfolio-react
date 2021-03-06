import React from "react";
import bg1 from "./images/woody.jpg"




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
              <h1 className="display-2">BOOTSTRAP</h1>
              <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
              <button type="button" className=" btn btn-outline-light btn-med"> CLICKIDY CLICK</button>
              <span> </span>
              <button type="button" className=" btn btn-primary btn-med"> CLICKIDY CLICK</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={bg1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img src={bg1} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">

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