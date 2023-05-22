import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form className="from">
      <h2>Controlled Inputs</h2>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="Email" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="Email"
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button type="submit" className="btm btn-block" onClick={handSubmit}>
        Submit
      </button>
    </form>
  );
};
export default ControlledInputs;
