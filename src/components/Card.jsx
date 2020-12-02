import React, { Component } from "react";
import CardInfo from "./CardInfo";
function Card(props) {
  return (
    <div
      className="d-inline-block v-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="v-card-image"
        src={props.item.imgsrc}
        alt={props.item.imgsrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}

export default Card;
