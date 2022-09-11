import React from "react";
import { BiUser } from "react-icons/bi";
import { loading } from "../../components/Loading/Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCarCategoryQuery } from "../../states/carSlice/carSlice";
import { CardCar } from "../../components";
import "./ModelType";

function ModelType() {
  const location = useLocation();
  const categoryId = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const {
    data: cars,
    isLoading,
    isError,
    error,
  } = useGetCarCategoryQuery({ limit: 10, page: 1, categoryId });
  if (isLoading) return <>{loading}</>;
  if (isError) return <div>{error}</div>;
  return (
    <div className="models">
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
          <p>{cars?.data?.data[0]?.marka?.name} turlari</p>
        </div>
        <h1>Modellari</h1>
        <div className="cars row">
          {cars.data.data.map(car => (
            <CardCar key={car._id} car={car} type={categoryId} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModelType;
