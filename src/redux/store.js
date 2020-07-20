import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    },
    sidebar: {}
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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state);
  }
}

export default store