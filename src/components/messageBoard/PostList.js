import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  const renderPosts = posts.map((post) => (
    <Post
      key={post.id}
      content={post.content}
      userID={post.user_id}
      author={post.author}
      created={post.created}
      comments={post.comments}
    />
  ));
  return renderPosts;
};

export default PostList;
