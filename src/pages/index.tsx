import React from "react";
import { graphql, HeadFC, Link } from "gatsby";
import SEO from "../components/SEO";

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="Home Page"
    description="Home Page description"
    pathname={location.pathname}
  />
);

export default function HomePage() {
  const [count, setCount] = React.useState(0);

  const handleCountClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main>
      <button onClick={handleCountClick}>count up</button>
      <Link to="/outer-page">Other Page</Link>
      <p>{count}</p>
    </main>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
