import React from "react";
import Header from "../components/Header";
import TopicList from "../components/TopicList";

const Home = () => {
  return (
    <div className="min-h-screen  bg-gray-100">
      <Header />
      <TopicList />
    </div>
  );
};

export default Home;
