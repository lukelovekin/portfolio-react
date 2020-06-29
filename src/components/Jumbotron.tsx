import React from "react";


export default (): JSX.Element => {
  return (
    <>
      <div className="container-fluid">
        <div className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolore, voluptate rem eligendi odio saepe autem consequatur
              nesciunt. Ea magni ipsum nihil ab eos fuga!
            </p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
            <a href="#"><button type="button" className="btn btn-outline-secondary btn-md">CLICKK!!</button></a>
          </div>
        </div>
      </div>
    </>
  );
};