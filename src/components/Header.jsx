// import React, { useContext } from "react";
//  import userIcon from "../assets/userIcon.jpg"
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import logo from "../assets/logo.webp"


const Header = () => {
  const { logOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#5754F7] underline font-semibold" : "text-[#172566] hover:text-[#5754F7]"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#5754F7] underline font-semibold" : "text-[#172566] hover:text-[#5754F7]"
          }
          to={"/lessons"}
        >
         Start-learning
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#5754F7] underline font-semibold" : "text-[#172566] hover:text-[#5754F7]"
          }
          to={"/tutorials"}
        >
          Tutorials
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#5754F7] underline font-semibold" : "text-[#172566] hover:text-[#5754F7]"
          }
          to={"/about"}
        >
          About Us
        </NavLink>
      </li>


      {
        user && <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#5754F7] underline font-semibold" : "text-[#172566] hover:text-[#5754F7]"
          }
          to={"/auth/profile"}
        >
          Profile
        </NavLink>
      </li>
      }


      {
        user && <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#5754F7] underline font-semibold" : "text-[#172566] hover:text-[#5754F7]"
          }
          to={"/auth/updateprofile"}
        >
          Update Profile
        </NavLink>
      </li>
      }
      
    </>
  );
  return (
    <div className="pt-5">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <div className="hidden lg:block"><img src={logo} alt="logo" className="h-10 w-10 rounded-full object-cover" /></div>
            <div><Link className="text-xl font-semibold text-[#172566]">
            LingoBingo
          </Link></div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-4">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 items-center">
            {user && (
              <div className="relative">
                <div className="group">
                <img
                  src={user.photoURL|| userIcon}
                  className="h-10 w-10 rounded-full object-cover"
                  alt="user"
                />
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-12 bg-white text-gray-800 text-sm py-1 pl-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-[100px]">
                  {user?.displayName}
                </div>
              </div>
              </div>
            )}

            {user ? (
              <button
                onClick={logOutUser}
                className="bg-[#5754F7] hover:bg-[#5754F7] px-4 py-2 rounded-sm shadow-md text-white transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/auth/login")}
                className="bg-[#5754F7] hover:bg-[#5754F7] px-4 py-2 rounded-sm shadow-md text-white transition-all duration-300"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;