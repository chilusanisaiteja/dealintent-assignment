import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Header from "./header/Header";
import shutterstock from "../src/asserts/shutterstock.png";
import salesforce from "../src/asserts/salesforce.png";
import wework from "../src/asserts/wework.png";
import plus from "../src/asserts/plus.png";
import blurimg from "../src/asserts/blurimg.png";
import downarrow from "../src/asserts/downarrow.png";
import silence from "../src/asserts/silence.png";
import elete from "../src/asserts/delete.png";
import profilepi from "../src/asserts/profilepic.png";
import share from "../src/asserts/share.png";
import chat from "../src/asserts/chat.png";
import download from "../src/asserts/download.png";
import zoomin from "../src/asserts/zoomin.png";
import zoomout from "../src/asserts/zoomout.png";
import newtab from "../src/asserts/newtab.png";
import cross from "../src/asserts/cross.png";
import search from "../src/asserts/search.png";
import mail from "../src/asserts/mail.png";
import bellicon from "../src/asserts/bellicon.png";
import pdf from "../src/asserts/pdf.png";
import questionicon from "../src/asserts/questionmark.png";
import profileicon from "../src/asserts/profileicon.png";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setmenu] = useState(false);
  const [menutab, setmenutab] = useState(false);

  window.addEventListener("resize", function (event) {
    setWidth(window.innerWidth);
    if (window.innerWidth < 700) {
      setmenu(true);
    } else {
      setmenutab(false);
    }
  });

  const handlemenu = (e) => {
    if (menu) {
      setmenutab(true);
    }
  };

  return menutab ? (
    <div className="App">
      <div className="menu">
        <div className="first">
          <img
            src={cross}
            alt=""
            onClick={() => {
              setmenutab(false);
            }}
          />
        </div>
        <div className="second">
          <div className="prof">
            <img className="icon5" src={profileicon} alt="" />
            <div className="profname">
              <h2 className="name33">Jane Smith</h2>
              <span className="name331">Sales Executive</span>
            </div>
          </div>
          <hr />
          <div className="search1">
            <img className="icon1" src={search} alt="" />
            <span className="name11">Search</span>
          </div>
          <hr />
          <div className="mail2">
            <img className="icon2" src={mail} alt="" />
            <span className="name22">Inbox</span>
          </div>
          <hr />
          <div className="bellicon2">
            <div className="bellicon">
              <img className="icon3" src={bellicon} alt="" />
              <div className="count1">25</div>
            </div>
            <span className="name332">Notifications</span>
          </div>
          <hr />
          <div className="help">
            <img className="icon5" src={questionicon} alt="" />
            <span className="name44">Help</span>
          </div>
          <hr />
        </div>
      </div>
    </div>
  ) : (
    <div className="App">
      <Header width={width} handlemenu={handlemenu} />
      <div className="pagecontent">
        <div className="one">
          <h1 className="title1">WeWork + Salesforce</h1>
          <button className="publishbutton">Publish/Share</button>
        </div>
        <div className="two">
          <div className="twotwo">
            <img className="backgroundimg" src={shutterstock} alt="" />
            <div className="blur">
              <img className="blur1" src={blurimg} alt="" />
              <h1 className={width > 800 ? "title" : "title3"}>
                Workspace Proposal
              </h1>
            </div>
          </div>
          <div className="sidebar">
            <img className="img111" src={wework} alt="" />
            <img className="img112" src={plus} alt="" />
            <img className="img111" src={salesforce} alt="" />
          </div>
        </div>
        <div className="three">
          <div className="left">
            <h2 className="projectname">Project Scope Recap</h2>
          </div>
          <div className="right">
            <div className="top1">
              <span className="mutual">Mutual Action Plan</span>
              <h4 className="percent">3%</h4>
            </div>
            <div className="bottom1">
              <div className="first1"></div>
              {Array.from({ length: 13 }, (index) => (
                <div className="middle1"></div>
              ))}
              <div className="end1"></div>
            </div>
          </div>
        </div>
        <div className="btns">
          <div className="start2">
            <button className="btn1 btn2">Basic Info</button>
            <button className="btn1">Files</button>
            <button className="btn1">Mutual Action Plan</button>
            <button className="btn1">Contact</button>
          </div>
          {width > 700 ? (
            <div className="end2">
              <button className="btn1">Internal Actions</button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <hr className="btnbottom" />
        <div className="last">
          {width > 900 ? (
            <div className="left4">
              <h2>Overview</h2>
              <hr />
              <span className="name1">Welcome</span>
              <hr />
              <span className="name2">Product Capabilities</span>
              <hr />
              <span className="name3">Customer Success Stories</span>
              <hr />
              <span className="name4">File Sharing</span>
              <hr />
              <span className="name5">Our Deck</span>
            </div>
          ) : (
            <></>
          )}
          <div className={width > 900 ? "right4" : "right5"}>
            <div className="l1">
              <h2>Company Profile</h2>
              <div className="l12">
                <img className="img1" src={downarrow} alt="" />
                <span className="right-color"></span>
                <img className="img2" src={silence} alt="" />
                <span className="right-color"></span>
                <img className="img3" src={elete} alt="" />
              </div>
            </div>
            <div
              className={width > 900 ? "l2" : "l234"}
              style={{
                backgroundImage: `url(${profilepi})`,
              }}
            >
              <div className="sideicons">
                <img className="pdfimg" src={pdf} alt="" />
                <span className="numb">1/15</span>
                <span className="right-color"></span>
                <img src={download} alt="" />
                <span className="right-color"></span>
                <img src={zoomin} alt="" />
                <span className="right-color"></span>
                <img src={zoomout} alt="" />
                <span className="right-color"></span>
                <img src={newtab} alt="" />
              </div>
              <div className="centercontent">
                <h1 className={width > 700 ? "centername" : "centername2"}>
                  wework
                </h1>
                <span
                  className={width > 700 ? "centersubname" : "centersubname2"}
                >
                  For all the ways you work, we're here
                </span>
              </div>
            </div>
            <div className="l3">
              <div className="message">
                <img src={chat} alt="" />
                <span className="val">8</span>
              </div>
              <span className="right-color"></span>
              <img className="share" src={share} alt="" />
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
