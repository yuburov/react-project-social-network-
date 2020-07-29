const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
  dialogs: [
    {id: 1, name: 'Azamat'},
    {id: 2, name: 'Ermek'},
    {id: 3, name: 'Mahmud'},
    {id: 4, name: 'Nurlan'},
    {id: 5, name: 'Chyngyz'},
    {id: 6, name: 'Viktor'},
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'How\'re you doing?'},
    {id: 1, message: 'Where are you?'}
  ]
};

const dialogsReducer = (state= initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return  {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
      }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer