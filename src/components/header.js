import React from 'react';
import {graphql,StaticQuery} from 'gatsby';
import { useEffect } from 'react';
import Parallax from 'parallax-js'

const Header = () => {
  useEffect(() => {
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  },[])
    return(
      <StaticQuery query={graphql`
   {
  allWordpressPage(filter: {title: {eq: "Home"}}) {
    edges {
      node {
        acf {
          header_text
          header_image {
            source_url
          }
          Quotes
        }
      }
    }
  }
}

  `}
  render={props => (
    <header id="scene" className="header" style={{background:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${props.allWordpressPage.edges[0].node.acf.header_image.source_url})`}}>
     <div data-depth="0.2" class="header-content">
     <h3 class="text-center">{props.allWordpressPage.edges[0].node.acf.Quotes}</h3>
      <h1>{props.allWordpressPage.edges[0].node.acf.header_text}</h1>
     </div>
     <div  data-depth="0.6">
        <div className="bars"></div>
     </div>

    </header>
  )}
  />
    )
  }

export default Header
