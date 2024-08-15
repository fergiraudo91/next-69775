import Link from "next/link";
import React from "react";

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      tags: ['productos']
    },
  });
  return response.json();
};

const Posts = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-lg">Posts</h1>
      <ul>
        {posts.map((post) => (
          <Link href={`/post/${post.id}`}>
            <li>
              {" "}
              {post.id} - {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
