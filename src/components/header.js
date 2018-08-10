import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../images/udub-3.svg'

const HeaderWrapper = styled.div`
  background: #402060;
  margin-bottom: 0rem;
  margin-top: -1.5rem;

  h1 {
    img {
      height: 100px;
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '2.45rem 20.0875rem',
      }}
    >
      <h1 style={{ margin: 1 }}>
        <Link
          to="/"
          style={{
            color: '#FAD961',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Udub Software" />
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
)

export default Header
