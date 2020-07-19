import { GET_TENANTS, REMOVE_TENANT } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case GET_TENANTS:
      return action.payload.data || state;
    case REMOVE_TENANT:
      return state;
    default:
      return state;
  }
}