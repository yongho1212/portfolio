    import React, { useState, useEffect, forwardRef } from 'react';
    import { Page } from '../../styles/Common';
    import { hyundai, apple } from '../../datas/works/index';
    import styled from 'styled-components';
    import Flicking from "@egjs/react-flicking";
    import Modal from '../Modal';
    import Image from '../Image';
    import "@egjs/react-flicking/dist/flicking.css";
    import {useResponsive} from '../../hooks/useResponsive';
    import {techIcons} from '../../datas/techIcons';

    interface WorkTitleProps {
        selected: boolean;
    }

    interface ExperienceDescription {
        id: number;
        image?: string | undefined;
        content: string;
    }

    interface Experience {
        id: number;
        title: string;
        sutitle: string;
        descriptions: ExperienceDescription[];
    }

    interface WorkDetails {
        title: string;
        experiences: Experience[];
        sutitle:string;
        stacks:Array<string>,
        company:string,
        duaration:string,
        link:string,
        mainimg?: string | undefined

    }


    const Work = forwardRef<HTMLDivElement>((props, ref) => {
        // 현재 선택된 작업을 추적하는 상태
        const [selectedWork, setSelectedWork] = useState('hyundai');
        const [contentOpacity, setContentOpacity] = useState(1);
        const [isModalOpen, setIsModalOpen] = useState(false);
        const {isMobile, isDesktop} = useResponsive();
        const [selectedModal, setSelectedModal] = useState<number | null>(null);

        const openModal = (id: number) => {
            setSelectedModal(id); 
        };

        const closeModal = () => {
            setSelectedModal(null); 
        };



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

        console.log(techIcons);

        return (
            <Page id="work" ref={ref}> 
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
                    <WorkContent>
                        <InfoArea>
                            <div>
                            <h1>{currentWork.title}</h1>
                            <p>{currentWork.sutitle}</p>
                            <p>{currentWork.company}</p>
                            <p>{currentWork.duaration}</p>
                            <p>{currentWork.link}</p>
                            {currentWork.stacks.map((tech, index) => (
                            <div key={index}>
                                {/* 기술 이름에 해당하는 아이콘 컴포넌트를 동적으로 렌더링 */}
                                {techIcons[tech] || <span>Unknown Technology</span>}
                            </div>
                            ))}
                            </div>
                            {currentWork.mainimg && 
                            <Image 
                                src={currentWork.mainimg}
                                alt={currentWork.title}
                                height='100%'
                            />
                            }
                            
                        </InfoArea>
                        <div style={{width:'100%', }}>
                            <Flicking
                                align="prev"
                                circular={true}
                                onMoveEnd={e => {
                                    console.log(e);
                                }}
                                >
                                {currentWork.experiences.map((experience, index) => {
                                    return (
                                        <Panel className="panel" key={index}>
                                            <div style={{width:'100%'}}>
                                                <p>{experience.title}</p>
                                                {experience.title}
                                                {experience.sutitle}
                                            </div>
                                            
                                            {experience.descriptions[0].image &&
                                                <Image 
                                                    src={experience.descriptions[0].image}
                                                    alt='img'
                                                    height='70%'
                                                />
                                            }
                                            
                                            <button 
                                                onClick={() => openModal(experience.id)}
                                                style={{border:'none', height:'30px'}}
                                            >
                                                View Detail
                                            </button>

                                            <Modal isOpen={selectedModal === experience.id}  onClose={closeModal} title={experience.title}>
                                                {experience.title}
                                                {experience.sutitle}
                                                {experience.descriptions.map((desc, index) => {
                                                    return(
                                                    <Descriptions key={index} isMobile={isMobile}>
                                                        {index%2 === 1 ?
                                                        <>
                                                        <h1>{desc.content}</h1>
                                                        {desc.image && 
                                                        <Image 
                                                            src={desc.image} 
                                                            alt={desc.content}
                                                            height='100%'
                                                        />}
                                                        </>  
                                                        :
                                                        <>
                                                        {desc.image && <Image src={desc.image} alt={desc.content}/>}
                                                        <h1>{desc.content}</h1>
                                                        </>
                                                        }
                                                        
                                                    </Descriptions>
                                                )
                                                })}
                                            </Modal>
                                        </Panel> 
                                    )})    
                                }
                            </Flicking>
                        </div>
                        
                    </WorkContent>
                </GridArea>
            </Page>
        );  
        });

    export default Work;

    const GridArea = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 4.5rem auto;
    `;

    const Header = styled.div`
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        padding: 1rem;
    `;

    const WorkTitle = styled.div<WorkTitleProps>`
    cursor: pointer;
    padding: 0;
    color: ${(props) => (props.selected ? '#000' : '#ccc')};
    font-weight: ${(props) => (props.selected ? '500' : '200')};
    font-size: 1.2rem;
    font-family: 'PretendardBold';
    border-radius: 20px;
    width: auto;
    padding: 10px 20px;
    margin: 0px 15px;
    box-shadow: ${(props) => (props.selected ? '-5px -5px #ffffff73, 5px 5px #5e687949' : '-5px -5px #5e687949, 5px 5px #ffffff73')};
    transition: all 0.3s ease-in-out;
    `;

    const WorkContent = styled.div`
        display: grid;
        grid-template-rows: 2fr 4fr;
        padding: 1rem 2rem;
        opacity: 1;
        /* background-color: red; */
    `;

    const InfoArea = styled.div`
        width: calc(100% - 1rem);
        
        box-shadow: -5px -5px #ffffff73, 5px 5px #5e687949;
        border-radius: 15px;
        padding: 1rem 1rem 1rem 1rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-height: 30vh; /* 예시로 최대 높이 설정 */
        overflow-y: scroll;
        ;
    `;

    const Panel = styled.div`
        display: flex;
        flex-direction: row;
        /* align-items: center; */
        width: 85%;
        padding: 1rem 0 0 1rem ;
        margin: 10px;
        border-radius: 20px;
        box-shadow: -5px -5px #ffffff73, 5px 5px #5e687949;
    `;

    const Descriptions = styled.div<{isMobile: boolean}>`
        display: grid;
        grid-template-columns: ${props => props.isMobile ? '1fr':'1fr 1fr'};
        grid-gap: 20px;
        margin: 10px 0px 15px 0px   ;
    `;