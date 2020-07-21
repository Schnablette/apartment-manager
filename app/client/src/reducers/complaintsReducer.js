import { GET_COMPLAINTS, POST_COMPLAINTS } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case GET_COMPLAINTS:
        return action.payload.data || state;
    case POST_COMPLAINTS:
        return action.payload.data || state;
    default:
      return state;
  }
}