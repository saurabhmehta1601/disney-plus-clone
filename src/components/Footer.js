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
            <ButtonsSection>

              <div>
                  <p>Connect with us </p>
                  <div className="button-group">
                    <ConnectButton>
                        <i className="fab fa-twitter"/>
                    </ConnectButton>
                    <ConnectButton>
                        <i className="fab fa-facebook-f"/>
                    </ConnectButton>
                  </div>
              </div>

              <div>
                  <p>Disney+ Hotstar App </p>
                    <div className="button-group">
                    <DownloadButton >
                    <img src="https://img.icons8.com/color/50/000000/google-play.png"/> 
                        <div className="text-content">
                        <p>GET IT ON</p>
                        <h4>Google Play</h4>
                        </div>
                    </DownloadButton> 
                    
                    <DownloadButton >
                    <img src="https://img.icons8.com/color/48/000000/apple-app-store--v3.png"/>
                    <div className="text-content">
                            <p style={{fontSize:'0.85rem'}}>Download on the</p>
                            <h4>Apple Store</h4>
                        </div>
                </DownloadButton> 
                    </div>
              </div>

                
            </ButtonsSection>
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
    background-color:var(--clr-blue-1) ;
    border: none ;
    margin:4px ;
    border-radius: 4px ;
    color:white ;
    cursor:pointer ;
    i{  
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
    margin : 6px ;
    display:flex ;
    padding:5px 12px ;
    align-items:center ;
    width:200px ;

    img{
        height:36px ;
    }

    .text-content{
        text-align:left  ; 
        opacity: 0.68;
        margin-left:4px ;
        margin-top : -10px ;
        p{
            font-size:0.66rem ;
            font-weight:700 ; 
        } 
        h4{
            font-size:1.2rem  ;
        }
    }
`
const ButtonsSection = styled(Section)`
    column-gap:2rem ;
    display:flex ; 
    p{
        font-weight: 600 ;
        opacity: 0.7 ;
        font-size:0.81rem ; 
    }
    .button-group{
        display:flex ;
    }
`
