import React from "react";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../constants/dummys";
import { ToggleButton, ListItemIcon } from "@mui/material";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Logout } from "@mui/icons-material";
import { useStateContext } from "../../constants/ContextProvider";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } =
    useStateContext();
      const navigate = useNavigate();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };
  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-sm  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className=" h-screen sm:overflow-hidden overflow-auto sm:hover:overflow-auto pb-10 ">
      {activeMenu && (
        <div className="justify-between flex flex-col h-full">
          <div>
            <div className="flex justify-between items-center w-72 bg-white p-6">
              <Link
                to="/dashboard"
                onClick={handleCloseSideBar}
                className="items-center gap-3 ml-3 mt-4 mb-4 flex text-xl font-extrabold tracking-tight text-white"
              >
                <p className="greatVibes text-5xl"style={{color:"#102B32"}}>Shinaa</p>
              </Link>
              <div className="md:hidden">
                <ToggleButton
                  value="center"
                  aria-label="centered"
                  onClick={handleActiveMenu}
                  sx={{ border: "none" }}
                >
                  <ReplyOutlinedIcon
                    style={{ color: "rgb(34 197 94)", fontSize: "25px" }}
                  />
                </ToggleButton>
              </div>
            </div>

            <div className="mt-10 hidden sm:block flex-col ">
              {links.map((item) => (
                <NavLink
                  to={`/${item.name}`}
                  key={item.name}
                  style={({ isActive }) => ({
                    background: isActive
                      ? "linear-gradient(90deg, #102B32 0%, #205765 50%, #519EB1 100%)"
                      : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {item.icon}
                  <span className="capitalize p-2">{item.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={userSignOut} className="font-semibold mb-10 flex items-center">
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
