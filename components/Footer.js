import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <MyFooter>
            {/* section 1 */}
            <Section >
                <Links >
                    <Link>About Disney+ Hotstar</Link>
                    <Link>Terms Of Use</Link>
                    <Link>Privacy Policy</Link>
                    <Link>FAQ</Link>
                    <Link>Feedback</Link>
                    <Link>Careers</Link>
                </Links>
                <p>© 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
            </Section>
            {/* section 2 */} 
            <Section>
                <ConnectButton>
                    <i className="fab fa-twitter"/>
                </ConnectButton>
                <ConnectButton>
                    <i className="fab fa-facebook-f"/>
                </ConnectButton>
            </Section>
        </MyFooter>
    )
    
}
export default Footer

const MyFooter = styled.footer` 
display:flex ;
height:172px ;
align-items:center ;
`

const Links = styled.ul`
    display:flex ;
    list-style-type: none ;
    column-gap: 18px ;
    /* margin-bottom:12px ; */
`
const Link = styled.li`
    font-size: 0.95rem ;
    opacity: 0.9 ;
`

const Section = styled.section`
height:100%;
padding : 2rem  3rem ;

p{
    margin-top:12px ;
    font-size: 0.85rem ;
    word-spacing:2px ;
    line-height: 1.2 ;
}

`

const Button = styled.button`
    width:48px ;
    height:48px ;
    background-color:var(--clr-blue-1) ;
    border: none ;
    border-radius: 4px ;
    cursor:pointer ;
    i{  
        color:white ;
        opacity: 0.67 ;
        font-size: 1.4rem ;
    }
    &:hover{
            background-color:var(--clr-blue-3) ;
            i { opacity: 1 ;}
        }
`

const ConnectButton = styled(Button)`
    width:48px ;
    height:48px ;
`
const DownloadButton = styled(Button)`
    
`
