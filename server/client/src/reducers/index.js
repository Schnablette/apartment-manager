import { combineReducers } from "redux";
import maintenanceReducer from "./maintenanceReducer"

const rootReducer = combineReducers({
    maintenance: maintenanceReducer
  });
  
  export default rootReducer;