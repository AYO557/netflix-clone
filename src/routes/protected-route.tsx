import { useEffect } from "react";
import { useNavigate } from "react-router";
import useUser from "../hooks/useUser";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const { getUser, removeUser } = useUser();

  useEffect(() => {
    if (!getUser()) {
      removeUser();
      navigate("/auth/login");
    }
  }, [getUser, navigate, removeUser]);

  return <div>{children}</div>;
}
