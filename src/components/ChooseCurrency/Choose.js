import React from 'react';
import "./choose.scss";

const Choose = () => {
  return (
    <>
    <section className="choose">
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
    <h2>CHOOSE CURRENCY</h2>
    <div className="choose-cards">
        <a className="items" link='/progress'>
            <h2>BUSD</h2>
            <img src=".\assests\busd.png" alt="img" className='img-fluid' />
        </a>
        <a className="items" link='/progress'>
            <h2>PAXG</h2>
            <img src=".\assests\paxg.png" alt="img" className='img-fluid' />
        </a>
    </div>
    
    </section>
    </>
  )
}

export default Choose