import Head from 'next/head'
import FaviconIcon  from "../assets/images/logo.png";

const SEO = ({tittle, description}) => {
    return ( 
        <>
        <Head>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://metatags.io/"/>
            <meta property="og:title" content="Degentlemens's Club NTF"/>
            <meta property="og:description" content="Et est in consequat id. Esse cillum aliqua eiusmod laborum dolor Lorem ex id labore cupidatat dolor eiusmod quis adipisicing. Tempor officia enim laboris duis labore qui. Voluptate cupidatat voluptate consectetur commodo nisi nulla ea labore qui ullamco est laboris. Enim nostrud officia nisi in mollit adipisicing irure id eu quis non et cillum. Culpa cillum reprehenderit amet ipsum laboris irure nisi dolore nisi. Enim reprehenderit sunt dolor magna amet duis ad elit nostrud elit sit cillum aute."/>
            <meta property="og:image" content="http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbayc-mutant-hero.0138b4a6.jpg&w=1920&q=75"/>

            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://metatags.io/"/>
            <meta property="twitter:title" content="Degentlemens's Club NTF"/>
            <meta property="twitter:description" content="Et est in consequat id. Esse cillum aliqua eiusmod laborum dolor Lorem ex id labore cupidatat dolor eiusmod quis adipisicing. Tempor officia enim laboris duis labore qui. Voluptate cupidatat voluptate consectetur commodo nisi nulla ea labore qui ullamco est laboris. Enim nostrud officia nisi in mollit adipisicing irure id eu quis non et cillum. Culpa cillum reprehenderit amet ipsum laboris irure nisi dolore nisi. Enim reprehenderit sunt dolor magna amet duis ad elit nostrud elit sit cillum aute."/>
            <meta property="twitter:image" content="http://localhost:3001/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbayc-mutant-hero.0138b4a6.jpg&w=1920&q=75"/>

            <meta name="theme-color" content="#323232"/>
            <link rel="shortcut icon" href="/icono.ico" />
            <title>{tittle}</title>
            <meta name={"description"} content={description}/>
        </Head>
        </>
     );
}
 
export default SEO;