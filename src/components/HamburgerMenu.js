import styled from "styled-components"

export default function HamburgerMenu(){
    return <Menu />
}

const Menu = styled.div` 
    width:18px;     
    height:1.2px ;
    background-color:var(--clr-light-2) ;
    position: relative ;
    opacity: 0.7 ;
    &:before{
        content: "" ;
        height:1.2px;
        background-color:var(--clr-light-2) ;
        width:100% ;
        position:absolute;
        left:0;
        right:0 ; 
        top:-5px ;  
   }

    &:after{  
        content: "" ; 
        height:1.2px;
        width:100%; 
    background-color:var(--clr-light-2) ;
        position:absolute;
        left:0;
        right:0 ;
        bottom:-5px ;
    }
`
