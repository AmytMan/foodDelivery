import React from 'react';
import { Link } from 'react-router-dom';
import {MdFacebook} from "react-icons/md";
import {GrInstagram}from 'react-icons/gr';
import {GrTwitter} from 'react-icons/gr'
function Footer() {
  return (
    <footer className="d-flex bg-dark text-white  flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
      <div className="col-md-4 d-flex align-items-center mx-4">
        <Link to='/' className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
          KlainChowk
        </Link>
        <span className="">© 2023 All Right Reserved Created by KalinChowk</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-4">
        <li className="ms-3"><MdFacebook/></li>
        <li className="ms-3"><GrTwitter/></li>
        <li className="ms-3"><GrInstagram/></li>
      </ul>
    </footer>
  );
}

export default Footer;
