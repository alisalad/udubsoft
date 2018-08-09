import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div
    style={{
      background: '#C7D6DD',
      fontFamily: 'montserrat',
      fontWeight: '700',
      fontSize: '14px',
      fontKerning: 'auto',
      paddingTop: '10px',
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="/services">SERVICES</Link>
      </li>
      <li>
        <Link to="/blog">BLOG</Link>
      </li>
      <li>
        <Link to="/contact">CONTACT US</Link>
      </li>
    </ul>
  </div>
)

export default Menu
