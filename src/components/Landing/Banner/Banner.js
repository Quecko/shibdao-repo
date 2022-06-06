import React from 'react';
import "./banner.scss";
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
    <section className="banner">
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.</p>
      <h2>Connect Wallet</h2>
      <Link to="/choose">
      <button className='btn-yellow'>Connect Wallet</button>
      </Link>
    </section>
    </>
  )
}

export default Banner;