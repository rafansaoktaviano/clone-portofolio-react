import React from "react";
import "./webflow2.css";
import Button from "../Button/Button";
import Button3 from "./../button3/Button3";
import Detailswebflow from "../detailswebflow/Detailswebflow";
export default function Webflow2(props) {
  return (
    <div className="container">
      <div className="cont-left">
        <h1 className="text-webflow">{props.name}</h1>
        <Detailswebflow detail="16 pre-built pages & templates" />
        <Detailswebflow detail="Single videos, full series, or both " />
        <Detailswebflow detail="Copy & paste components" />
        <div className="btn-test">
          <Button button1="Learn More" />
          <Button3 tombol="Live Preview" />
        </div>
      </div>
      <div className="cont-right">
        <div className="image-webflow2"></div>
      </div>
    </div>
  );
}
