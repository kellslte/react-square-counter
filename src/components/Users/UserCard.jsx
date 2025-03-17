import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, company, address, email, phone, image } = user;

  return (
    <div className="col-xl-3 col-sm-6">
      <div className="card">
        <div className="card-body">
          <div className="dropdown float-end">
            <a
              className="text-muted dropdown-toggle font-size-16"
              href="#"
              role="button"
              dataBsToggle="dropdown"
              aria-haspopup="true"
            >
              <i className="bx bx-dots-horizontal-rounded"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="#">
                Edit
              </a>
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Remove
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div>
              <img
                src={image}
                alt=""
                className="avatar-md rounded-circle img-thumbnail"
              />
            </div>
            <div className="flex-1 ms-3">
              <h5 className="font-size-16 mb-1">
                <a href="#" className="text-dark">
                  {firstName} {lastName}
                </a>
              </h5>
              <span className="badge badge-soft-success mb-0">
                {company.title}
              </span>
            </div>
          </div>
          <div className="mt-3 pt-1">
            <p className="text-muted mb-0">
              <i className="mdi mdi-phone font-size-15 align-middle pe-2 text-primary"></i>{" "}
              {phone}
            </p>
            <p className="text-muted mb-0 mt-2">
              <i className="mdi mdi-email font-size-15 align-middle pe-2 text-primary"></i>{" "}
              {email}
            </p>
            <p className="text-muted mb-0 mt-2">
              <i className="mdi mdi-google-maps font-size-15 align-middle pe-2 text-primary"></i>{" "}
              {address.address} {address.city} {address.state},{" "}
              {address.postalCode}
            </p>
          </div>
          <div className="d-flex gap-2 pt-4">
            <button
              type="button"
              className="btn btn-outline-primary btn-sm w-50"
            >
              <i className="bx bx-user me-1"></i> Profile
            </button>
            <button type="button" className="btn btn-primary btn-sm w-50">
              <i className="bx bx-message-square-dots me-1"></i> Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
