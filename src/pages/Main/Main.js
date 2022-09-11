import React, { useState } from "react";
import { Pagination } from "antd";
import { useGetCarsQuery } from "../../states/carSlice/carSlice";
import { TableTrBody } from "./../../components";
import { loading } from "../../components/Loading/Loading";
import { CarCreateModal, CategoryCreateModal } from "./../../modal";
import "./main.css";

function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [current, setCurrent] = useState(1);
  const { data, isLoading, isError, error } = useGetCarsQuery({
    limit: 10,
    page: current,
  });

  const carCreate = isModalOpen && (
    <CarCreateModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
  );
  const categoryCreate = isCategoryModalOpen && (
    <CategoryCreateModal
      isModalOpen={isCategoryModalOpen}
      setIsModalOpen={setIsCategoryModalOpen}
    />
  );
  if (isError) return <div>{error}</div>;
  if (isLoading) return <>{loading}</>;
  return (
    <div id="main">
      {carCreate}
      {categoryCreate}
      <div className="main-header">
        <h4>Mashinalar</h4>
        <div>
          <button
            className="btn btn-primary mx-2"
            onClick={() => setIsCategoryModalOpen(true)}
          >
            + Katigoria qo'shish
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
          >
            + Mashina qo'shish
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Markasi</th>
            <th>Gearbook</th>
            <th>Tanirovkasi</th>
            <th>Motor</th>
            <th>Year</th>
            <th>Color</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          {data.data.data.map((car, idx) => (
            <TableTrBody key={car._id} car={car} page={current} idx={idx} />
          ))}
        </tbody>
      </table>
      <div className="d-flex align-items-center justify-content-center my-2">
        <Pagination
          defaultCurrent={1}
          current={current}
          onChange={e => setCurrent(e)}
          total={data.data.total}
        />
      </div>
    </div>
  );
}

export default Main;
