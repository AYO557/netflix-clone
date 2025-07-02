import { Link } from "react-router";
import TextField from "../../../components/ui/TextField";
import SubmitBtn from "../../../components/ui/button/SubmitBtn";

function SignupForm() {
  return (
    <form className="flex flex-col gap-4 w-[90%] mx-auto">
      <h2 className="text-2xl font-bold">Create Your NetFlix Account</h2>

      <TextField placeholder="Name" name="name" type="text" />

      <TextField placeholder="Email" name="email" type="email" />

      <TextField placeholder="Password" name="password" type="password" />

      <TextField
        placeholder="Confirm Password"
        name="confirmPassword"
        type="password"
      />

      <SubmitBtn label="Sign Up" />

      <p className="text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-red-500 hover:underline">
          Sign In
        </Link>
      </p>
    </form>
  );
}

export default SignupForm;
