import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './chats/reduser';
import { profileReducer } from './profile/reduser';
import { messagesReducer } from './messages/reduser';

export const store = createStore(
    combineReducers ({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer
    }),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);





