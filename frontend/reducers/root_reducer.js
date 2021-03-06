import { combineReducers } from 'redux';


import entitiesReducer from './entities_reducer';
import sessionReducer from './session/session_reducer';
import sessionErrorsReducer from './session/session_errors_reducer'; 
import uiReducer from './ui/ui_reducer';

const rootReducer  = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: sessionErrorsReducer,
    ui: uiReducer
});

export default rootReducer;
