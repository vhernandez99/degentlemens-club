import Head from 'next/head'
import FaviconIcon  from "../assets/images/logo.png";

const SEO = ({tittle, description}) => {
    return ( 
        <>
        <Head>
            <title>{tittle}</title>
            <meta name={"description"} content={description}/>
        </Head>
        </>
     );
}
 
export default SEO;