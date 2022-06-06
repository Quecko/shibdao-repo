import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
     <section className="main-navbar">
     <div className="row">
         <div className="col-xl-11 col-12 m-auto">
         <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="/">
          <img src=".\assests\logo.png" alt="img" className="img-fluid logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"><i class="fas fa-align-justify"></i></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <button className="btn-yellow">Connect Wallet</button>
          <button className="btn-transparent d-none">Connect Wallet</button>
        </div>
      </nav>
         </div>
     </div>
     </section>
    </>
  );
};

export default Navbar;
