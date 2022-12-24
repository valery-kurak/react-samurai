import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'post 1', likesCount: 4},
            {id: 2, message: 'post 2', likesCount: 2}
        ]
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;