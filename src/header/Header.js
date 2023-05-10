import "./Header.css";
import React from "react";
import righticon from "../asserts/righticon.png";
import search from "../asserts/search.png";
import mail from "../asserts/mail.png";
import bellicon from "../asserts/bellicon.png";
import questionicon from "../asserts/questionmark.png";
import profileicon from "../asserts/profileicon.png";
import menu from "../asserts/menu.png";

function Header(props) {
  return (
    <div className="header">
      <div className="start">
        <div className="outercircle">
          <div className="innercircle"></div>
        </div>
        <div className="righticon">
          <img src={righticon} alt="" />
        </div>
      </div>
      {props.width > 700 ? (
        <div className="end">
          <img className="icon1" src={search} alt="" />
          <img className="icon2" src={mail} alt="" />
          <div className="bellicon">
            <img className="icon3" src={bellicon} alt="" />
            <div className="count">25</div>
          </div>
          <img className="icon4" src={questionicon} alt="" />
          <img className="icon5" src={profileicon} alt="" />
        </div>
      ) : (
        <img
          src={menu}
          alt=""
          onClick={() => {
            props.handlemenu();
          }}
        />
      )}
    </div>
  );
}

export default Header;
