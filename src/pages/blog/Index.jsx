import React from "react";
import Pagination from "../../components/Pagination";
import Post from "./Post";
import {useBlogContext} from "../../providers/BlogProvider"

function Blog() {
  const {
    data,
    currentPosts,
    totalPages,
    handleNext,
    handlePrev,
    currentPage,
    gotoPage,
  } = useBlogContext();


  if (data.length === 0) {
    return <div className="text-white">Loading your posts...</div>;
  }

  return (
    <div className="w-100">
      <h1 className="text-white">Blog</h1>
      <div className="d-flex flex-col gap-3 flex-wrap">
        {currentPosts.map((post, i) => (
          <div>
            <Post key={i} title={post.title} body={post.body} />
          </div>
        ))}
        <Pagination
          currentPage={currentPage}
          next={ handleNext }
          prev={handlePrev}
          totalPages={totalPages}
          gotoPage={gotoPage}
        />
      </div>
    </div>
  );
}

export default Blog;
