import React, { useState } from 'react';
import { Container} from './styles';
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiGithub, SiLinkedin } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { DiDatabase } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';

export function Header() {

  return (
    <Container>
      <div className='tecnologies'>
          <SiHtml5 size={50}/>
          <SiCss3 size={50}/>
          <SiJavascript size={50}/>
          <DiNodejsSmall size={50}/>
          <SiReact size={50}/>
          <SiGithub size={50}/>
          <DiDatabase size={50}/>
          <BiNetworkChart size={50}/>
      </div>
    </Container>
  );
}
