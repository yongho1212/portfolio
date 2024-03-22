import React, { useState, useEffect } from 'react';
import { Page } from '../../styles/Common';
import { hyundai, apple } from '../../datas/works/index';
import styled from 'styled-components';

interface WorkTitleProps {
    selected: boolean;
  }

  interface WorkDetails {
    title: string;
    description: string;
    // 다른 필드가 있다면 여기에 추가
  }
  

const Work = () => {
    // 현재 선택된 작업을 추적하는 상태
    const [selectedWork, setSelectedWork] = useState('hyundai');
    const [contentOpacity, setContentOpacity] = useState(1);


    // 현재 선택된 작업의 데이터
    const works: { [key: string]: WorkDetails } = { hyundai, apple };

    const currentWork = works[selectedWork as keyof typeof works];


    // 선택된 아이템의 스타일을 변경하기 위한 함수
    const isSelected = (workName: string) => selectedWork === workName;

    useEffect(() => {
        // 선택된 작업이 변경될 때마다 애니메이션을 실행
        setContentOpacity(0);
        const timeoutId = setTimeout(() => setContentOpacity(1), 10);
        return () => clearTimeout(timeoutId);
    }, [selectedWork]);

    return (
        <Page id="work">
            <GridArea >

            <Header>
                <WorkTitle
                    selected={isSelected('hyundai')}
                    onClick={() => setSelectedWork('hyundai')}
                >
                    {hyundai.title}
                </WorkTitle>
                <WorkTitle
                    selected={isSelected('apple')}
                    onClick={() => setSelectedWork('apple')}
                >
                    {apple.title}
                </WorkTitle>
            </Header>
            <WorkContent style={{ opacity: contentOpacity }}>
                <h1>{currentWork.title}</h1>
                <p>{currentWork.description}</p>
            </WorkContent>
            </GridArea>
        </Page>
    );
};

export default Work;

const GridArea = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 5rem auto;
`;

const Header = styled.div`
    border-bottom: 2px solid #000;
    display: flex;
    align-items: center;
    padding: 1rem;
`;

const WorkTitle = styled.h1<WorkTitleProps>`
  cursor: pointer;
  padding: 1rem;
  color: ${(props) => (props.selected ? '#000' : '#ccc')};
  font-family: ${(props) => (props.selected ? '900' : '200')};
`;

const WorkContent = styled.div`
    padding: 1rem;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
    
`;
