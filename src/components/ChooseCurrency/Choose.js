import React from 'react';
import "./choose.scss";
import { Link } from 'react-router-dom';

const Choose = () => {
  return (
    <>
    <section className="choose">
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
    <h2>CHOOSE CURRENCY</h2>
    <div className="choose-cards">
        <Link to="/progress" className="items" >
            <h2>BUSD</h2>
            <img src=".\assests\busd.png" alt="img" className='img-fluid' />
        </Link>
        <Link to="/progress" className="items" >
            <h2>PAXG</h2>
            <img src=".\assests\paxg.png" alt="img" className='img-fluid' />
        </Link>
    </div>
    
    </section>
    </>
  )
}

export default Choose