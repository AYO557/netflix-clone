import type { Dispatch, SetStateAction } from "react";

interface FormInputHandlers {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

type Setters = {
  [K in keyof FormInputHandlers]: Dispatch<SetStateAction<string>>;
};

export const handleFormInput =
  (setters: Setters) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in setters) {
      setters[name as keyof Setters]?.(value);
    }
  };
