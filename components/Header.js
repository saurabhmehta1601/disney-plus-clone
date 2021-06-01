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
            <div className="kids"><Image src="/kids-logo.svg" width={47} height={14} /></div>
        </NavLinksList>  
        <SearchInput  >
            <input placeholder="Search" type="search" />
        </SearchInput>   
        <SubscribeButton>SUBSCRIBE</SubscribeButton> 
        <LoginButton>LOGIN</LoginButton> 
    </MyHeader>  
    )
}  
 
  
const MyHeader= styled.div`
    color:var(--clr-black-2); 
    height:76px;
    padding: 1rem 1rem 1rem  4rem ;
    display:flex ; 
    align-items:center ;
`

const LogoImg = styled.div` 
    position: relative ;
    margin-left:1rem ;
    object-fit: contain ;
    bottom:2px;
    `

const NavLinksList = styled.div`
display:flex ;
column-gap: 1.8rem ;
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
.kids{
        position: relative ;
        bottom : -2px ; 
    }
`

const SearchInput = styled.div` 
    margin-left:22px ;
    height:40px ; 
    width:300px;
    position:relative ;
    input{
        position:absolute ;
        right:0 ;
        color:var(--clr-light-2) ; 
        border:none ;
        outline: none ;
        background:none;
        font-size:1.05rem ; 
        padding: 0.3rem ;
        border-bottom : 1px solid var(--clr-light-2) ; 
        transition: all 0.3s ;

        &:active,&:focus{
            border-bottom : 1px solid var(--clr-blue-3) ;
            width:100% ;
        }
        &::-webkit-input-placeholder {
            color: var(--clr-light-2); 
        }
}

`
const SubscribeButton = styled.button`
    background-color:var(--clr-blue-3) ;
    cursor:pointer ;
    color:var(--clr-light-1) ;
    padding: 0.2rem 0.7rem ;
    border:none ;
    border-radius: 4px ;
    margin: auto  2.4rem ;
    font-size: 0.8rem ;
    font-weight: 600;
`

const LoginButton = styled.button`  
    background:none ;
    border:none ;
    cursor:pointer ;
    font-size:0.95rem ;
    font-weight: 600;
    margin-left: -0.9rem ;
    padding:0.1rem 0.3rem ;
    color:var(--clr-light-2) ;
`


export default Header