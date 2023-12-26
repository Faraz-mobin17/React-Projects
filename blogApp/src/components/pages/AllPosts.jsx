import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../index";
import appwriteService from "../../appwrite/config.js";
function AllPosts() {
  const [posts, setPosts] = useState([]);

  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/2">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
