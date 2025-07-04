import type { Dispatch, SetStateAction } from "react";
import toast from "react-hot-toast";
import type { DataType } from "./type";

interface FormInputHandlers {
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

function validateSignupForm(data: DataType) {
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

function validateLoginForm(data: DataType) {
  const isAllFields = checkAllFields(data);

  return isAllFields;
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

const clearLoaders = (
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setTimeout(() => {
    setIsLoading(false);
    setIsDisabled(false);
    toast.dismiss();
  }, 2000);
};

export { handleFormInput, validateSignupForm, validateLoginForm, clearLoaders };
