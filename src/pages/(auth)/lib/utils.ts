import axios from "axios";
import type { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";

interface FormInputHandlers {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface DataType {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

type Setters = {
  [K in keyof FormInputHandlers]: Dispatch<SetStateAction<string>>;
};

const handleFormInput =
  (setters: Setters) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in setters) {
      setters[name as keyof Setters]?.(value);
    }
  };

function validateForm(data: DataType) {
  // Run all validations - early return on first failure
  const validations = [
    () => checkAllFields(data),
    () => checkPasswordMatch(data),
    () => checkPasswordStrength(data),
    () => validateName(data),
  ];

  for (const validation of validations) {
    if (!validation()) {
      return false;
    }
  }

  return true;
}

function checkAllFields(data: DataType) {
  for (const [key, value] of Object.entries(data)) {
    if (!value) {
      toast.error(
        key === "confirm"
          ? "Please confirm your password"
          : `Please enter your ${key}`
      );
      return false;
    }
  }
  return true;
}

function checkPasswordMatch(data: DataType) {
  if (data.password !== data.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }
  return true;
}

function checkPasswordStrength(data: DataType) {
  if (data.password.length < 8) {
    toast.error("Password must be at least 8 characters long");
    return;
  }
  return true;
}

function validateName(data: DataType) {
  if (data.name && !(data.name.length >= 3)) {
    toast.error("Name must be at least 3 characters long");
    return;
  }
  return true;
}

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
      toast.success("Account created successfully");
    }
  } catch (error) {
    console.error(error);
  }
};

export { handleFormInput, validateForm, handleCreateUser };
