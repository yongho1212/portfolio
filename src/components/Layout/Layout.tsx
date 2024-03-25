import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';
import {useResponsive} from '../../hooks/useResponsive';



const Layout: React.FC = () => {
    const {isMobile} = useResponsive();
    return (
        <GridArea isMobile={isMobile}>
            <Outlet />
            {!isMobile &&
                <div 
                // style={{border:'1px solid #ccc'}}
                >
                    <NavBar />
                </div>
            }
            
        </GridArea>
    );
};

export default Layout;

const GridArea = styled.div<{isMobile:boolean}>`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: ${props => props.isMobile ? '1fr':'4fr 1fr'};
`;
