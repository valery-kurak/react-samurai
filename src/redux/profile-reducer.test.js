import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    {id: 1, message: 'post 1', likesCount: 4},
    {id: 2, message: 'post 2', likesCount: 2}
  ]
};

it('posts count should be incremented', () => {
  let action = addPostActionCreator("new post text test");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
  let action = addPostActionCreator("new post text test");
  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe("new post text test");
});

it('posts count should be decremented after removing', () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(1);
});

it('posts count should not be decremented after removing if id is incorrect', () => {
  let action = deletePost(11);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});
