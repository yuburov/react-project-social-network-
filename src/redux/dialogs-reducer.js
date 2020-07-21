const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
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
  ],
  newMessageBody: ""
};

const dialogsReducer = (state= initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
       newMessageBody: action.body
      }
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return  {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: body}]
      }
    default:
      return state
  }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer