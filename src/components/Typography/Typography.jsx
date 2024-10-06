import React from "react";
import "./Typography.css";
import { Link } from "react-router-dom";

export const ParagraphHeader = ({title}) => {
    return (
        <div className="typepography-container">
        <div className="typepography-header">{title}</div>
      </div>
  )
};

export const LoginHeader = ({ title, subText,path }) => {
  return (
    <div className="typepography-container">
      <div className="typepography-login-header">{title}</div>
      <p className="typepography-paragraph"> {subText } <Link to={path}>Get started</Link></p>
    </div>
  );
};

export const RegisterHeader = ({ title, subText }) => {
    return (
      <div className="typepography-container">
        <div className="typepography-header">{title}</div>
        <p className="typepography-paragraph">{subText + <Link to="rtert">ll</Link>}</p>
      </div>
    );
  };