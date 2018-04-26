import React from "react";

export default ({ data, pathContext, transition }) => (
  <div>
    <div
      style={transition && transition.style}
      dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    />
  </div>
);

export const pageQuery = graphql`
  query SlideByPath($absolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $absolutePath }) {
      html
    }
  }
`;
