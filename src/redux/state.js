const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT  = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "It's my first post"},
        {id: 2, message: 'Hello world'}
      ],
      newPostText:[''],
    },
    dialogPage: {
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
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer // наблюдатель (паттерн)
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = ''
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = {
        id: 6,
        message: this._state.dialogPage.newMessageBody
      };
      this._state.dialogPage.messages.push(body);
      this._state.dialogPage.newMessageBody = ''
      this._callSubscriber(this._state);
    }
  }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, newText: text
})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default store