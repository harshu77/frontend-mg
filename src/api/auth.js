import axios from "axios";
const baseUrl =
  "http://ec2-18-191-132-214.us-east-2.compute.amazonaws.com:3000";

export const registerUser = async (data) => {
  return axios.post(`${baseUrl}/users/signup`, data, {
    headers: { "Content-type": "application/json" },
  });
};

export const signInUser = async (data) => {
  return axios.post(`${baseUrl}/users/signin`, data, {
    headers: { "Content-type": "application/json" },
  });
};

export const validateToken = async () => {
  const token = localStorage.getItem("token") || " ";
  return axios.post(
    `${baseUrl}/users/validateToken`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
