import { GET_TENANTS } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case GET_TENANTS:
      console.log("Action payload for GET_TENANTS is", action.payload);
      return action.payload.data || state;
    default:
      return state;
  }
}