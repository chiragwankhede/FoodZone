import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [button, setButton] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { LoggedInUSer } = useContext(UserContext);
  // console.log(LoggedInUSer);

  return (
    <div className="flex justify-between bg-slate-200 shadow-md mb-2 ">
      <div className="w-[100px] mr-auto">
        <img className="w-50 h-50" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-lg font-serif">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 text-2xl font-bold font-serif ">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-2xl font-bold font-serif">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 text-2xl font-bold font-serif">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-2xl font-bold font-serif">
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="p-2 bg-green-300 rounded-md"
            onClick={() => {
              button === "Login" ? setButton("Logout") : setButton("Login");
            }}
          >
            {button}
          </button>

          <li className="px-4 text-2xl font-bold font-serif">
            <Link to="/cart">{LoggedInUSer}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
