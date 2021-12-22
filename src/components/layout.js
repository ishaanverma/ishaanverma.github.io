import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import {
  heading,
  navLinks,
  navLinkItem,
  navbar,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <nav className={navbar}>
        <div className={navLinks}>
          <div className={navLinkItem}>
            <Link to="/">
              Home
            </Link>
          </div>
          <div className={navLinkItem}>
            <Link to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
