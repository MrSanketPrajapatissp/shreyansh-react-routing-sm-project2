import React, { useRef } from "react";

// useRef : is tarie me ham har input ko select kar lete hain and uniki value tab nikal lete hain jab form submit hota hai useRef kisi bhi htm element ko select kar sakte ho

function Form() {
  const elem = useRef(null);
  const email = useRef(null);
  const age = useRef(null);
  const name = useRef(null);

  const handleSubmit = (details) => {
    details.preventDefault();
     console.log(name.current.value);
     console.log(email.current.value);
     console.log(age.current.value);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" ref={name} placeholder="Name" />
      <input type="email" ref={email} placeholder="Email" />
      <input type="number" ref={age} placeholder="Age" />
      <input type="submit" />
    </form>
  );
}

export default Form;
