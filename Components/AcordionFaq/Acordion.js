import { Accordion, AccordionItem } from "react-light-accordion";
const AccordionFaq = ({ title, content }) => {
  const Text = () => <p className="p-5 text-justify tracking-wider font-extralight text-xs">{content}</p>;
  return (
    <>
      <div className=" w-full flex flex-col text-xs">
        <Accordion atomic={false}>
          <AccordionItem title={title}>
            <Text/>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionFaq;