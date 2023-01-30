const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'post 1', likesCount: 4},
                {id: 2, message: 'post 2', likesCount: 2}
            ],
            newPostText: 'default text'
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber()  {
        console.log('state was changed');
    },

    getState() {
        return this. _state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; 
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text 
});

export default store;
window.store = store;