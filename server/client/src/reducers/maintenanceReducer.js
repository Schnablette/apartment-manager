import { GET_MAINTENANCE, POST_MAINTENANCE } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case GET_MAINTENANCE:
      console.log("Action payload for GET_MAINTENANCE is", action.payload);
      return action.payload.data || state;
    case POST_MAINTENANCE:
      console.log("Action payload for POST_MAINTENANCE is", action.payload);
      return action.payload.data || state;
    default:
      return state;
  }
}