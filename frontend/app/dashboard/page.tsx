"use client";
import Image from "next/image";
import { useState } from "react";
import { Heart, X } from "lucide-react";

export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [selectedPost, setSelectedPost] = useState({
    title: "Title Not Loaded Properly",
    author: "Author",
    desc: "No Description",
    interested: 0,
    tags: ['AI', 'ML', 'Web', 'DeepNet', 'Blockchain'],
    comments: [['']]
  });
  const [posts, setPosts] = useState([
    { title: "First Post", author: "John Doe", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", interested: 5 , tags: ['AI', 'ML'], comments: [['Kane', 'Good Idea'], ['Kane', 'I want to work on it'], ['Kane', 'Please help'], ['Kane', 'Please help'], ['Kane', 'Please help'], ['Kane', 'Please help'], ['Kane', 'Please help']] },
    { title: "Second Post", author: "Jane Doe", desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", interested: 30, tags: ['AI', 'ML'], comments: [['Kane', 'Good Idea'], ['Kane', 'I want to work on it'], ['Kane', 'Please help']] },
    { title: "Next.js Tips", author: "Dev Guru", desc: "Lorem Ipsum has survived not only five centuries but also the leap into electronic typesetting.", interested: 15, tags: ['AI', 'ML', 'WEB'], comments: [['Kane', 'Good Idea'], ['Kane', 'I want to work on it'], ['Kane', 'Please help']] }
  ]);

  function Post() {
    if (selectedPost.title !== "Title Not Loaded Properly") {
      return (
        <div className="w-full h-full z-10 p-10 absolute flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-md shadow-2xl w-[60%] h-[80%] p-6 flex flex-col relative overflow-auto">
            <div>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={() =>
                setSelectedPost({
                  title: "Title Not Loaded Properly",
                  author: "Author",
                  desc: "No Description",
                  interested: 0,
                  tags: ['AI', 'ML', 'Web', 'DeepNet', 'Blockchain'],
                  comments: [['']]
                })
              }
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
            <p className="text-gray-400">By {selectedPost.author}</p>
            <hr className="my-4" />
            </div>
            <div className="flex justify-between flex-grow">
              <div className="w-[80%] flex flex-col justify-between">
                <p className="text-gray-600">{selectedPost.desc}</p>
                <div>
                  <h1 className="font-semibold mt-4">Comments:</h1>
                  <div className="flex flex-col gap-2 mt-2 h-60 overflow-scroll">
                    {selectedPost.comments.map((comm, index) => (
                      <div key={index} className="bg-gray-200 text-gray-700 px-3 py-2 flex flex-col gap-3 rounded-md text-sm">
                        <h1 className="font-semibold">{comm[0]}:</h1>
                        <p>{comm[1]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side container */}
              <div>
                <h1 className="font-semibold mt-4">Tags:</h1>
                <div className="flex gap-2 flex-wrap mt-2">
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="font-semibold mt-5">{selectedPost.interested} people are interested in this idea.</h1>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <></>;
  }

  return (
    <div className="flex h-screen bg-[#F2F2F2]">
      {/* Sidebar */}
      <div className="w-1/6 pt-4 text-center bg-black shadow-xl text-white">
        <div className="flex justify-center items-center">
          <Image src="/logo.png" alt="logo" width={80} height={80} />
          <h1 className="text-3xl">EUREKA</h1>
        </div>
        <div className="mt-4 w-full">
          <h3 className="text-lg bg-white p-4 text-black font-semibold">Domains</h3>
          <ul className="mt-2 space-y-2 w-full">
            <Domain name="AI & ML" />
            <Domain name="Mobile Dev" />
            <Domain name="Web Dev" />
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col pb-6 space-y-4">
        {/* Name Bar & Search */}
        <div className="pt-3 pb-3 bg-white flex justify-between">
          <h1 className="text-2xl pl-3 font-bold">DASHBOARD</h1>
          <div className="flex gap-5">
            <div className="border-black border-[2px]"></div>
            <div>
              <p className="text-md pr-3 font-bold">name</p>
              <p className="text-md pr-3">name@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="pb-3 flex justify-between">
          <div className="flex justify-center gap-6 pl-4">
            <button className="bg-black text-white rounded-xl shadow-md p-3 hover:bg-gray-800">My Ideas</button>
            <button className="bg-[#E3E3E3] text-black rounded-xl shadow-md p-3 hover:bg-gray-400">New Ideas</button>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="w-1/5 p-2 rounded-2xl mr-5 text-black border focus:outline-none focus:ring-2 focus:ring-gray-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Post List */}
        <div className="flex-1 overflow-auto space-y-2 pl-3 pr-3">
          {posts.map((post, index) => (
            <div
              key={index}
              className="p-4 shadow-md bg-white hover:p-8 rounded-xl hover:shadow-lg transition-shadow duration-200 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p className="text-gray-400">By {post.author}</p>
                </div>
                <div className="flex gap-[5px]">
                  <Heart width={20} height={20} />
                  <p className="text-gray-400">{post.interested} are interested in this project</p>
                </div>
              </div>
              <p className="text-gray-600 overflow-hidden max-h-12">{post.desc}</p>
            </div>
          ))}
        </div>

        {/* Add New Post Button */}
        <button className="w-full p-3 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200">
          Add New Post
        </button>
      </div>

      {/* Conditionally render Post component */}
      <Post />
    </div>
  );
}

function Domain({ name = "" }) {
  return (
    <li className="text-gray-300 hover:bg-[#E3E3E3] font-bold w-full">
      <button className="w-full text-left p-2 hover:text-black">
        <h1>{name}</h1>
      </button>
    </li>
  );
}
