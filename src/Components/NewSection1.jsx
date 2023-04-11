import React from "react";
import img from "../Images/Frame (2).png";
import img2 from "../Images/Vector 16.png";
import img3 from "../Images/Group 1110.png";
import style from "../Styles/NewSession.module.css";
import NavbarBtn from "./Buttons/NavbarBtn2";
import NavbarBtn1 from "./Buttons/NavbarBtn";
import group2 from "../Images/Group 2.png";
import cardImg1 from '../Images/Cards/Edit.svg'
import cardImg2 from '../Images/Cards/Send.svg'
import cardImg3 from '../Images/Cards/Document.svg'
import cardImg5 from '../Images/Cards/Paper.svg'
import cardImg4 from '../Images/Cards/Edit Square.svg'
import floaterImg from '../Images/Cards/Rectangle.svg'
import arrow from '../Images/whiteArr.svg'

function NewSection1() {
  return (
    <div>
      <div className={style.Parent}>
        <div className={style.divOne}>
          <img className={`${style.hr} md:pb-4`} src={img2} alt="" />
          <p>
            Welcome to the <span style={{ color: "#7D75D8" }}>wall of</span>
          </p>
          <img src={img} alt="" />
          <div>
          <p className="md:px-[15%]">
            This is where we tell you at all our hopes and aspirations.
          </p>
          <p>
             Behold
            the wanderer of the literary metaverse.
          </p>
          </div>
          <img className={`${style.hr} md:pt-4`} src={img2} alt="" />
        </div>
        <div className={style.divTwo}>
          <div>
            <img src={img3} width={500} alt="" />
          </div>
          <div className={style.div2div2}>
            <p>Publish a book NFT</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem
            </p>
            <NavbarBtn src={arrow} value="PUBLISH WORKS" />
          </div>
        </div>
      </div>
      <div className={style.Div3}>
        <p>
          DISCOVER THE <span style={{ color: "#7D75D8" }}>BENEFITS</span>
        </p>
        <div className={style.cardsP}>
          <div>
            <img src={cardImg1} alt="" />
            <p>Author Cohorts</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem.
              Nullam in mauris sit amet quam efficitur aliquam vel accumsan
              elit.
            </p>
          </div>
          <div>
            <img src={cardImg2} alt="" />
            <p>Early Access</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem.
              Nullam in mauris sit amet quam efficitur aliquam vel accumsan
              elit.
            </p>
          </div>
          <div>
            <img src={cardImg3} alt="" />
            <p>Platform Reader</p>
            <p>
            Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem.
              Nullam in mauris sit amet quam efficitur aliquam vel accumsan
              elit.
            </p>
          </div>
          <div>
            <img src={cardImg4} alt="" />
            <p>Author Cohorts</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem.
              Nullam in mauris sit amet quam efficitur aliquam vel accumsan
              elit.
            </p>
          </div>
          <div>
            <img src={cardImg5} alt="" />
            <p>Early Access</p>
            <p>
              Duis non orci justo. Nulla lobortis, elit ac imperdiet mollis,
              nisi ante blandit ligula, vel elementum urna velit eu lorem.
              Nullam in mauris sit amet quam efficitur aliquam vel accumsan
              elit.
            </p>
          </div>
        <img className={style.floatimg} src={floaterImg} alt="" />
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
