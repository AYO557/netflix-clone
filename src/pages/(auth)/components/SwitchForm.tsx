import { Link } from "react-router";

type SwitchFormProps = {
  path: "login" | "signup";
};

function SwitchForm({ path }: SwitchFormProps) {
  return (
    <p className="text-center">
      {path === "login" ? "Don't" : "Already"} have an account?{" "}
      <Link to={`../${path}`} className="text-red-500 hover:underline">
        {path === "login" ? "Login" : "Signup"}
      </Link>
    </p>
  );
}

export default SwitchForm;
