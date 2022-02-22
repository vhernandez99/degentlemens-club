import Head from "next/head";
import FaviconIcon from "../assets/images/logo.png";

const SEO = ({ tittle, description }) => {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Degentlemen's  Club" />
        <meta
          property="og:description"
          content="The Degentlemen's Club is a collection of 6,000 Saber-toothed Degens roaming in the Ethereum jungle. Each NFT is unique and grants each holder access to the VIP section with holders-only benefits. Every single member in the VIP section will have a say in the steps we take for the future of this project."
        />
        <meta
          property="og:image"
          content="http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbayc-mutant-hero.0138b4a6.jpg&w=1920&q=75"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Degentlemen's Club" />
        <meta
          property="twitter:description"
          content="The Degentlemen's Club is a collection of 6,000 Saber-toothed Degens roaming in the Ethereum jungle. Each NFT is unique and grants each holder access to the VIP section with holders-only benefits. Every single member in the VIP section will have a say in the steps we take for the future of this project."
        />
        <meta
          property="twitter:image"
          content="http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbayc-mutant-hero.0138b4a6.jpg&w=1920&q=75"
        />

        <meta name="theme-color" content="#323232" />
        <link rel="shortcut icon" href="/icono.ico" />
        <title>{tittle}</title>
        <meta name={"description"} content={description} />
      </Head>
    </>
  );
};

export default SEO;
