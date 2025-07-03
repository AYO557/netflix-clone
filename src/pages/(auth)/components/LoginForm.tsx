import { useEffect, useState } from "react";
import TextField from "../../../components/ui/TextField";
import SubmitBtn from "../../../components/ui/button/SubmitBtn";
import SwitchForm from "./SwitchForm";
import { handleFormInput } from "../lib/utils";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  // toggling button disability
  useEffect(() => {
    setIsDisabled(true);
    if (email !== "" && password !== "") {
      setIsDisabled(false);
    }
  }, [email, password]);

  const handleInput = handleFormInput({
    email: setEmail,
    password: setPassword,
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    setIsLoading(true);
    setError("");

    setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(false);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-4 w-[90%] mx-auto"
    >
      <h2 className="text-2xl font-bold">Sign In To Your NetFlix Account</h2>

      <TextField
        placeholder="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleInput}
      />

      <TextField
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={handleInput}
      />

      <SubmitBtn
        isLoading={isLoading}
        isDisabled={isDisabled}
        label="Sign In"
      />

      <SwitchForm path="signup" />
    </form>
  );
}

export default LoginForm;
