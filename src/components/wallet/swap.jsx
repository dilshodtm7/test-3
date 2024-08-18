import React, { useState, useRef } from "react";
import Coin from "../../assets/winni.png";
import Ton from "../../assets/ton.png";
import Usdt from "../../assets/825.png";
import { PiArrowsDownUpBold } from "react-icons/pi";

const Swap = () => {
  // State for Send dropdown
  const [sendOption, setSendOption] = useState({
    label: "CW",
    img: Coin,
  });
  
  // State for Receive dropdown
  const [receiveOption, setReceiveOption] = useState({
    label: "TON",
    img: Ton,
  });
  
  // Dropdown open states
  const [isSendDropdownOpen, setIsSendDropdownOpen] = useState(false);
  const [isReceiveDropdownOpen, setIsReceiveDropdownOpen] = useState(false);

  const options = [

    { label: "TON", img: Ton },
    { label: "USDT", img: Usdt },
  ];

  const [sendInputValue, setSendInputValue] = useState("");
  const [receiveInputValue, setReceiveInputValue] = useState("");
  
  const sendInputRef = useRef(null);
  const receiveInputRef = useRef(null);

  const toggleSendDropdown = () => {
    setIsSendDropdownOpen(!isSendDropdownOpen);
    setIsReceiveDropdownOpen(false);  // Close the other dropdown
  };

  const toggleReceiveDropdown = () => {
    setIsReceiveDropdownOpen(!isReceiveDropdownOpen);
    setIsSendDropdownOpen(false);  // Close the other dropdown
  };


  const handleReceiveOptionClick = (option) => {
    if (option.label === "TON" && (sendOption.label === "CW" || sendOption.label === "USDT")) {
      setReceiveOption(option);
      setIsReceiveDropdownOpen(false);
    } else if (option.label !== "TON") {
      setReceiveOption(option);
      setIsReceiveDropdownOpen(false);
    }
  };

  // Handle input change for Send
  const handleSendChange = (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      setSendInputValue(value);
    }
  };

  // Handle input change for Receive
  const handleReceiveChange = (e) => {
    const { value } = e.target;
    if (!isNaN(value)) {
      setReceiveInputValue(value);
    }
  };

  // Handle Click to set cursor position to end in Send input
  const handleSendClick = () => {
    if (sendInputRef.current) {
      const length = sendInputRef.current.value.length;
      sendInputRef.current.setSelectionRange(length, length);
    }
  };

  // Handle Click to set cursor position to end in Receive input
  const handleReceiveClick = () => {
    if (receiveInputRef.current) {
      const length = receiveInputRef.current.value.length;
      receiveInputRef.current.setSelectionRange(length, length);
    }
  };

  // Prevent arrow key behavior
  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
  };

  // Handle swap logic


  return (
    <div className="swap">
      <div className="swap-title">
        <span>Swap</span>
      </div>


      <div className="mt10">
      <div className="send">
        <div className="send-title">
          <div className="">
            <span className="send-title-span">Send</span>
          </div>
          <div className="">
            <span className="send-title-span">Balance: 4121321321</span>
            <span className="maxbtn">MAX</span>
          </div>
        </div>

        <div className="custom-select">
          <div className="select-selected" onClick={toggleSendDropdown}>
            <img src={sendOption.img} alt={sendOption.label} />
            {sendOption.label} ≻
          </div>
          
          <input
            type="number"
            className="send-amount"
            value={sendInputValue}
            onChange={handleSendChange}
            onKeyDown={handleKeyDown}
            onClick={handleSendClick}
            ref={sendInputRef}
            placeholder="Min 60000"
            min="60000"
          />
        </div>
      </div>



      <div className="send">
        <div className="send-title">
          <div className="">
            <span className="send-title-span">Receive</span>
          </div>
        </div>

        <div className="custom-select">
          <div className="select-selected" onClick={toggleReceiveDropdown}>
            <img src={receiveOption.img} alt={receiveOption.label} />
            {receiveOption.label} ≻
          </div>
          {isReceiveDropdownOpen && (
            <div className="select-items">
              {options.map((option) => (
                <div
                  key={option.label}
                  onClick={() => handleReceiveOptionClick(option)}
                >
                  <img src={option.img} alt={option.label} />
                  {option.label}
                </div>
              ))}
            </div>
          )}
          <input
            type="number"
            className="send-amount"
            value={receiveInputValue}
            onChange={handleReceiveChange}
            onKeyDown={handleKeyDown}
            onClick={handleReceiveClick}
            ref={receiveInputRef}
            placeholder="0.00"
          />
        </div>
        
      </div>

      </div>
      <button className="swap-btn" >Swap</button>

    </div>
  );
};

export default Swap;
