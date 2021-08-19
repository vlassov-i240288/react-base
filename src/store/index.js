import { createStore, combineReducers, applyMiddleware } from 'redux';
import { chatsReducer } from './chats/reduser';
import { profileReducer } from './profile/reduser';
import { compose } from '@material-ui/system';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { gistsReducer } from './gists/reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    gists: gistsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

