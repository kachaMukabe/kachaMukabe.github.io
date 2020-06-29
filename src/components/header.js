import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: "right"
      }}
    >
      <a style={{backgroundImage:`none`}} href="https://dev.to/kmukabe"><span className="badge secondary">Blog</span></a>
      {` `}
      {/* <Link style={{backgroundImage:`none`}} to="/about/"><span className="badge secondary">About</span></Link> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
