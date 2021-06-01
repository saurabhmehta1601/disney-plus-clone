import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styled from 'styled-components'

const MainCarousel = () => {
    const config = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <Carousel {...config}>
            <div>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h"></img>
            </div>
            <div>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h"></img>
            </div>
            <div>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4720/994720-h"></img>
            </div>
        </Carousel>
    )
}

const Carousel = styled(Slider)`

`

export default MainCarousel
