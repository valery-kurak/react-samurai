const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Valery1'},
    {id: 2, name: 'Valery2'},
    {id: 3, name: 'Valery3'}
  ],
  messages: [
    {id: 1, message: 'Hi1'},
    {id: 2, message: 'Hi2'},
    {id: 3, message: 'Hi3'}
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 4 , message: body}]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;