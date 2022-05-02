import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <h2>Create an account</h2>
        <input
          {...register("userName", {
            required: "Username is Required...",
            minLength: {
              value: 3,
              message: "Username must be atleast 3 characters long...",
            },
            maxLength: {
              value: 30,
              message: "Username must be atmost 30 characters long...",
            },
          })}
          placeholder="Username"
        />
        <p>{errors.userName?.message}</p>
        <input
          {...register("email", {
            required: "Email is Required...",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Email must be valid",
            },
          })}
          placeholder="Email"
        />
        <p>{errors.email?.message}</p>
        <input
          {...register("password", {
            required: "Password is Required...",
            pattern: {
              value:
                /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
              message:
                "Password Must Contain Atleast 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
            },
          })}
          placeholder="Password"
        />
        <p>{errors.password?.message}</p>
        <select
          {...register("gender", {
            required: "Gender is Required...",
          })}
        >
          <option value="">Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        <p>{errors.gender?.message}</p>
        <input type="Submit" />
      </form>
    </div>
  );
}

export default App;
