import { combineReducers } from "redux";
import maintenanceReducer from "./maintenanceReducer"
import complaintsReducer from "./complaintsReducer"
import tenantsReducer from "./tenantsReducer";

const rootReducer = combineReducers({
    maintenance: maintenanceReducer,
    complaints: complaintsReducer,
    tenants: tenantsReducer
  });
  
  export default rootReducer;