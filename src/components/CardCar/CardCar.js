import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "antd";
import { MEAN_API } from "../../config/api";
import "./cardCar.css";

function CardCar({ car, type }) {
  const navigate = useNavigate();
  const handleNavigateModel = () => {
    if (!type) navigate(`/category/${car._id}`);
    else navigate(`/model/${car._id}`);
  };
  return (
    <div
      onClick={handleNavigateModel}
      className="card-car col-xl-3 col-lg-4 col-md-6 col-sm-12"
    >
      <Image src={`${MEAN_API}/${car.imgUrl}`} alt={"Car Imgae"} />
      {type ? (
        <>
          <div className="model">{car.name}</div>
          <div className="price">
            Narxi: <span>{car.price}</span>
          </div>
        </>
      ) : (
        <div className="marka">{car.name}</div>
      )}
    </div>
  );
}

export default CardCar;
