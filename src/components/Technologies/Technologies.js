import React from 'react';
import { DiDocker, DiReact, DiFirebase } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    
    <SectionDivider />
    <br/> <br/>
    <SectionTitle>Technologies</SectionTitle>

    <SectionText>I've worked with a 
      range of technologies in the web 
      development world. From Back-end To Design.
    </SectionText>

    <List>
      <ListItem>
        <DiReact  size="3rem" />
        <ListContainer>  
          <ListTitle>Font-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js and Next.js  
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase  size="3rem" />
        <ListContainer>  
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node, MySql, Flask, Nginx, and Express
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem> 
        <DiDocker  size="3rem" />
        <ListContainer>  
          <ListTitle>DevOps</ListTitle>
          <ListParagraph>
            Experience with <br />
            Github actions (CI, CD, CT), DigitlaOcan, Prometheus Monitoring, and Docker Compose
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
