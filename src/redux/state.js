let rerenderEntireTree = () => {
    console.log('state was changed');
}

let state = {
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
}

window.state = state; 

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';  
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; 
}

export default state;