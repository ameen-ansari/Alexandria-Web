import React from "react";
import style from "../Styles/SliderType.module.css";
import MultipleItems from "./ConfigSlider";
import NavbarBtn2 from './NavbarBtn2'
import hr from '../Images/simplehr.png'

function SliderType() {
  return (
      <>
    <div className={style.Parent}>
      <div className={style.Part1}>
        <div>
          <p>FEATURED<span style={{color:'#7D75D8'}}>WORKS</span></p>
        </div>
        <div className={style.arrows}>
          <p>&larr;</p>
          <p>&rarr;</p>
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
    <img src={hr} alt="" className={style.hr}/>
       
        </>
  );
}

export default SliderType;
