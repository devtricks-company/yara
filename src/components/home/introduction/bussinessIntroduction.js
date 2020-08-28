import React from 'react';
import {graphql,StaticQuery} from 'gatsby';


const BussinessIntroduction = () => {

   return <StaticQuery query={graphql`
    
    {
  allWordpressPage(filter: {title: {eq: "Home"}}) {
    edges {
      node {
        acf {
          yara_bussiness_consulting {
            yara_bussiness_consulting_header_text
            yara_bussiness_consulting_image {
              source_url
              title
            }
            yara_bussiness_consutlng_link_1 {
              title
              url
            }
            yara_bussiness_consutlng_link_2 {
              title
              url
            }
            yara_bussiness_consutlng_link_3 {
              title
              url
            }
            yara_bussiness_consutlng_link_4 {
              title
              url
            }
            yara_bussiness_consutlng_link_5 {
              title
              url
            }
            yara_bussiness_consutlng_link_6 {
              title
              url
            }
          }
        }
      }
    }
  }
}

    
    
    `}
    render={props => {
       return <div className="bussinessIntroduction">
        <img src={props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consulting_image.source_url} alt=""/>
        <h3>{props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consulting_header_text}</h3>
        <p><a href={props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_1.url}>
        {props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_1.title}
            </a></p>
        <p><a href={props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_2.url}>
        {props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_2.title}
            </a></p>
        <p><a href={props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_3.url}>
        {props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_3.title}
            </a></p>
        <p><a href={props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_4.url}>
        {props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_4.title}
            </a></p>
        <p><a href={props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_5.url}>
        {props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_5.title}
            </a></p>
        <p><a href={props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_6.url}>
        {props.allWordpressPage.edges[0].node.acf.yara_bussiness_consulting.yara_bussiness_consutlng_link_6.title}
            </a></p>
    </div>
    }}
    />


  
}

export default BussinessIntroduction
