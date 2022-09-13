import { graphql, useStaticQuery } from "gatsby";

export default function useSiteMetaData() {
  const { site }: Queries.SiteMetaDataQuery = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  );

  return site?.siteMetadata;
}
