import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AddTopic = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleData = async (e) => {
    e.preventDefault();

    const data = await fetch("http://localhost:4000/addTopic", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "application/json",
      },
    },{mode : "no-cors"});

    if (data) {
      navigate("/");
    } else {
      alert("something is wrong to add Data");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-6 sm:px-10">
      <div className="bg-white sm:w-[450px] w-full px-5 py-4 rounded-md shadow-md flex flex-col items-center justify-center gap-3">
        <div className="w-full">
          <Link to={"/"}>
            <FaArrowLeft className="text-gray-400 hover:text-blue-600" />
          </Link>
        </div>
        <h1 className="text-blue-700 font-bold text-xl">ADD TOPICS</h1>
        <form
          onSubmit={handleData}
          className="w-full flex items-center justify-center flex-col gap-4"
        >
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-100 w-full px-2 py-3 rounded-md outline-none focus:bg-gray-50 focus:shadow-sm placeholder:text-gray-400"
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            className="bg-gray-100 w-full px-2 py-3 rounded-md outline-none focus:bg-gray-50 focus:shadow-sm placeholder:text-gray-400"
            type="text"
            placeholder="Description"
          />
          <button
            className="bg-blue-700 w-full p-2 rounded-md text-white font-bold uppercase"
            type="submit"
          >
            Add Topic
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTopic;
