import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
  };

  return (
    <div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
    <form onSubmit={onSubmit}>
      <div class="mb-4">
        <label class="block text-lg font-medium text-gray-700 mb-2">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter title"
        />
      </div>
      <button class="w-full px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">
        Submit
      </button>
    </form>
  </div>  
  );
};

export default PostCreate;
