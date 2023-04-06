import React, { Component } from "react";
import Slider from "react-slick";
import style from "../Styles/Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Images/image1.png";
import img2 from "../Images/image2.png";
import img3 from "../Images/image3.png";
import tc2 from "../Images/Frame 63.png";

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows:false,
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
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    let arr = [img1, img2, img3, img1];
    return (
      <div className={style.pp}>
        <div className={style.Part1}>
          <div>
            <p>
              FEATURED <span style={{ color: "#7D75D8" }}>WORKS</span>
            </p>
          </div>
          <div className={style.arrows}>
            <p onClick={this.previous}>&larr;</p>
            <p onClick={this.next}>&rarr;</p>
          </div>
        </div>
        <div className={style.parent}>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {arr.map((image, i) => {
              return (
                <div key={i} className={style.imgP}>
                  <img className={style.img} alt="img" src={image} />
                  <p>The War of The Worlds</p>
                  <p>H.G. Wells | Collector’s Edition</p>
                  <div>
                   <div className={style.spanP}>
                    <span></span>
                    <span></span>
                    <span></span>
                   </div>
                    <img src={tc2} alt="" />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
