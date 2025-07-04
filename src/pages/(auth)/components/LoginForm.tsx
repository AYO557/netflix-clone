import { useEffect } from "react";
import TextField from "../../../components/ui/TextField";
import SubmitBtn from "../../../components/ui/button/SubmitBtn";
import SwitchForm from "./SwitchForm";
import { Toaster } from "react-hot-toast";
import useLoginForm from "../hooks/useLoginForm";

function LoginForm() {
  const {
    email,
    password,
    handleInput,
    handleFormSubmit,
    isDisabled,
    setIsDisabled,
    isLoading,
  } = useLoginForm();

  useEffect(() => {
    setIsDisabled(true);
    if (email !== "" && password !== "") {
      setIsDisabled(false);
    }
  }, [email, password, setIsDisabled]);

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

      <Toaster position="top-center" reverseOrder={false} />
    </form>
  );
}

export default LoginForm;
