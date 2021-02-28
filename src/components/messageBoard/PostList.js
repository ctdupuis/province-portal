import React from "react";
import Loading from "../static/Loading";
import Post from "./Post";

const PostList = ({ posts, updatePost, removePost, addComment, updateComment, removeComment, currentUser, loading }) => {
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
      updateComment={updateComment}
      removeComment={removeComment}
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
