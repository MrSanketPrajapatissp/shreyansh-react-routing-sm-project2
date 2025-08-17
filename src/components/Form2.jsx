import React, { useState } from "react";

//2nd way to manage form:  Controlled Components:app kuch bhii likhe to app real time par data update kar dein jaise hi kuch type ho setState kardo nayi value ke barabar

function Form2() {
  const [val, setVal] = useState({ name: "", email: "" });

  const onSubmitHandler = (details) => {
    details.preventDefault();
    console.log(val);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} action="">
        <input
          onChange={(event) => setVal({ ...val, name: event.target.value })}
          type="text"
          placeholder="Name"
        />
        <input
          type="email"
          onChange={(event) => setVal({ ...val, email: event.target.value })}
          placeholder="Email"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form2;
