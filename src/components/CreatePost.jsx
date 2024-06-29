import { useRef ,useContext} from "react";
// import PostListProvider from "../store/post-list-store";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {
  const {addPost}=useContext(PostList)

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();
  const handleSubbmit=(e)=>{
      e.preventDefault();
      const userId=userIdElement.current.value;
      const postTitle=postTitleElement.current.value;
      const postBody=postBodyElement.current.value;
      const reactions=reactionsElement.current.value;
      const tags=tagsElement.current.value.split(" ")
      addPost(userId,postTitle,postBody,reactions,tags)

      userIdElement.current.value=""
      postTitleElement.current.value="";
      postBodyElement.current.value="";
      reactionsElement.current.value="";
      tagsElement.current.value=""
  }
  return (
   
    <>
      <form className="create-post" onSubmit={handleSubbmit}>
      <div className="mb-3">
          <label for="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="Enter your user id"
            ref={userIdElement}
          />
        </div>
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="How are you feeling today?"
            ref={postTitleElement}
          />
        </div>
        <div className="mb-3">
          <label for="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="body"
            placeholder="Tell us more about it.."
            ref={postBodyElement}
          />
        </div>
        <div className="mb-3">
          <label for="reactions" className="form-label">
           No. of Reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            placeholder=" How many reacted to this Post?"
            ref={reactionsElement}
          />
        </div>

        <div className="mb-3">
          <label for="tags" className="form-label">
           Enter your Hashtags here
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            placeholder=" #hashtag"
            ref={tagsElement}
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};
export default CreatePost;
