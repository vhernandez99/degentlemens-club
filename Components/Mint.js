import Image from "next/image";
import ntfImage from "../assets/images/ntfimage.jpg";
import Logo from "../assets/images/Logogege.png";
import ntfImagePng from "../assets/images/logofinal.png";
import BannerImage from "../assets/images/banner.png";
import IconImage from "../assets/images/imgmintleft.png";
import neonLogo from "../assets/images/neonLogo.png";
import blackLogo from "../assets/images/blackLogo.png";
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
  const claimNFTs = () => {
    if (mintValue <= 0) {
      return;
    }
    setFeedback("Minting your Ethclusive NFT...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintValue)
      .send({
        gasLimit: `${160000 * mintValue}`,
        to: "0x08b1AAef9fD158BbDF21C3Cad6408aFA7D35DF4c",
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (0.04 * mintValue).toString(),
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
  const connectWallet = () => {
    e.preventDefault();
    dispatch(connect());
    getData();
    return;
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
      id="mint"
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
          <Image alt="" src={neonLogo} />
        </div>
        <div className="ni:w-1/2 m-5 p-5 border-4 lineneonpink rounded-lg ">
          <div className="flex w-full">
            <div className="w-8/12 font-bold">
              <h1 className="text-2xl mb-3">Degentlemens club</h1>
              <h4 className="text-lg mb-3">
                {blockchain.account === "" || blockchain.smartContract === null
                  ? "Connect to blockchain"
                  : `${Number(data.totalSupply)}/6000 Degents Minted! LFG`}
              </h4>
              <h4 className="text-sm mb-3">Public Sale Up To 15 Degents!</h4>
            </div>
            <div className="w-4/12 flex justify-center negativeBannerImg">
              <Image alt="" objectFit="cover" src={BannerImage} />
            </div>
          </div>

          <div className="h-1/2">
            <div className="flex justify-between ni:text-2xl mt-5">
              <input
                className="bg-transparent w-full"
                placeholder="0.04 ETH"
                type="number"
              />
            </div>
            <div className="flex justify-between border-t-2 border-b-2 border-white my-5 py-2 ni:text-2xl">
              <h1>TOTAL</h1>
              <h1>{`${mintValue * 0.04} ETH`}</h1>
            </div>
            <div className="space-y-2">
              <select
                className="MintBtn bg-transparent"
                onChange={(e) => SetMintValue(Number(e.target.value))}
                disabled={
                  blockchain.account === "" || blockchain.smartContract === null
                }
              >
                <option value={0}>Select Mint Amount</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <button
                className="MintBtn "
                onClick={(e) => {
                  if (
                    blockchain.account === "" ||
                    blockchain.smartContract === null
                  ) {
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  } else {
                    claimNFTs();
                  }
                }}
              >
                {blockchain.account === "" || blockchain.smartContract === null
                  ? "Connect"
                  : "Mint"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
