import React from "react";
import useSiteMetaData from "../hooks/useSiteMetadata";

interface SEOProps {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
}

export default function SEO({
  children,
  description,
  pathname,
  title,
}: SEOProps) {
  const data = useSiteMetaData();

  if (!data) return null;

  const {
    description: defaultDescription,
    title: defaultTitle,
    siteUrl,
  } = data;

  const seoMetaData = {
    title: title ?? defaultTitle,
    description: description ?? defaultDescription,
    siteUrl: `${siteUrl}${pathname ?? ""}`,
  };

  console.log(seoMetaData.siteUrl);

  return (
    <>
      <title>{seoMetaData.title}</title>
      {seoMetaData.description && (
        <meta name="description" content={seoMetaData.description} />
      )}
      {children}
    </>
  );
}
