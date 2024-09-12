import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  let [name, setName] = useState("");
  let [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) return;

    setUsers((prev) => {
      let newId = Date.now();
      return [...prev, { id: newId, name }];
    });

    setName("");
  };

  const removeUser = (id) => {
    const newUsers = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newUsers);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
