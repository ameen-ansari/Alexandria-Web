import React from "react";
import style from "../Styles/SliderType.module.css";
import MultipleItems from "./ConfigSlider";
import NavbarBtn2 from "./Buttons/NavbarBtn2";

function SliderType(props) {
  return (
      <div className={style.Parent}>
      <div></div>
        <div className={style.Part2}>
          <MultipleItems  />
        </div>
        <p>Want to add your work?</p>
        <div>
          <NavbarBtn2 className={style.btn} value="CONTACT US" />
        </div>
      </div>
  );
}

export default SliderType;
