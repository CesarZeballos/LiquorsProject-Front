import { useRouter } from "next/navigation";
import Link from "next/link";
//icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from '@mui/icons-material/Logout';


export const Logged: React.FC = () => {
  const router = useRouter();

  const logoutHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    localStorage.removeItem("loginToken");
    router.push("/");
    window.location.reload();
    
  };

  return (
    <div>
      <ul className="flex space-x-6">
        <li>
          <Link className="buttonSecondary" href="/profile">
            <AccountCircleIcon />
            Perfil
          </Link>
        </li>
        <li>
          <span
            onClick={logoutHandler}
            className="buttonSecondary"
            style={{ cursor: "pointer" }}
          >
            <LogoutIcon></LogoutIcon>
            Log Out
          </span>
        </li>
      </ul>
    </div>
  );
};
