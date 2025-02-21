"use client";

import { useState } from "react";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([
    { title: "First Post", author: "John Doe" , dec:"psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
    { title: "Second Post", author: "Jane Doe" ,dec:"psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
    { title: "Next.js Tips", author: "Dev Guru" ,dec:"psum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries" },
  ]);

  return (
    <div className="flex h-screen bg-[#F2F2F2]">



      <div className="w-1/6 pt-4 text-center bg-black text-white">
        <h2 className="text-xl font-bold">User Name</h2>
        <p className="text-sm text-gray-400">user@example.com</p>
        <div className="mt-4">
          <h3 className="text-lg bg-white p-4 text-black font-semibold">Domains</h3>
          <ul className="mt-2 space-y-2">
            <li className="text-gray-300 font-bold">AI</li>
            <li className="text-gray-300 font-bold">Mobile Dev</li>
            <li className="text-gray-300 font-bold">Web Dev</li>
          </ul>
        </div>
      </div>


      {/* Main Content */}
      <div className="flex-1 flex flex-col pb-6  space-y-4">
        {/* Name Bar & Search */}
        <div className="pt-3 pb-3  bg-white">
          <h1 className="text-2xl pl-3 font-bold">DASHBOARD</h1>
        </div>
        <div className="pb-3 flex justify-between">
            <div className="flex justify-center gap-6 pl-4">
              <button className="bg-black text-white rounded-xl shadow-md p-3">My Ideas</button>
              <button className="bg-[#E3E3E3] text-black rounded-xl shadow-md p-3">New Ideas</button>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-1/5 p-2 rounded-2xl mr-5 text-black border"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        {/* Post List */}
        <div className="flex-1 overflow-auto space-y-2 pl-3 pr-3">
          {posts.map((post, index) => (
            <div key={index} className="p-4 shadow-md bg-white rounded-xl">
              <h2 className="text-xl font-bold">{post.title}</h2>
              <p className="text-gray-400">By {post.dec}</p>
            </div>
          ))}
        </div>

        {/* Add New Post Button */}
        <button className="w-full p-3 bg-white text-black font-semibold rounded-2xl">
          Add New Post
        </button>
      </div>
    </div>
  );
}
