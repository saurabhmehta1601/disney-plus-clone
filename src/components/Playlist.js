import React from 'react'
import Slider from "react-slick"
import styled from "styled-components"


const Playlist = ({title}) => {
        
    const settings={ 
        dots:false,
        slidesToShow: 8,
        slidesToScroll: 8,
        infinite:false ,
    }
    return (
        <div>
            <Title className="title">{title}</Title>
            <List {...settings}>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
                   <div>
                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h" alt="" />
                   </div>
            </List>
        </div>
    )
}

 
const Title = styled.h3`
font-size: 1.28rem ;
text-indent:1.45rem ; 
margin-top:1rem ;  
opacity: 0.9 ;
`

const List = styled(Slider)`
    padding : 1rem ;

    div{
        overflow: visible ;
    }
    div > img{
        border-radius:12px ;
        width:100% ;
        &:hover{
            transform: scale(1.3) ;
            transition : all 0.5s ;
        }
    }

    .slick-slide{ 
        margin:5px ;
    }
/* to stops carousel slides from going to next line  */
    .slick-track{
        display:flex ;
    }
`

export default Playlist
