import React, { useState } from "react";
import axios from "axios";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent("");
  };

  return (
    <div class="max-w-md mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
    <form onSubmit={onSubmit}>
      <div class="mb-4">
        <label class="block text-lg font-medium text-gray-700 mb-2">New Comment</label>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write your comment here"
        />
      </div>
      <button class="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Submit
      </button>
    </form>
  </div>  
  );
};

export default CommentCreate;
