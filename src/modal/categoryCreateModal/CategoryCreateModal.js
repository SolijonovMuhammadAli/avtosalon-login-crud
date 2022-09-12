import React from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { useUploadFile } from "../../hooks/useUploadFile";
import { usePostCategoryMutation } from "../../states/categorySlice/categorySlice";
import "./categoryCreateModal.css";

const CarCreateModal = ({ isModalOpen, setIsModalOpen }) => {
  const [postCategory] = usePostCategoryMutation();
  const [image, uploadFile] = useUploadFile();
  const handleOk = e => {
    e.preventDefault();
    const newData = new FormData(e.target);
    let data = {};
    for (let [key, value] of newData) {
      data = {
        ...data,
        [key]: value,
      };
      if (key === "imgUrl") {
        data = {
          ...data,
          [key]: image.data,
        };
      }
    }
    postCategory(data);
    toast.success("Success");
    setIsModalOpen(false);
  };

  const handleChange = e => {
    const newData = new FormData();
    newData.append("file", e.target.files[0]);
    uploadFile(newData);
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
                <label htmlFor="name">Markasi</label>
                <input
                  name="name"
                  type="text"
                  className="from-control"
                  id="name"
                  placeholder="Kiriting"
                />
              </div>
            </div>
            <div>
              <div className="form-group">
                <label htmlFor="rasm_360">Marka rasmi </label>
                <input
                  name="imgUrl"
                  type="file"
                  className="from-control"
                  id="rasm_360"
                  placeholder="Yuklash"
                  onChange={handleChange}
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
