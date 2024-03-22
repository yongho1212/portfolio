import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');

  return (
    <NavBarContainer>
      <LinkContainer>
        <Link
          to="profile"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => setActiveSection('profile')}
          style={{ cursor: 'pointer' }}>
          <p style={{ fontSize: '2.5rem', fontFamily: 'PretendardBold' }}>
            Profile
          </p>
          {activeSection === 'profile' && <Highlight />}
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to="work"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => setActiveSection('work')}>
          <p style={{ fontSize: '2.5rem', fontFamily: 'PretendardBold' }}>
            WORK
          </p>
          {activeSection === 'work' && <Highlight />}
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          onSetActive={() => setActiveSection('projects')}>
          <p style={{ fontSize: '2.5rem', fontFamily: 'PretendardBold' }}>
            PROJECTS
          </p>
          {activeSection === 'projects' && <Highlight />}
        </Link>
      </LinkContainer>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  width: 20%;
`;

const LinkContainer = styled.div`
  position: relative;
`;

const Highlight = styled.div`
  background: #33ff33;
  width: 65%;
  height: 2rem;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: -1;
`;
