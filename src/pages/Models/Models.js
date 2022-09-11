import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Pagination } from "antd";
import { loading } from "../../components/Loading/Loading";
import { CardCar } from "../../components";
import { useGetCategoyQuery } from "../../states/categorySlice/categorySlice";
import "./models.css";

function Models() {
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();
  const {
    data: categories,
    isLoading,
    isError,
    error,
  } = useGetCategoyQuery({ limit: 10, page: current });
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
        </div>
        <h1>Modellari</h1>
        <div className="cars row">
          {categories.data.data.map(car => (
            <CardCar key={car._id} car={car} />
          ))}
        </div>
        <div className="d-flex align-items-center justify-content-center my-2">
          <Pagination
            defaultCurrent={1}
            current={current}
            onChange={e => setCurrent(e)}
            total={categories.data.total}
          />
        </div>
      </div>
    </div>
  );
}

export default Models;
