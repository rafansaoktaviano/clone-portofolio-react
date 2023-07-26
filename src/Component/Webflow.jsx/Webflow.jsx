import React from "react";
import "./webflow.css";
import Detailswebflow from "../detailswebflow/Detailswebflow";
import Button from "../Button/Button";
import Button3 from "./../button3/Button3";
export default function Webflow(props) {
  return (
    <div className="container">
      <div className="cont-left">
        <h1 className="text-webflow">{props.name}</h1>
        <Detailswebflow detail="Custom scroll bar & cursor" />
        <Detailswebflow detail="Blog, Categories & Project CMS Collections" />
        <Detailswebflow detail="Fun interactions & elements" />
        <div className="btn-test">
          <Button button1="Clone" />
          <Button3 tombol="Live Preview" />
        </div>
      </div>
      <div className="cont-right">
        <div className="image-webflow"></div>
      </div>
    </div>
  );
}
