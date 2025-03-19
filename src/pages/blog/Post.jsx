import React from "react";
import { Link } from "react-router";

function Post({title, body}) {
  return (
    <div className="card" style={{ width: "16rem", height: "35rem" }}>
      <img
        className="card-img-top img-fluid"
        src="https://picsum.photos/seed/picsum/256/200"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {body}
        </p>
        <Link href="#" className="btn btn-outline-primary">
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default Post;
