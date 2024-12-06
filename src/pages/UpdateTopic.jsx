import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateTopic = () => {
  const params = useParams();
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    let data = await fetch(`https://crud-api-five-mauve.vercel.app//topics/${params.id}`);
    data = await data.json();

    const { title, description } = data;
    setUpdateTitle(title);
    setUpdateDescription(description);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!updateDescription || !updateTitle) {
      alert("Fields are required!");
      return;
    }
    let data = await fetch(`http://localhost:4000/update/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: updateTitle,
        description: updateDescription,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data) {
      navigate("/");
    } else {
      alert("Something went wrong to update");
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
        <h1 className="text-blue-700 font-bold text-xl">UPDATE TOPICS</h1>
        <form
          onSubmit={handleUpdate}
          className="w-full flex items-center justify-center flex-col gap-4"
        >
          <input
            onChange={(e) => setUpdateTitle(e.target.value)}
            value={updateTitle}
            className="bg-gray-100 w-full px-2 py-3 rounded-md outline-none focus:bg-gray-50 focus:shadow-sm placeholder:text-gray-400"
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => setUpdateDescription(e.target.value)}
            value={updateDescription}
            className="bg-gray-100 w-full px-2 py-3 rounded-md outline-none focus:bg-gray-50 focus:shadow-sm placeholder:text-gray-400"
            type="text"
            placeholder="Description"
          />
          <button
            className="bg-blue-700 w-full p-2 rounded-md text-white font-bold uppercase"
            type="submit"
          >
            Update Topic
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTopic;
