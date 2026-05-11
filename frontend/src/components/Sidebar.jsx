import { Link } from "react-router-dom";
import "../assets/CSS_JS/sidebar.css";
import "../assets/CSS_JS/global.css";
import { useState } from "react";

export default function Sidebar() {

  const [open, setOpen] = useState(false);
  const role = localStorage.getItem("role");

  return (
    <>

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <div className={`sidebar ${open ? "open" : ""}`}>

        <div className="sidebar-content">

          <h2>App</h2>

          <Link to="/tableau" className="link-tableau">
            Tableau
          </Link>

          {role === "Admin" && (
            <>
              <Link to="/users" className="link-users">
                Users
              </Link>

              <Link to="/admin" className="link-admin">
                Admin
              </Link>
            </>
          )}

          <button
            className="logout-btn"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Logout
          </button>

        </div>

      </div>

    </>
  );
}