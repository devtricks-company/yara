import React from 'react';
import {graphql,StaticQuery} from 'gatsby';

const Introduction = () => {
   return <StaticQuery query={graphql`
        {
  allWordpressPage(filter: {title: {eq: "Home"}}) {
    edges {
      node {
        acf {
          yara_intro {
            yara_introduction_fild
            yara_name
          }
        }
      }
    }
  }
}

    
    
    
    `}

    render={props =>(
        <div className="introduction__section">
        <h3>INTODUCTION</h3>
        <h2>{props.allWordpressPage.edges[0].node.acf.yara_intro.yara_name}</h2>
        <p>{props.allWordpressPage.edges[0].node.acf.yara_intro.yara_introduction_fild}</p>
        
    </div>
    )}
    />



    
}

export default Introduction
