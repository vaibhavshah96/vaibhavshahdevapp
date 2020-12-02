import React, { Component } from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div>
      <animated.div className="v-card-info" style={style}>
        <p className="v-card-title">{props.title}</p>
        <p className="v-card-sub-title">{props.subTitle}</p>
        <a href={props.link} target="_blank" rel="noopener norefferer">
          {" "}
          View{" "}
        </a>
      </animated.div>
    </div>
  );
}

export default CardInfo;
