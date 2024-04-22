import React from "react";

function UserCard({ user }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card text-start mb-3 mt-4" style={{ width: "35rem" }}>
            <div className="card-body">
              <h5 className="card-title text-center">User Information</h5>
              <p className="card-text">Name: {user.name}</p>
              <p className="card-text">User_name: {user.username}</p>
              <p className="card-text">User ID: {user.id}</p>
              <p className="card-text">Email: {user.email}</p>
              <p className="card-text">Phone: {user.phone}</p>
              <p className="card-text">Website: {user.website}</p>
              <p className="card-text">Company Name: {user.company.name}</p>
              <p className="card-text">
                Company Catchphrase: {user.company.catchPhrase}
              </p>
              <p className="card-text">
                Company Bussiness Strategy(BS): {user.company.bs}
              </p>

              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
