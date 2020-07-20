import axios from "axios";

export const GET_MAINTENANCE = "GET_MAINTENANCE";
export const GET_COMPLAINTS = "GET_COMPLAINTS";
export const GET_TENANTS = "GET_TENANTS";
export const POST_MAINTENANCE = "POST_MAINTENANCE";
export const POST_COMPLAINTS = "POST_COMPLAINTS";
export const CHANGE_STATUS = "CHANGE_STATUS";
export const REMOVE_TENANT = "REMOVE_TENANT";
export const ADD_TENANT = "ADD_TENANT";

export function getMaintenance() {
  const url = `/api/maintenance`;
  const request = axios.get(url);

  return {
    type: GET_MAINTENANCE,
    payload: request,
  };
}

export function getComplaints() {
    const url = `/api/complaints`;
    const request = axios.get(url);

    return {
        type: GET_COMPLAINTS,
        payload: request,
    };
}

export function getTenants() {
    const url = `/api/tenants`;
    const request = axios.get(url);

    return {
        type: GET_TENANTS,
        payload: request,
    };
}

export function postMaintenance(aptNumber, room, description) {
    const url = `/api/maintenance`;
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
    const url = `/api/complaints`;
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

export function changeStatus(id, status) {
    const url = `/api/maintenance/status`;
    const request = axios({
        method: "patch",
        url: url,
        data: {
            _id: id,
            status: status
        }
    });

    return {
        type: CHANGE_STATUS,
        payload: request,
    };
}

export function removeTenant(id) {
    const url = `${ROOT_URL}/api/tenants`;
    const request = axios({
        method: "delete",
        url: url,
        data: {
            _id: id,
        }
    });

    return {
        type: REMOVE_TENANT,
        payload: request,
    };
}

export function addTenant(name, aptNumber, tenants) {
    const url = `${ROOT_URL}/api/tenants`;
    const request = axios({
        method: "post",
        url: url,
        data: {
            name: name,
            aptNumber: aptNumber,
            tenants: tenants
        }
    });

    return {
        type: ADD_TENANT,
        payload: request,
    };
}