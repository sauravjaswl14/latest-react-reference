import { useState } from "react";

const UserChallenge = () => {
  let [user, setUser] = useState(null);

  const login = () => {
    //normally connect to db or api
    setUser({ name: "Susan" });
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <div>
      {user ? (
        <div style={{ margin: "1rem 0" }}>
          <h4>Hello there, {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div style={{ margin: "1rem 0" }}>
          <h4>please login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
