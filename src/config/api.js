const MEAN_API = "https://cartestwebapp.herokuapp.com";

const EMPLOYEE_API = {
  EMPLOYEE_CREATE: "/employee",
  EMPLOYEE_LOGIN: "/employee/login",
  EMPLOYEE_UPDATE: "/employee",
  EMPLOYEE_ACCOUNT: "/employee/account",
};

const ROLE_API = {
  ROLE_GET: "/role",
  ROLE_GET_BY_ID: id => `/role/${id}`,
  ROLE_DELETE: id => `/role/${id}`,
};

const CATEGORY_API = {
  CATEGORY_CREATE: "/category",
  CATEGORY_UPDATE: "/category",
  CATEGORY_DELETE: id => `/category/${id}`,
  CATEGORY_MARKA: "/category/marka",
};
const UPLOAD_FILE_API = {
  UPLOAD: "/upload",
};

const CAR_API = {
  CAR_CREATE: "/car",
  CAR_UPDATE: "/car",
  CAR_GET_BY_ID: id => `/car/${id}`,
  CAR_DELETE: id => `/car/${id}`,
};

export {
  MEAN_API,
  EMPLOYEE_API,
  ROLE_API,
  CATEGORY_API,
  UPLOAD_FILE_API,
  CAR_API,
};
