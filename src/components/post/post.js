import React from "react";
import "./post";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
          <span className="postCat">Music</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
}
