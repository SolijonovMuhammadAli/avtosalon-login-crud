import React from "react";
import { useDeleteCarMutation } from "../../states/carSlice/carSlice";

const TableTrBody = ({ car, idx, page }) => {
  const [deleteCar] = useDeleteCarMutation();
  return (
    <tr>
      <td>{page * 10 + idx - 9}</td>
      <td>{car.marka.name}</td>
      <td>{car.gearbok}</td>
      <td>{car.tonirovka}</td>
      <td>{car.motor}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.distance}km</td>
      <td>
        <button className="btn btn-danger" onClick={() => deleteCar(car._id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableTrBody;
