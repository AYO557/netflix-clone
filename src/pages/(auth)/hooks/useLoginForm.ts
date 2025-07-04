import { useState } from "react";
import { clearLoaders, handleFormInput } from "../lib/utils";
import { login } from "../services";
import { useNavigate } from "react-router";
import useUser from "../../../hooks/useUser";

function useLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleInput = handleFormInput({
    email: setEmail,
    password: setPassword,
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);

    const response = login(email, password);

    try {
      response?.then((data) => {
        if (data) {
          console.log(data);
          setUser(data);
          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
    }

    clearLoaders(setIsLoading, setIsDisabled);
  };

  return {
    email,
    password,
    isLoading,
    isDisabled,
    handleInput,
    handleFormSubmit,
    setIsLoading,
    setIsDisabled,
  };
}

export default useLoginForm;
