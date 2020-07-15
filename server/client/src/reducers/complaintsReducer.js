import { GET_COMPLAINTS } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case GET_COMPLAINTS:
      console.log("Action payload for GET_COMPLAINTS is", action.payload);
      return action.payload.data || state;
    default:
      return state;
  }
}