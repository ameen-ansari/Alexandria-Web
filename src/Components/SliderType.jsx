import React from "react";
import style from "../Styles/SliderType.module.css";
import arrow1 from '../Images/arrow1.png' 
import arrow2 from '../Images/arrow2.png' 
import MultipleItems from "./ConfigSlider";
import NavbarBtn2 from './NavbarBtn2'

function SliderType() {
  return (
      <>
    <div className={style.Parent}>
      <div className={style.Part1}>
        <div>
          <p>FEATURED<span style={{color:'#7D75D8'}}>WORKS</span></p>
        </div>
        <div>
          <img  style={{margin:'0px 40px'}} src={arrow2} alt="" />
          <img src={arrow1} walt="" />
        </div>
      </div>
      <div className={style.Part2}>
      <MultipleItems />
      </div>
      <p>Want to add your work?</p>
      <div>
      <NavbarBtn2 className={style.btn} value="CONTACT US" />
      </div>
    </div>
       
        </>
  );
}

export default SliderType;
