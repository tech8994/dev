import { API } from "../config/api";

const login = (data) =>
  API.post("/dashboard/api/login", data).then(
    (res) => res,
    (err) => err
  );
const registration = (data) =>
  API.post("/dashboard/api/register", data).then(
    (res) => res,
    (err) => err
  );
const userProfile = (data) =>
  API.post("/dashboard/api/profile", data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("bed_token")}` },
  }).then(
    (res) => res,
    (err) => err
  );
const updatedProfile = (data) =>
  API.post("/dashboard/api/updateprofile", data, {
    headers: { Authorization: `Bearer ${localStorage.getItem("bed_token")}` },
  }).then(
    (res) => res,
    (err) => err
  );
export const authService = {
  login,
  registration,
  userProfile,
  updatedProfile,
};
