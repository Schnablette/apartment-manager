import { GET_MAINTENANCE, POST_MAINTENANCE } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case GET_MAINTENANCE:
      return action.payload.data || state;
    case POST_MAINTENANCE:
      return action.payload.data || state;
    default:
      return state;
  }
}