import { useEffect, useState } from "react";
import TextField from "../../../components/ui/TextField";
import SubmitBtn from "../../../components/ui/button/SubmitBtn";
import SwitchForm from "./SwitchForm";
import { handleFormInput } from "../lib/utils";

function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsDisabled(true);
    if (name !== "" && email !== "" && password !== "" && conPassword !== "") {
      setIsDisabled(false);
    }
  }, [name, email, password, conPassword]);

  const handleInput = handleFormInput({
    name: setName,
    email: setEmail,
    password: setPassword,
    confirmPassword: setConPassword,
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    setError("");
    setIsLoading(true);

    if (password !== conPassword) {
      setError("Passwords do not match");
    }

    if (password === conPassword) {
      setIsLoading(true);
      setIsDisabled(true);
    }

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
      <h2 className="text-2xl font-bold">Create Your NetFlix Account</h2>

      <TextField
        placeholder="Name"
        name="name"
        type="text"
        value={name}
        onChange={handleInput}
      />

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

      <TextField
        placeholder="Confirm Password"
        name="confirmPassword"
        type="password"
        value={conPassword}
        onChange={handleInput}
      />

      <SubmitBtn
        label="Sign Up"
        isDisabled={isDisabled}
        isLoading={isLoading}
      />

      <SwitchForm path="login" />
    </form>
  );
}

export default SignupForm;
