import styled from 'styled-components'
import HamburgerMenu from "./HamburgerMenu"
import Image from "next/image"

const Header = () => {
    return (
        <MyHeader>
      <HamburgerMenu />
      <LogoImg>
         <Image width={120}  height={40} src="/disney-hotstar-logo-dark.svg"/>
        </LogoImg> 
        <NavLinksList>
            <div>TV</div>
            <div>Movies</div>
            <div>Sports</div>
            <div>News</div>
            <div>Premium</div>
            <div className="new">Disney+</div>
        </NavLinksList>       
        </MyHeader> 
    )
}  
 
  
const MyHeader= styled.div`
    color:var(--clr-black-2); 
    height:76px;
    padding: 1rem 1rem 1rem  4rem ;
    display:flex ; 
    align-items:center ;
    background-color:var(--clr-blue-1) ;
`

const LogoImg = styled.div` 
    position: relative ;
    margin-left:1rem ;
    object-fit: contain ;
    bottom:2px;
    `

const NavLinksList = styled.div`
display:flex ;
column-gap: 1.4rem ;
margin-left : 1.6rem ;
margin-bottom:-.1rem ;
color:var(--clr-light-2) ;

.new{
    position:relative ;
    &:after{
        content:"NEW" ;
        position: absolute;
        bottom:-12px ;
        left:30% ;
        font-size:0.57rem ;
        font-weight: 700 ;
        color: var(--clr-blue-3) ;
    }
}
`



export default Header