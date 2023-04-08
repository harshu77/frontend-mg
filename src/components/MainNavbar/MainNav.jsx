import Heading from "../Header/Heading";
import "./MainNav.css";
import React from "react";
import { Link, Redirect } from "react-router-dom";
import HomeIcon from "../../images/home-icon.svg";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "../../images/movie-icon.svg";
import TheatersIcon from "../../images/series-icon.svg";
import GamesIcon from "@mui/icons-material/Games";
import $ from "jquery";

$(function () {
  $(document).on("scroll", function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

const MainNav = () => {
  const [redirect, setRedirect] = React.useState(false);

  if (redirect) {
    console.log("redirect ", redirect);
    return <Redirect to="/login" />;
  }

  return (
    <>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <Link className="navbar-brand" to="/">
          <Heading />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active  nav__link">
              <Link className="nav-link" to="/">
                <img
                  src={HomeIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",
                    marginRight: "0px",
                  }}
                  alt=""
                />
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item  nav__link">
              <Link className="nav-link" to="/treading">
                <WhatshotIcon
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",

                    marginRight: "2px",
                  }}
                />
                Trending
              </Link>
            </li>
            <li className="nav-item  nav__link">
              <Link className="nav-link" to="/all-movies">
                <img
                  src={MovieIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "2px",
                    marginRight: "1px",
                  }}
                  alt=""
                />
                Movies
              </Link>
            </li>
            <li className="nav-item nav__link">
              <Link className="nav-link" to="/all-series">
                <img
                  src={TheatersIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",
                    marginRight: "1px",
                  }}
                  alt=""
                />
                TvSeries
              </Link>
            </li>
            <li className="nav-item  nav__link">
              <img
                src={MovieIcon}
                style={{
                  fontSize: "17px",
                  marginBottom: "2px",
                  marginRight: "1px",
                }}
                alt=""
              />
              <a href="https://c9music.netlify.app/" target="_blank">
                Songs
              </a>
            </li>
            <li className="nav-item  nav__link">
              <Link className="nav-link">
                <GamesIcon
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",
                    marginLeft: "5px",
                  }}
                />
              </Link>
              <a href="https://poki.com/" target="_blank">
                Games
              </a>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/not">
                Search
              </Link>
            </li> */}
          </ul>

          <div className="all__right">
            <div className="btn-login">
              {localStorage.getItem("token") ? (
                <button
                  className=" login-btn"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setRedirect(true);
                  }}
                >
                  Logout
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
