import { useState } from "react";
import { clearLoaders, handleFormInput } from "../lib/utils";
import { createAccount } from "../services";
import { useNavigate } from "react-router";
import useUser from "../../../hooks/useUser";

function useSignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSignupInput = handleFormInput({
    email: setEmail,
    password: setPassword,
    confirmPassword: setConPassword,
    name: setName,
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);

    const response = createAccount(email, password, name, conPassword);

    try {
      response?.then((data) => {
        if (data) {
          setUser({
            email: data.email,
            name: data.name || "User",
          });
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }

    clearLoaders(setIsLoading, setIsDisabled);
  };

  return {
    name,
    email,
    password,
    conPassword,
    isLoading,
    isDisabled,
    handleSignupInput,
    handleFormSubmit,
    setName,
    setPassword,
    setConPassword,
    setIsLoading,
    setIsDisabled,
  };
}

export default useSignupForm;
