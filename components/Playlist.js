import React from 'react'
import Image from "next/image"
import Slider from "react-slick"

const Playlist = ({title}) => {
    const settings={
        dots:false,
        slidesToShow: 8,
        slidesToScroll: 8
    }
    return (
        <div>
            <h2 className="title">{title}</h2>
            <List >

            </List>
        </div>
    )
}

const List = styled(Slider)`


`

export default Playlist
