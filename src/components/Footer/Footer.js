import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:210-717-0450'>210-717-0450</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:erivera7240@gmail.com'>erivera7240@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialContainer>
        <CompanyContainer>
          <Slogan>We Swaggin' & drippin` all the time 😎</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/Quantum-Impulse">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/enrique-rivera-jr/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/_enrxque_/">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
        
      </SocialContainer>
      
    </FooterWrapper>
  );
};

export default Footer;
