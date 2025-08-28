export const generateMeta = ({
  title,
  description,
  keywords,
  imageUrl,
  currentUrl,
}: {
  title: string;
  description: string;
  keywords?: string;
  imageUrl?: string;
  currentUrl?: string;
}) => (
  <>
    {title && (
      <>
        <meta name="title" content={title} />
        <meta name="application-name" content={title} />
        <meta name="generator" content={title} />
      </>
    )}
    {description && (
      <>
        <meta name="description" content={description} />
      </>
    )}
    {keywords && (
      <>
        <meta name="keywords" content={keywords} />
      </>
    )}
    {imageUrl && (
      <>
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <link rel="image_src" href={imageUrl} />
        <meta property="og:description" content={description} />
        <meta property="og:image:alt" content={title} />
      </>
    )}
    {currentUrl && (
      <>
        <meta property="og:url" content={currentUrl} />
        <link rel="canonical" href={currentUrl} />
      </>
    )}
    <meta name="robots" content="index,follow" />
    <meta name="author" content="thiepmoi.online" />
    <meta property="og:site_name" content="thiepmoi.online" />
    <meta property="fb:app_id" content="1488307254808965" />
    <meta name="googlebot" content="index, follow" />
  </>
);
