import React from 'react';

const Lesson=()=>{
  return(
    <>
      <div className="col-sm-11 bgcolor">
        <div className="container-fluid">
          <div className="row">
            <div className="mt-3 vid">
              <h6><i className="fas fa-play fa-rotate-180"></i> Videos</h6>
            </div>


            <div className="col-sm-9 mt-5 mx-auto">
              <div className="insert">
                <input type="text" className="form-control fw-bold" placeholder="Insert URL here" /> <br/>
                <p className="text-center fw-bold">or</p>
                <div className="box">
                  <p className="fw-bold">Upload</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Lesson;
