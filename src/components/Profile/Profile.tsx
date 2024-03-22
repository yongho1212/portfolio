import React, {useEffect, useState} from 'react'
import {Page} from '../../styles/Common'
import {Link} from 'react-scroll';
import {useResponsive} from '../../hooks/useResponsive';
import styled from 'styled-components';

import './Profile.css';

const Profile = () => {
    const {isMobile} = useResponsive();
    const [typedText, setTypedText] = useState('');
    const [typedText2, setTypedText2] = useState('');
    const fullText = "Yongho Choi";
    const fullText2 = "Front-End Developer";
    const typingSpeed = 150; // 타이핑 속도(ms)

    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeoutId = setTimeout(() => {
                setTypedText(fullText.substring(0, typedText.length + 1));
            }, typingSpeed);
            return () => clearTimeout(timeoutId);
        } else if (typedText2.length < fullText2.length) {
            const timeoutId = setTimeout(() => {
                setTypedText2(fullText2.substring(0, typedText2.length + 1));
            }, typingSpeed);
            return () => clearTimeout(timeoutId);
        }
    }, [typedText, fullText, typedText2, fullText2]);

    return (
        <Page id="profile">
            <GridArea isMobile={isMobile}>
                <GridItem>
                    <div style={{fontFamily: 'PretendardBold', margin: 0}}>
                        <h1 style={{fontSize: isMobile ? '7rem' : '10rem', margin: 0,}}>
                            {typedText}
                            {typedText.length < fullText.length && <span className="cursor">|</span>}
                        </h1>
                        <h2 style={{fontSize: isMobile ? '5rem' : '7rem', margin: '20px 0 0 0'}}>
                            {typedText2}
                            {typedText.length >= fullText.length && typedText2.length < fullText2.length && <span className="cursor">|</span>}
                        </h2>
                    </div>
                </GridItem>
                {/*<GridItem>*/}
                {/*    <div style={{display: 'flex', flexDirection: 'column',}}>*/}
                {/*        <Link to="/profile" spy={true} smooth={true} duration={500} style={{cursor:'pointer'}}>*/}
                {/*            <p style={{fontSize: '2rem', fontFamily:'PretendardBold'}}>*/}
                {/*                Profile*/}
                {/*            </p>*/}
                {/*        </Link>*/}
                {/*        <Link to="work" spy={true} smooth={true} duration={500}>*/}
                {/*            <p style={{fontSize: '2rem', fontFamily:'PretendardBold'}}>*/}
                {/*                WORK*/}
                {/*            </p>*/}
                {/*        </Link>*/}
                {/*        <Link to="section-c" spy={true} smooth={true} duration={500}>*/}
                {/*            <p style={{fontSize: '2rem', fontFamily:'PretendardBold'}}>*/}
                {/*                PROJECTS*/}
                {/*            </p>*/}
                {/*        </Link>*/}
                {/*    </div>*/}
                {/*</GridItem>*/}
                <GridItem>
                    INFO
                </GridItem>
                {/*<GridItem>right</GridItem>*/}
            </GridArea>
            {/* <nav>

        </nav> */}

        </Page>
    )
}

export default Profile;

// const GridArea = styled.div<{ isMobile: boolean }>`
//   width: 100%;
//   height: 100%;
//   display: grid;
//   grid-template-columns: ${props => props.isMobile ? '1fr' : '3fr 1fr'};
//   grid-template-rows: ${props => props.isMobile ? 'auto auto auto auto' : '2fr 1fr'};
// `;
const GridArea = styled.div<{ isMobile: boolean }>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: ${props => props.isMobile ? 'auto auto auto auto' : '2fr 1fr'};
`;

const GridItem = styled.div`
  border: 2px solid #000;
  padding: 25px;
`;
