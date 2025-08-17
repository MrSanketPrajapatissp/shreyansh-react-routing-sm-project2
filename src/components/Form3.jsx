import React from "react";
import { useForm } from "react-hook-form";

function Form3() {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))} action="">
        <input type="email" {...register("email")} placeholder="email"></input>
        <input type="name" {...register("name")} placeholder="Name"></input>
        <input type="age" {...register("age")} placeholder="Age"></input>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Form3;
