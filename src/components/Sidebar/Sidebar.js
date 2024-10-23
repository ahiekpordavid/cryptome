import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "../../constants/dummys";
import { ToggleButton} from "@mui/material";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { Logout } from "@mui/icons-material";
import { useStateContext } from "../../constants/ContextProvider";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const navigate = useNavigate();

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
    "flex items-center gap-5 pl-4 pt-5 pb-2.5 rounded-xs  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-5 pb-2.5 rounded-xs text-md text-white dark:text-gray-200 dark:hover:text-black hover:border-l-1 m-2";

  return (
    <div className=" h-screen sm:overflow-hidden overflow-auto sm:hover:overflow-auto pb-10 bg-blue-900 text-white">
      {activeMenu && (
        <div className="justify-between flex flex-col h-full">
          <div>
            <div className="flex justify-between items-center w-max bg-blue-900 p-6">
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
                    borderLeftColor: isActive ? "white" : "",
                    borderLeft: isActive ? "2px solid" : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {item.icon}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div
              onClick={userSignOut}
              className="font-semibold mb-10 flex items-center justify-center"
            >
              <Logout className="text-white" sx={{fontSize:"26px"}} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
