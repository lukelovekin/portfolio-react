import React from "react";

export default (): JSX.Element => {
  return (
    <>
      <div className="container-fluid padding">
        <div className="row welcome text-center">
          <div className="col-12">
            <h1 className='display-4'> Put some content here</h1>
          </div>
          <hr/>
          <div className='col-12'>
            <p className='lead'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque impedit omnis debitis cum, asperiores natus repellendus blanditiis dicta neque, repudiandae autem ipsa est expedita delectus!</p>
          </div>
        </div>
      </div>
    </>
  );
};
