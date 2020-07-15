import axios from "axios";

export const GET_MAINTENANCE = "GET_MAINTENANCE";
export const GET_COMPLAINTS = "GET_COMPLAINTS";
export const GET_TENANTS = "GET_TENANTS";
export const POST_MAINTENANCE = "POST_MAINTENANCE";
export const POST_COMPLAINTS = "POST_COMPLAINTS";

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

export function postMaintenance(aptNumber, room, description) {
    const url = `${ROOT_URL}/api/maintenance`;
    const request = axios({
        method: "post",
        url: url,
        data: {
            aptNumber: aptNumber,
            room: room,
            description: description
        }
    });

    return {
        type: POST_MAINTENANCE,
        payload: request,
    };
}

export function postComplaints(aptNumber, problemApt, type, description) {
    const url = `${ROOT_URL}/api/complaints`;
    const request = axios({
        method: "post",
        url: url,
        data: {
            aptNumber: aptNumber,
            problemApt: problemApt,
            type: type,
            description: description
        }
    });

    return {
        type: POST_COMPLAINTS,
        payload: request,
    };
}