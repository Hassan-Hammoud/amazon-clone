import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { BsMinecartLoaded } from "react-icons/bs";
import { useAuth } from "../../context/GlobalState";
import { auth } from "../../firebase";

const Header = () => {
  const { user } = useAuth();
  const handleAuthentication = () => {
    auth.signOut();
  };

  return (
    <header>
      <Link to="/">
        <img
          src="https://i.ibb.co/T2tgW1k/amazon-logo.png"
          className="header-logo"
          alt="Amazon-logo"
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header-input" />
        <LuSearch className="header-searchIcon" />
      </div>
      <div className="header-nav" onClick={handleAuthentication}>
        <Link to={!user && "/login"}>
          <div className="header-option">
            <div className="header-optionLineOne">
              Hello {user ? `${user.email}` : "Guest"}
            </div>
            <div className="header-optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </div>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Returns</div>
            <div className="header-optionLineTwo">& orders</div>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
            <div className="header-optionLineOne">Your</div>
            <div className="header-optionLineTwo">Prime</div>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header-optionBasket">
            <BsMinecartLoaded
              style={{ fontSize: "35px" }}
              className="cartIcon"
            />
            <div className="header-optionLineTwo header-basketCount">5</div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
