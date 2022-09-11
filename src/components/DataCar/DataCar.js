import React from "react";
import { MEAN_API } from "../../config/api";
import "./dataCar.css";

function DataCar({ car }) {
  console.log(car);
  return (
    <div id="data-car">
      <h2>{car.marka.name}</h2>
      <div>{car.price} so'm dan</div>
      <div>
        <img src={`${MEAN_API}/${car.imgUrl}`} alt="img" />
      </div>
      <div>
        <b>Markasi:</b> {car.marka.name}
      </div>
      <div>
        <b>Tanirovkasi:</b> {car.tonirovka}
      </div>
      <div>
        <b>Motor:</b> {car.motor}
      </div>
      <div>
        <b>Yili:</b> {car.year}
      </div>
      <div>
        <b>Color:</b> {car.color}
      </div>
      <div>
        <b>Distance:</b> {car.distance}km
      </div>
      <div>
        <b>Gearbook:</b> {car.gearbok}
      </div>
      <div>
        <b>Deseription:</b> {car.description}
      </div>
      <div>
        <b>Umumiy xarajat:</b> {car.price} so'm
      </div>
    </div>
  );
}

export default DataCar;
