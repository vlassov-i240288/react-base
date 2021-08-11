export const ADD_CHAT = "CHATS::ADD_CHAT";

export const DELETE_CHAT = "CHATS::DELETE_CHAT";

export const SEND_MESSAGE = "CHATS::SEND_MEESSAGE";

// export const addChat = (name) => ({
//   type: ADD_CHAT,
//   name,
// });

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