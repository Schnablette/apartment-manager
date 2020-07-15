import axios from "axios";

export const GET_MAINTENANCE = "GET_MAINTENANCE";
export const GET_COMPLAINTS = "GET_COMPLAINTS";
export const GET_TENANTS = "GET_TENANTS";

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

export function getTenants() {
    const url = `${ROOT_URL}/api/tenants`;
    const request = axios.get(url);

    return {
        type: GET_TENANTS,
        payload: request,
    };
}