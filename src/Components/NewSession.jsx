import React from "react";
import style from "../Styles/NewSession.module.css";
import img from "../Images/Frame (2).png";
import img2 from '../Images/Vector 16.png'
import img3 from '../Images/Group 1110.png'
import img4 from '../Images/Rectangle 26.png'
import NavbarBtn from "./NavbarBtn2";

function NewSession() {
  return (
    <div className={style.Parent}>
      <div className={style.divOne}>
        <p>Welcome to the <span style={{color:'#7D75D8'}}>wall of</span></p>
        <img src={img} alt="" />
        <p>
          This is where we tell you at all our hopes and aspirations. Behold the
          wanderer of the literary metaverse.
        </p>
        <img src={img2}  alt="" />
      </div>
      <div className={style.divTwo}>
        <div>
            <img src={img3} width={500} alt="" />
        </div>
        <div>
            <p>Publish a book NFT</p>
            <p>Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis, nisi ante blandit ligula, vel elementum urna velit eu lorem</p>
            <NavbarBtn value="PUBLISH &rarr;" />
        </div>
      </div>
    </div>
  );
}

export default NewSession;
