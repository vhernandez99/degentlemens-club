import AccordionFaq from "./AcordionFaq/Acordion";
import "react-light-accordion/demo/css/index.css";

const Faq = () => {
    return ( 
        <div className="text-white rounded-lg pt-8 pr-2 bg-Containers-0 mb-5 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10">
            <div className="text-center text-3xl mb-10">
                <h1>FAQ</h1>
            </div>

            <div className="flex flex-col mx-10">
                <div className="mb-5">
                    <AccordionFaq title={"Lorem lorem lorem"} content={"Incididunt amet laboris laborum tempor aliquip irure laboris ullamco. Culpa sit nostrud sit minim mollit ex est excepteur. Et aliquip elit id duis reprehenderit labore adipisicing veniam. Et esse occaecat exercitation veniam commodo mollit est. Adipisicing anim dolor exercitation quis ut ullamco ullamco ipsum amet in anim tempor. Exercitation mollit consectetur ea esse ad nostrud duis laboris nisi occaecat veniam occaecat dolor non. Nisi fugiat proident exercitation consequat anim occaecat pariatur."}/>
                </div>
                <div className="mb-5">
                    <AccordionFaq title={"Lorem lorem lorem"} content={"Incididunt amet laboris laborum tempor aliquip irure laboris ullamco. Culpa sit nostrud sit minim mollit ex est excepteur. Et aliquip elit id duis reprehenderit labore adipisicing veniam. Et esse occaecat exercitation veniam commodo mollit est. Adipisicing anim dolor exercitation quis ut ullamco ullamco ipsum amet in anim tempor. Exercitation mollit consectetur ea esse ad nostrud duis laboris nisi occaecat veniam occaecat dolor non. Nisi fugiat proident exercitation consequat anim occaecat pariatur."}/>
                </div>
                <div className="mb-5">
                    <AccordionFaq title={"Lorem lorem lorem"} content={"Incididunt amet laboris laborum tempor aliquip irure laboris ullamco. Culpa sit nostrud sit minim mollit ex est excepteur. Et aliquip elit id duis reprehenderit labore adipisicing veniam. Et esse occaecat exercitation veniam commodo mollit est. Adipisicing anim dolor exercitation quis ut ullamco ullamco ipsum amet in anim tempor. Exercitation mollit consectetur ea esse ad nostrud duis laboris nisi occaecat veniam occaecat dolor non. Nisi fugiat proident exercitation consequat anim occaecat pariatur."}/>
                </div>
                <div className="mb-5">
                    <AccordionFaq title={"Lorem lorem lorem"} content={"Incididunt amet laboris laborum tempor aliquip irure laboris ullamco. Culpa sit nostrud sit minim mollit ex est excepteur. Et aliquip elit id duis reprehenderit labore adipisicing veniam. Et esse occaecat exercitation veniam commodo mollit est. Adipisicing anim dolor exercitation quis ut ullamco ullamco ipsum amet in anim tempor. Exercitation mollit consectetur ea esse ad nostrud duis laboris nisi occaecat veniam occaecat dolor non. Nisi fugiat proident exercitation consequat anim occaecat pariatur."}/>
                </div>
                <div className="mb-5">
                    <AccordionFaq title={"Lorem lorem lorem"} content={"Incididunt amet laboris laborum tempor aliquip irure laboris ullamco. Culpa sit nostrud sit minim mollit ex est excepteur. Et aliquip elit id duis reprehenderit labore adipisicing veniam. Et esse occaecat exercitation veniam commodo mollit est. Adipisicing anim dolor exercitation quis ut ullamco ullamco ipsum amet in anim tempor. Exercitation mollit consectetur ea esse ad nostrud duis laboris nisi occaecat veniam occaecat dolor non. Nisi fugiat proident exercitation consequat anim occaecat pariatur."}/>
                </div>
            </div>
        </div>
     );
}
 
export default Faq;