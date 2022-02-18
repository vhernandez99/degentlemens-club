import Head from 'next/head'
import FaviconIcon  from "../assets/images/logo.png";

const SEO = ({tittle, description}) => {
    return ( 
        <>
        <Head>
            <meta name="theme-color" content="#323232"/>
            <link rel="shortcut icon" href="/icono.ico" />
            <title>{tittle}</title>
            <meta name={"description"} content={description}/>
        </Head>
        </>
     );
}
 
export default SEO;