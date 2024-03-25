import React, {useRef, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import Profile from './components/Profile/Profile';
import Work from './components/Work';
import Projects from './components/Projects';

import {useDebounce} from './hooks/useDebounce';

function App() {
  const profileRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // sectionRefs 배열 생성
  const sectionRefs = [profileRef, workRef, projectsRef];

  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout>;

    const executeScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
    
      const closestSection = sectionRefs.reduce<{ distance: number; ref: React.RefObject<HTMLDivElement> | null }>(
        (closest, currRef) => {
          const offsetTop = currRef.current?.offsetTop ?? 0;
          const sectionHeight = currRef.current?.clientHeight ?? 0;
          const sectionMidPoint = offsetTop + (sectionHeight / 2); 
          const distance = Math.abs(scrollPosition - sectionMidPoint); 
    
          return distance < closest.distance ? { distance, ref: currRef } : closest;
        },
        { distance: Infinity, ref: null } 
      );
    
      if (closestSection.ref && closestSection.ref.current) {
        closestSection.ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const handleScroll = () => {
      clearTimeout(debounceTimer); 
      debounceTimer = setTimeout(executeScroll, 500); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(debounceTimer); 
    };
  }, []);

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Profile ref={profileRef} />
      <Work ref={workRef} />
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;