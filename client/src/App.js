import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container mx-auto p-6">
    <h1 className="text-2xl font-bold mb-4">Create Post</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <PostCreate />
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <PostList />
      </div>
    </div>
  </div>
  
  );
};
export default App;
