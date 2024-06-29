import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListProvider = ({ children }) => {
  const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    }
    else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currPostList]
    }
    return newPostList;
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title:postTitle,
        body: postBody,
        reactions:reactions,
        userId: userId,
        tags: tags
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Gooing to Mumbai",
    body: "I am goiing to mumbsi",
    reactions: "0",
    userId: "9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: "2",
    title: "Pass",
    body: "I am goiing to mumbai and Passed",
    reactions: "15",
    userId: "90",
    tags: ["pass", "graduating", "enjoy"],
  },
];
