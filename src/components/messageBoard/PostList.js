import React from "react";
import { removePost } from "../../actions/posts";
import Loading from "../static/Loading";
import Post from "./Post";

const PostList = ({ posts, addComment, updatePost, removePost, currentUser, loading }) => {
  const renderPosts = posts.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      content={post.content}
      userID={post.user_id}
      author={post.author}
      created={post.created}
      comments={post.comments}
      addComment={addComment}
      updatePost={updatePost}
      removePost={removePost}
      currentUser={currentUser}
    />
  ));
  return(
    loading ? <Loading /> : renderPosts
  )
};

export default PostList;
