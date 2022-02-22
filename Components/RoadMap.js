import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faRocket,
  faStore,
  faVrCardboard,
} from "@fortawesome/free-solid-svg-icons";
import { isMobile } from "react-device-detect";
const RoadMap = () => {
  console.log(isMobile);

  return (
    <>
      {!isMobile && (
        <div
          data-aos={isMobile ? "" : "fade-up"}
          id="roadmap"
          className="neondiv text-white md:rounded-lg md:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10"
        >
          <div className="text-center flex justify-evenly items-center neontextyellow text-3xl uppercase mb-10">
            <hr className="w-5/12 in:hidden lineneonpink"></hr>
            <h1>RoadMap</h1>
            <hr className="w-5/12 in:hidden lineneonpink"></hr>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 lg:p-10 in:px-3">
            <div
              data-aos={isMobile ? "" : "flip-right"}
              className="flex group flex-col w-full h-auto border border-white rounded-lg "
            >
              <div className="bg-Primarycolors-10 py-20 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl">
                <FontAwesomeIcon className="w-32 h-32" icon={faRocket} />
              </div>
              <div className="flex flex-col justify-center items-start h-auto px-8 py-4  tracking-wide text-xl duration-300 group-hover:bg-Primarycolors-10 group-hover:text-Containers-10">
                <div className="text-3xl w-full flex justify-evenly items-center neontextyellow">
                  <hr className="w-5/12 lineneonpink"></hr>
                  <h1>Q1</h1>
                  <hr className="w-5/12 lineneonpink"></hr>
                </div>

                <p className="my-3 text-2xl">● Launch Collection</p>

                <p className="my-3 text-2xl">
                  ● Airdrop prizes to giveaway winners.
                </p>
                <p>
                  -All NFTs won in giveaways pre-mint will be sent directly to
                  their wallets on mint day!
                </p>

                <p className="my-3 text-2xl">
                  {" "}
                  ● Strengthen the Degentlemen’s community.{" "}
                </p>
                <p>
                  {" "}
                  -VIP section will open to HOLDERS ONLY. Filled with
                  Holders-only benefits.{" "}
                </p>

                <p className="my-3 text-2xl"> ● Collaborations </p>
                <p>
                  {" "}
                  -Network and organize collabs with different projects that
                  share the same vision as we do.
                </p>

                <p className="my-3 text-2xl"> ● Fund Community Wallet. </p>
                <p>
                  {" "}
                  -15% of overall mint will be sent directly to Community
                  wallet.{" "}
                </p>
                <p>
                  {" "}
                  -40% of all secondary sales will also be distributed into the
                  community wallet.{" "}
                </p>
              </div>
            </div>

            <div
              data-aos={isMobile ? "" : "flip-right"}
              className="flex group flex-col w-full h-auto border border-white rounded-lg "
            >
              <div className="bg-Primarycolors-10 py-20 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl ">
                <FontAwesomeIcon className="w-32 h-32" icon={faStore} />
              </div>
              <div className="flex flex-col justify-center items-start h-auto px-8 py-4  tracking-wide text-xl duration-300 group-hover:bg-Primarycolors-10 group-hover:text-Containers-10">
                <div className="text-3xl w-full flex justify-evenly items-center neontextyellow">
                  <hr className="w-5/12 lineneonpink"></hr>
                  <h1>Q2</h1>
                  <hr className="w-5/12 lineneonpink"></hr>
                </div>
                <p className="my-3 text-2xl">● Launch Merch Store</p>

                <p>
                  - Upon opening, 50 OG members and 50 VIP members will be able
                  to claim Merch of their choice for FREE.
                </p>
                <p>
                  - Merch store will also be open to all holders at a discount
                  while also receiving weekly giveaways of merch.{" "}
                </p>
                <p>
                  - NON holders will be able to buy merch at full price and also
                  win them in public giveaways.{" "}
                </p>

                <p className="my-3 text-2xl">
                  {" "}
                  ● Expand the Degentlemen’s Team{" "}
                </p>
                <p>
                  {" "}
                  - Hire developers/contractors as needed for what we may have
                  coming… Virtual Degentlemen’s Club??{" "}
                </p>

                <p className="my-3 text-2xl">
                  {" "}
                  ● Monthly meetings in VIP section to vote on certain steps to
                  take as a community.{" "}
                </p>
                <p>
                  {" "}
                  - Holders will vote on all decisions we make as a project and
                  what initiatives we pursue.
                </p>

                <p className="my-3 text-2xl"> ● Continue building… </p>
              </div>
            </div>

            <div
              data-aos={isMobile ? "" : "flip-right"}
              className="flex group flex-col w-full h-auto border border-white rounded-lg "
            >
              <div className="bg-Primarycolors-10 py-20 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl ">
                <FontAwesomeIcon className="w-32 h-32" icon={faPaintBrush} />
              </div>
              <div className="flex flex-col justify-start items-start h-full px-8 py-4  tracking-wide text-xl duration-300 group-hover:bg-Primarycolors-10 group-hover:text-Containers-10">
                <div className="text-3xl w-full flex justify-evenly items-center neontextyellow">
                  <hr className="w-5/12 lineneonpink"></hr>
                  <h1>Q3</h1>
                  <hr className="w-5/12 lineneonpink"></hr>
                </div>
                <p className="my-3 text-2xl">
                  ● Begin creating SECOND collection of Degentlemen’s Club.
                </p>

                <p>
                  - HOLDERS will be voting and choosing traits that are going to
                  be used in the second collection, letting VIP members have
                  their ideas be a part of the project.
                </p>
              </div>
            </div>

            <div
              data-aos={isMobile ? "" : "flip-right"}
              className="flex group flex-col w-full h-auto border border-white rounded-lg "
            >
              <div className="bg-Primarycolors-10 py-20 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl ">
                <FontAwesomeIcon className="w-32 h-32" icon={faVrCardboard} />
              </div>
              <div className="flex flex-col justify-start items-start h-full px-8 py-4  tracking-wide text-xl duration-300 group-hover:bg-Primarycolors-10 group-hover:text-Containers-10">
                <div className="text-3xl w-full flex justify-evenly items-center neontextyellow">
                  <hr className="w-5/12 lineneonpink"></hr>
                  <h1>Q4</h1>
                  <hr className="w-5/12 lineneonpink"></hr>
                </div>
                <p className="my-3 text-2xl">● Launch Second collection</p>

                <p>
                  - Launch second collection where all holders will be able to
                  mint for FREE. Any unclaimed will be for public mint at a
                  price Tbd.
                </p>

                <p className="my-3 text-2xl"> ● INITIATE ROADMAP PHASE 2 </p>
                <p className="my-3 text-2xl">
                  {" "}
                  ● Preparing for the Metaverse!{" "}
                </p>
                <p>
                  {" "}
                  - Upon 100% sellout, we will begin the ultimate goal of
                  Degentlemen’s Club…Bringing our Saber-Toothed Degents into the
                  METAVERSE!{" "}
                </p>
                <p>
                  - Dengentlemens Club will be purchasing land in the metaverse
                  soon after sellout to reserve for building and developing our
                  virtual Club/Casino in the Metaverse!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div
       
          id="roadmap"
          className="neondiv text-white md:rounded-lg md:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10"
        >
          <div className="text-center flex justify-evenly items-center neontextyellow text-3xl uppercase mb-10">
            <hr className="w-5/12 in:hidden lineneonpink"></hr>
            <h1>RoadMap</h1>
            <hr className="w-5/12 in:hidden lineneonpink"></hr>
          </div>
          <div className="grid lg:grid-cols-2 gap-5 lg:p-10 in:px-3">
            <div
              
              className="flex group flex-col w-full h-auto border border-white rounded-lg "
            >
              <div className="bg-Primarycolors-10 py-20 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl">
                <FontAwesomeIcon className="w-32 h-32" icon={faRocket} />
              </div>
              <div className="flex flex-col justify-center items-start h-auto px-8 py-4  tracking-wide text-xl duration-300 group-hover:bg-Primarycolors-10 group-hover:text-Containers-10">
                <div className="text-3xl w-full flex justify-evenly items-center neontextyellow">
                  <hr className="w-5/12 lineneonpink"></hr>
                  <h1>Q1</h1>
                  <hr className="w-5/12 lineneonpink"></hr>
                </div>

                <p className="my-3 text-2xl">● Launch Collection</p>

                <p className="my-3 text-2xl">
                  ● Airdrop prizes to giveaway winners.
                </p>
                <p>
                  -All NFTs won in giveaways pre-mint will be sent directly to
                  their wallets on mint day!
                </p>

                <p className="my-3 text-2xl">
                  {" "}
                  ● Strengthen the Degentlemen’s community.{" "}
                </p>
                <p>
                  {" "}
                  -VIP section will open to HOLDERS ONLY. Filled with
                  Holders-only benefits.{" "}
                </p>

                <p className="my-3 text-2xl"> ● Collaborations </p>
                <p>
                  {" "}
                  -Network and organize collabs with different projects that
                  share the same vision as we do.
                </p>

                <p className="my-3 text-2xl"> ● Fund Community Wallet. </p>
                <p>
                  {" "}
                  -15% of overall mint will be sent directly to Community
                  wallet.{" "}
                </p>
                <p>
                  {" "}
                  -40% of all secondary sales will also be distributed into the
                  community wallet.{" "}
                </p>
              </div>
            </div>

            <div
           
              className="flex group flex-col w-full h-auto border border-white rounded-lg "
            >
              <div className="bg-Primarycolors-10 py-20 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl ">
                <FontAwesomeIcon className="w-32 h-32" icon={faStore} />
              </div>
              <div className="flex flex-col justify-center items-start h-auto px-8 py-4  tracking-wide text-xl duration-300 group-hover:bg-Primarycolors-10 group-hover:text-Containers-10">
                <div className="text-3xl w-full flex justify-evenly items-center neontextyellow">
                  <hr className="w-5/12 lineneonpink"></hr>
                  <h1>Q2</h1>
                  <hr className="w-5/12 lineneonpink"></hr>
                </div>
                <p className="my-3 text-2xl">● Launch Merch Store</p>

                <p>
                  - Upon opening, 50 OG members and 50 VIP members will be able
                  to claim Merch of their choice for FREE.
                </p>
                <p>
                  - Merch store will also be open to all holders at a discount
                  while also receiving weekly giveaways of merch.{" "}
                </p>
                <p>
                  - NON holders will be able to buy merch at full price and also
                  win them in public giveaways.{" "}
                </p>

                <p className="my-3 text-2xl">
                  {" "}
                  ● Expand the Degentlemen’s Team{" "}
                </p>
                <p>
                  {" "}
                  - Hire developers/contractors as needed for what we may have
                  coming… Virtual Degentlemen’s Club??{" "}
                </p>

                <p className="my-3 text-2xl">
                  {" "}
                  ● Monthly meetings in VIP section to vote on certain steps to
                  take as a community.{" "}
                </p>
                <p>
                  {" "}
                  - Holders will vote on all decisions we make as a project and
                  what initiatives we pursue.
                </p>

                <p className="my-3 text-2xl"> ● Continue building… </p>
              </div>
            </div>

            <div
             
              className="flex group flex-col w-full h-auto border border-white rounded-lg "
            >
              <div className="bg-Primarycolors-10 py-20 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl ">
                <FontAwesomeIcon className="w-32 h-32" icon={faPaintBrush} />
              </div>
              <div className="flex flex-col justify-start items-start h-full px-8 py-4  tracking-wide text-xl duration-300 group-hover:bg-Primarycolors-10 group-hover:text-Containers-10">
                <div className="text-3xl w-full flex justify-evenly items-center neontextyellow">
                  <hr className="w-5/12 lineneonpink"></hr>
                  <h1>Q3</h1>
                  <hr className="w-5/12 lineneonpink"></hr>
                </div>
                <p className="my-3 text-2xl">
                  ● Begin creating SECOND collection of Degentlemen’s Club.
                </p>

                <p>
                  - HOLDERS will be voting and choosing traits that are going to
                  be used in the second collection, letting VIP members have
                  their ideas be a part of the project.
                </p>
              </div>
            </div>

            <div
         
              className="flex group flex-col w-full h-auto border border-white rounded-lg "
            >
              <div className="bg-Primarycolors-10 py-20 group-hover:bg-Containers-10 text-Containers-10 duration-300 group-hover:text-Navbar-0 flex justify-center items-center text-8xl ">
                <FontAwesomeIcon className="w-32 h-32" icon={faVrCardboard} />
              </div>
              <div className="flex flex-col justify-start items-start h-full px-8 py-4  tracking-wide text-xl duration-300 group-hover:bg-Primarycolors-10 group-hover:text-Containers-10">
                <div className="text-3xl w-full flex justify-evenly items-center neontextyellow">
                  <hr className="w-5/12 lineneonpink"></hr>
                  <h1>Q4</h1>
                  <hr className="w-5/12 lineneonpink"></hr>
                </div>
                <p className="my-3 text-2xl">● Launch Second collection</p>

                <p>
                  - Launch second collection where all holders will be able to
                  mint for FREE. Any unclaimed will be for public mint at a
                  price Tbd.
                </p>

                <p className="my-3 text-2xl"> ● INITIATE ROADMAP PHASE 2 </p>
                <p className="my-3 text-2xl">
                  {" "}
                  ● Preparing for the Metaverse!{" "}
                </p>
                <p>
                  {" "}
                  - Upon 100% sellout, we will begin the ultimate goal of
                  Degentlemen’s Club…Bringing our Saber-Toothed Degents into the
                  METAVERSE!{" "}
                </p>
                <p>
                  - Dengentlemens Club will be purchasing land in the metaverse
                  soon after sellout to reserve for building and developing our
                  virtual Club/Casino in the Metaverse!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoadMap;
