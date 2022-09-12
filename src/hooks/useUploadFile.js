import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { MEAN_API, UPLOAD_FILE_API } from "../config/api";

function useUploadFile() {
  const [image, setState] = useState("");
  const token = useSelector(state => state.auth.token);
  const apiUpload = MEAN_API + UPLOAD_FILE_API.UPLOAD;
  const uploadFile = data => {
    axios
      .post(apiUpload, data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setState(res.data);
      });
  };
  return [image, uploadFile];
}

export { useUploadFile };
