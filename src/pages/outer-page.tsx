import React from "react";
import { HeadFC, navigate } from "gatsby";
import SEO from "../components/SEO";

export const Head: HeadFC = ({ location }) => (
  <SEO
    title="Other Page"
    description="Other Page description"
    pathname={location.pathname}
  />
);

export default function OuterPage() {
  return (
    <div>
      Outer Page
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </button>
    </div>
  );
}
