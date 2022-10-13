/********************* DEPENDENCIES ********************/
import React, { useState, useRef, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // react-router v4/v5
import Cookies from "universal-cookie";
import UAuth from "@uauth/js";

/********************* WEB3 DEPENDENCIES ********************/
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
// import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
// import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
// import Web3 from 'web3';
import { ethers } from "ethers";

/********************* IMAGES ********************/
import metamask from "./components/mm.png";
import coinbase from "./components/cbw.png";
import ud from "./components/uds.svg";
// import walletconnect from "./components/wc.png";

/********************* COMPONENTS ********************/
import Navbar from "./components/Navbar";
import Home from "./components/homepage/Home";
// import CryptoInfo from "./components/crypto-info/CryptoInfo";
import AddQuestions from "./components/questions/AddQuestions";
import DisplayQuestions from "./components/questions/DisplayQuestions";
import SingleQuestion from "./components/questions/SingleQuestion";
import AddArticle from "./components/questions/AddArticle";
import Chat from "./components/chat/Chat";
import Profile from "./components/users/Profile";
import FindUsers from "./components/users/FindUsers";
import SingleUser from "./components/users/SingleUser";

import ByToken from "./components/users/token/ByToken";

/********************* CSS CLASS ********************/
import "./index.css";
import "./App.scss";

import Stack from "./artifacts/contracts/Stack.sol/Stack.json";
import customToken from "./artifacts/contracts/customToken.sol/customToken.json";
// import Test from "./components/Test";
import LandingPage from "./components/LandingPage";
import { Intercom, Window, Launcher } from "@relaycc/receiver";

const StackAddress = "0x755507d22c60f7c24fbbb0c0a1fd4dea827050bf";
const customTokenAddress = "0xe0d0282893f9c234862de16e55a2460295a56e35";

const App = () => {
  const [wallet, setWallet] = useState("");

  const { activate, deactivate } = useWeb3React();
  const [openWalletOption, setOpenWalletOption] = useState(false);
  // const [address, setAddress] = useState("");
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [userAuth, setUserAuth] = useState(null);
  //
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState(null);
  const [tokenContract, setTokenContract] = useState({});
  const [mainContract, setMainContract] = useState({});
  let [error, setErr] = useState(null);

  const login = async () => {
    const authorization = await userAuth.loginWithPopup();
    console.log(authorization);
    setUserAddress(authorization.idToken.sub);
    cookie.set("UDaccount", authorization.idToken.sub, {
      path: "/",
      maxAge: 3600,
    });
    setOpenWalletOption(false);
  };

  const logout = async () => {
    await userAuth.logout();
    cookie.remove("UDaccount");
    cookie.remove("account");
    window.location.reload();
  };

  const web3Handler = async () => {
    let accounts = await window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .catch((err) => {
        error = err.code;
        setErr(error);
      });
    setAccount(connected);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    setWallet(signer);
    let networkName = await provider.getNetwork();
    let chainId = networkName.chainId;
    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

    if (chainId !== 80001) {
      alert("Please connect to mumbai network");
    }
    window.ethereum.on("accountsChanged", async function (accounts) {
      setAccount(connected);
      await web3Handler();
    });
    loadContracts(signer);
  };
  const loadContracts = async (signer) => {
    const tokencontract = new ethers.Contract(
      customTokenAddress,
      customToken.abi,
      signer
    );
    setTokenContract(tokencontract);
    const maincontract = new ethers.Contract(StackAddress, Stack.abi, signer);
    setMainContract(maincontract);
    setLoading(false);
    // console.log("token")
    // console.log(tokenContract)
    // console.log("contract")
    // console.log(maincontract)
  };

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const cookie = new Cookies();

  const connected = cookie.get("account");

  const CoinbaseWallet = new WalletLinkConnector({
    url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    appName: "Web3-react Demo",
    supportedChainIds: [1, 3, 4, 5, 42, 137],
  });

  // const WalletConnect = new WalletConnectConnector({
  //   rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
  //   bridge: "https://bridge.walletconnect.org",
  //   qrcode: true,
  // });

  // const Injected = new InjectedConnector({
  //   supportedChainIds: [1, 3, 4, 5, 42, 137]
  // });

  const wrapperRef = useRef(null);

  window.ethereum.on("accountsChanged", function (accounts) {
    let acc = accounts[0];
    if (!acc) {
      setIsConnected(false);
      cookie.remove("account");
      window.location.reload();
    }
  });

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
    if (setIsConnected(true)) {
      console.log("yes");
    }
  }, [ethereum]);

  useEffect(() => {
    if (connected) {
      web3Handler();
    }
  }, [connected]);

  useEffect(() => {
    const uauth = new UAuth({
      clientID: "4c817aad-7c5c-4076-915e-1643f63d5d13",
      redirectUri: "http://localhost:3000",
      scope: "openid wallet",
    });
    setUserAuth(uauth);
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      cookie.set("account", accounts[0], { path: "/", maxAge: 3600 });
      setAccountBalance(bal);
      setIsConnected(true);
      setOpenWalletOption(false);
    } catch (error) {
      setIsConnected(false);
    }
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /*
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpenWalletOption(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {
    const addr = cookie.get("UDaccount");
    if (addr) {
      setUserAddress(addr);
    }
  }, [cookie]);

  useOutsideAlerter(wrapperRef);

  return (
    <>
      <div className="App">
        <Launcher wallet={wallet} />
        <Intercom>
          <Window />
        </Intercom>

        <Router>
          <Navbar
            setOpenWalletOption={setOpenWalletOption}
            userAddress={userAddress}
            logout={logout}
          />
          <div className="main-content">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />

              {/* <Route exact path="test" element={<Test />} /> */}
              {/* <Route
                exact
                path="/info"
                element={
                  <CryptoInfo
                    tokenContract={tokenContract}
                    mainContract={mainContract}
                    web3Handler={web3Handler}
                    account={account}
                  />
                }
              /> */}
              <Route
                path="/ask-question"
                element={
                  <AddQuestions
                    tokenContract={tokenContract}
                    mainContract={mainContract}
                    web3Handler={web3Handler}
                    account={account}
                  />
                }
              />

              <Route
                path="/find-question"
                element={
                  <DisplayQuestions
                    tokenContract={tokenContract}
                    mainContract={mainContract}
                    web3Handler={web3Handler}
                    account={account}
                  />
                }
              />
              <Route
                path="/single-question/"
                element={
                  <SingleQuestion
                    id={1}
                    tokenContract={tokenContract}
                    mainContract={mainContract}
                    web3Handler={web3Handler}
                    account={account}
                  />
                }
              />
              <Route
                path="/add-article"
                element={
                  <AddArticle
                    tokenContract={tokenContract}
                    mainContract={mainContract}
                    web3Handler={web3Handler}
                    account={account}
                  />
                }
              />
              <Route path="/message" element={<Chat id={1} />} />
              <Route
                path="/profile"
                element={
                  <Profile
                    mainContract={mainContract}
                    web3Handler={web3Handler}
                    account={account}
                  />
                }
              />
              <Route
                path="/find-profile"
                element={
                  <FindUsers
                    mainContract={mainContract}
                    web3Handler={web3Handler}
                    account={account}
                  />
                }
              />
              <Route
                path="/user/"
                element={
                  <SingleUser
                    tokenContract={tokenContract}
                    mainContract={mainContract}
                    web3Handler={web3Handler}
                    account={account}
                  />
                }
              />
              <Route
                path="/buytoken"
                element={
                  <ByToken
                    tokenContract={tokenContract}
                    mainContract={mainContract}
                    web3Handler={web3Handler}
                    account={account}
                  />
                }
              />

              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          </div>
        </Router>
        {openWalletOption ? (
          <div className="alert-main">
            <div className="alert-box" ref={wrapperRef}>
              <div className="alert-header">
                <div className="title">CONNECT</div>
              </div>
              <div className="alert-container">
                <div className="alert-holder">
                  <div className="image">
                    <img
                      src={metamask}
                      onClick={() => {
                        connectWallet();
                      }}
                      title="metamask"
                      className="mm"
                      alt="metamask"
                    />
                  </div>
                  <div className="image">
                    <img
                      src={coinbase}
                      onClick={() => {
                        activate(CoinbaseWallet);
                      }}
                      title="coinbase"
                      className="mm"
                      alt="coinbase"
                    />
                  </div>
                  <div className="image">
                    <img
                      src={ud}
                      onClick={() => login()}
                      title="UD"
                      className="mm"
                      alt="coinbase"
                    />
                  </div>
                  {/* <div className='image'>
                      <img src={walletconnect} onClick={() => { activate(WalletConnect) }} className="mm" alt="wallet connect image" />
                    </div> */}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default App;
