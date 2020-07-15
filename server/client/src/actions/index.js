import axios from "axios";

export const GET_MAINTENANCE = "GET_MAINTENANCE";
export const GET_COMPLAINTS = "GET_COMPLAINTS";

const ROOT_URL = process.env.baseURL || "http://localhost:8000"

export function getMaintenance() {
  const url = `${ROOT_URL}/api/maintenance`;
  const request = axios.get(url);

  return {
    type: GET_MAINTENANCE,
    payload: request,
  };
}

export function getComplaints() {
    const url = `${ROOT_URL}/api/complaints`;
    const request = axios.get(url);
  
    return {
      type: GET_COMPLAINTS,
      payload: request,
    };
  }