import { useDispatch, useSelector } from "react-redux";

import {
  fetchUsersRequest,
  clearUsers,
} from "../features/users/userSlice";
import type { AppDispatch, RootState } from "../app/store";


const UserList = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get data from Redux store
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  // Dispatch request action
  const handleFetchUsers = () => {
    dispatch(fetchUsersRequest());
  };

  return (
    <div>
      <h2>User Management</h2>

      <button
        onClick={handleFetchUsers}
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch Users"}
      </button>

      <button onClick={() => dispatch(clearUsers())}>
        Clear Users
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {loading && <p>Fetching users...</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;