import { useNavigate } from "react-router-dom";
import LogoImg from "../../../assets/images/logo.png";

export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => navigate("/")}
    >
      <img
        src={LogoImg}
        alt="JalDhatu Logo"
        className="h-15 w-15 object-cover"
      />
      <span className="card-title">
        JalDhatu
      </span>
    </div>
  );
};