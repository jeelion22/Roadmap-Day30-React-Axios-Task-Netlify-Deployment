import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, json } from "react-router-dom";

async function getUser(userId) {
  try {
    const response = await axios.get(
      `https://roadmap-day30-users-webserver.onrender.com/users/${userId}`
    );

    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

function User({ setEditUser }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();
  const parsedUserId = parseInt(userId, 10);
  const navigateToUsers = useNavigate();
  const navigateToEditUser = useNavigate();

  const handleUserDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `https://roadmap-day30-users-webserver.onrender.com/users/${userId}`
      );

      setTimeout(() => {
        alert(response.data.message);
      }, 100);
      navigateToUsers("/users");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserEdit = (userData) => {
    setEditUser(userData);

    navigateToEditUser(`/users/edit/${userData.id}`);
  };

  if (isNaN(parsedUserId)) {
    return <div>Invalid user ID: {userId}</div>;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUser(parsedUserId);
        setUser(userData);
        setLoading(false);
      } catch (error) {
        console.log(`Failed to fetch user ${error}`);
        setLoading(false);
      }
    }
    fetchData();
  }, [parsedUserId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="containter">
      <div className="row justify-content-center mt-4">
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table  align-middle table-striped caption-top">
              <thead>
                <tr>
                  <th scope="col" colSpan={2}>
                    <h4>User Information</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fullname</td>
                  <td>{user.name}</td>
                </tr>
                <tr>
                  <td>User ID</td>
                  <td>{user.id}</td>
                </tr>

                <tr>
                  <td>Username</td>
                  <td>{user.username}</td>
                </tr>

                <tr>
                  <td>Email</td>
                  <td>{user.email}</td>
                </tr>

                <tr>
                  <td>Address</td>
                  <td>{user.address.street}</td>
                </tr>
                <tr>
                  <td></td>
                  <td>{user.address.suite}</td>
                </tr>

                <tr>
                  <td></td>
                  <td>{user.address.city}</td>
                </tr>

                <tr>
                  <td></td>
                  <td>{user.address.zipcode}</td>
                </tr>

                <tr>
                  <td></td>
                  <td>{user.address.city}</td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                  </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{user.phone}</td>
                </tr>

                <tr>
                  <td>Website</td>
                  <td>{user.website}</td>
                </tr>

                <tr>
                  <td>Company Name</td>
                  <td>{user.company.name}</td>
                </tr>

                <tr>
                  <td></td>
                  <td>{user.address.city}</td>
                </tr>

                <tr>
                  <td>Company Catch Phrase</td>
                  <td>{user.company.catchPhrase}</td>
                </tr>

                <tr>
                  <td>Company Bussiness Strategy (BS)</td>
                  <td>{user.company.bs}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={2}>
                    <div className="d-flex gap-2 justify-content-center">
                      <button
                        onClick={() => {
                          handleUserEdit(user);
                        }}
                        className="btn btn-primary"
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleUserDelete(userId);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
