import { useState } from "react";
import TextField from "../../../components/ui/TextField";
import SubmitBtn from "../../../components/ui/button/SubmitBtn";
import SwitchForm from "./SwitchForm";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col gap-4 w-[90%] mx-auto">
      <h2 className="text-2xl font-bold">Sign In To Your NetFlix Account</h2>

      <TextField
        placeholder="Email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <SubmitBtn label="Sign In" />

      <SwitchForm path="signup" />
    </form>
  );
}

export default LoginForm;
