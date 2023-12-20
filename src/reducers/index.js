import { combineReducers } from 'redux';
import ticketReducer from "../store/reducers"

const rootReducer = combineReducers({
    tickets: ticketReducer,
});

export default rootReducer;
