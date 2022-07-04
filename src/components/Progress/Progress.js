import React from "react";
import "./progress.scss";

const Progress = () => {
  return (
    <>
      <section className="progress-sec">
        <div className="container">
          <div className="bg-img">
            <img src=".\assests\bg-img.png" alt="img" className="img-fluid" />
          </div>
          <div className="logo">
            <img src=".\assests\logo.png" alt="img" className="img-fluid" />
          </div>
          {/* <p>Compiling list of recepients ----- 100%</p>
          <p>Sending to batch 1 of 10 ---- 100%</p>
          <p>Sending to batch 2 of 10 ----- 100%</p>
          <p>Sending to batch 3 of 10 ----- 46%</p> */}
         <div className="row">
          <div className="col-xl-5 col-12 p-0">
          <div className="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Wallet Address</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>0*scbbcbsccsycyvscc</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>0*scbbcbsccsycyvscc</td>
                  <td>2000</td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
         </div>
          <button
            type="button"
            class="btn-yellow"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Transaction Complete Modal
          </button>
          <button
            type="button"
            class="btn-yellow d-block bhbd"
          >
            Pay
          </button>
        </div>
      </section>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <h6>Transection Complete</h6>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <button className="btn-yellow">OKAY</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
