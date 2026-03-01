
"use client";
import { Helmet } from 'react-helmet-async';
import { useContentStore } from '@/store/contentStore';

const SEO = ({ title, description, image }) => {
  const { seo } = useContentStore();

  const siteTitle = title ? `${title} | ${seo.siteTitle}` : seo.siteTitle;
  const metaDescription = description || seo.siteDescription;
  const metaImage = image || seo.ogImage;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={seo.siteKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
