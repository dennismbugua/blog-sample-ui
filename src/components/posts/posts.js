import React from "react";
import Post from "../post/post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post />
      <Post />
    </div>
  );
}
