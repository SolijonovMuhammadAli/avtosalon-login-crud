import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import Select from "react-select";
import { useGetCategoyQuery } from "../../states/categorySlice/categorySlice";
import { usePostCarMutation } from "../../states/carSlice/carSlice";
import "./carCreateModal.css";
import { toast } from "react-toastify";

const CarCreateModal = ({ isModalOpen, setIsModalOpen }) => {
  const [categoryId, setCategoyId] = useState("");
  const [optionsModel, setOptionsModel] = useState([{ value: "", label: "" }]);
  const { data } = useGetCategoyQuery({ limit: 100, page: 1 });
  const [postCar] = usePostCarMutation();

  useEffect(() => {
    if (data)
      setOptionsModel(
        data.data.data.map(item => ({
          value: item._id,
          label: item.name,
        })),
      );
  }, [data]);

  const handleOk = e => {
    e.preventDefault();
    const newdata = new FormData(e.target);
    newdata.append("categoryId", categoryId);
    const data = [...newdata];
    let obj = {};
    for (let [key, value] of data) {
      obj = { ...obj, [key]: value };
      if ((key === "price") | (key === "year")) {
        obj[key] = Number(value);
      }
    }
    postCar(obj);
    toast.success("Success");
    setIsModalOpen(false);
  };

  return (
    <Modal
      width={"90%"}
      title="Mashina qo’shish"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={[]}
    >
      <div id="car-create-modal">
        <form onSubmit={handleOk}>
          <div className="wrapper">
            <div>
              <div className="form-group">
                <label>Markasi</label>
                <Select
                  options={optionsModel}
                  onChange={e => setCategoyId(e.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="motor">Motor</label>
                <input
                  name="motor"
                  type="text"
                  className="from-control"
                  id="motor"
                  placeholder="Kiriting"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Color">Color</label>
                <input
                  name="color"
                  type="text"
                  className="from-control"
                  id="Color"
                  placeholder="Kiriting"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Gearbook">Gearbook</label>
                <input
                  name="gearbok"
                  type="text"
                  className="from-control"
                  id="Gearbook"
                  placeholder="Kiriting"
                />
              </div>
              <div className="form-group">
                <label htmlFor="rasm_360_ichki">Rasm 360 ichki makon</label>
                <input
                  name="imgUrlInside"
                  type="file"
                  className="from-control"
                  id="rasm_360_ichki"
                  placeholder="Yuklash"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Deseription">Deseription</label>
                <textarea
                  name="description"
                  id="Deseription"
                  placeholder="Mazmuni kiriting"
                ></textarea>
              </div>
            </div>
            <div>
              <div className="form-group">
                <label htmlFor="Tanirovkasi">Tanirovkasi</label>
                <input
                  name="tonirovka"
                  type="text"
                  className="from-control"
                  id="Tanirovkasi"
                  placeholder="Kiriting"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Year">Year</label>
                <input
                  name="year"
                  type="number"
                  className="from-control"
                  id="Year"
                  placeholder="Kiriting"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Distance">Distance</label>
                <input
                  name="distance"
                  type="text"
                  className="from-control"
                  id="Distance"
                  placeholder="Kiriting"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Narxi">Narxi</label>
                <input
                  name="price"
                  type="number"
                  className="from-control"
                  id="Narxi"
                  placeholder="Kiriting"
                />
              </div>
              <div className="form-group">
                <label htmlFor="rasm_360_tashqi">Rasm 360 tashqi makon</label>
                <input
                  name="imgUrlAutside"
                  type="file"
                  className="from-control"
                  id="rasm_360_tashqi"
                  placeholder="Yuklash"
                />
              </div>
              <div className="form-group">
                <label htmlFor="rasm_360">Modeli turi uchun rasm </label>
                <input
                  name="imgUrl"
                  type="file"
                  className="from-control"
                  id="rasm_360"
                  placeholder="Yuklash"
                />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-end">
            <button className="btn btn-primary">Saqlash</button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CarCreateModal;
