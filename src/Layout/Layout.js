import React from "react";
import { Image } from "antd";
import {
  useLocation,
  Navigate,
  Outlet,
  Link,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { AiTwotoneHome } from "react-icons/ai";
import { TbBuildingStore } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import img from "./../imges/header.png";
import { selectCurrentToken } from "../states/auth/authSlice";
import "./layout.css";

const Layout = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();
  const navigate = useNavigate();
  return token ? (
    <section className="layout">
      <div className="header">
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          <BiUser /> Asosiyga qaytish
        </button>
        <Image src={img} alt="" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/main">
              <AiTwotoneHome />
              <span>Asosiy</span>
            </Link>
          </li>
          <li>
            <Link to="/announs">
              <TbBuildingStore />
              <span>E'lonlar</span>
            </Link>
          </li>
          <li>
            <Link to="/questios">
              <FaEdit />
              <span>Savollar</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </section>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Layout;
