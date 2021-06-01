import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
   <Carousel {...settings} >
      
      <div className="slide">
          <div className="slide-content">
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
          </div>
          <div className="slide-image">
              <div className="image-gradient"></div>
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h"/>
          </div>
      </div> 
     
      <div className="slide">
          <div className="slide-content">
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
          </div>
          <div className="slide-image">
              <div className="image-gradient"></div>
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h"/>
          </div>
      </div> 
     
      <div className="slide">
          <div className="slide-content">
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
          </div>
          <div className="slide-image">
              <div className="image-gradient"></div>
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h"/>
          </div>
      </div> 
      <div className="slide">
     
          <div className="slide-content">
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
            <h2>Slide content</h2>
          </div>
          <div className="slide-image">
              <div className="image-gradient"></div>
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h"/>
          </div>
      </div>  
     
    </Carousel>
  )
}

const Carousel= styled(Slider)`
  width:95% ;
  margin:auto ;
  border-radius: 12px ;

  .slide{
    position:relative ;
    margin-top:22px ;
    min-height:56vh ;
    .slide-content{

      width:50%;
    }

    .slide-image{
      position:absolute ;
      top:0 ;
      right:0 ;
      width:50% ;
      background-color: blue ;
      img{
        width:100% ;
        object-fit:contain;
      }
    }
  }
`



export default MainCarousel
