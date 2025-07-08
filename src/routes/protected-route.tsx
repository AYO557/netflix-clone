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

  const user = getUser();

  useEffect(() => {
    if (!user) {
      removeUser();
      navigate("/auth/login");
    }
  }, [getUser, navigate, removeUser, user]);

  return <div>{children}</div>;
}
