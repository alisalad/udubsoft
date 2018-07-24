import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components";

import logo from "../images/udub-3.svg";

const HeaderWrapper = styled.div`
    background: rebeccapurple;
    margin-bottom: 0rem;

    h1 {
      img {
        height: 100px;
        
      }
    }
`;


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        
      }}
    >
      <h1 style={{ margin: 1, }}>
        <Link
          to="/"
          style={{
            color: '#FAD961',
            textDecoration: 'none',
          
  
          }}
        >
          <img src={logo} alt="Udub Software"/>
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
);

export default Header
