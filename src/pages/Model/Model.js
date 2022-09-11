import React from "react";
import { BiUser } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { DataCar, DegreeCar } from "../../components";
import { loading } from "../../components/Loading/Loading";
import { useGetCarByIdQuery } from "../../states/carSlice/carSlice";
import "./model.css";

function Model() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useGetCarByIdQuery(id);
  if (isError) return <div>{error}</div>;
  if (isLoading) return <>{loading}</>;
  const { data: car } = data;
  return (
    <div id="model" className="models">
      <div className="models-wrapper">
        <div className="d-flex align-items-center justify-content-end">
          <button
            className="btn btn-primary d-flex align-items-center justify-content-between"
            onClick={() => navigate("/login")}
          >
            <BiUser />
            <span className="px-2"> Admin o‘tish</span>
          </button>
        </div>
        <div className="header">
          <p>Bosh sahifa</p>
          <p>Modellari</p>
          <p>{car.marka.name} turlari</p>
        </div>
        <h1>Modellari</h1>
        <div className="information">
          <DataCar car={car} />
          <DegreeCar car={car} />
        </div>
      </div>
    </div>
  );
}

export default Model;
