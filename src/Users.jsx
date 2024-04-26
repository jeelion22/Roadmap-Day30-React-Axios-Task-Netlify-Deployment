import Userrow from "./Userrow";
import { useState, useEffect } from "react";
import axios from "axios";

async function getUsers() {
  try {
    const response = await axios.get(
      "https://roadmap-day30-users-webserver.onrender.com/users"
    );

    // console.log(response)

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

function Users() {
  const [users, setUsers] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    async function getAllUsers() {
      try {
        const allUsers = await getUsers();
        setUsers(allUsers);
        setLoadingStatus(false);
      } catch (error) {
        console.log(`Failed to fetch users ${error} `);
        setLoadingStatus(false);
      }
    }
    getAllUsers();
  }, []);

  if (loadingStatus) {
    return <div>loading...</div>;
  }

  return (
    <div className="containter">
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table  align-middle table-striped caption-top">
              <caption>List of users</caption>
              <thead>
                <tr>
                  <th scope="col">S.No.</th>
                  <th scope="col">User_Id</th>
                  <th scope="col">Fullname</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => {
                  return (
                    <Userrow key={user.id} user={user} serialNo={index + 1} />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
