import AccordionFaq from "./AcordionFaq/Acordion";
import "react-light-accordion/demo/css/index.css";

const Faq = () => {
  return (
    <div
      id="faq"
      data-aos="fade-up"
      className="neondiv text-white lg:rounded-lg pt-8 pr-2 bg-Containers-0 mb-5 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10"
    >
      <div className="text-center flex justify-evenly items-center neontextyellow text-3xl mb-10">
        <hr className="w-5/12 in:hidden lineneonpink"></hr>
        <h1>FAQ</h1>
        <hr className="w-5/12 in:hidden lineneonpink"></hr>
      </div>

      <div className="flex flex-col mx-10">
        <div className="mb-5">
          <AccordionFaq
            title={"What is the Degentlemen’s Club?"}
            content={
              "- The Degentlemen’s club is a collection of 6000 Saber-toothed degens roaming in the Ethereum jungle. Each NFT is unique and comes with holders-only benefits."
            }
          />
        </div>
        <div className="mb-5">
          <AccordionFaq
            title={"What can you promise us?"}
            content={
              "- The only thing we can promise our holders is a unique NFT, and access to the 'VIP section', with an exclusive holders-only chat where everyone has a say in where we take this project. We won’t give any false promises. We have plans to build and will let the community decide what we do next. "
            }
          />
        </div>
        <div className="mb-5">
          <AccordionFaq title={"When launch?"} content={"-March 20, 2022."} />
        </div>
        <div className="mb-5">
          <AccordionFaq
            title={"Mint price?"}
            content={"0.04 ETH"}
          />
        </div>
        <div className="mb-5">
          <AccordionFaq
            title={"Is there a WL?"}
            content={
              "- There are 500 spots reserved for WL. The remaining will be for public sale."
            }
          />
        </div>
        <div className="mb-5">
          <AccordionFaq
            title={"How many can I mint for WL?"}
            content={"Presale: Max 5, 5 per tx, Public: Max 15, 5 per tx"}
          />
        </div>
        <div className="mb-5">
          <AccordionFaq
            title={"Where can I mint?"}
            content={
              "- You will be able to mint from our website and if experienced, directly from contract."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
