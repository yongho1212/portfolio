import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('');

  const categories = ['profile', 'work', 'projects'];

  return (
    <NavBarContainer>
      <div style={{
        borderRadius: '20px',
        boxShadow: '-5px -5px #ffffff73, 5px 5px #5e687949',
        height:'100%',
        width:'100%'
      }}>
        {categories.map((category, index) => (
          <LinkContainer
            selected={category === activeSection}
          >
            <Link
              to={category}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={() => setActiveSection(category)}
              style={{ cursor: 'pointer', }}

            >
              <p style={{ fontSize: '2.5rem', fontFamily: 'PretendardBold' }}>
                {category}
              </p>
              {/* {activeSection === 'profile' && <Highlight />} */}
            </Link>
          </LinkContainer>
        ))
        }
      </div>

    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 50%;
  padding: 20px;
  height: 95%;
  /* background-color: #fff; */
  /* z-index: 9999; */
  
`;

const LinkContainer = styled.div<{ selected: boolean }>`
  position: relative;
  background-color: ${props => props.selected ? '#0DF205' : 'transparent'};
  margin: 10px 0px 20px 0px;
`;

// const Highlight = styled.div`
//   background: #33ff33;
//   width: 65%;
//   height: 2rem;
//   position: absolute;
//   top: 50px;
//   left: 0;
//   z-index: -1;
// `;
