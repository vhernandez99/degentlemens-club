import Image from "next/image";
import ntfImage from "../assets/images/ntfimage.jpg";
import Logo from "../assets/images/Logogege.png";
import ntfImagePng from "../assets/images/logofinal.png";
import BannerImage from "../assets/images/imgmintcorner2.png";
import IconImage from "../assets/images/imgmintleft.png";
import newlogo from "../assets/images/Neon_sign_Transparent.png";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
const Mint = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [mintValue, SetMintValue] = useState(1);
  const [feedback, setFeedback] = useState("Maybe it's your lucky day.");
  const [claimingNft, setClaimingNft] = useState(false);
  const claimNFTs = (_amount, cost) => {
    console.log("first");
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your Ethclusive NFT...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(_amount)
      .send({
        gasLimit: `${200000 * mintValue}`,
        to: "0xE4576C806f5D39D460f70c7a63b1A1FbDE8eafF3",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (cost * _amount).toString(),
          "ether"
        ),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "WOW, you now own a Etclusive NFT go visit Opensea.io to view it."
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };
  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };
  useEffect(() => {
    getData();
  }, [blockchain.account]);
  return (
    <div
      id="Mint"
      data-aos="fade-up"
      className="neondiv text-white lg:rounded-lg lg:mb-5 pt-8 pr-2 bg-Containers-0 pb-8 xl:ml-52 xl:mr-52 xlmin:ml-0 xlmin:mr-0 border-t-2 border-t-Containers-10 border-b-2 border-b-Containers-10"
    >
      <div className="text-cente flex justify-evenly items-center neontextyellowr text-5xl mb-5">
        <hr className="w-5/12 in:hidden lineneonpink"></hr>
        <h1 className="neontextyellow">Mint</h1>
        <hr className="w-5/12 in:hidden lineneonpink"></hr>
      </div>
      <div className="ni:flex">
        <div className="ni:w-1/2 in:hidden flex justify-center items-center">
          <Image alt="" src={ntfImagePng} />
        </div>
        <div className="ni:w-1/2 m-5 p-5 border-4 lineneonpink rounded-lg">
          <div className="flex w-full h-1/2">
            <div className="w-8/12 font-bold">
              <h1 className="text-2xl mb-3">Degentimes club</h1>
            </div>
            <div className="w-4/12 flex justify-center negativeBannerImg">
              <Image alt="" objectFit="cover" src={BannerImage} />
            </div>
          </div>


          <div className="h-1/2">
            <div className="flex justify-between ni:text-2xl mt-5">
              <input
                className="bg-transparent w-full"
                placeholder="0.06 ETH"
                type="number"
              />
            </div>
            <div className="flex justify-between border-t-2 border-b-2 border-white my-5 py-2 ni:text-2xl">
              <h1>TOTAL</h1>
              <h1>0.06 ETH</h1>
            </div>
            <div className="space-y-2">
              <button
                className="MintBtn"
                onClick={(e) => {
                  console.log(blockchain.account);
                  if (
                    claimingNft ||
                    blockchain.account === "" ||
                    blockchain.smartContract === null
                  ) {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                    return;
                  } else {
                    claimNFTs(1, 0.01);
                  }
                }}
              >
                MINT
              </button>
              <div>{blockchain.account}</div>
              <button
                className="MintBtn"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(connect());
                  getData();
                }}
              >
                Connect to Metamask
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
