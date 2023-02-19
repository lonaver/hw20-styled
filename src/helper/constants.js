export const LOCAL_STORAGE_KEY = "authorisation";

export const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  isAgree: false,
  isRemember: false,
};

export const setDataFromLocalStirage = (data) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};

export const getDataFromLocalStirage = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
};
