// import { useEffect, useState } from 'react'
import { Link } from "react-router";
import UserLoginForm from "../components/UserLoginForm";

function Home() {


  return (
    <>
      <div className="justify-content-center align-items-center d-flex w-100 h-100 flex-column">
        <h1>Home</h1>
        <div className="d-flex justify-content-between w-25">
          <Link className="btn btn-outline-primary" to="jokes?type=Programming">Programming</Link>
          <Link className="btn btn-outline-secondary" to="jokes?type=Christmas">Christmas</Link>
        </div>
      </div>
    </>
  );
}

export default Home;
