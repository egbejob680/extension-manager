import React from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/extensionSlice";
import type { RootState } from "../store/store";
import "../App.css"

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.extension.theme);

  return (
    <header className="Header">
      {/* Left: Logo + Title */}
      <div id="header">
        <img src="./images/logo.svg"alt="Logo" />
      </div>

      {/* Right: Theme Toggle */}
      <Button
            style={{ backgroundColor:"var(--bg-toggle)",border:"none"}}
        
        onClick={() => dispatch(toggleTheme())}
        icon={
          <img
            src={
              theme === "dark"
                ? "/images/icon-sun.svg" 
                : "/images/icon-moon.svg"  
            }
            alt="Toggle theme" style={{ width: "20px", height: "20px" }}
          />
        }
      />
    </header>
  );
};

export default Header;
