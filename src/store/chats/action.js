import { AUTHORS } from "../../constants";

export const ADD_CHAT = "CHATS::ADD_CHAT";
export const DELETE_CHAT = "CHATS::DELETE_CHAT";
export const SEND_MESSAGE = "CHATS::SEND_MEESSAGE";


export const addChat = (chatId, name) => ({
  type: ADD_CHAT,
  payload: {
    chatId,
    name,
  },
});

export const sendMessage = (chatId, message) => ({
  type: SEND_MESSAGE,
  payload: {
    chatId,
    message,
  },
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  payload: chatId,
});

export const sendMessageWithReply = (chatId, message) => (dispatch) => {
  dispatch(sendMessage(chatId, message));


  setTimeout(() => {
    dispatch(
      sendMessage(chatId, { author: AUTHORS.robot, text: "Сообщение из thunk" })
    );
  }, 1000);
};