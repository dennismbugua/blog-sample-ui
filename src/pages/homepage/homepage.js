import React from "react";
import "./homepage.css";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sideBar/sidebar";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
