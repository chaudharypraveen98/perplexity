import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { useUser } from "../context/UserContext";

export default function Profile() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-full w-full">
      <h1
        onClick={() => {
          logout();
          navigate("/");
        }}
        className="cursor-pointer"
      >
        Logout{" "}
      </h1>
    </div>
  );
}
