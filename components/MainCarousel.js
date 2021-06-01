import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"

const MainCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    autoplay:true ,
    lazyLoad: 'progressive' ,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
  };  
  
  return (
   <Carousel {...settings} >
       
       <div className="slide">
          <div className="slide-content">
            <h3 className="slide-content-title">November Story</h3>
            <h4 className="slide-content-category">StarPlus &#183; Hindi &#183; Drama</h4>
            <h4 className="slide-content-desc">Streamed on Disney plus India to watch this  thriller show . </h4>
          </div> 
          <div className="slide-image">
              <div className="image-gradient"></div>
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h"/>
          </div>
      </div>

      <div className="slide">
          <div className="slide-content">
            <h3 className="slide-content-title">November Story</h3>
            <h4 className="slide-content-category">StarPlus &#183; Hindi &#183; Drama</h4>
            <h4 className="slide-content-desc">Streamed on Disney plus India to watch this  thriller show . </h4>
          </div> 
          <div className="slide-image">
              <div className="image-gradient"></div>
              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h"/>
          </div>
      </div>  

      <div className="slide">
          <div className="slide-content">
            <h3 className="slide-content-title">November Story</h3>
            <h4 className="slide-content-category">StarPlus &#183; Hindi &#183; Drama</h4>
            <h4 className="slide-content-desc">Streamed on Disney plus India to watch this  thriller show . </h4>
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
  
  border-radius: 12px ;
  width:92% ;
  margin:auto ;
  margin-top:1.2rem ;
  height:61.5vh ;

  .slick-slider {
    margin:0  -15px;
  }
  
  .slick-slide { 
    margin:0 15px;
}

  .slide{
    
    background-color:var(--clr-blue-1) ;
    position:relative ;
    min-height:61.5vh ; 
    border-radius:12px ;
    overflow:hidden ;

    .slide-content{
      padding: 4.5rem 2.7rem;
      width:40%;
      

      .slide-content-title{
        font-size:1.9rem ;
      }
      .slide-content-category{
        margin-top : 12px ;
        opacity: 0.6 ; 
      }
      .slide-content-desc{
        margin-top : 22px ;
        opacity: 0.8 ;
        letter-spacing: 1px ;
        line-height: 1.5 ;
        font-weight: 300 ; 

      }
    }
    .slide-image{
      position:absolute ;
      top:0 ;
      right:0 ;
      bottom:0 ;
      width:64% ;

      img{
        height:100% ;
        border-bottom-right-radius: 12px ;
        border-top-right-radius: 12px ;
        width:100% ;
        object-fit:cover;
      }
    }
  }
`

export default MainCarousel
