import { CircleUser, Lock, Mail } from "lucide-react";

interface TextFieldProps {
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextField({
  type,
  name,
  placeholder,
  onChange,
  ...props
}: TextFieldProps) {
  return (
    <div className="flex gap-2 items-center bg-grey p-4 h-14 rounded-xl">
      {type === "text" ? (
        <CircleUser size={24} />
      ) : type === "password" ? (
        <Lock size={24} />
      ) : type === "email" ? (
        <Mail size={24} />
      ) : null}
      <input
        id={name}
        name={name}
        type={type}
        {...props}
        placeholder={placeholder}
        className="w-full p-2 rounded-lg bg-grey outline-0 font-bold text-lg"
        onChange={onChange}
      />
    </div>
  );
}

export default TextField;
