import React from "react";
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../../hooks/useAuth';
import "./navbar.scss";

const Navbar = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const connectMetaMask = () => {
    console.log("here", account)
    localStorage.setItem("connectorId", "injected")
    if (account) {
        logout()
    } else {
        login("injected")
    }
}
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
       {!account  ? <button className="btn-yellow"  onClick={connectMetaMask}>Connect Wallet</button>:  <button className="btn-yellow" onClick={connectMetaMask}>Disconnect</button>}
         
        </div>
      </nav>
         </div>
     </div>
     </section>
    </>
  );
};

export default Navbar;
