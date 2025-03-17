import React from "react";
import "./userlist.css";
import UserCard from "./UserCard";

const UserList = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://dummyjson.com/users?limit=8");
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUsers();
  }, [setUsers]);

  return (
    <>
      <div className="container">
        <div className="row align-items-center text-white">
          <div className="col-md-6 mx-auto">
            <div className="mb-3">
              <h5 className="card-title text-center">
                User List{" "}
                <span className="text-muted fw-normal ms-2">(30)</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
