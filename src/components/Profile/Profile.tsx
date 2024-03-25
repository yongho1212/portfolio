import React, { useEffect, useState, forwardRef } from 'react'
import { Page } from '../../styles/Common'
import { Link } from 'react-scroll';
import { useResponsive } from '../../hooks/useResponsive';
import styled from 'styled-components';

import './Profile.css';

const Profile = forwardRef<HTMLDivElement>((props, ref) => {
    const { isMobile } = useResponsive();
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
        <Page id="profile" ref={ref}> {/* ref를 Page 컴포넌트에 전달 */}
            <GridArea isMobile={isMobile}>
                <GridItem>
                    <div 
                        style={{ 
                            margin: 0,
                            borderRadius: '20px',
                            boxShadow: '-5px -5px #ffffff73, 5px 5px #5e687949',
                            height:'100%',
                            
                        }}
                    >
                        <h1 style={{
                            fontSize: 'clamp(5rem, 7vw, 10rem)', // 최소 5rem, 뷰포트의 너비에 따라 5vw, 최대 10rem
                            margin: 0,
                            fontFamily: 'PretendardBold'
                        }}>
                            {typedText}
                            {typedText.length < fullText.length && <span className="cursor">|</span>}
                        </h1>
                        <h2 style={{
                            fontSize: 'clamp(3rem, 6vw, 6rem)', // 최소 2.5rem, 뷰포트의 너비에 따라 4vw, 최대 6rem
                            margin: '20px 0 0 0', 
                            fontFamily: 'PretenLight'
                        }}>
                            {typedText2}
                            {typedText.length >= fullText.length && typedText2.length < fullText2.length && <span className="cursor">|</span>}
                        </h2>
                    </div>
                </GridItem>
                <GridItem>
                    <div
                        style={{boxShadow: '-5px -5px #ffffff73, 5px 5px #5e687949',
                        borderRadius: '20px',
                        height:'100%',
                        
                    }}
                    >
                    INFO
                    </div>
                    
                </GridItem>
            </GridArea>
        </Page>
    );
});

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
  grid-template-rows: ${props => props.isMobile ? '3fr 1fr' : '2fr 1fr'};
`;

const GridItem = styled.div`
  /* border: 1px solid #ccc; */
  padding: 25px;
`;
