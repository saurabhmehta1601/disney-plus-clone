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
        </MyHeader> 
    )
}  
 
  
const MyHeader= styled.div`
    color:var(--clr-light-1);
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

export default Header