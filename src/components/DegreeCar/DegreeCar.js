import React, { useState } from "react";
import { Pannellum } from "pannellum-react";
// import img from "./../../imges/full-seamless.jpg";
import "./degreeCar.css";
import { MEAN_API } from "../../config/api";

function DegreeCar({ car }) {
  const [inSide, setInSide] = useState(true);
  return (
    <div id="degree-car">
      <h2>{car.marka.name}</h2>
      <Pannellum
        width="820px"
        height="400px"
        image={`${MEAN_API}/${inSide ? car.imgUrlAutside : car.imgUrlInside}`}
        pitch={10}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl={false}
      ></Pannellum>
      <p>
        Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin. Mashinaning
        rangi ushbu saytda taqdim etilganidan farq qilishi mumkin.
      </p>
      <div className="type">
        <input
          name="area"
          id="areaOutside"
          type="radio"
          onChange={() => setInSide(!inSide)}
          defaultChecked={inSide}
        />
        <label htmlFor="areaOutside">Tashqi</label>
        <input
          name="area"
          id="areaInside"
          type="radio"
          onChange={() => setInSide(!inSide)}
          defaultChecked={!inSide}
        />
        <label htmlFor="areaInside">Ichki makon</label>
      </div>
    </div>
  );
}

export default DegreeCar;
