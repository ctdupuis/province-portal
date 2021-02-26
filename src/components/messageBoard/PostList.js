import React from "react";
import Loading from "../static/Loading";
import Post from "./Post";

const PostList = ({ posts, addComment, updatePost, currentUser, loading }) => {
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
      currentUser={currentUser}
    />
  ));
  return(
    loading ? <Loading /> : renderPosts
  )
};

export default PostList;
