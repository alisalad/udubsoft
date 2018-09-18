import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div
    style={{
      background: '#9D7CBF',
      fontFamily: 'montserrat',
      fontWeight: '200',
      fontSize: '15px',
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

export default Footer
