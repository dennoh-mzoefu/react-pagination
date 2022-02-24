import React from "react";
import "./Post.css";

function Posts({ users }) {
  return (
    <div>
      {users?.map((post) => {
        return (
          <div className="post" key={post.id}>
            <p>
              <span>{post.id}</span>.{post.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
