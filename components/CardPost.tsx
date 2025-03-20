"use client";
import React, { ChangeEvent, useMemo, useState } from "react";
import { usePosts } from "@/lib/PostContext"; // Adjust the import path as necessary

const CardPost = () => {
  const { posts, loading, error } = usePosts();
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(
    () =>
      posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      ),
    [posts, search] // Correctly set the dependency array here
  );

  if (loading) return <div>Loading...</div>; // Uncommented loading state
  if (error) return <div>Error: {error}</div>; // Uncommented error state

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-10">All titles and body</h2>
      <div className="mb-4 lg:w-8/12 mx-auto shadow-md">
        {/* searchbar */}
        <input
          type="text"
          placeholder="Search posts by title..."
          value={search}
          className="border border-gray-400 outline-none w-full rounded-md p-2"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="bg-gray-400/20 backdrop-blur-3xl scale-100 hover:scale-105 transition-all duration-300 rounded-2xl shadow-xl p-5"
          >
            <h4 className="text-2xl font-semibold">{post.title}</h4>
            <p className="text-base font-medium">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPost;
