import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = ({ toggleSidebar }) => {
  const [lastLoginTime, setLastLoginTime] = useState("");
  const [notificationCount, setNotificationCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [user, setUser] = useState({ name: "", role: "" });
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const notificationRef = useRef(null);

  useEffect(() => {
    const now = new Date();
    setLastLoginTime(
      now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
    );

    const storedUser = JSON.parse(localStorage.getItem("users"));
    if (storedUser) setUser({ name: storedUser.name, role: storedUser.role });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    if (showNotifications) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNotifications]);

  const clearNotifications = () => {
    setNotificationCount(0);
    setShowNotifications(false);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/fetchnotifications")
      .then((res) => {
        setNotifications(res.data);
        setNotificationCount(res.data.length);
      })
      .catch((err) => console.error("Error fetching notifications:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 
        text-white px-6 py-4 fixed top-0 left-0 right-0 z-50 
        flex justify-between items-center shadow-lg h-20"
      >
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            className="menu-toggle md:hidden text-white text-2xl flex items-center justify-center w-8 h-8"
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* LOGO FIXED (NOT HIDDEN) */}
          <div className="logo w-12 h-12 bg-white rounded-full flex items-center justify-center 
            font-bold text-blue-900 text-lg shadow-md border-2 border-blue-300">
            KB
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-bold">KodeBloom</h1>
            <p className="text-xs opacity-90">Technology and Services Pvt. Ltd.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="bg-blue-800 text-white py-1 px-3 rounded-full text-xs shadow-md hidden md:block">
            Last login: <span className="font-medium">{lastLoginTime}</span>
          </div>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              className="text-white p-2 rounded-full hover:bg-blue-800 w-10 h-10 relative"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <FontAwesomeIcon icon={faBell} className="text-lg" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold 
                rounded-full h-5 w-5 flex items-center justify-center border-2 border-blue-900">
                  {notificationCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-md shadow-lg border">
                <div className="p-3 bg-blue-900 text-white font-bold flex justify-between items-center">
                  <span>Notifications ({notificationCount})</span>
                  <button
                    onClick={clearNotifications}
                    className="text-xs bg-blue-800 px-2 py-1 rounded"
                  >
                    Clear All
                  </button>
                </div>

                <div className="max-h-60 overflow-y-auto">
                  {notifications.map((n) => (
                    <button
                      key={n._id}
                      onClick={() => {
                        if (user.role === "HR") {
                          navigate("/hr/credentials", {
                            state: { employee: n, empId: n._id },
                          });
                        }
                      }}
                      className="w-full text-left border-b p-3 hover:bg-gray-50"
                    >
                      <p className="font-semibold text-sm">{n.title}</p>
                      <p className="text-xs text-gray-600 mt-1">{n.body}</p>
                      <p className="text-xs text-gray-400 mt-1">
                        {new Date(n.createdAt).toLocaleString()}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="p-2 text-center bg-gray-100">
                  <button className="text-blue-900 text-sm font-medium">
                    View All Notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center 
              text-white font-bold border-2 border-white shadow-md">
              {user.name ? user.name.split(" ").map((n) => n[0]).join("") : "JD"}
            </div>

            <div className="font-medium hidden md:block text-sm">
              {user.name} <span className="text-blue-200">({user.role})</span>
            </div>
          </div>
        </div>
      </header>

      {/* 🚀 FIX: Spacer pushes down content (no more hiding) */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
