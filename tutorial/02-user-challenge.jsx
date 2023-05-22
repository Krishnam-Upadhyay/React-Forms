import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArray = [...user];
    newArray.push({ id: newArray.length + 1, name: name });
    setUser(newArray);
  };

  return (
    <div>
      <form className="form">
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block" onClick={handleSubmit}>
          submit
        </button>
      </form>
      {user.map((person, index) => {
        return (
          <div key={index}>
            <h2>
              Id:{person.id} Name {person.name}{" "}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
