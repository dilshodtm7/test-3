import React, { useEffect } from "react";
import { TonConnectButton } from "@tonconnect/ui-react";
import Coin from "../../assets/winni.png";
import Ton from "../../assets/ton.png";
import Usdt from "../../assets/825.png";
import withIcon from "../../assets/loader5.gif";
import { MdOutlineTaskAlt } from "react-icons/md";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { TbSquareRounded } from "react-icons/tb";
import { TbArrowsExchange } from "react-icons/tb";
import { CiExport } from "react-icons/ci";

import { CiImport } from "react-icons/ci";
import Swap from "./swap.jsx";
import Deposit from "./deposit.jsx";
import Transfer from "./transfer.jsx";

import "./style.css";

const home = ({ data, loading }) => {



  const closeSwap = () => {
    document.getElementById("swap").style.display = "none";
  };

 const  openSwap = () => {
    document.getElementById("swap").style.display = "block";
  };

  const openDeposit = () => {
    document.getElementById("deposit").style.display = "block";
  };

  const closeDeposit = () => {
    document.getElementById("deposit").style.display = "none";
  };


  const openTransfer = () => {
    document.getElementById("transfer").style.display = "block";
  };

  const closeTransfer = () => {
    document.getElementById("transfer").style.display = "none";
  };
  



  return (
    <>
      <div className="body-balance">
        {/* <div className="balance-text-title">Wallet</div> */}
        <div
            className="daily-bonuses"
            id="swap"
            style={{ display: "none" }}
          >
       <div className="daily-bonus-container">
       <button className="zen-close" id="content-close" onClick={closeSwap}  >
        x
      </button>
        <Swap />
       </div>
       </div>
       <div
            className="daily-bonuses"
            id="deposit"
            style={{ display: "none" }}
          >
       <div className="daily-bonus-container">
       <button className="zen-close" id="content-close" onClick={closeDeposit}  >
        x
      </button>
        <Deposit />
       </div>
       </div>
       <div
            className="daily-bonuses"
            id="transfer"
            style={{ display: "none" }}
          >
       <div className="daily-bonus-container">
       <button className="zen-close" id="content-close" onClick={closeTransfer}  >
        x
      </button>
   <Transfer />
        
       </div>
       </div>

        {loading === false ? (
          <>
            <img src={withIcon} className="loader-img" alt="" />
            <div class="loader"></div>
          </>
        ) : (
          <>
            <div className="wallet-all-balance">
              <div className="wallet-all-balance-text">
                <span className="balance-wallets">Total balance</span>
                <div className="wallet-balance">
                  <span className="balanc">137,68</span>
                  <span className="tousdt">USDT</span>
                </div>
                <div>
                <span className="balance-winn"> ≈ </span>
                <span className="balance-win">{data.balance_winnie.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} cw</span>
                </div>
              </div>
            </div>
            <div className="exchange">
              <div className="exchange-btn" onClick={openDeposit}>
              <CiImport  className="icon-btn" />
                <span className="exchange-text">Deposit</span>
              </div>
              {/* <div className="exchange-btn">
              <CiExport className="icon-btn" />
                <span className="exchange-text">withdrawal</span>
              </div> */}
              <div className="exchange-btn" onClick={openTransfer}>
              <TbArrowsExchange  className="icon-btn"  />
                <span className="exchange-text">Transfer</span>
              </div>
              <div className="exchange-btn" onClick={openSwap}>
              <HiOutlineArrowPathRoundedSquare className="icon-btn" />
                <span className="exchange-text">Swap</span>
              </div>
            </div>







            

            <div className="balance-wallet">
              <div className="wallets-balances">
                <div className="usdt">
                  <span className="balance-wallet-span">Winnie Coin</span>
                  <span className="balance-wallet-span">
                    <img src={Coin} className="coin" alt="" />
                    {data.balance_winnie
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} cw
                  </span>
                </div>
                <div className="usdt">
                  <span className="balance-wallet-span">TON</span>
                  <span className="balance-wallet-span">
                    <img src={Ton} className="coin" alt="" />
                    {data.balance_ton}
                  </span>
                </div>
                <div className="usdt">
                  <span className="balance-wallet-span">USDT</span>
                  <span className="balance-wallet-span">
                    <img src={Usdt} className="coin" alt="" />
                    {data.balance_ton}
                  </span>
                </div>
              </div>
              <div className="wallet-connects">
              <TonConnectButton />
            </div>

            </div>
          </>
        )}
      </div>
    </>
  );
};

export default home;






              {/* <div className="ton-airdop">
                <div className="">
                <MdOutlineTaskAlt className="airdrop" />
                <span>Airdrop will be available soon</span>
                </div>
                <div className="">
                <MdOutlineTaskAlt className="airdrop" />
                <span>Airdrop will be available soon</span>
                </div>
                <div className="">
                <HiOutlineArrowPathRoundedSquare className="airdrops" />
                <span>Airdrop will be available soon</span>
                </div>
                <div className="">
                <TbSquareRounded className="airdrops" />
                <span>Airdrop will be available soon</span>
                </div>
              </div> */}