import React from "react";
const BlogContext = React.createContext();

export const useBlogContext = () => React.useContext(BlogContext);

function BlogProvider({ children }) {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [search, setSearch] = React.useState("");
  const postsPerPage = 4;

  React.useEffect(() => {
    async function fetchPosts() {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
      setCurrentPage(1);
    }

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(data.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const posts =
    search !== "" ? data.filter((post) => post.title.includes(search)) : data;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const gotoPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <BlogContext.Provider
      value={{
        data,
        currentPosts,
        totalPages,
        handleNext,
        handlePrev,
        currentPage,
        setCurrentPage,
        setSearch,
        gotoPage,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
