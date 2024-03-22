import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import styled from 'styled-components';
import {useResponsive} from '../../hooks/useResponsive';



const Layout: React.FC = () => {
    const {isMobile} = useResponsive();
    return (
        <GridArea >
            <Outlet />
            <div style={{border:'2px solid #000'}}>
                <NavBar />
            </div>
        </GridArea>
    );
};

export default Layout;

const GridArea = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
