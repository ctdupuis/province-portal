import React from "react";
import Post from "./Post";

const PostList = ({ posts, addComment, currentUser }) => {
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
      currentUser={currentUser}
    />
  ));
  return renderPosts;
};

export default PostList;
