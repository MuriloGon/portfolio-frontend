import React, { useEffect, useRef, useState } from "react";
import TechsScroll from "./TechsScroll";
import { tech } from './techsData';
import TechItem from "./TechItem";
import './st.css'

const styles = {
  mainWrapper: 'overflow-hidden',
  scrollWrapper: 'flex select-none',
}

type props = {
  direction?: 'right' | 'left',
  velocity?: number,
  data: tech[]
}

function Techs({ data, direction = 'left', velocity = 500 }: props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState(true);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [viewPortWidth, setViewPortWidth] = useState(0);

  function updateScrollWidth() {
    if (scrollRef.current !== null && scrollRef.current !== undefined)
      setScrollWidth(scrollRef.current.scrollWidth);
  }

  const updateViewPortWidth = () => setViewPortWidth(window.innerWidth);

  const resizeEvent = () => {
    updateScrollWidth();
    updateViewPortWidth();
  }

  useEffect(() => {
    resizeEvent();
    window.addEventListener('resize', resizeEvent);
    return function () { window.removeEventListener('resize', () => { }); }
  }, []);

  const totalScreens = (scrollWidth / viewPortWidth);
  const idealComps = Math.ceil(2 / totalScreens) % 2 === 0
    ? Math.ceil(2 / totalScreens) : Math.ceil(2 / totalScreens) + 1;
  const len = isNaN(idealComps) || !Number.isFinite(idealComps) ? 1 : idealComps;
  const time = (vel: number) => (scrollWidth * len) / vel;

  const computedTime = time(velocity);

  const computedDirection = direction === 'right' ? 'reverse' : 'normal';
  const computedState = scrollState ? 'running' : 'paused';
  const style = {
    animation: `slideLeft ${computedTime}s linear 0s infinite ${computedDirection} ${computedState}`,
    width: 'max-content',
  };
  const componentsCount = (new Array(len)).fill(0);

  return (
    <div className={styles.mainWrapper}>
      <div
        className={styles.scrollWrapper}
        style={style}
        onMouseOver={() => setScrollState(false)}
        onMouseLeave={() => setScrollState(true)}
      >
        {componentsCount.map((_, index) => (
          <TechsScroll key={index} scrollRef={scrollRef}>
            {data.map(({ img, name }, i) => (
              <TechItem img={img} name={name} />
            ))}
          </TechsScroll>
        )
        )}
      </div>
    </div>
  )
}

/* 
<div>
  <p>max scroll width: {scrollWidth}</p>
  <p>view port: {viewPortWidth}</p>
  <p>total screens: {totalScreens}</p>
  <p>ideal comps: {idealComps}</p>
  <p>velocity: {velocity}</p>
</div> */

export default Techs;
