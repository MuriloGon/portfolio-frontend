import React, { Ref } from "react";

type props = {
  children: React.ReactNode,
  scrollRef: Ref<HTMLDivElement>
};

const TechsScroll = ({ scrollRef, children }: props) => (
  <div ref={scrollRef} className="w-max flex anim">
    {children}
    {/*  */}
  </div>
)

export default TechsScroll;
