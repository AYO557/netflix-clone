import { useEffect } from "react";
import TextField from "../../../components/ui/TextField";
import SubmitBtn from "../../../components/ui/button/SubmitBtn";
import SwitchForm from "./SwitchForm";
import { Toaster } from "react-hot-toast";
import useSignupForm from "../hooks/useSignupForm";

function SignupForm() {
  const {
    name,
    email,
    password,
    conPassword,
    handleSignupInput,
    handleFormSubmit,
    isDisabled,
    setIsDisabled,
    isLoading,
  } = useSignupForm();

  useEffect(() => {
    setIsDisabled(true);
    if (name !== "" && email !== "" && password !== "" && conPassword !== "") {
      setIsDisabled(false);
    }
  }, [name, email, password, conPassword, setIsDisabled]);

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
        onChange={handleSignupInput}
      />

      <TextField
        placeholder="Email"
        name="email"
        type="email"
        value={email}
        onChange={handleSignupInput}
      />

      <TextField
        placeholder="Password"
        name="password"
        type="password"
        value={password}
        onChange={handleSignupInput}
      />

      <TextField
        placeholder="Confirm Password"
        name="confirmPassword"
        type="password"
        value={conPassword}
        onChange={handleSignupInput}
      />

      <SubmitBtn
        label={isLoading ? "Creating Account..." : "Sign Up"}
        isDisabled={isDisabled}
        isLoading={isLoading}
      />

      <SwitchForm path="login" />

      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
}

export default SignupForm;
