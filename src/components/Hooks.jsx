/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

function Hooks() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setTrue, setButton] = useState(true);

  // name(value);
  //[event.target.name](event.target.value);

  // const validate = (email, password) => {
  //   console.log("Inside Function !!!");
  //   if (email === "shrishrimalraj" && password === "shrishrimalraj") {
  //     console.log("Inside if else ");
  //     console.log(disable);
  //     setButton(false);
  //   }
  // };

  const onChangeField = e => {
    // /setPassword(e.target.value);
    //  console.log("Onchange", e.target.value);
    setPassword(e.target.value);
    // setButton(false);
    // console.log("Button True and false", setTrue);
    //  validator(email, password);
  };

  // const validator = (email, password) => {
  //   console.log("In handler");
  //   if (email === "raj" && password === "ra") {
  //     console.log("Inside if else ");
  //     console.log("disable");
  //     setButton(false);
  //   }
  // };

  useEffect(() => {
    console.log("Inside useState");
    if (email === "raj" && password === "raj") {
      console.log("Inside if else ");
      console.log("disable");
      setButton(false);
    }
  });

  return (
    <>
      <form style={{ textAlign: "center" }}>
        <br />
        <br />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          name="email"
          autoComplete="off"
          required
        />
        <br />
        <br />
        <input
          value={password}
          onChange={onChangeField}
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="off"
          required
        />
        <br />
        <br />
        <button disabled={setTrue}>Submit</button>
      </form>
    </>
  );
}

export default Hooks;
