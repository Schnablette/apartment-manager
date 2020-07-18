import { GET_TENANTS } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case GET_TENANTS:
      return action.payload.data || state;
    default:
      return state;
  }
}