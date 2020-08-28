import React from "react"
import { graphql, StaticQuery, Link } from "gatsby";
import logo from '../images/yaralogo.png';
import {FiTwitter,FiFacebook,FiLinkedin} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';
import Addressbar from './addressbar'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems {
          edges {
            node {
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}

    render={props => (
      <>
      <div className="adnav">
      <Addressbar />
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div className="container">
                <a  href="/" className="navbar-brand d-block d-lg-none">
                    <img style={{width:"150px"}} src={logo} alt="logo"/>
                </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav main-menu">
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item =>
                
                <li className="nav-item">
                    <Link className="nav-link" to={`/${item.object_slug}`}>{item.title}</Link>
                </li>
                )}
        </ul>
        <ul className="social-menu">
            <li className="social-item">
                <Link to="/" className="social-link">
                  <FiTwitter />
                </Link>
            </li>
            <li className="social-item">
            <Link to="/" className="social-link">
                  <FiFacebook />
                </Link>
            </li>
            <li className="social-item">
            <Link to="/" className="social-link">
                  <AiOutlineInstagram />
                </Link>
            </li>
            <li className="social-item">
            <Link to="/" className="social-link">
                  <FiLinkedin />
                </Link>
            </li>
        </ul>
      </div>
      </div>
    </nav>
    </div>
              </>
    )}
  />

 
)

export default Navbar
