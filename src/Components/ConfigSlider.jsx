import React, { Component } from "react";
import Slider from "react-slick";
import style from '../Styles/Slider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '../Images/image1.png'
import img2 from '../Images/image2.png'
import img3 from '../Images/image3.png'
import tc from  '../Images/Group 1065.png'
import tc2 from  '../Images/Frame 63.png'

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 800, // screen size at which to apply these settings
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };



let arr = [img1 , img2 ,img3 ,img1]
    return (
      <div className={style.parent}>
        <Slider {...settings}>
            {
                arr.map((image , i)=>{
                    return(
                        <div  key={i} className={style.imgP}>
                        <img className={style.img} alt="img" src={image}  />
                        <p>The War of The Worlds</p>
                        <p>H.G. Wells | Collector’s Edition</p>
                        <div>
                        <img src={tc} alt="" />
                        <img src={tc2} alt="" />

                        </div>
                        </div>
                    )
                }) 
            }
        </Slider>
      </div>
    );
  }
}
