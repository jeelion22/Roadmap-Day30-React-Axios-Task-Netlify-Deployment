import React from "react";

function Home() {
  return (
    <div className="card text-center mt-5">
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">React Axios Task</h5>
        <p className="card-text">
          A React App that allows for CRUD operations with user data using React
          and Axios fetch to interact with APIs that deployed in{" "}
          <a href="https://render.com/" target="_blank">
            Render
          </a>
        </p>
        <a
          href="https://documenter.getpostman.com/view/21877600/2sA3Bt2Upg"
          target="_blank"
          className="btn btn-primary"
        >
          Click for API Documentation
        </a>
      </div>
      <div className="card-footer text-body-secondary">{Date().toString()}</div>
    </div>
  );
}

export default Home;
