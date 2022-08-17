import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      
      <SectionTitle main center>
        Welcome To <br />
        My Personal Protfolio
      </SectionTitle>

      <SectionText>
        I want to become a software engineer, even though I'm a Physics major
      </SectionText>

      <Button onCLick={() => window.location = 'https://github.com/Quantum-Impulse'}>Resume</Button>

    </LeftSection>
  </Section>
);

export default Hero;