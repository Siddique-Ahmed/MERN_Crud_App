import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopicList = () => {
  const [topic, setTopic] = useState();

  const getTopics = async () => {
    let topics = await fetch("http://localhost:4000/topics");
    topics = await topics.json();
    setTopic(topics);
  };

  useEffect(() => {
    getTopics();
  }, []);

  const handleDelete = async (id) => {
    const data = await fetch(`http://localhost:4000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data) {
      getTopics();
    }
  };

  return (
    <div className="pt-24 py-10  px-4 sm:px-10 flex flex-col gap-2">
      {topic?.result.map((topics) => {
        return (
          <div
            key={topics._id}
            className="bg-white w-full px-6 py-4 rounded-md shadow-md flex items-center justify-between gap-2"
          >
            <div className="flex-grow">
              <h2 className="font-serif text-blue-600 font-bold text-2xl mb-2">
                {topics.title}
              </h2>
              <p className="font-semibold text-gray-400">
                {topics.description}
              </p>
            </div>
            <div className="w-[70px] flex flex-col sm:flex-row items-center justify-between gap-2">
              <button
                onClick={() => {
                  handleDelete(topics._id);
                }}
                className="bg-red-600 p-2 rounded-md text-white"
              >
                <FaTrash />
              </button>
              <Link to={`/update/${topics._id}`}>
                <button className="bg-green-600 p-2 rounded-md text-white">
                  <FaEdit />
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopicList;
