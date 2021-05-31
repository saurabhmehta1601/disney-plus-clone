import styled from 'styled-components'
import HamburgerMenu from "./HamburgerMenu"

const Header = () => {
    return (
        <MyHeader>
    <HamburgerMenu />        Header            
        </MyHeader> 
    )
}  

 
const MyHeader= styled.div`
    color:var(--clr-light-1);
    height:70px;
    padding:2rem ;
    display:flex ; 
    align-items:center ;
    background-color:var(--clr-blue-1) ;
`

export default Header