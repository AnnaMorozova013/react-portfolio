import React from 'react'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './footerElements'
import {FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll } from 'react-scroll' 

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
      };

  return (
    <FooterContainer>
        <FooterWrap>
            {/* <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About me</FooterLinkTitle>
                            <FooterLink to="/contact">Contact me</FooterLink>
                            <FooterLink to="/contact">Linkedin</FooterLink>
                            <FooterLink to="/contact">Examples</FooterLink>
                            <FooterLink to="/contact">A lorem ipsum thingy</FooterLink>
                            <FooterLink to="/contact">Another contact me</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact me</FooterLinkTitle>
                            <FooterLink to="/contact">Contact me</FooterLink>
                            <FooterLink to="/contact">Linkedin</FooterLink>
                            <FooterLink to="/contact">Examples</FooterLink>
                            <FooterLink to="/contact">A lorem ipsum thingy</FooterLink>
                            <FooterLink to="/contact">Another contact me</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Cool Videos</FooterLinkTitle>
                            <FooterLink to="/contact">Contact me</FooterLink>
                            <FooterLink to="/contact">Linkedin</FooterLink>
                            <FooterLink to="/contact">Examples</FooterLink>
                            <FooterLink to="/contact">A lorem ipsum thingy</FooterLink>
                            <FooterLink to="/contact">Another contact me</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Interesting Sites</FooterLinkTitle>
                            <FooterLink to="/contact">Contact me</FooterLink>
                            <FooterLink to="/contact">Linkedin</FooterLink>
                            <FooterLink to="/contact">Examples</FooterLink>
                            <FooterLink to="/contact">A lorem ipsum thingy</FooterLink>
                            <FooterLink to="/contact">Another contact me</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer> */}
            <SocialMedia> 
                <SocialMediaWrap> 
                    <SocialLogo to='/' onClick={toggleHome}>
                        Anna Morozova
                    </SocialLogo>
                    <WebsiteRights>Anna Morozova © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="https://www.linkedin.com/in/anna-morozova-germany" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        {/* <SocialIconLink href="#" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="#" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href="#" target="_blank" aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink> */}
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer