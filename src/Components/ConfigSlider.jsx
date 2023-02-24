import React, { Component } from "react";
import Slider from "react-slick";
import style from '../Styles/Slider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../Images/image1.png'
import img2 from '../Images/image2.png'
import img3 from '../Images/image3.png'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };



let arr = [img1 , img2 ,img3, img1 , img2 ,img3, img1 , img2 ,img3]
    return (
      <div className={style.parent}>
        <Slider {...settings}>
            {
                arr.map((image , i)=>{
                    return(
                        <div key={i} className={style.imgP}>
                        <img className={style.img} alt="img" src={image}  />
                        </div>
                    )
                }) 
            }
        </Slider>
      </div>
    );
  }
}
