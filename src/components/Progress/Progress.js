import React ,{ useEffect, useState }  from "react";
import "./progress.scss";
import { useWeb3React } from "@web3-react/core";
import useAuth from "../../hooks/useAuth";
import { DistributeMultiple } from '../../hooks/distributeMultiple'
const Progress = () => {

  const { account } = useWeb3React();

  const { login, logout } = useAuth();

  //  const [stakefilter, setfilterdata] = useState([]);

  const {DisperseMulti} = DistributeMultiple();
  // const [tokenAddy,settokenAddy]= useState('0x0Eb3e44ceFFa4214B9E1B4b9EabD97E57EDf80bC');
  const [amount, setamount]= useState('');


  const makepayment = async() => {
  //  var stakefilter=["0xa0774B499241861fc0d91a474D4a3bd9c304404A","0xA0e5a4D5467D64DC09Abc6a6BCe5eEad2d7A64Af","0x1904359446894C41733e963661D0c5C1B2Da7C58","0x1904359446894C41733e963661D0c5C1B2Da7C58","0xe3ea2485afd0E0E75bC1f7B6d373A5cE81f12ebd"]

   
    var datas = ["0xa0774B499241861fc0d91a474D4a3bd9c304404A","0xA0e5a4D5467D64DC09Abc6a6BCe5eEad2d7A64Af","0x1904359446894C41733e963661D0c5C1B2Da7C58","0x1904359446894C41733e963661D0c5C1B2Da7C58","0xe3ea2485afd0E0E75bC1f7B6d373A5cE81f12ebd"];
    // console.log("here it is", stakefilter)
    // for (const elem of stakefilter) {
    //   datas.push(elem?.account)
    // }
    var valarr=[];
    var newarr= amount/datas.length;
    for (const elem of datas) {
      valarr.push(newarr)
    }


    let res= await DisperseMulti("0x0Eb3e44ceFFa4214B9E1B4b9EabD97E57EDf80bC",datas,valarr)
  }
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
            <div className="col-xl-10 col-12 p-0">
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
                      <td>0xa0774B499241861fc0d91a474D4a3bd9c304404A</td>
                      <td>2000</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>0xA0e5a4D5467D64DC09Abc6a6BCe5eEad2d7A64Af</td>
                      <td>2000</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>0x1904359446894C41733e963661D0c5C1B2Da7C58</td>
                      <td>2000</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>0x1904359446894C41733e963661D0c5C1B2Da7C58</td>
                      <td>2000</td>
                    </tr>

                    <tr>
                      <th scope="row">5</th>
                      <td>0xe3ea2485afd0E0E75bC1f7B6d373A5cE81f12ebd</td>
                      <td>2000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <button
            type="button"
            class="btn-yellow"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Transaction Complete Modal
          </button> */}
          <button
            type="button"
            class="btn-yellow d-block bhbd" data-toggle="modal" data-target="#exampleModalmerchfdd"
          >
            Pay
          </button>

          <div class="modal fade" id="exampleModalmerchfdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-wallet">
                    <div class="modal-content">
                       <h3 className="p-4 text-center" style={{color:'white'}}>Set Amount to Make Payment</h3>
                        <div class="modal-body p-4 text-center">
                            <button className='w-100 ' type='button' >
                                <div className="row pb-2 pt-1">
                                 {/* <label>Enter Token address for Reward</label> */}
                                 {/* <input type="text" className="form-control" style={{color:'#000'}}    onChange={(e) => settokenAddy(e.target.value)}  ></input> */}
                                 <label >Enter Amount to distribute all Address</label>
                                 <input type="text" className="form-control" style={{color:'#000'}}  onChange={(e) => setamount(e.target.value)}></input>
                                </div>


                            </button>
                            
                          
                        </div>
                        <button className="btn btn-success text-center" onClick={makepayment}>Pay</button>
                    </div>
                </div>
            </div>
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
