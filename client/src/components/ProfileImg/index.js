import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import "./style.css";
import Photo from "./canvaprofile.png"

library.add(fab)
// import { fabGitHub, faLinkedIn, faPinterest, faInstagram } from "@fortawesome/react-fontawesome";

function ProfileImg() {
    return (
    <div>
    <img className="Rachel" src={Photo} />


    <a href="https://github.com/rwanke14"
    className="github">
    <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
  </a>
  <a href="https://www.linkedin.com/in/rachel-wanke-038757b/"
    className="linkedIn">
    <FontAwesomeIcon icon={["fab", "linkedIn"]} size="1x" />
  </a>
  <a href="https://www.pinterest.com/rkhlaw/_saved/"
    className="pinterest">
    <FontAwesomeIcon icon={["fab", "pinterest"]} size="1x" />
  </a>
  <a href="https://www.instagram.com/rkhlaw26/"
    className="Instagram">
    <FontAwesomeIcon icon={["fab", "instagram"]} size="1x" />
  </a>
  {/* <a href="https://www.facebook.com/rachel.horne.393"
    className="facebook">
    <FontAwesomeIcon icon={faFacebook} size="1x" />
  </a> */}
  
  </div>
//     <a href="https://www.linkedin.com/in/rachel-wanke-038757b/" className="" /a>
//     <a href="https://www.pinterest.com/rkhlaw/_saved/"><i class="fab fa-pinterest"></i></a>
//     <a href="https://www.instagram.com/rkhlaw26/"><i class="fab fa-instagram"></i></a>
//     <a href="https://www.facebook.com/rachel.horne.393"><i class="fab fa-facebook"></i></a>
    )
}

export default ProfileImg;