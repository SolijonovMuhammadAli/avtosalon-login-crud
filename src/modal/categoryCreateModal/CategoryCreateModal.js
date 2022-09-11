import React from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { usePostCategoryMutation } from "../../states/categorySlice/categorySlice";
import "./categoryCreateModal.css";

const CarCreateModal = ({ isModalOpen, setIsModalOpen }) => {
  const [postCategory] = usePostCategoryMutation();

  const handleOk = e => {
    e.preventDefault();
    const newdata = new FormData(e.target);

    postCategory(newdata);
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
