import toast from "react-hot-toast";
import { validateLoginForm, validateSignupForm } from "../lib/utils";
import axios from "axios";
import type { DataType } from "../lib/type";

const createAccount = (
  email: string,
  password: string,
  name?: string,
  conPassword?: string
) => {
  const isFormValid = validateSignupForm({
    name,
    email,
    password,
    confirmPassword: conPassword,
  });

  if (isFormValid) {
    const payload = {
      name,
      email,
      password,
    };

    handleCreateUser(payload);
  }
};

const login = (email: string, password: string) => {
  const isFormValid = validateLoginForm({
    email,
    password,
  });

  if (isFormValid) {
    const payload = {
      email,
      password,
    };

    return handleLogin(payload);
  }
};

const handleLogin = async (
  payload: DataType
): Promise<
  | {
      name: string;
      email: string;
    }
  | undefined
> => {
  try {
    const response = await axios.get("http://localhost:8000/users", {
      params: {
        email: payload.email,
      },
    });

    const user = response.data[0];

    if (!user) {
      toast.error("User not found");
      return;
    }

    const isPasswordValid = user.password === payload.password;

    if (isPasswordValid) {
      return {
        name: user.name,
        email: user.email,
      };
    } else {
      toast.error("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
  }
};

const handleCreateUser = async (payload: DataType) => {
  const { email } = payload;
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/users",
    });

    const users = response.data;

    const existUser = users.find(
      (user: { email: string; password: string; name: string }) =>
        user.email === email
    );

    if (existUser) {
      toast.error("User already exists");
      return;
    }

    const res = await axios({
      method: "post",
      url: "http://localhost:8000/users",
      data: payload,
    });

    if (res.status === 201) {
      JSON.stringify(
        localStorage.setItem("user-data", JSON.stringify(payload))
      );
      window.location.href = "/";
      return;
    }
  } catch (error) {
    console.error(error);
  }
};

export { createAccount, handleCreateUser, login };
