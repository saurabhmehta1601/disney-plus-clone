import styled from "styled-components"

export default function HamburgerMenu(){
    return (
        <Menu> 
        </Menu>
    )
}

const Menu = styled.div`
    width:20px;     
    height:1.5px ;
background-color:var(--clr-light-2) ;
    position: relative ;

    &:before{
        content: "" ;
        height:2px;
        background-color:var(--clr-light-2) ;
        width:100% ;
        position:absolute;
        left:0;
        right:0 ; 
        top:-6px ;  
   }

    &:after{  
        content: "" ; 
        height:2px;
        width:100%; 
    background-color:var(--clr-light-2) ;
        position:absolute;
        left:0;
        right:0 ;
        bottom:-6px ;
    }
`
