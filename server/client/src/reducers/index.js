import { combineReducers } from "redux";
import maintenanceReducer from "./maintenanceReducer"
import complaintsReducer from "./complaintsReducer"

const rootReducer = combineReducers({
    maintenance: maintenanceReducer,
    complaints: complaintsReducer,
  });
  
  export default rootReducer;