import React from 'react';
import "./choose.scss";

const Choose = () => {
  return (
    <>
    <section className="choose">
    <div className="wrapper">
      <img src=".\assests\loading.png" alt="img" className='img-fluid' />
      <p>Please accept the transaction from MetaMask</p>
    </div>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
    <h2>CHOOSE CURRENCY</h2>
    <div className="choose-cards">
        <div className="items">
            <h2>BUSD</h2>
            <img src=".\assests\busd.png" alt="img" className='img-fluid' />
        </div>
        <div className="items">
            <h2>PAXG</h2>
            <img src=".\assests\paxg.png" alt="img" className='img-fluid' />
        </div>
    </div>
    
    </section>
    </>
  )
}

export default Choose