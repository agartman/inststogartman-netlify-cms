import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Insinööritoimisto Jarmo Gartman"
            style={{ width: "14em", height: "10em", fill: "white" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Takaisin alkuun
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Yhteystiedot
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Ota yhteyttä
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact/examples">
                        Esimerkkikohteet
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
