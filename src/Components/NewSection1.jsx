import React from "react";
import img from "../Images/Frame (2).png";
import img2 from "../Images/Vector 16.png";
import img3 from "../Images/Group 1110.png";
import style from "../Styles/NewSession.module.css";
import NavbarBtn from "./NavbarBtn2";
import NavbarBtn1 from "./NavbarBtn";
import img4 from "../Images/Edit.png";
import group2 from "../Images/Group 2.png";

function NewSection1() {
  return (
    <div>
      <div className={style.Parent}>
        <div className={style.divOne}>
          <img className={style.hr} src={img2} alt="" />
          <p>
            Welcome to the <span style={{ color: "#7D75D8" }}>wall of</span>
          </p>
          <img src={img} alt="" />
          <p>
            This is where we tell you at all our hopes and aspirations. Behold
            the wanderer of the literary metaverse.
          </p>
          <img className={style.hr} src={img2} alt="" />
        </div>
        <div className={style.divTwo}>
          <div>
            <img src={img3} width={500} alt="" />
          </div>
          <div>
            <p>Publish a book NFT</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem
            </p>
            <NavbarBtn value="PUBLISH &rarr;" />
          </div>
        </div>
      </div>
      <div className={style.Div3}>
        <p>
          DISCOVER THE <span style={{ color: "#7D75D8" }}>BENEFITS</span>
        </p>
        <div className={style.cardsP}>
          <div>
            <img src={img4} alt="" />
            <p>Author Cohorts</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem.
              Nullam in mauris sit amet quam efficitur aliquam vel accumsan
              elit.
            </p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p>Author Cohorts</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem.
              Nullam in mauris sit amet quam efficitur aliquam vel accumsan
              elit.
            </p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p>Author Cohorts</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem.
              Nullam in mauris sit amet quam efficitur aliquam vel accumsan
              elit.
            </p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p>Author Cohorts</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem.
              Nullam in mauris sit amet quam efficitur aliquam vel accumsan
              elit.
            </p>
          </div>
          <div>
            <img src={img4} alt="" />
            <p>Author Cohorts</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem.
              Nullam in mauris sit amet quam efficitur aliquam vel accumsan
              elit.
            </p>
          </div>
        </div>
      </div>
      <div className={style.Div4}>
        <img src={group2} alt="" />
        <p>SUBSCRIBE</p>
        <p>Duis non orci justo. Nulla lobortis, elit ac imperdiet</p>
        <div>
          <input type="text"  placeholder="Enter your email address"/>
          <NavbarBtn1 value="Send" />
        </div>
      </div>
    </div>
  );
}

export default NewSection1;
